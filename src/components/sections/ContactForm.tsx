"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // invisible — bots fill this, humans don't
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (state === "sending") return;

    setState("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setState("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      setValues({ name: "", email: "", subject: "", message: "", honeypot: "" });
    } catch {
      setState("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  const inputBase =
    "w-full bg-graphite-900 border border-graphite-800 text-graphite-200 text-sm px-4 py-3 placeholder:text-graphite-700 focus:outline-none focus:border-brass-500/60 transition-colors duration-150 font-sans";

  if (state === "success") {
    return (
      <div className="border border-graphite-800 bg-graphite-900 p-8 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-circuit-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-circuit-400" />
          </span>
          <p className="font-mono text-xs text-circuit-300 tracking-widest uppercase">
            Message sent
          </p>
        </div>
        <p className="text-graphite-300 text-sm leading-relaxed">
          Your message was received. I will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setState("idle")}
          className="font-mono text-xs text-graphite-500 hover:text-brass-400 transition-colors tracking-wider mt-2 text-left"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="mono-label mb-6">Send a Message</p>

      {/* Honeypot — hidden from real users, bots fill it in */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none" tabIndex={-1}>
        <input
          name="honeypot"
          type="text"
          value={values.honeypot}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-2"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={100}
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputBase}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            value={values.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          maxLength={200}
          value={values.subject}
          onChange={handleChange}
          placeholder="Internship opportunity / Collaboration / ..."
          className={inputBase}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          maxLength={5000}
          value={values.message}
          onChange={handleChange}
          placeholder="Describe your opportunity, project, or question..."
          className={cn(inputBase, "resize-none")}
        />
      </div>

      {state === "error" && (
        <p className="font-mono text-xs text-red-400 leading-relaxed">
          {errorMessage}
        </p>
      )}

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
        {state === "sending" ? "SENDING..." : "SEND MESSAGE →"}
      </button>

      <p className="text-graphite-700 text-xs font-mono">
        Or write directly to{" "}
        <a
          href="mailto:franknya.eng@gmail.com"
          className="hover:text-brass-400 transition-colors"
        >
          franknya.eng@gmail.com
        </a>
      </p>
    </form>
  );
}
