import { useState } from "react";
import { ShoppingBag, GraduationCap, BookOpen, Download } from "lucide-react";

const platforms = [
  { id: "gumroad", label: "Gumroad", Icon: ShoppingBag },
  { id: "kajabi", label: "Kajabi", Icon: GraduationCap },
  { id: "teachable", label: "Teachable", Icon: BookOpen },
  { id: "download", label: "Download Files", Icon: Download },
];

export function LaunchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selected, setSelected] = useState("gumroad");
  const [email, setEmail] = useState("");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 page-fade-in" onClick={onClose}>
      <div
        className="w-full max-w-lg rounded-2xl border border-slate-700 bg-[#1E293B] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white">Ready to sell. Choose your platform.</h2>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {platforms.map((p) => {
            const active = selected === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelected(p.id)}
                className={`flex flex-col items-center justify-center gap-2 rounded-xl border p-5 transition ${
                  active ? "border-[#14B8A6] bg-[#14B8A6]/10" : "border-slate-700 hover:border-[#14B8A6]"
                }`}
              >
                <p.Icon className="h-6 w-6 text-[#14B8A6]" />
                <span className="text-sm font-medium text-white">{p.label}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-6">
          <label className="text-sm text-slate-400">Where should we send your course package?</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="mt-2 w-full rounded-lg border border-slate-700 bg-[#0F172A] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-[#14B8A6] focus:outline-none"
          />
        </div>
        <p className="mt-4 text-sm text-slate-400">🔥 3,241 creators launched with CourseForge this month</p>
        <button
          onClick={onClose}
          className="mt-5 w-full rounded-lg bg-[#14B8A6] px-4 py-4 text-base font-bold text-[#0F172A] glow-teal hover:brightness-110 transition"
        >
          Launch My Course
        </button>
        <p className="mt-3 text-center text-xs text-slate-500">
          You'll receive a .zip with all assets + a setup guide
        </p>
      </div>
    </div>
  );
}
