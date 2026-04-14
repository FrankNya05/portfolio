import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { siteConfig } from "@/data/site";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "About",
  description: "Computer engineering student focused on embedded systems, robotics, digital architecture, and intelligent system design.",
};

const interests = [
  { area: "Embedded Systems", detail: "Firmware design, real-time control, hardware abstraction, microcontroller architecture" },
  { area: "Digital Design & FPGA", detail: "RTL design in VHDL, processor architecture, simulation and verification" },
  { area: "Robotics", detail: "System integration, sensor fusion, closed-loop control, telemetry and supervision" },
  { area: "Embedded AI", detail: "Model compression, TFLite deployment, on-device inference under hardware constraints" },
  { area: "Hardware-Software Co-Design", detail: "Designing systems where the hardware and software layers are built together, not in isolation" },
];

const approach = [
  {
    label: "Understanding before building",
    text: "Before writing a single line of code or VHDL, I want to understand how the underlying system works — the timing, the constraints, the trade-offs. I find that building without that understanding leads to brittle systems.",
  },
  {
    label: "Complete systems over isolated fragments",
    text: "I am more interested in the full system than in a single component. That means thinking about how a sensor connects to a controller, how firmware interfaces with hardware, and how an ML model integrates with a real deployment target.",
  },
  {
    label: "Constraints as design drivers",
    text: "Working in embedded and real-time contexts has taught me that constraints — memory limits, cycle counts, power budgets, real-time deadlines — are not obstacles but design parameters. The best embedded systems are built around their constraints, not despite them.",
  },
  {
    label: "Depth over breadth",
    text: "I prefer to understand fewer things very well than to skim many topics superficially. When I work with a technology, I want to understand what is happening below the abstraction layer I am using.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-graphite-950 pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="pt-8 pb-12 border-b border-graphite-800 mb-16">
            <p className="mono-label mb-4">Profile</p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-graphite-50 leading-tight mb-6">
              About
            </h1>
            <p className="text-graphite-400 text-lg leading-relaxed max-w-2xl italic" lang="fr">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          </div>
        </Reveal>

        {/* Main intro */}
        <Reveal delay={0.05} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10 items-start">
            <div className="space-y-5 text-graphite-300 text-base leading-relaxed">
              <p>
                I am a computer engineering student at the Université du Québec à Trois-Rivières (UQTR), 
                building technical systems that span from low-level hardware architecture up to software 
                interfaces and intelligent applications.
              </p>
              <p>
                My primary domain is embedded systems — firmware development on STM32 and ESP32, 
                real-time operating systems with FreeRTOS, communication protocols from I2C to MQTT 
                and BLE, and sensor integration in physically constrained environments. I also work 
                extensively in digital design, having built a complete ARMv4-style processor in VHDL 
                and implemented multiple communication protocol cores on FPGA.
              </p>
              <p>
                Alongside hardware work, I have developed a serious interest in machine learning — 
                particularly in how AI systems can be made interpretable and deployable on embedded 
                platforms. My projects have led me through classical ML, deep learning with RNNs, 
                model explainability (SHAP, LIME), and quantization with TensorFlow Lite.
              </p>
              <p>
                What ties these domains together for me is system thinking: the ability to understand 
                how each layer of a technical system depends on the others, and to design or debug 
                across those boundaries. I find that the most interesting engineering problems live 
                exactly at those boundaries.
              </p>
            </div>

            {/* Meta panel */}
            <div className="bg-graphite-900 border border-graphite-800 p-5 space-y-4 text-sm">
              <div>
                <p className="mono-label text-2xs mb-1">School</p>
                <p className="text-graphite-300">{siteConfig.school}</p>
              </div>
              <div className="border-t border-graphite-800 pt-4">
                <p className="mono-label text-2xs mb-1">Location</p>
                <p className="text-graphite-300">{siteConfig.location}</p>
              </div>
              <div className="border-t border-graphite-800 pt-4">
                <p className="mono-label text-2xs mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-circuit-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-circuit-400" />
                  </span>
                  <p className="text-circuit-300 text-xs">{siteConfig.status}</p>
                </div>
              </div>
              <div className="border-t border-graphite-800 pt-4">
                <p className="mono-label text-2xs mb-2">Contact</p>
                {siteConfig.socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target={s.type !== "email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block text-graphite-400 hover:text-brass-300 transition-colors text-xs font-mono py-0.5"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Technical interests */}
        <Reveal delay={0.1} className="mb-16">
          <div className="border-t border-graphite-800 pt-12">
            <p className="mono-label mb-8">Technical Focus</p>
            <div className="space-y-4">
              {interests.map((item) => (
                <div key={item.area} className="flex flex-col md:flex-row gap-4 md:gap-8 py-4 border-b border-graphite-900">
                  <div className="md:w-52 shrink-0">
                    <p className="text-graphite-200 text-sm font-medium">{item.area}</p>
                  </div>
                  <p className="text-graphite-500 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Working approach */}
        <Reveal delay={0.1} className="mb-16">
          <div className="border-t border-graphite-800 pt-12">
            <p className="mono-label mb-8">Working Approach</p>
            <div className="space-y-8">
              {approach.map((item, i) => (
                <div key={item.label} className="grid grid-cols-1 md:grid-cols-[24px_1fr] gap-4">
                  <span className="font-mono text-2xs text-graphite-700 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="accent-line-left">
                    <p className="text-graphite-200 text-sm font-medium mb-2">{item.label}</p>
                    <p className="text-graphite-500 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* What I am looking for */}
        <Reveal delay={0.1}>
          <div className="border-t border-graphite-800 pt-12">
            <p className="mono-label mb-6">Looking For</p>
            <div className="bg-graphite-900 border border-graphite-800 p-8">
              <p className="text-graphite-300 text-base leading-relaxed mb-5">
                I am currently looking for internship opportunities where I can work on technically 
                demanding problems in embedded systems, robotics, digital design, or AI deployment. 
                I am most interested in environments where the work involves real hardware, real-time 
                constraints, or systems that must operate reliably under well-defined physical limits.
              </p>
              <p className="text-graphite-400 text-sm leading-relaxed">
                I am also open to collaborative projects with researchers, labs, or engineers working 
                on embedded AI, intelligent robotics, or hardware-software co-design. If you are 
                building something serious in these areas and are looking for someone who can work 
                at multiple levels of the stack — I would like to hear from you.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Embedded Systems", "Robotics", "FPGA / RTL", "Embedded AI", "Real-Time Systems", "Hardware-Software Co-Design"].map((tag) => (
                  <Tag key={tag} label={tag} variant="accent" size="md" />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
