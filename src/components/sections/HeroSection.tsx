"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-graphite-950">
      {/* Technical grid background */}
      <div className="absolute inset-0 bg-technical-grid opacity-100 pointer-events-none" />

      {/* Glow orb — brass/gold, above and behind the title */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-25%",
          left: "15%",
          width: "900px",
          height: "900px",
          background: "radial-gradient(circle, rgba(184,124,10,0.18) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* Glow orb — steel blue, bottom-center-left, behind CTA area */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-15%",
          left: "15%",
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, rgba(37,99,168,0.13) 0%, transparent 60%)",
          filter: "blur(64px)",
        }}
      />

      {/* Vignette — darkens edges */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, #0D0E10 100%)"
        }}
      />

      {/* Horizontal accent line — top */}
      <div className="absolute top-[28%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass-500/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        {/* System identifier */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="font-mono text-2xs text-brass-400 tracking-[0.25em] uppercase">
            sys://portfolio/v1.0
          </span>
          <span className="block w-12 h-px bg-brass-500/30" />
          <span className="font-mono text-2xs text-graphite-600 tracking-wider">
            {siteConfig.school}
          </span>
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.08 }}
          className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-graphite-50 leading-[0.95] tracking-tight mb-6"
        >
          Nya Yatat
          <br />
          <span className="text-graphite-400">Frank Armand</span>
        </motion.h1>

        {/* Role line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="block w-8 h-px bg-brass-500/60" />
          <p className="font-mono text-xs text-brass-300 tracking-[0.15em] uppercase">
            Computer Engineering — Embedded · Robotics · Digital Design · AI
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-graphite-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-14 italic"
          lang="fr"
        >
          &ldquo;{siteConfig.tagline}&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.42 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="font-mono text-sm px-6 py-3 bg-brass-400 text-graphite-950 hover:bg-brass-300 transition-colors duration-200 tracking-wide"
          >
            VIEW PROJECTS
          </Link>
          <Link
            href="/about"
            className="font-mono text-sm px-6 py-3 border border-graphite-700 text-graphite-300 hover:border-brass-500/60 hover:text-graphite-100 transition-colors duration-200 tracking-wide"
          >
            ABOUT ME
          </Link>
          <a
            href={`mailto:${siteConfig.socials.find(s => s.type === "email")?.href?.replace("mailto:", "")}`}
            className="font-mono text-xs text-graphite-500 hover:text-brass-400 transition-colors duration-200 tracking-wider"
          >
            {siteConfig.socials.find(s => s.type === "email")?.label} →
          </a>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-2 mt-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-circuit-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-circuit-400" />
          </span>
          <span className="font-mono text-2xs text-graphite-500 tracking-wider">
            {siteConfig.status}
          </span>
        </motion.div>
      </div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-2xs text-graphite-700 tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-graphite-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
