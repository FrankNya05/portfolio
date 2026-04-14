import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  variant?: "default" | "accent" | "steel" | "circuit";
  size?: "sm" | "md";
  className?: string;
}

export function Tag({ label, variant = "default", size = "sm", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block font-mono tracking-wide border",
        size === "sm" && "text-2xs px-2 py-0.5",
        size === "md" && "text-xs px-2.5 py-1",
        variant === "default" && "bg-graphite-800 text-graphite-300 border-graphite-700",
        variant === "accent" && "bg-brass-900 text-brass-300 border-brass-700",
        variant === "steel" && "bg-steel-700 text-steel-200 border-steel-600",
        variant === "circuit" && "bg-circuit-600 text-circuit-200 border-circuit-500",
        className
      )}
    >
      {label}
    </span>
  );
}
