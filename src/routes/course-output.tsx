import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, FileText, Copy, Download, ExternalLink, Star } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { LaunchModal } from "@/components/LaunchModal";
import { modules, scriptText, emails, salesCopy, type Lesson } from "@/data/course";

export const Route = createFileRoute("/course-output")({ component: CourseOutput });

const tabs = ["Curriculum", "Scripts", "Workbook", "Email Drip", "Sales Page"] as const;
type Tab = (typeof tabs)[number];

function CourseOutput() {
  const [title, setTitle] = useState("The Freelance Designer's Rate-Raising Playbook");
  const [editing, setEditing] = useState(false);
  const [tab, setTab] = useState<Tab>("Curriculum");
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(modules[0].lessons[0]);
  const [launchOpen, setLaunchOpen] = useState(false);
  const [toast, setToast] = useState("");

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(""), 2200);
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white pb-24 page-fade-in">
      <Navbar />

      {/* Top bar */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col lg:flex-row lg:items-center gap-4 justify-between">
          <div className="min-w-0">
            {editing ? (
              <input
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setEditing(false)}
                onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
                className="w-full bg-transparent text-2xl font-bold text-white border-b border-[#14B8A6] focus:outline-none"
              />
            ) : (
              <button
                onClick={() => setEditing(true)}
                className="text-left text-2xl font-bold text-white hover:text-[#14B8A6] transition"
              >
                {title}
              </button>
            )}
            <div className="mt-2 flex flex-wrap gap-2">
              {["6 modules", "19 lessons", "4h 20m", "$297"].map((m) => (
                <span key={m} className="rounded-full border border-slate-700 bg-[#1E293B] px-3 py-1 text-xs text-slate-300">
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-slate-400 hover:text-white">← Back</Link>
            <button
              onClick={() => setLaunchOpen(true)}
              className="rounded-lg bg-[#14B8A6] px-5 py-2.5 text-sm font-semibold text-[#0F172A] glow-teal hover:brightness-110 transition"
            >
              Launch My Course →
            </button>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 flex gap-1 overflow-x-auto">
          {tabs.map((t) => {
            const active = t === tab;
            return (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative px-4 py-4 text-sm font-medium whitespace-nowrap transition ${
                  active ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {t}
                {active && (
                  <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[#14B8A6]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div key={tab} className="mx-auto max-w-7xl px-6 py-8 tab-fade-in">
        {tab === "Curriculum" && (
          <Curriculum selected={selectedLesson} setSelected={setSelectedLesson} setTab={setTab} />
        )}
        {tab === "Scripts" && <Scripts selected={selectedLesson} setSelected={setSelectedLesson} />}
        {tab === "Workbook" && <Workbook onDownload={() => showToast("Workbook PDF downloaded ✓")} />}
        {tab === "Email Drip" && <EmailDrip />}
        {tab === "Sales Page" && <SalesPage onCopy={() => showToast("HTML copied to clipboard ✓")} />}
      </div>

      {/* Sticky bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-800 bg-[#0F172A]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between text-sm">
          <span className="text-slate-400">
            <span className="text-[#14B8A6] font-semibold">CourseForge</span> generated 23 assets for your course
          </span>
          <button
            onClick={() => showToast("Link copied! ✓")}
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium hover:border-[#14B8A6] transition"
          >
            Share your result
          </button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 rounded-lg border border-[#14B8A6]/40 bg-[#1E293B] px-4 py-2 text-sm text-white shadow-lg glow-teal">
          {toast}
        </div>
      )}

      <LaunchModal open={launchOpen} onClose={() => setLaunchOpen(false)} />
    </div>
  );
}

/* ---------- TABS ---------- */

function Curriculum({
  selected,
  setSelected,
  setTab,
}: {
  selected: Lesson;
  setSelected: (l: Lesson) => void;
  setTab: (t: Tab) => void;
}) {
  const [openId, setOpenId] = useState<string>("m1");
  return (
    <div className="grid gap-6 lg:grid-cols-[38%_62%]">
      <div className="rounded-xl border border-slate-700 bg-[#1E293B] p-2">
        {modules.map((m) => {
          const open = openId === m.id;
          const total = m.lessons.reduce((s, l) => s + l.minutes, 0);
          return (
            <div key={m.id} className="border-b border-slate-800 last:border-0">
              <button
                onClick={() => setOpenId(open ? "" : m.id)}
                className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left hover:bg-[#0F172A]/40 rounded-lg"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-[#14B8A6]/10 text-xs font-semibold text-[#14B8A6]">
                    {m.number}
                  </span>
                  <div className="min-w-0">
                    <div className="font-medium text-sm truncate">{m.title}</div>
                    <div className="text-xs text-slate-500">{m.lessons.length} lessons · {total} min</div>
                  </div>
                </div>
                <ChevronDown className={`h-4 w-4 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
              </button>
              {open && (
                <div className="px-2 pb-3 space-y-1">
                  {m.lessons.map((l) => {
                    const active = selected.id === l.id;
                    return (
                      <button
                        key={l.id}
                        onClick={() => setSelected(l)}
                        className={`w-full flex items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          active ? "bg-[#14B8A6]/10 border border-[#14B8A6]/40" : "hover:bg-[#0F172A]/60 border border-transparent"
                        }`}
                      >
                        <span className="text-xs text-slate-500 pt-0.5">L{l.number}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm">{l.title}</div>
                          <div className="mt-0.5 text-xs text-slate-500 flex items-center gap-2">
                            <span>{l.minutes} min</span>
                            {l.hasWorksheet && <span>· 📋 worksheet</span>}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-xl border border-slate-700 bg-[#1E293B] p-7">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold">{selected.title}</h3>
          <span className="rounded-full bg-[#14B8A6]/10 px-2.5 py-0.5 text-xs font-medium text-[#14B8A6]">
            {selected.minutes} min
          </span>
        </div>
        <div className="mt-6 space-y-5">
          <Section title="Learning Outcome">
            <p className="text-sm text-slate-300">{selected.outcome}</p>
          </Section>
          <Section title="Key Concepts">
            <ul className="space-y-1.5">
              {selected.concepts.map((c) => (
                <li key={c} className="text-sm text-slate-300 flex gap-2">
                  <span className="text-[#14B8A6]">•</span> {c}
                </li>
              ))}
            </ul>
          </Section>
          <Section title="Estimated completion">
            <p className="text-sm text-slate-300">{selected.minutes} min video + 5 min worksheet</p>
          </Section>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => setTab("Scripts")} className="rounded-lg bg-[#14B8A6] px-4 py-2.5 text-sm font-semibold text-[#0F172A] glow-teal hover:brightness-110 transition">
            View Script →
          </button>
          <button onClick={() => setTab("Workbook")} className="rounded-lg border border-slate-700 px-4 py-2.5 text-sm font-semibold hover:border-[#14B8A6] transition">
            Download Worksheet →
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">{title}</div>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function Scripts({ selected, setSelected }: { selected: Lesson; setSelected: (l: Lesson) => void }) {
  const all = modules.flatMap((m) => m.lessons.map((l) => ({ l, m })));
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center gap-3">
        <label className="text-sm text-slate-400">Lesson:</label>
        <select
          value={selected.id}
          onChange={(e) => {
            const found = all.find((x) => x.l.id === e.target.value);
            if (found) setSelected(found.l);
          }}
          className="rounded-lg border border-slate-700 bg-[#1E293B] px-3 py-2 text-sm text-white focus:border-[#14B8A6] focus:outline-none"
        >
          {all.map(({ l, m }) => (
            <option key={l.id} value={l.id}>
              M{m.number} · L{l.number} — {l.title}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-xl bg-white p-10 shadow-2xl">
        <div className="text-xs uppercase tracking-wider font-semibold text-slate-500">{selected.title}</div>
        <div className="mt-4 space-y-5 text-[20px] leading-[1.6] text-slate-800 font-normal">
          {scriptText.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <ToolBtn icon={Copy}>Copy Script</ToolBtn>
        <ToolBtn icon={ExternalLink}>Open in AI Avatar</ToolBtn>
        <ToolBtn icon={Download}>Download .docx</ToolBtn>
      </div>
    </div>
  );
}

function ToolBtn({ icon: Icon, children }: { icon: any; children: React.ReactNode }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium hover:border-[#14B8A6] transition">
      <Icon className="h-4 w-4 text-[#14B8A6]" />
      {children}
    </button>
  );
}

function Workbook({ onDownload }: { onDownload: () => void }) {
  const [stars, setStars] = useState(0);
  return (
    <div className="space-y-5">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-12 shadow-2xl text-slate-800">
        <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Module 1 Worksheet</p>
        <h2 className="mt-2 text-3xl font-serif font-bold text-slate-900">The Positioning Shift</h2>
        <p className="mt-5 text-sm leading-relaxed text-slate-600">
          Before you can raise your rates, you need a clear-eyed view of where you stand today. This worksheet walks you
          through three short exercises and one reflection prompt. Set aside 20 minutes — be honest, not generous.
        </p>

        <div className="mt-8 space-y-6">
          {[
            "The single biggest reason I'm undercharging right now is",
            "If I raised my rates by 50% tomorrow, the first client who would push back is",
            "The kind of project I would happily do for 3× my current rate is",
          ].map((q, i) => (
            <div key={i}>
              <label className="text-sm font-medium text-slate-700">{i + 1}. {q}</label>
              <input className="mt-2 w-full border-b border-slate-300 bg-transparent py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none" />
            </div>
          ))}

          <div>
            <label className="text-sm font-medium text-slate-700">
              4. Reflection: Write 3–5 sentences about a time you said yes to a project at a rate you knew was too low. What
              did it cost you?
            </label>
            <textarea
              rows={5}
              className="mt-2 w-full rounded-md border border-slate-300 bg-white p-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none resize-none"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-slate-700">Rate Your Confidence (raising rates this month):</p>
            <div className="mt-2 flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} onClick={() => setStars(n)} className="p-1">
                  <Star className={`h-7 w-7 ${n <= stars ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onDownload}
          className="rounded-lg bg-[#14B8A6] px-5 py-3 text-sm font-semibold text-[#0F172A] glow-teal hover:brightness-110 transition"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
}

function EmailDrip() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-xs uppercase tracking-widest font-semibold text-slate-500">14-Day Post-Purchase Email Sequence</p>
      <div className="mt-6 relative">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-800" />
        <div className="space-y-3">
          {emails.map((e) => (
            <div key={e.day} className="relative flex gap-5 rounded-xl border border-slate-700 bg-[#1E293B] p-5 card-hover">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#14B8A6]/15 text-[#14B8A6] text-sm font-bold ring-4 ring-[#0F172A]">
                D{e.day}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white">{e.subject}</div>
                <p className="mt-1 text-sm text-slate-400">{e.preview}</p>
              </div>
              <button className="self-start text-sm font-medium text-[#14B8A6] hover:underline">Edit</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SalesPage({ onCopy }: { onCopy: () => void }) {
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium hover:border-[#14B8A6] transition"
        >
          <Copy className="h-4 w-4 text-[#14B8A6]" />
          Copy Full Page HTML
        </button>
      </div>
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-12 shadow-2xl text-slate-800">
        <h1 className="text-4xl font-bold leading-tight text-slate-900">{salesCopy.h1}</h1>
        <p className="mt-6 text-base leading-relaxed text-slate-600">{salesCopy.intro}</p>

        <h2 className="mt-10 text-xl font-bold text-slate-900">What You'll Learn</h2>
        <ul className="mt-4 space-y-2">
          {salesCopy.learn.map((l) => (
            <li key={l} className="flex gap-3 text-sm text-slate-700">
              <span className="text-teal-600 font-bold">✓</span> {l}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 text-xl font-bold text-slate-900">About Your Instructor</h2>
        <div className="mt-4 flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-teal-400 to-teal-700 text-white font-bold">
            JM
          </div>
          <p className="text-sm leading-relaxed text-slate-600">{salesCopy.instructorBio}</p>
        </div>

        <div className="mt-10 rounded-xl border-2 border-slate-200 p-6 text-center">
          <div className="text-4xl font-bold text-slate-900">{salesCopy.price}</div>
          <button className="mt-4 w-full rounded-lg bg-teal-500 px-6 py-3 text-base font-semibold text-white hover:bg-teal-600 transition">
            Enroll Now
          </button>
          <p className="mt-3 text-xs text-slate-500">30-day refund · Lifetime access · Pay once</p>
        </div>
      </div>
    </div>
  );
}
