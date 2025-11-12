import Link from 'next/link';

export function Hero() {
  const stats = [
    { label: 'JLPT breakthroughs', value: '820+' },
    { label: 'Active scholar pods', value: '37' },
    { label: 'Weekly live labs', value: '12' }
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-20 -translate-x-1/2 rounded-full bg-sakura-500/30 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6">
        <div className="flex flex-col gap-10 text-center md:flex-row md:items-center md:text-left">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-slate-200">
              <span className="h-2 w-2 rounded-full bg-sakura-300" />
              MEXT 2025 Cohort enrollment now open
            </div>
            <h1 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
              Learn Japanese with precision and purpose for your MEXT journey.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              MEXT Lab curates a structured language ecosystem built for
              scholars balancing research, labs, and cultural integration.
              Craft your bilingual life in Japan through immersive curriculum,
              live labs, and community coaching.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="#call-to-action"
                className="inline-flex items-center justify-center rounded-full bg-sakura-500 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-sakura-400"
              >
                Claim your strategy session
              </Link>
              <Link
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sakura-400 hover:text-sakura-100"
              >
                Explore curriculum blueprints
              </Link>
            </div>
          </div>
          <div className="glass-card relative mx-auto flex max-w-sm flex-1 flex-col gap-3 rounded-3xl p-6">
            <div className="absolute -top-16 right-8 hidden h-24 w-24 animate-float rounded-full bg-gradient-to-br from-sakura-300/30 via-slate-100/10 to-transparent blur-2xl md:block" />
            <div className="flex items-center justify-between text-xs text-slate-300 uppercase tracking-wide">
              <span>Weekly cadence</span>
              <span>Immersion impact</span>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: 'Listening Reconstruction Lab',
                  result: '+32% comprehension',
                  focus: 'Campus announcements breakdown'
                },
                {
                  title: 'Research Pitch Studio',
                  result: 'Ready in 3 weeks',
                  focus: 'Academic intro scripts & feedback loops'
                },
                {
                  title: 'Community Mentorship',
                  result: 'Cohort pods of 6',
                  focus: 'Accountability & peer review rituals'
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="mt-2 text-xs text-sakura-200">
                    {item.result}
                  </div>
                  <div className="mt-3 text-xs text-slate-400">{item.focus}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400">
              Built for scholars transitioning from pre-departure to lab
              integration.
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-3xl text-white">{stat.value}</p>
              <p className="mt-1 text-sm uppercase tracking-wide text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
