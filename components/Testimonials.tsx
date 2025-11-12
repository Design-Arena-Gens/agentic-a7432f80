const testimonials = [
  {
    name: 'Ayana Chen',
    role: 'PhD in Robotics · University of Tokyo',
    quote:
      'MEXT Lab let me defend my research plan in Japanese after 8 weeks. The immersion missions matched my advisor’s expectations exactly.',
    avatar: 'AC'
  },
  {
    name: 'Diego Nakamura',
    role: 'Masters in Civil Engineering · Tohoku University',
    quote:
      'The lab communication drills gave me language for unexpected safety inspections. I now run bilingual toolbox talks confidently.',
    avatar: 'DN'
  },
  {
    name: 'Sara López',
    role: 'Undergraduate Scholar · Osaka University',
    quote:
      'I never lose momentum because the planner syncs readings, kanji, and club activities. The community pods are my anchor.',
    avatar: 'SL'
  }
];

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-[120%] -translate-y-1/2 bg-[radial-gradient(circle,_rgba(255,_255,_255,_0.1),_transparent_55%)]" />
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-sakura-200">
          Scholar voices
        </p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          Built with and for MEXT community leaders
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="glass-card flex h-full flex-col gap-6 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sakura-400/40 bg-sakura-500/20 font-display text-lg text-sakura-100">
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-slate-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="flex-1 text-sm text-slate-200">{testimonial.quote}</p>
            <div className="text-xs uppercase tracking-wide text-slate-400">
              Verified MEXT Scholar
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
