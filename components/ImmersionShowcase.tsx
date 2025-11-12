const immersionMoves = [
  {
    title: 'Lab Shadowing Pods',
    description:
      'Weekly co-analysis sessions with senpai researchers who translate lab protocols and decode tacit expectations.',
    metric: '78%',
    metricLabel: 'report improved advisor feedback loops'
  },
  {
    title: 'City Exploration Missions',
    description:
      'Geo-tagged scavenger hunts that pair cultural discovery with targeted vocabulary anchored to your discipline.',
    metric: '42 routes',
    metricLabel: 'Tokyo, Osaka, Kyoto, Sapporo'
  },
  {
    title: 'Media Ecosystem Builder',
    description:
      'Automated RSS feeds, podcasts, and newsletters curated for your niche—plus guided note templates.',
    metric: '90 mins',
    metricLabel: 'weekly immersion cadence'
  }
];

export function ImmersionShowcase() {
  return (
    <section
      id="immersion"
      className="relative mx-auto max-w-6xl space-y-16 overflow-hidden px-6 py-20"
    >
      <div className="absolute inset-x-0 top-1/2 -z-[1] h-[60%] -translate-y-1/2 bg-[radial-gradient(circle_at_center,_rgba(249,_66,_124,_0.18),_transparent_60%)]" />
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-sakura-200">
            Immersion systems
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Build a Japanese life that powers your research
          </h2>
          <p className="text-slate-300">
            Your immersion architect co-creates a weekly blueprint blending
            academic demands with rhythm-based language play. Every ritual is
            benchmarked, so you always know the return on your practice.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-card p-5">
              <p className="font-display text-3xl text-white">+2.1x</p>
              <p className="mt-2 text-sm text-slate-300">
                Listening comprehension acceleration after 6-week immersion
                ramp.
              </p>
            </div>
            <div className="glass-card p-5">
              <p className="font-display text-3xl text-white">92%</p>
              <p className="mt-2 text-sm text-slate-300">
                Scholars reporting increased confidence in lab discussions.
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          {immersionMoves.map((move) => (
            <article
              key={move.title}
              className="gradient-border rounded-3xl bg-slate-900/70 p-6"
            >
              <div className="rounded-full border border-sakura-400/30 bg-sakura-500/10 px-3 py-1 text-xs uppercase tracking-wide text-sakura-100">
                Immersion Ritual
              </div>
              <h3 className="mt-4 font-display text-2xl text-white">
                {move.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{move.description}</p>
              <p className="mt-4 text-xs uppercase tracking-wide text-slate-400">
                {move.metric}
              </p>
              <p className="text-sm text-slate-200">{move.metricLabel}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
