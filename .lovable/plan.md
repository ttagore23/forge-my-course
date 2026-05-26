## Rebrand to "Distill" + expand landing page

Apply the exact edits provided across three files.

### File 1: `src/routes/__root.tsx`
Update `head()` meta: title → "Distill — Turn Anything Into a Course", og:title and twitter:title to match, and description/og:description/twitter:description to the new long-form copy.

### File 2: `src/routes/index.tsx`
1. Add `useState` import; add `ChevronDown` to lucide imports.
2. Replace `mockModules` with the 6-entry version that includes a `preview` field per module.
3. Add `expandedModule` and `waitlistDone` state in `Landing`.
4. Hero H1 → "Distill Your Expertise Into a Course. In 60 Seconds."
5. Hero subhead → new "Drop your YouTube videos…" copy.
6. Add third "Try an example →" button in hero CTA row (links to `/course-output`).
7. URL bar in browser mockup → `distill.app/c/rate-raising-playbook`.
8. Make mockup module rows interactive (button toggles `expandedModule`, shows ChevronDown that rotates, reveals `m.preview` panel below when expanded).
9. New Testimonials section (3 cards: Maya R., James T., Sofia L.).
10. New Revenue Calculator section + `RevenueCalculator` component (3 range sliders for price/list size/conv rate, computes `price * listSize * convRate/100`, shows first-launch and 3–5× year-1 projection).
11. New Pricing section (Free / Creator [highlighted "Most popular"] / Pro tiers).
12. Waitlist form: on submit set `waitlistDone=true`; when true, replace form with "You're in!" confirmation + Share on X link.
13. Footer copyright → "© 2026 Distill. Built for creators."

### Technical notes
- All new sections use existing design tokens (`#0F172A`, `#1E293B`, `#14B8A6`, slate-700 borders, rounded-xl cards, teal hover glow) consistent with current landing.
- `RevenueCalculator` defined as module-level function below `Landing`, uses native `<input type="range">` with `accent-[#14B8A6]`.
- "Try an example" button uses the same ghost button styling as "See an example" and navigates to `/course-output` via `<Link>`.
- Module preview panel uses subtle slate background and small fade; ChevronDown rotates 180° via conditional class when expanded.

### File 3: `src/routes/course-output.tsx`
1. Sticky bar text: "CourseForge generated 23 assets" → "Distill generated 23 assets".
2. Insert a "Share your course" section directly above the fixed sticky bar with three actions: Copy link (uses existing `showToast`, copies `https://distill.app/c/rate-raising-playbook`), Share on X (prefilled tweet), Share on LinkedIn. `Copy` icon already imported.

No backend, routing, or data-model changes.
