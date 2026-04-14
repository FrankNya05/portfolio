import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjectsSection } from "@/components/sections/FeaturedProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { ContactPreviewSection } from "@/components/sections/ContactPreviewSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection />
      <SkillsSection />
      <AboutPreviewSection />
      <ContactPreviewSection />
    </>
  );
}
