import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

export function Button({
  children,
  href,
  onClick,
  variant = "outline",
  size = "md",
  external = false,
  className,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 font-mono tracking-wide transition-all duration-200",
    size === "sm" && "text-xs px-3 py-1.5",
    size === "md" && "text-sm px-4 py-2",
    size === "lg" && "text-sm px-6 py-3",
    variant === "primary" &&
      "bg-brass-400 text-graphite-950 hover:bg-brass-300 border border-brass-400 hover:border-brass-300",
    variant === "outline" &&
      "bg-transparent text-graphite-200 border border-graphite-600 hover:border-brass-400 hover:text-brass-300",
    variant === "ghost" &&
      "bg-transparent text-graphite-400 hover:text-graphite-200 border-0",
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  );
}
