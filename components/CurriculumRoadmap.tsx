import { modules } from '@/data/modules';

export function CurriculumRoadmap() {
  return (
    <section
      id="curriculum"
      className="relative mx-auto max-w-6xl space-y-12 px-6 py-20"
    >
      <div className="absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-40" />
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-sakura-200">
            Curriculum architecture
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Pathways engineered for scholarship milestones
          </h2>
          <p className="text-slate-300">
            Each track fuses language acquisition science with MEXT-specific
            scenarios. Sprint-based modules combine async playbooks with live
            immersion labs and community mentorship.
          </p>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300">
          Updated for 2025 intake · New lab etiquette drills
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {modules.map((module) => (
          <article key={module.id} className="glass-card p-6">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                {module.level}
              </span>
              <span className="text-xs uppercase tracking-wide text-slate-400">
                {module.duration}
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl text-white">
              {module.title}
            </h3>
            <p className="mt-2 text-sm text-slate-300">{module.subtitle}</p>
            <p className="mt-4 text-sm text-slate-400">{module.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {module.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sakura-400" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-sakura-200 transition hover:text-sakura-100">
              View syllabus outline
              <span aria-hidden>→</span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
