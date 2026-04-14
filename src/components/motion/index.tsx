"use client";

import { motion, type Variants, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

// ─────────────────────────────────────────────────────────────
// Shared animation variants
// ─────────────────────────────────────────────────────────────

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay },
  }),
};

// ─────────────────────────────────────────────────────────────
// Reusable animated wrappers
// ─────────────────────────────────────────────────────────────

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
}

/**
 * Reveals children with a fade-up animation when they enter the viewport.
 * Respects prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  const MotionComponent = motion[as] as typeof motion.div;

  return (
    <MotionComponent
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView || prefersReduced ? "visible" : "hidden"}
      custom={delay}
      variants={prefersReduced ? {} : fadeUpVariants}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Stagger container — children get staggered entrance animations.
 */
export function StaggerContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView || prefersReduced ? "visible" : "hidden"}
      variants={prefersReduced ? {} : staggerContainerVariants}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual stagger child — use inside StaggerContainer.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUpVariants}>
      {children}
    </motion.div>
  );
}

/**
 * Animated horizontal line that expands on mount.
 */
export function AnimatedRule({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scaleX: 0, originX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
}
