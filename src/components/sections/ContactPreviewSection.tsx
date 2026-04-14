import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/motion";

export function ContactPreviewSection() {
  return (
    <section className="py-24 bg-graphite-900 border-t border-graphite-800">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p className="mono-label mb-4">Contact</p>
              <h2 className="font-display font-bold text-4xl text-graphite-100 mb-4 leading-tight">
                Open to opportunities
              </h2>
              <p className="text-graphite-400 text-base max-w-lg leading-relaxed">
                I am actively looking for internship opportunities in embedded systems, 
                robotics, digital design, or AI. If you are working on something serious 
                and technically demanding — I would like to hear about it.
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target={social.type !== "email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 font-mono text-xs text-graphite-400 hover:text-brass-300 transition-colors duration-200 tracking-wide"
                >
                  <span className="w-4 h-px bg-graphite-700 group-hover:bg-brass-500/50 transition-colors" />
                  {social.label}
                </a>
              ))}

              <Link
                href="/contact"
                className="mt-2 font-mono text-xs text-brass-400 border border-brass-500/40 px-4 py-2 hover:bg-brass-500/10 transition-colors duration-200 tracking-wider text-center"
              >
                GET IN TOUCH →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
