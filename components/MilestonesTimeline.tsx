import { milestones } from '@/data/milestones';

export function MilestonesTimeline() {
  return (
    <section
      id="milestones"
      className="relative mx-auto max-w-6xl space-y-16 px-6 py-20"
    >
      <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-white/5 via-slate-950/40 to-slate-900/60 blur-3xl" />
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-sakura-200">
          Journey map
        </p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          See every milestone before you land in Narita
        </h2>
        <p className="mt-4 text-slate-300">
          The timeline keeps your MEXT objectives, labs, and language gains in
          lockstep. Each phase pairs deliverables with rituals that sustain
          progress.
        </p>
      </div>
      <div className="relative border-l border-white/10 pl-8 before:absolute before:-left-[9px] before:top-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-sakura-400/60 before:via-transparent before:to-transparent sm:mx-12">
        {milestones.map((milestone, index) => (
          <div key={milestone.title} className="relative mb-12 pl-4">
            <div className="absolute -left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-sakura-300/40 bg-slate-900">
              <span className="h-2 w-2 rounded-full bg-sakura-200" />
            </div>
            <div className="glass-card space-y-4 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-wide text-slate-400">
                <span>{milestone.phase}</span>
                <span>{milestone.timeframe}</span>
              </div>
              <h3 className="font-display text-2xl text-white">
                {milestone.title}
              </h3>
              <p className="text-sm text-slate-300">{milestone.description}</p>
              <ul className="grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                {milestone.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/5 bg-slate-900/60 px-3 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {index !== milestones.length - 1 && (
              <div className="absolute -left-[33px] top-full h-12 w-[2px] bg-gradient-to-b from-sakura-300/30 via-transparent to-transparent" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
