export type Lesson = {
  id: string;
  number: number;
  title: string;
  minutes: number;
  hasWorksheet?: boolean;
  outcome: string;
  concepts: string[];
};

export type Module = {
  id: string;
  number: number;
  title: string;
  lessons: Lesson[];
};

export const modules: Module[] = [
  {
    id: "m1",
    number: 1,
    title: "The Positioning Shift",
    lessons: [
      {
        id: "l1",
        number: 1,
        title: "Why You're Undercharging (And Why It's Not Your Fault)",
        minutes: 12,
        outcome: "Understand the structural reasons designers underprice their work, and why willpower alone won't fix it.",
        concepts: [
          "The 3 pricing myths every freelancer inherits",
          "Why hourly billing caps your income mathematically",
          "How to spot a client who will pay 3× your current rate",
        ],
      },
      {
        id: "l2",
        number: 2,
        title: "The Specialist Premium: How Niching Triples Rates",
        minutes: 18,
        outcome: "Choose a specialization that buyers will pay a premium for — without losing the work you love.",
        concepts: [
          "The Specialist Equation: scope × scarcity × outcome",
          "5 viable niches for designers in 2026",
          "Repositioning your portfolio in 48 hours",
        ],
      },
      {
        id: "l3",
        number: 3,
        title: "Positioning Audit: Where You Stand Today",
        minutes: 8,
        hasWorksheet: true,
        outcome: "Score your current positioning across 7 dimensions and identify the single biggest leak.",
        concepts: ["The 7-axis positioning scorecard", "Diagnostic questions for your last 5 clients", "Your one-page repositioning brief"],
      },
    ],
  },
  { id: "m2", number: 2, title: "Building Your Rate Architecture", lessons: makeLessons("m2", 4, 22) },
  { id: "m3", number: 3, title: "The Portfolio That Commands Premium", lessons: makeLessons("m3", 3, 18) },
  { id: "m4", number: 4, title: "Outreach That Converts", lessons: makeLessons("m4", 3, 16) },
  { id: "m5", number: 5, title: "The Sales Call Playbook", lessons: makeLessons("m5", 3, 20) },
  { id: "m6", number: 6, title: "Launch and Scale", lessons: makeLessons("m6", 3, 14) },
];

function makeLessons(prefix: string, count: number, avg: number): Lesson[] {
  return Array.from({ length: count }, (_, i) => ({
    id: `${prefix}-l${i + 1}`,
    number: i + 1,
    title: `Lesson ${i + 1}`,
    minutes: avg,
    outcome: "Apply this lesson's framework to your own business.",
    concepts: ["Core framework", "Worked example", "Implementation checklist"],
  }));
}

export const scriptText = `Welcome to Module 1. I want to start with a confession — when I first started freelancing, I charged $25 an hour for work that should have been $150. And the worst part? I thought I was being reasonable.

I told myself I was "still learning." I told myself nobody would pay more. I told myself the market just wasn't there. None of that was true.

What was true is that I had inherited a set of beliefs about what designers are allowed to charge, and I had never once questioned them. In the next 12 minutes I'm going to dismantle three of those beliefs — the ones I see derail almost every freelancer I coach.

The first one is the myth that your rate has to match your years of experience. It doesn't. Rates are set by the size of the problem you solve, not the hours you've logged. The second is that raising rates costs you clients. In my data, the opposite happens: the right clients stay, the wrong ones leave, and you make more with less work. The third is the worst — the idea that this stuff is a personality trait. It isn't. It's a system. And by the end of this course, you'll own it.`;

export const emails = [
  { day: 1, subject: "Welcome! Here's how to get the most out of this course", preview: "Two quick wins to start with today, plus your downloadable roadmap so you know exactly what to expect." },
  { day: 3, subject: "Your first quick win: the positioning audit", preview: "Run the 7-axis audit from Module 1 — it takes 20 minutes and almost always uncovers one easy rate-raising lever." },
  { day: 5, subject: "Real talk — here's what's holding designers back", preview: "I pulled patterns from 1,800 students. Four blockers come up over and over. Here's how to spot which one is yours." },
  { day: 7, subject: "Halfway there. Here's what top students did differently", preview: "We studied the students who 2×'d their rates within 60 days. Three small behaviors separated them from everyone else." },
  { day: 10, subject: "The outreach template that booked me 3 clients in a week", preview: "Copy-paste ready. Includes the subject line, the opener, and the follow-up cadence that converted 38% of replies." },
  { day: 14, subject: "You did it. What comes next?", preview: "You've finished the course. Here are three paths forward depending on whether you want to scale, niche down, or productize." },
];

export const salesCopy = {
  h1: "Finally Raise Your Rates — Without Losing the Clients You Love",
  intro:
    "You're a great designer. You deliver work that drives real results. So why does every invoice still feel like a negotiation you're losing? The problem isn't your skill — it's your pricing architecture. And the good news is, that's the easiest thing to fix.",
  learn: [
    "Diagnose the 3 hidden pricing myths sabotaging your rates",
    "Design a niche position buyers pay a premium for",
    "Rebuild your portfolio so it sells before the first call",
    "Run sales calls that close at 2× without feeling salesy",
    "Send outreach that books 3 qualified leads per week",
    "Productize and scale past the freelancer income ceiling",
  ],
  instructorBio: "Built by a designer who went from $25/hr to $15K retainers in 14 months. Now coaches 1,800+ creators on the same playbook.",
  price: "$297",
};
