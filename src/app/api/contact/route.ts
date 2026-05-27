import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ─── Rate limiting ────────────────────────────────────────────────────────────
// In-memory store: persists across warm requests within the same server instance.
// Sufficient for a portfolio — no Redis dependency needed.
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) return true;

  record.count++;
  return false;
}

// ─── Input sanitization ───────────────────────────────────────────────────────
// Strips newlines to prevent email header injection attacks.
function sanitize(value: string): string {
  return value.replace(/[\r\n]/g, " ").trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── Environment validation ───────────────────────────────────────────────────
function getEnvOrThrow(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // 1. Rate limiting
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, subject, message, honeypot } = body as Record<string, string>;

  // 3. Honeypot check — bots fill hidden fields, humans don't
  if (honeypot) {
    // Silently return 200 so bots don't know they were caught
    return NextResponse.json({ success: true });
  }

  // 4. Input validation
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }
  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json({ error: "Message must be at least 10 characters." }, { status: 400 });
  }
  if (name.length > 100 || email.length > 200 || (subject?.length ?? 0) > 200 || message.length > 5000) {
    return NextResponse.json({ error: "One or more fields exceed the maximum length." }, { status: 400 });
  }

  // 5. Sanitize inputs
  const safeName = sanitize(name);
  const safeEmail = sanitize(email);
  const safeSubject = sanitize(subject ?? "Portfolio Contact");
  const safeMessage = message.trim();

  // 6. Load credentials
  let gmailUser: string;
  let gmailPassword: string;
  let contactEmailTo: string;

  try {
    gmailUser = getEnvOrThrow("GMAIL_USER");
    gmailPassword = getEnvOrThrow("GMAIL_APP_PASSWORD");
    contactEmailTo = getEnvOrThrow("CONTACT_EMAIL_TO");
  } catch (err) {
    console.error("[contact] Missing env variable:", err);
    return NextResponse.json(
      { error: "Server configuration error. Please contact me directly by email." },
      { status: 500 }
    );
  }

  // 7. Send email via Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  const emailBody = `
New message from your portfolio contact form
─────────────────────────────────────────────
From    : ${safeName}
Email   : ${safeEmail}
Subject : ${safeSubject}
─────────────────────────────────────────────

${safeMessage}

─────────────────────────────────────────────
Sent via frank-armand.eng portfolio contact form
IP      : ${ip}
  `.trim();

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: contactEmailTo,
      replyTo: safeEmail,
      subject: `[Portfolio] ${safeSubject}`,
      text: emailBody,
    });
  } catch (err) {
    console.error("[contact] Nodemailer error:", err);
    return NextResponse.json(
      { error: "Failed to send the message. Please try again or contact me directly by email." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

// Reject all non-POST methods
export function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
