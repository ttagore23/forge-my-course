import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { UploadCloud, X, FileText, Link as LinkIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/generate")({ component: Generate });

const initialFiles = [
  { name: "podcast-ep-47.mp3" },
  { name: "workshop-notes.pdf" },
  { name: "twitter-threads.txt" },
];

const lengths = ["3–4 hrs", "6–8 hrs", "Self-paced"];
const prices = ["Free", "$97", "$297", "Custom"];

const statuses = [
  "Analyzing your content...",
  "Structuring your curriculum...",
  "Writing lesson scripts...",
  "Building your workbook...",
  "Drafting your email drip...",
  "Finalizing your sales page...",
];

function Generate() {
  const navigate = useNavigate();
  const [files, setFiles] = useState(initialFiles);
  const [length, setLength] = useState(lengths[1]);
  const [price, setPrice] = useState(prices[2]);
  const [generating, setGenerating] = useState(false);
  const [statusIdx, setStatusIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!generating) return;
    const tick = setInterval(() => setStatusIdx((i) => (i + 1) % statuses.length), 1000);
    const prog = setInterval(() => setProgress((p) => Math.min(100, p + 2)), 110);
    const done = setTimeout(() => navigate({ to: "/course-output" }), 6000);
    return () => { clearInterval(tick); clearInterval(prog); clearTimeout(done); };
  }, [generating, navigate]);

  if (generating) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white page-fade-in">
        <Navbar />
        <div className="grid place-items-center px-6 py-32">
          <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-[#1E293B] p-10 text-center shadow-2xl">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[#14B8A6]/15 animate-soft-pulse glow-teal">
              <span className="text-2xl font-extrabold text-[#14B8A6]">C</span>
            </div>
            <h2 className="mt-6 text-xl font-semibold">Forging your course</h2>
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full bg-[#14B8A6] transition-all duration-150"
                style={{ width: `${progress}%`, boxShadow: "0 0 12px #14B8A6" }}
              />
            </div>
            <p className="mt-5 text-sm text-slate-400 transition">{statuses[statusIdx]}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white page-fade-in">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-bold">Build your course</h1>
        <p className="mt-2 text-sm text-slate-400">Two minutes of setup. Sixty seconds of generation.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[45%_55%]">
          {/* LEFT */}
          <div className="rounded-xl border border-slate-700 bg-[#1E293B] p-6">
            <h2 className="text-lg font-semibold">Drop your raw material</h2>

            <div className="mt-5 rounded-xl border-2 border-dashed border-[#14B8A6]/50 bg-[#0F172A]/40 p-8 text-center">
              <UploadCloud className="mx-auto h-10 w-10 text-[#14B8A6]" />
              <p className="mt-3 text-sm font-medium text-white">
                Drag PDFs, MP3s, videos — or paste a URL below
              </p>
              <p className="mt-1 text-xs text-slate-500">Up to 2 GB · MP4, MP3, PDF, DOCX, TXT</p>
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-lg border border-slate-700 bg-[#0F172A] px-3">
              <LinkIcon className="h-4 w-4 text-slate-500" />
              <input
                placeholder="Paste a YouTube or podcast link"
                className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>

            <div className="mt-5 space-y-2">
              {files.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center justify-between rounded-lg border border-slate-700 bg-[#0F172A]/60 px-3 py-2.5"
                >
                  <div className="flex items-center gap-2.5 text-sm">
                    <FileText className="h-4 w-4 text-[#14B8A6]" />
                    <span className="truncate">{f.name}</span>
                  </div>
                  <button
                    onClick={() => setFiles((fs) => fs.filter((x) => x.name !== f.name))}
                    className="rounded-md p-1 text-slate-500 hover:bg-slate-800 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-xl border border-slate-700 bg-[#1E293B] p-6 space-y-6">
            <h2 className="text-lg font-semibold">Course Settings</h2>

            <Field label="Who is this for?">
              <input
                placeholder="e.g. Freelance designers wanting to raise their rates"
                className="w-full rounded-lg border border-slate-700 bg-[#0F172A] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#14B8A6] focus:outline-none"
              />
            </Field>

            <Field label="What will they be able to do after?">
              <textarea
                rows={3}
                placeholder="e.g. Sign 3 new clients at 2× their current rate within 60 days"
                className="w-full rounded-lg border border-slate-700 bg-[#0F172A] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#14B8A6] focus:outline-none resize-none"
              />
            </Field>

            <Field label="Course length">
              <Segmented options={lengths} value={length} onChange={setLength} />
            </Field>

            <Field label="Suggested price">
              <Segmented options={prices} value={price} onChange={setPrice} />
            </Field>
          </div>
        </div>

        <button
          onClick={() => setGenerating(true)}
          className="mt-8 w-full rounded-xl bg-[#14B8A6] px-6 py-5 text-lg font-bold text-[#0F172A] glow-teal-lg hover:brightness-110 transition"
        >
          Generate My Course →
        </button>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-sm font-medium text-slate-300">{label}</label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function Segmented({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="inline-flex rounded-lg border border-slate-700 bg-[#0F172A] p-1">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition ${
              active ? "bg-[#14B8A6] text-[#0F172A]" : "text-slate-400 hover:text-white"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
