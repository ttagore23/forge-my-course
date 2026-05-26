# CourseForge — Build Plan

A dark-themed React web app that demos an AI course-generation flow across three routes plus a launch modal. Pure frontend, all data mocked.

## Stack

Scaffold a `web_app` artifact (TanStack Start template, React + Tailwind). Add React Router for navigation between the three pages. No backend — all "AI generation" is a timed animation, all content is hardcoded mock data.

## Design tokens (global)

Wire into Tailwind config + `index.css`:
- Background `#0F172A`, surface `#1E293B`, accent teal `#14B8A6`, text white, muted `slate-400`, border `slate-700`
- Font: Inter (Google Fonts)
- Reusable utilities: `.card` (rounded-xl, slate-700 border, hover teal border), `.btn-teal` (filled teal + `box-shadow: 0 0 20px #14B8A680` glow), `.btn-ghost`
- Hero background: subtle radial dot grid (CSS background-image)
- Animations: gradient pulse keyframe (teal↔white) for H1; 150ms fade+translateY for tab content; route fade transitions

## Routes

### `/` — Landing
- **Navbar**: teal "CourseForge" wordmark, ghost links (How it works · Pricing · Examples), teal CTA "Generate My Course →" → `/generate`
- **Hero**: overline tag, gradient H1 with pulse animation, subhead, dual CTA (both → `/generate`), social proof row (5 avatar circles + stats)
- **Value props**: 3 dark cards in a row (stacks on mobile)
- **Browser mockup**: dark rounded frame containing 6 mock module rows
- **Footer**: waitlist email input + submit

### `/generate` — Course Generator
- Two-column layout (45/55, stacks on mobile)
- **Left**: drag-drop zone (dashed teal border, decorative only), URL input, 3 pre-populated file chips with × remove
- **Right**: audience input, outcome textarea, two segmented controls (length, price)
- **Bottom**: full-width glowing teal "Generate My Course →"
- **On click**: swap to centered generation card — pulsing logo, filling teal progress bar, status text rotating every 1.5s through 6 phrases, `setTimeout` 6s → navigate to `/course-output`

### `/course-output` — Core Screen
- **Top bar**: inline-editable title (contentEditable or input swap), meta pill tags, Back link, "Launch My Course →" (opens modal)
- **Tab bar**: 5 tabs with teal active underline, animated transitions
- **Curriculum tab** (default): left accordion sidebar (Module 1 expanded with 3 lessons, modules 2–6 collapsed with badges) + right detail panel for selected lesson with "View Script" / "Download Worksheet" buttons that switch tabs
- **Scripts tab**: lesson dropdown + white teleprompter card (~200 words mock script) + toolbar buttons
- **Workbook tab**: white PDF-styled card with serif headings, 3 fill-in inputs, reflection textarea, interactive 1–5 star rating, Download button
- **Email Drip tab**: vertical timeline, 6 rows (Day 1/3/5/7/10/14) with teal day badge, subject, preview, Edit link
- **Sales Page tab**: white card preview with H1, pain intro, 6 bullets, instructor bio, price block + Enroll CTA, "Copy Full Page HTML" button
- **Sticky bottom bar**: asset count + Share button → toast "Link copied! ✓"

### Launch Modal
Centered, dark overlay: title, 4 platform tiles (Gumroad/Kajabi/Teachable/Download Files) with hover teal border, email input, social proof line, large teal "Launch My Course" button, fine print.

## Component breakdown

- `src/main.tsx` — Router setup
- `src/pages/Landing.tsx`, `Generate.tsx`, `CourseOutput.tsx`
- `src/components/` — `Navbar`, `BrowserMockup`, `ValueCard`, `FileChip`, `SegmentedControl`, `GenerationLoader`, `LaunchModal`, `Toast`, plus one component per tab (`CurriculumTab`, `ScriptsTab`, `WorkbookTab`, `EmailDripTab`, `SalesPageTab`)
- `src/data/course.ts` — all mock content (modules, lessons, script text, emails, sales copy) in one place

## State

- Local `useState` only. Active tab + selected lesson lifted to `CourseOutput`. Modal/toast state local. No persistence, no backend.

## Out of scope

No real file upload, no real AI, no auth, no payments, no backend — this is a polished interactive demo of the described flow.
