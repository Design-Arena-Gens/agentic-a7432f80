export function CallToAction() {
  return (
    <section
      id="call-to-action"
      className="mx-auto max-w-5xl px-6 pb-24 pt-10 md:pt-16"
    >
      <div className="gradient-border rounded-[2.5rem] bg-slate-950/80 p-1">
        <div className="rounded-[2.4rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 text-center shadow-glow">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
            Next cohort launches Jan 12
          </p>
          <h2 className="mt-6 font-display text-3xl text-white sm:text-4xl">
            Secure your MEXT Language Strategy Session
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-300">
            Receive a diagnostic review, curated study blueprint, and access to
            the asynchronous orientation vault. Our team reaches out within 24
            hours to tailor your onboarding.
          </p>
          <form className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-[1fr_1fr_auto]">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sakura-400 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sakura-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-sakura-500 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sakura-400"
            >
              Reserve a seat
            </button>
          </form>
          <p className="mt-4 text-xs text-slate-500">
            No spam. Your details stay within the MEXT Lab admissions team.
          </p>
        </div>
      </div>
    </section>
  );
}
