'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Models', href: '/models' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Compare', href: '/compare' },
  { label: 'Methodology', href: '/methodology' }
];

export function MainHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-900/70 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-semibold text-base text-slate-50 sm:text-lg">
          LLM 비교 연구소
        </Link>
        <nav className="hidden gap-1 rounded-full border border-slate-800 bg-slate-900/70 px-2 py-1 text-sm text-slate-400 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-full px-3 py-1 transition-colors hover:text-white',
                pathname === item.href && 'bg-slate-800 text-white shadow-subtle'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">LLM Compare Lab</span>
        </div>
      </div>
    </header>
  );
}
