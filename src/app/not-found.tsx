import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-graphite-950 flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-2xs text-brass-400 tracking-[0.25em] uppercase mb-4">
        ERROR / 404
      </p>
      <h1 className="font-display font-bold text-6xl text-graphite-200 mb-4">
        Not Found
      </h1>
      <p className="text-graphite-500 text-base mb-10 max-w-sm leading-relaxed">
        This page does not exist. It may have been moved, deleted, or you may have typed the wrong address.
      </p>
      <Link
        href="/"
        className="font-mono text-sm border border-graphite-700 px-6 py-3 text-graphite-400 hover:border-brass-500/50 hover:text-graphite-200 transition-colors duration-200 tracking-wider"
      >
        ← RETURN HOME
      </Link>
    </div>
  );
}
