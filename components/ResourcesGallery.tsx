import { resourceCategories } from '@/data/resources';

export function ResourcesGallery() {
  return (
    <section
      id="resources"
      className="relative mx-auto max-w-6xl space-y-12 px-6 py-20"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-sakura-200">
            Resource vault
          </p>
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Self-paced assets for every stage of your scholarship
          </h2>
          <p className="text-slate-300">
            Access community-vetted guides, templates, and playlists. New drops
            ship every Friday based on cohort feedback loops.
          </p>
        </div>
        <a
          href="#call-to-action"
          className="inline-flex items-center gap-2 rounded-full border border-sakura-400/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sakura-100 transition hover:border-sakura-300 hover:text-sakura-50"
        >
          Unlock member portal
          <span aria-hidden>↗</span>
        </a>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {resourceCategories.map((category) => (
          <article key={category.id} className="glass-card flex flex-col p-6">
            <div className="text-xs uppercase tracking-wide text-slate-400">
              {category.tagline}
            </div>
            <h3 className="mt-3 font-display text-2xl text-white">
              {category.title}
            </h3>
            <ul className="mt-6 flex flex-1 flex-col gap-4 text-sm text-slate-200">
              {category.resources.map((resource) => (
                <li key={resource.name} className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wide text-sakura-100">
                      {resource.type}
                    </span>
                    <a
                      href={resource.link}
                      className="font-semibold text-white transition hover:text-sakura-100"
                    >
                      {resource.name}
                    </a>
                  </div>
                  <p className="text-xs text-slate-400">{resource.description}</p>
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-sakura-400/40 hover:text-sakura-100">
              Preview resources
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
