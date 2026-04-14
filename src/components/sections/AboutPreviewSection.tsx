import Link from "next/link";
import { Reveal } from "@/components/motion";

const traits = [
  { label: "Systems thinking", desc: "From hardware blocks to complete system integration" },
  { label: "Hardware ↔ software", desc: "Equally at home in RTL and in Python" },
  { label: "Embedded-first mindset", desc: "Building with resource and real-time constraints in mind" },
  { label: "Learning in depth", desc: "Understanding how things actually work, not just how to use them" },
];

export function AboutPreviewSection() {
  return (
    <section className="py-24 bg-graphite-950 border-t border-graphite-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <Reveal>
            <p className="mono-label mb-4">About</p>
            <h2 className="font-display font-bold text-4xl text-graphite-100 mb-6 leading-tight">
              Building systems that connect
              <span className="text-brass-400"> hardware to intelligence</span>
            </h2>
            <p className="text-graphite-400 text-base leading-relaxed mb-4">
              I am a computer engineering student at UQTR with a focus on embedded systems, 
              digital architecture, robotics, and intelligent system design. I build across 
              the full technical stack — from VHDL processor cores to real-time firmware 
              to ML pipelines and embedded AI deployment.
            </p>
            <p className="text-graphite-500 text-sm leading-relaxed mb-8">
              My interest is not in isolated tools, but in complete systems: understanding 
              how each layer interacts with the others, and designing architectures that 
              are correct, efficient, and purposeful.
            </p>
            <Link
              href="/about"
              className="font-mono text-xs border border-graphite-700 px-5 py-2.5 text-graphite-400 hover:border-brass-500/50 hover:text-graphite-200 transition-colors duration-200 tracking-wider"
            >
              FULL PROFILE →
            </Link>
          </Reveal>

          {/* Right — traits */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-1 gap-4">
              {traits.map((trait, i) => (
                <div
                  key={trait.label}
                  className="flex items-start gap-4 p-5 bg-graphite-900 border border-graphite-800"
                >
                  <span className="font-mono text-2xs text-brass-600 tracking-widest mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-graphite-200 text-sm font-medium mb-1">{trait.label}</p>
                    <p className="text-graphite-500 text-xs leading-relaxed">{trait.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
