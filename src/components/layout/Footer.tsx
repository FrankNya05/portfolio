import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-graphite-800 bg-graphite-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-2xs text-graphite-500 tracking-widest uppercase mb-1">
            sys://frank-armand
          </p>
          <p className="text-graphite-600 text-xs">
            © {year} {siteConfig.fullName} — {siteConfig.location}
          </p>
        </div>
        <div className="flex items-center gap-6">
          {siteConfig.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target={s.type !== "email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="font-mono text-xs text-graphite-500 hover:text-brass-400 transition-colors tracking-wide"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
