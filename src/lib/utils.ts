import { clsx, type ClassValue } from "clsx";

/**
 * Merge Tailwind class names safely.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}

/**
 * Map a project category to a short identifier for styling.
 */
export function categoryToKey(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/**
 * Truncate a string to a maximum length with ellipsis.
 */
export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + "…";
}

/**
 * Format a proficiency level into a human label.
 */
export function proficiencyLabel(
  proficiency: "fluent" | "proficient" | "familiar"
): string {
  const labels = {
    fluent: "Fluent",
    proficient: "Proficient",
    familiar: "Familiar",
  };
  return labels[proficiency];
}
