import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for internship opportunities, collaboration, or technical discussions.",
};

const socialIcons: Record<string, string> = {
  email: "✉",
  github: "⌥",
  linkedin: "in",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-graphite-950 pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="pt-8 pb-12 border-b border-graphite-800 mb-16">
            <p className="mono-label mb-4">Contact</p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-graphite-50 leading-tight mb-5">
              Get in Touch
            </h1>
            <p className="text-graphite-400 text-base max-w-xl leading-relaxed">
              I am open to internship opportunities, research collaboration, and serious technical 
              discussions. The best way to reach me is directly by email.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-12">
          {/* Left — contact channels */}
          <Reveal delay={0.05}>
            <div className="space-y-6">
              <div>
                <p className="mono-label mb-5">Direct Channels</p>
                <div className="space-y-4">
                  {siteConfig.socials.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target={social.type !== "email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 bg-graphite-900 border border-graphite-800 hover:border-brass-500/40 transition-all duration-200"
                    >
                      <span className="font-mono text-sm text-brass-500/60 group-hover:text-brass-400 transition-colors mt-0.5">
                        {socialIcons[social.type] ?? "→"}
                      </span>
                      <div>
                        <p className="font-mono text-2xs text-graphite-600 tracking-widest uppercase mb-1">
                          {social.type}
                        </p>
                        <p className="text-graphite-300 text-sm group-hover:text-graphite-100 transition-colors">
                          {social.label}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-graphite-900 border border-graphite-800 p-5">
                <p className="mono-label text-2xs mb-3">Availability</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-circuit-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-circuit-400" />
                  </span>
                  <p className="text-circuit-300 text-xs font-mono">{siteConfig.status}</p>
                </div>
                <p className="text-graphite-500 text-xs leading-relaxed">
                  Based in {siteConfig.location}. Available for remote or local opportunities.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right — contact form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
