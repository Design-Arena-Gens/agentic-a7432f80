import Link from 'next/link';

const navigation = [
  { name: 'Curriculum', href: '#curriculum' },
  { name: 'Milestones', href: '#milestones' },
  { name: 'Immersion', href: '#immersion' },
  { name: 'Resources', href: '#resources' },
  { name: 'Planner', href: '#planner' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sakura-500/20 text-sakura-200">
            日
          </span>
          <div>
            <p className="font-display text-lg font-semibold tracking-tight">
              MEXT Lab
            </p>
            <p className="text-xs text-slate-400">
              Japanese Learning Observatory
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="transition hover:text-sakura-200"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <a
          href="#call-to-action"
          className="hidden rounded-full border border-sakura-500/40 bg-sakura-500/10 px-4 py-2 text-sm font-semibold text-sakura-100 shadow-glow ring-1 ring-sakura-400/40 transition hover:-translate-y-0.5 hover:bg-sakura-500/20 md:inline-flex"
        >
          Join the Cohort
        </a>
      </div>
    </header>
  );
}
