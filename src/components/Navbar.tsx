import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#0F172A]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-xl font-bold tracking-tight text-[#14B8A6]">
          Distill
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#examples" className="hover:text-white transition">Examples</a>
        </nav>
        <Link
          to="/generate"
          className="inline-flex items-center gap-1 rounded-lg bg-[#14B8A6] px-4 py-2 text-sm font-semibold text-[#0F172A] glow-teal hover:brightness-110 transition"
        >
          Generate My Course <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
