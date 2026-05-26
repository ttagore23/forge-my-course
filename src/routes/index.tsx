import { createFileRoute, Link } from "@tanstack/react-router";
import { Upload, Sparkles, Rocket, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/")({ component: Landing });

const avatars = ["JM", "AK", "RS", "LP", "TN"];
const valueProps = [
  {
    icon: Upload,
    title: "Drop Your Raw Content",
    desc: "Upload transcripts, videos, PDFs, voice notes — or paste a YouTube/podcast URL.",
  },
  {
    icon: Sparkles,
    title: "AI Builds Everything",
    desc: "Full curriculum, video scripts, downloadable workbook, 14-day email drip, and sales page — all in your voice.",
  },
  {
    icon: Rocket,
    title: "Publish and Sell",
    desc: "One-click export to Gumroad, Kajabi, or Teachable. Your course is live in minutes.",
  },
];

const mockModules = [
  { n: 1, title: "The Positioning Shift", lessons: "3 lessons · 38 min" },
  { n: 2, title: "Building Your Rate Architecture", lessons: "4 lessons · 52 min" },
  { n: 3, title: "The Portfolio That Commands Premium", lessons: "3 lessons · 41 min" },
  { n: 4, title: "Outreach That Converts", lessons: "3 lessons · 36 min" },
  { n: 5, title: "The Sales Call Playbook", lessons: "3 lessons · 47 min" },
  { n: 6, title: "Launch and Scale", lessons: "3 lessons · 32 min" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white page-fade-in">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-[#14B8A6]/10 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
          <span className="inline-flex items-center rounded-full border border-slate-700 bg-[#1E293B] px-4 py-1.5 text-xs font-medium text-slate-300">
            Backed by creators who've sold $50M+ in courses
          </span>
          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span className="text-gradient-teal">Turn Your Expertise Into a Course in 60 Seconds.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Drop your podcast transcripts, YouTube videos, or voice notes. AI generates the full
            curriculum, scripts, workbook, 14-day email drip, and sales page. Ready to sell.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/generate"
              className="inline-flex items-center gap-2 rounded-lg bg-[#14B8A6] px-6 py-3.5 text-base font-semibold text-[#0F172A] glow-teal hover:brightness-110 transition"
            >
              Generate My Course <span aria-hidden>→</span>
            </Link>
            <a
              href="#examples"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-base font-semibold text-white hover:border-[#14B8A6]/50 transition"
            >
              See an example
            </a>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex -space-x-2">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#0F172A] bg-gradient-to-br from-[#14B8A6] to-[#0d7a6e] text-xs font-bold text-[#0F172A]"
                >
                  {a}
                </div>
              ))}
            </div>
            <span>4,200 courses generated this week · <span className="text-yellow-400">★</span> 4.9/5 from 1,800 creators</span>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((v) => (
            <div
              key={v.title}
              className="card-hover rounded-xl border border-slate-700 bg-[#1E293B] p-7"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#14B8A6]/10 text-[#14B8A6]">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BROWSER MOCKUP */}
      <section id="examples" className="mx-auto max-w-6xl px-6 pb-24">
        <p className="text-center text-sm font-medium text-slate-400">
          Example output — generated in 47 seconds.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700 bg-[#1E293B] shadow-2xl">
          <div className="flex items-center gap-2 border-b border-slate-700 bg-[#0F172A]/60 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-[#1E293B] px-3 py-1 text-xs text-slate-500">
              courseforge.app/c/rate-raising-playbook
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold">The Freelance Designer's Rate-Raising Playbook</h3>
            <p className="mt-1 text-sm text-slate-400">6 modules · 19 lessons · 4h 20m</p>
            <div className="mt-6 divide-y divide-slate-700/70">
              {mockModules.map((m) => (
                <div key={m.n} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <span className="grid h-9 w-9 place-items-center rounded-md bg-[#14B8A6]/10 text-sm font-semibold text-[#14B8A6]">
                      {m.n}
                    </span>
                    <div>
                      <div className="font-medium text-white">{m.title}</div>
                      <div className="text-xs text-slate-500">{m.lessons}</div>
                    </div>
                  </div>
                  <FileText className="h-4 w-4 text-slate-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="pricing" className="border-t border-slate-800 bg-[#0F172A]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h3 className="text-2xl font-bold">Join 12,400 creators on the waitlist</h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col sm:flex-row gap-3 mx-auto max-w-md"
          >
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-lg border border-slate-700 bg-[#1E293B] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#14B8A6] focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#14B8A6] px-5 py-3 text-sm font-semibold text-[#0F172A] glow-teal hover:brightness-110 transition"
            >
              Join waitlist
            </button>
          </form>
          <p className="mt-10 text-xs text-slate-500">© 2026 CourseForge. Built for creators.</p>
        </div>
      </footer>
    </div>
  );
}
