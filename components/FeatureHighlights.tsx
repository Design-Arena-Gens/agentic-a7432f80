const features = [
  {
    title: 'Scholarship-Calibrated Curriculum',
    description:
      'Modules map to JLPT outcomes, research presentations, and daily campus life. Every lesson references real MEXT deliverables.',
    icon: '🎯'
  },
  {
    title: 'Immersion Coaching Pods',
    description:
      'Stay accountable with six-person pods led by alumni mentors. Weekly reviews keep your plan relevant to the semester pulse.',
    icon: '🧭'
  },
  {
    title: 'Bilingual Resource Factory',
    description:
      'Templates, scripts, and note systems update weekly. Focus on application instead of starting from scratch.',
    icon: '🗂️'
  },
  {
    title: 'Data-Driven Feedback',
    description:
      'Speech analysis, fluency tracking, and habit dashboards visualize momentum. Spot gaps before they impact your cohort standing.',
    icon: '📊'
  }
];

export function FeatureHighlights() {
  return (
    <section className="mx-auto max-w-6xl space-y-12 px-6 py-20">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-sakura-200">
          Why MEXT lab
        </p>
        <h2 className="font-display text-3xl text-white sm:text-4xl">
          Designed with MEXT alumni, faculty, and language engineers
        </h2>
        <p className="text-slate-300">
          Every feature exists because scholars asked for it. The platform
          evolves alongside your needs, delivering the exact tools required to
          thrive academically and socially in Japan.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="glass-card flex flex-col gap-4 p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sakura-500/20 text-xl">
              <span aria-hidden>{feature.icon}</span>
            </div>
            <h3 className="font-display text-2xl text-white">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
