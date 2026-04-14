"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-graphite-950/90 backdrop-blur-md border-b border-graphite-800"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="font-mono text-xs text-brass-400 tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            sys://
          </span>
          <span className="font-display font-semibold text-graphite-100 text-sm tracking-wide">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-xs tracking-wider transition-colors duration-150",
                  isActive
                    ? "text-brass-300"
                    : "text-graphite-400 hover:text-graphite-200"
                )}
              >
                {link.label.toUpperCase()}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={cn("block w-5 h-px bg-graphite-400 transition-all", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block w-5 h-px bg-graphite-400 transition-all", menuOpen && "opacity-0")} />
          <span className={cn("block w-5 h-px bg-graphite-400 transition-all", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-graphite-900 border-b border-graphite-800 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-sm text-graphite-300 py-3 border-b border-graphite-800 last:border-0 hover:text-brass-300 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
