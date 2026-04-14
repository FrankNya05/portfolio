"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";
import type { ProjectCategory } from "@/types";

const allCategories: ProjectCategory[] = [
  "Robotics",
  "AI / ML",
  "FPGA",
  "Embedded Systems",
  "Digital Design",
  "Personal Project",
];

const categoryAccents: Record<string, string> = {
  Robotics: "text-circuit-300",
  "AI / ML": "text-steel-300",
  FPGA: "text-brass-300",
  "Embedded Systems": "text-circuit-300",
  "Digital Design": "text-brass-300",
  "Personal Project": "text-graphite-400",
};

export function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Only show categories that have projects
  const usedCategories = allCategories.filter((cat) =>
    projects.some((p) => p.category === cat)
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        <button
          onClick={() => setActiveFilter("All")}
          className={cn(
            "font-mono text-xs px-4 py-2 border transition-colors duration-150 tracking-wider",
            activeFilter === "All"
              ? "border-brass-500/60 text-brass-300 bg-brass-500/10"
              : "border-graphite-800 text-graphite-500 hover:border-graphite-600 hover:text-graphite-300"
          )}
        >
          ALL
        </button>
        {usedCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "font-mono text-xs px-4 py-2 border transition-colors duration-150 tracking-wider",
              activeFilter === cat
                ? "border-brass-500/60 text-brass-300 bg-brass-500/10"
                : "border-graphite-800 text-graphite-500 hover:border-graphite-600 hover:text-graphite-300"
            )}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={cn(
              "group relative flex flex-col h-full",
              "bg-graphite-900 border border-graphite-800",
              "hover:border-brass-500/40 transition-all duration-300",
              "p-7"
            )}
          >
            {/* Corner accents */}
            <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-transparent group-hover:border-brass-500/50 transition-all duration-300" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-transparent group-hover:border-brass-500/50 transition-all duration-300" />

            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-2xs text-graphite-700 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={cn("font-mono text-2xs tracking-widest uppercase", categoryAccents[project.category] ?? "text-graphite-500")}>
                {project.category}
              </span>
            </div>

            <h3 className="font-display font-semibold text-lg text-graphite-100 group-hover:text-brass-200 transition-colors duration-200 mb-3 leading-tight">
              {project.title}
            </h3>

            <p className="text-graphite-500 text-sm leading-relaxed mb-6 flex-1">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.slice(0, 4).map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
              {project.tags.length > 4 && (
                <Tag label={`+${project.tags.length - 4}`} variant="accent" />
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-graphite-600 group-hover:text-brass-400 transition-colors duration-200 tracking-wider">
                READ CASE STUDY
              </span>
              <span className="text-graphite-700 group-hover:text-brass-400 group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-graphite-600 font-mono text-sm py-16 text-center">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
