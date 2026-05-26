import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, Sparkles, Rocket, FileText, ChevronDown } from "lucide-react";
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
  {
    n: 1,
    title: "The Positioning Shift",
    lessons: "3 lessons · 38 min",
    preview:
      "Discover the 3 inherited beliefs that keep experts undercharging. By the end of this module you'll know exactly why willpower won't fix your rates — and what will.",
  },
  {
    n: 2,
    title: "Building Your Rate Architecture",
    lessons: "4 lessons · 52 min",
    preview:
      "Design a tiered pricing structure that matches your value, not your hours. Includes the Scope × Scarcity × Outcome formula that top creators use to justify premium pricing.",
  },
  {
    n: 3,
    title: "The Portfolio That Commands Premium",
    lessons: "3 lessons · 41 min",
    preview:
      "Rebuild your case studies around outcomes, not deliverables. Includes a 48-hour portfolio rewrite framework and the one section most people skip that costs them 40% of deals.",
  },
  {
    n: 4,
    title: "Outreach That Converts",
    lessons: "3 lessons · 36 min",
    preview:
      "The exact outreach template that books 3 qualified leads per week. Covers subject lines, openers, follow-up cadence, and how to pre-qualify before the first call.",
  },
  {
    n: 5,
    title: "The Sales Call Playbook",
    lessons: "3 lessons · 47 min",
    preview:
      "Run a 45-minute discovery call that closes at 2× without feeling salesy. Includes objection-handling scripts for 'your price is too high' and 'I need to think about it.'",
  },
  {
    n: 6,
    title: "Launch and Scale",
    lessons: "3 lessons · 32 min",
    preview:
      "Take your first win and turn it into a repeatable system. Covers referral structures, retainer conversion, and how to productize your methodology into evergreen income.",
  },
];

const testimonials = [
  {
    initials: "MR",
    name: "Maya R.",
    role: "Podcast Host · 200+ episodes",
    quote: "I turned 3 years of content into a $297 course in one afternoon. First launch: $14,800.",
  },
  {
    initials: "JT",
    name: "James T.",
    role: "Business Consultant",
    quote:
      "My VA charged me $2,400 to build a course outline. Distill did it in 47 seconds. And it actually sounded like me.",
  },
  {
    initials: "SL",
    name: "Sofia L.",
    role: "Fitness Coach · YouTube Creator",
    quote:
      "I had the content across YouTube, notes, and voice memos. I just couldn't package it. Distill removed the last excuse.",
  },
];

const pricingTiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    desc: "1 course, up to 3 modules, watermarked exports",
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Creator",
    price: "$49",
    period: "/mo",
    desc: "Unlimited courses, full 5-tab output, no watermark, Gumroad/Teachable export",
    cta: "Start creating",
    highlight: true,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/mo",
    desc: "Everything in Creator plus white-label, custom domain, email drip integration, priority support",
    cta: "Go pro",
    highlight: false,
  },
];

function Landing() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [waitlistDone, setWaitlistDone] = useState(false);
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
            <span className="text-gradient-teal">Distill Your Expertise Into a Course. In 60 Seconds.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Drop your YouTube videos, podcast episodes, voice notes, PDFs, or transcripts. Distill generates the full
            curriculum, scripts, workbook, 14-day email drip, and sales page — in your voice, ready to sell.
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
            <Link
              to="/course-output"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3.5 text-base font-semibold text-white hover:border-[#14B8A6]/50 transition"
            >
              Try an example <span aria-hidden>→</span>
            </Link>
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
              distill.app/c/rate-raising-playbook
            </div>
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-bold">The Freelance Designer's Rate-Raising Playbook</h3>
            <p className="mt-1 text-sm text-slate-400">6 modules · 19 lessons · 4h 20m</p>
            <div className="mt-6 divide-y divide-slate-700/70">
              {mockModules.map((m) => (
                <div key={m.n}>
                  <button
                    onClick={() => setExpandedModule(expandedModule === m.n ? null : m.n)}
                    className="w-full flex items-center justify-between py-4 px-2 text-left hover:bg-[#0F172A]/30 rounded-lg transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid h-9 w-9 place-items-center rounded-md bg-[#14B8A6]/10 text-sm font-semibold text-[#14B8A6]">
                        {m.n}
                      </span>
                      <div>
                        <div className="font-medium text-white">{m.title}</div>
                        <div className="text-xs text-slate-500">{m.lessons}</div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform ${
                        expandedModule === m.n ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedModule === m.n && (
                    <div className="px-2 pb-4 -mt-1 text-sm leading-relaxed text-slate-400">
                      <div className="ml-13 rounded-lg border border-slate-700/60 bg-[#0F172A]/40 p-4">
                        {m.preview}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">What creators are saying</h2>
        <p className="mt-3 text-center text-slate-400">
          From podcasters, consultants, coaches, and YouTubers.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover rounded-xl border border-slate-700 bg-[#1E293B] p-7"
            >
              <p className="text-base leading-relaxed text-slate-200">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0d7a6e] text-sm font-bold text-[#0F172A]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REVENUE CALCULATOR */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <RevenueCalculator />
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 pb-24">
        <h2 className="text-center text-3xl sm:text-4xl font-bold">Simple pricing</h2>
        <p className="mt-3 text-center text-slate-400">Start free. Scale when you're ready.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative card-hover rounded-xl border bg-[#1E293B] p-7 ${
                tier.highlight ? "border-[#14B8A6] shadow-[0_0_30px_-10px_#14B8A6]" : "border-slate-700"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#14B8A6] px-3 py-1 text-xs font-semibold text-[#0F172A]">
                  Most popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">{tier.price}</span>
                <span className="text-sm text-slate-400">{tier.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{tier.desc}</p>
              <Link
                to="/generate"
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  tier.highlight
                    ? "bg-[#14B8A6] text-[#0F172A] glow-teal hover:brightness-110"
                    : "border border-slate-700 text-white hover:border-[#14B8A6]"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-[#0F172A]">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h3 className="text-2xl font-bold">Join 12,400 creators on the waitlist</h3>
          {!waitlistDone ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setWaitlistDone(true);
              }}
              className="mt-6 flex flex-col sm:flex-row gap-3 mx-auto max-w-md"
            >
              <input
                type="email"
                required
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
          ) : (
            <div className="mt-6 mx-auto max-w-md rounded-xl border border-[#14B8A6]/40 bg-[#1E293B] p-6">
              <h4 className="text-xl font-bold text-white">You're in!</h4>
              <p className="mt-2 text-sm text-slate-400">
                We'll email you when your early access is ready.
              </p>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  "Just joined the @DistillApp waitlist — turn any YouTube video, podcast, or notes into a sellable course in 60 seconds. distill.app",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium hover:border-[#14B8A6] transition"
              >
                Share on X →
              </a>
            </div>
          )}
          <p className="mt-10 text-xs text-slate-500">© 2026 Distill. Built for creators.</p>
        </div>
      </footer>
    </div>
  );
}

function RevenueCalculator() {
  const [price, setPrice] = useState(97);
  const [listSize, setListSize] = useState(500);
  const [convRate, setConvRate] = useState(2);
  const result = Math.round(price * listSize * (convRate / 100));
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-8 sm:p-12">
      <h2 className="text-center text-3xl sm:text-4xl font-bold">What could your course earn?</h2>
      <p className="mt-3 text-center text-slate-400">
        Adjust the sliders to see your potential first-launch revenue.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px] items-center">
        <div className="space-y-7">
          <div>
            <div className="flex items-center justify-between text-sm">
              <label className="font-medium text-slate-300">Course price</label>
              <span className="font-semibold text-white">${price}</span>
            </div>
            <input
              type="range"
              min={9}
              max={997}
              step={1}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="mt-2 w-full accent-[#14B8A6]"
            />
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <label className="font-medium text-slate-300">Email list / audience size</label>
              <span className="font-semibold text-white">{listSize.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={100}
              max={50000}
              step={100}
              value={listSize}
              onChange={(e) => setListSize(Number(e.target.value))}
              className="mt-2 w-full accent-[#14B8A6]"
            />
          </div>
          <div>
            <div className="flex items-center justify-between text-sm">
              <label className="font-medium text-slate-300">Conversion rate</label>
              <span className="font-semibold text-white">{convRate}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={convRate}
              onChange={(e) => setConvRate(Number(e.target.value))}
              className="mt-2 w-full accent-[#14B8A6]"
            />
          </div>
        </div>
        <div className="rounded-xl border border-[#14B8A6]/40 bg-[#0F172A] p-8 text-center glow-teal">
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-500">Your first launch</p>
          <p className="mt-3 text-5xl font-extrabold text-gradient-teal">${result.toLocaleString()}</p>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            Most Distill courses relaunch 3–5×. Year 1 potential: ${(result * 3).toLocaleString()}–
            ${(result * 5).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
