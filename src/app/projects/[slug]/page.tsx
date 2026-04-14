import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/motion";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

const sectionOrder: Array<{ key: keyof typeof sectionLabels; label: string }> = [
  { key: "context", label: "Context" },
  { key: "objective", label: "Objective" },
  { key: "contribution", label: "My Contribution" },
  { key: "architecture", label: "Architecture & Approach" },
  { key: "challenges", label: "Challenges" },
  { key: "results", label: "Results & Validation" },
  { key: "learnings", label: "What I Learned" },
];

const sectionLabels = {
  context: "",
  objective: "",
  contribution: "",
  architecture: "",
  stack: "",
  challenges: "",
  results: "",
  learnings: "",
};

export default function ProjectDetailPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-graphite-950 pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back link */}
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-graphite-600 hover:text-graphite-300 transition-colors duration-150 mb-12 tracking-wider"
          >
            ← PROJECTS
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <div className="border-b border-graphite-800 pb-10 mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="font-mono text-2xs text-brass-400 tracking-widest uppercase">
                {project.category}
              </span>
              <span className="text-graphite-700">·</span>
              <span className="font-mono text-2xs text-graphite-600 tracking-wider">
                Case Study
              </span>
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-graphite-50 leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-graphite-400 text-lg leading-relaxed mb-8">
              {project.summary}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} size="md" />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Tech stack callout */}
        <Reveal delay={0.1}>
          <div className="bg-graphite-900 border border-graphite-800 p-6 mb-12">
            <p className="font-mono text-2xs text-brass-400 tracking-[0.2em] uppercase mb-4">
              Technical Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.sections.stack.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-graphite-300 bg-graphite-800 border border-graphite-700 px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Case study sections */}
        <div className="space-y-12">
          {sectionOrder.map(({ key, label }, i) => {
            const content = project.sections[key as keyof typeof project.sections];
            if (!content || typeof content !== "string") return null;

            return (
              <Reveal key={key} delay={i * 0.06}>
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6">
                  {/* Section label */}
                  <div className="pt-1">
                    <p className="font-mono text-2xs text-graphite-600 tracking-[0.15em] uppercase leading-tight">
                      {label}
                    </p>
                  </div>

                  {/* Section content */}
                  <div className="accent-line-left">
                    <p className="text-graphite-300 text-base leading-relaxed">
                      {content}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Optional links */}
        {project.links && project.links.length > 0 && (
          <Reveal delay={0.2} className="mt-16 pt-10 border-t border-graphite-800">
            <p className="mono-label mb-4">Links</p>
            <div className="flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs border border-graphite-700 px-4 py-2 text-graphite-400 hover:border-brass-500/50 hover:text-brass-300 transition-colors duration-200 tracking-wider"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          </Reveal>
        )}

        {/* Bottom nav */}
        <Reveal delay={0.15} className="mt-16 pt-10 border-t border-graphite-800 flex justify-between">
          <Link
            href="/projects"
            className="font-mono text-xs text-graphite-500 hover:text-graphite-300 transition-colors tracking-wider"
          >
            ← ALL PROJECTS
          </Link>
          <Link
            href="/contact"
            className="font-mono text-xs text-brass-400 hover:text-brass-300 transition-colors tracking-wider"
          >
            GET IN TOUCH →
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
