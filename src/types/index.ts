// ─────────────────────────────────────────────
// Project types
// ─────────────────────────────────────────────

export type ProjectCategory =
  | "Robotics"
  | "Embedded Systems"
  | "FPGA"
  | "AI / ML"
  | "Digital Design"
  | "Personal Project";

export interface TechTag {
  label: string;
  group: "hardware" | "software" | "protocol" | "tool" | "ml";
}

export interface ProjectLink {
  label: string;
  href: string;
  type: "github" | "demo" | "report" | "other";
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  isFeatured: boolean;
  featuredOrder?: number;
  coverMeta?: string; // Short descriptor used in place of image
  sections: {
    context: string;
    objective: string;
    contribution: string;
    architecture: string;
    stack: string[];
    challenges: string;
    results: string;
    learnings: string;
  };
  links?: ProjectLink[];
}

// ─────────────────────────────────────────────
// Skills types
// ─────────────────────────────────────────────

export interface Skill {
  name: string;
  proficiency: "fluent" | "proficient" | "familiar";
}

export interface SkillGroup {
  category: string;
  icon: string; // emoji or short identifier
  skills: Skill[];
}

// ─────────────────────────────────────────────
// Site config types
// ─────────────────────────────────────────────

export interface SocialLink {
  label: string;
  href: string;
  type: "email" | "github" | "linkedin" | "other";
}

export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  tagline: string;
  description: string;
  socials: SocialLink[];
  school: string;
  location: string;
  status: string;
}

// ─────────────────────────────────────────────
// Secondary project type
// ─────────────────────────────────────────────

export interface SecondaryProject {
  title: string;
  description: string;
  tags: string[];
}
