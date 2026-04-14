import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

const categoryAccents: Record<string, string> = {
  Robotics: "text-circuit-300",
  "AI / ML": "text-steel-300",
  FPGA: "text-brass-300",
  "Embedded Systems": "text-circuit-300",
  "Digital Design": "text-brass-300",
  "Personal Project": "text-graphite-400",
};

export function FeaturedProjectsSection() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-24 bg-graphite-950 border-t border-graphite-800">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            label="Featured Work"
            title="Selected Projects"
            subtitle="Core systems across embedded platforms, digital architecture, and intelligent applications."
          />
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <StaggerItem key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className={cn(
                  "group relative flex flex-col h-full",
                  "bg-graphite-900 border border-graphite-800",
                  "hover:border-brass-500/40 transition-all duration-300",
                  "p-7"
                )}
              >
                {/* Corner marks */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-brass-500/0 group-hover:border-brass-500/50 transition-all duration-300" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-brass-500/0 group-hover:border-brass-500/50 transition-all duration-300" />

                {/* Index + Category */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xs text-graphite-700 tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={cn("font-mono text-2xs tracking-widest uppercase", categoryAccents[project.category] ?? "text-graphite-500")}>
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl text-graphite-100 group-hover:text-brass-200 transition-colors duration-200 mb-3 leading-tight">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-graphite-500 text-sm leading-relaxed mb-6 flex-1">
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                  {project.tags.length > 4 && (
                    <Tag label={`+${project.tags.length - 4}`} variant="accent" />
                  )}
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="font-mono text-xs text-graphite-600 group-hover:text-brass-400 transition-colors duration-200 tracking-wider">
                    CASE STUDY
                  </span>
                  <span className="text-graphite-700 group-hover:text-brass-400 group-hover:translate-x-1 transition-all duration-200">
                    →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="font-mono text-xs text-graphite-500 border border-graphite-800 px-6 py-3 hover:border-graphite-600 hover:text-graphite-300 transition-colors duration-200 tracking-wider"
          >
            ALL PROJECTS →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
