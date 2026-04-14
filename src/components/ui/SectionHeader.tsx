import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;    // small mono label above
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="font-mono text-2xs text-brass-400 tracking-[0.2em] uppercase mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-semibold text-graphite-100 leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-graphite-400 text-base max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
