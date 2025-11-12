export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-white">MEXT Lab</p>
          <p className="text-xs text-slate-500">
            Language innovation studio for global scholars in Japan.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <a href="#curriculum" className="transition hover:text-sakura-100">
            Curriculum
          </a>
          <a href="#immersion" className="transition hover:text-sakura-100">
            Immersion
          </a>
          <a href="#resources" className="transition hover:text-sakura-100">
            Resources
          </a>
          <a href="#planner" className="transition hover:text-sakura-100">
            Planner
          </a>
        </div>
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} MEXT Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
