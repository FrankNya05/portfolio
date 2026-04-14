import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { secondaryProjects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Projects",
  description: "Technical projects across embedded systems, FPGA design, robotics, and machine learning.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-graphite-950 pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page header */}
        <Reveal>
          <div className="mb-16 pt-8 border-b border-graphite-800 pb-12">
            <p className="mono-label mb-4">Portfolio</p>
            <h1 className="font-display font-bold text-5xl md:text-6xl text-graphite-100 mb-5 leading-tight">
              Projects
            </h1>
            <p className="text-graphite-400 text-base max-w-2xl leading-relaxed">
              Systems built across embedded platforms, digital architecture, robotics, and intelligent applications.
              Each project below is documented as a structured engineering case study.
            </p>
          </div>
        </Reveal>

        {/* Main projects grid with client-side filtering */}
        <ProjectsGrid />

        {/* Secondary projects */}
        <Reveal delay={0.1} className="mt-24">
          <div className="border-t border-graphite-800 pt-16">
            <p className="mono-label mb-4">Additional Work</p>
            <h2 className="font-display font-semibold text-3xl text-graphite-200 mb-10">
              Other Explorations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {secondaryProjects.map((proj) => (
                <div
                  key={proj.title}
                  className="bg-graphite-900 border border-graphite-800 p-6"
                >
                  <h3 className="font-semibold text-graphite-200 text-base mb-2">{proj.title}</h3>
                  <p className="text-graphite-500 text-sm leading-relaxed mb-4">{proj.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
