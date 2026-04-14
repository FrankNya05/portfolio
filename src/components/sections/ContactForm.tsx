"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");

    // Mailto fallback — replace with a real form service (Formspree, Resend, etc.)
    const mailto = `mailto:armandnya44@gmail.com?subject=${encodeURIComponent(values.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`)}`;

    // Simulate brief delay then open mailto
    await new Promise((r) => setTimeout(r, 400));
    window.location.href = mailto;
    setState("idle");
  }

  const inputBase = "w-full bg-graphite-900 border border-graphite-800 text-graphite-200 text-sm px-4 py-3 placeholder:text-graphite-700 focus:outline-none focus:border-brass-500/60 transition-colors duration-150 font-sans";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="mono-label mb-6">Send a Message</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-2">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          placeholder="Internship opportunity / Collaboration / ..."
          className={inputBase}
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          value={values.message}
          onChange={handleChange}
          placeholder="Describe your opportunity, project, or question..."
          className={cn(inputBase, "resize-none")}
        />
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className={cn(
          "w-full font-mono text-sm py-3 tracking-wider transition-all duration-200",
          state === "sending"
            ? "bg-graphite-800 text-graphite-500 cursor-not-allowed"
            : "bg-brass-400 text-graphite-950 hover:bg-brass-300"
        )}
      >
        {state === "sending" ? "OPENING..." : "SEND MESSAGE →"}
      </button>

      <p className="text-graphite-700 text-xs font-mono">
        This will open your email client. Alternatively, write directly to armandnya44@gmail.com
      </p>
    </form>
  );
}
