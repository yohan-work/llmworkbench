import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { MainHeader } from '@/components/layout/MainHeader';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'LLM 비교 연구소 | LLM Compare Lab',
  description:
    '최신 LLM 모델들의 강점과 약점을 데이터 기반으로 비교하는 대시보드',
  metadataBase: new URL('https://llm-compare-lab.example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-sans', inter.variable)}>
        <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          <MainHeader />
          <main className="flex-1 pb-16 pt-10">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
