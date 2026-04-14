import { skillGroups } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

const proficiencyWidth: Record<string, string> = {
  fluent: "w-full",
  proficient: "w-3/4",
  familiar: "w-1/2",
};

export function SkillsSection() {
  return (
    <section className="py-24 bg-graphite-900 border-t border-graphite-800">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            label="Technical Stack"
            title="Skills & Tools"
            subtitle="Structured by domain — from hardware architecture to intelligent systems."
          />
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <StaggerItem key={group.category}>
              <div className="bg-graphite-950 border border-graphite-800 p-6 h-full">
                {/* Group header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-graphite-800">
                  <span className="text-brass-500/60 font-mono text-sm select-none">
                    {group.icon}
                  </span>
                  <h3 className="font-mono text-xs text-graphite-300 tracking-[0.12em] uppercase">
                    {group.category}
                  </h3>
                </div>

                {/* Skills */}
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="text-graphite-300 text-sm">{skill.name}</span>
                        <span className="font-mono text-2xs text-graphite-600">
                          {skill.proficiency}
                        </span>
                      </div>
                      {/* Proficiency bar */}
                      <div className="h-px bg-graphite-800 w-full">
                        <div
                          className={cn(
                            "h-px bg-brass-500/50 transition-all duration-1000",
                            proficiencyWidth[skill.proficiency]
                          )}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
