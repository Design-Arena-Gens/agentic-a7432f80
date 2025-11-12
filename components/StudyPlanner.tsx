const plannerSteps = [
  {
    title: 'Diagnostics',
    description:
      'We benchmark JLPT skills, academic communication demands, and immersion habits with a 45-minute async assessment.',
    deliverable: 'Personalized Fluency Dashboard'
  },
  {
    title: 'Design Sprint',
    description:
      'Plan your 12-week roadmap with lab availability, course load, and research outputs in mind. Includes weekly guardrails.',
    deliverable: 'Scholarship-aligned weekly sprints'
  },
  {
    title: 'Execution Rituals',
    description:
      'Daily micro-habits with automation for review, immersion, and reflection. Track momentum with accountability pods.',
    deliverable: 'Automated habit tracker & pod access'
  }
];

export function StudyPlanner() {
  return (
    <section
      id="planner"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20"
    >
      <div className="absolute inset-0 -z-10 bg-pattern-kikko opacity-60" />
      <div className="glass-card relative mx-auto max-w-4xl space-y-12 p-10">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-sakura-200">
            Study planner
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Your weekly rhythm, architected for MEXT deliverables
          </h2>
          <p className="text-slate-300">
            Stop juggling random apps. The planner centralizes your tasks,
            check-ins, and reflection loops, while syncing with labs and
            advisor meetings.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {plannerSteps.map((step, index) => (
            <article key={step.title} className="space-y-4 border-l border-white/10 pl-4">
              <div className="text-xs uppercase tracking-wide text-slate-400">
                Step {index + 1}
              </div>
              <h3 className="font-display text-xl text-white">{step.title}</h3>
              <p className="text-sm text-slate-300">{step.description}</p>
              <div className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-sakura-100">
                {step.deliverable}
              </div>
            </article>
          ))}
        </div>
        <div className="rounded-2xl border border-sakura-400/30 bg-sakura-500/10 p-6 text-center text-sm text-slate-100">
          Sync with Google Calendar, Notion, or Obsidian in one click. Weekly
          reviews surface what to amplify and where to tighten focus.
        </div>
      </div>
    </section>
  );
}
