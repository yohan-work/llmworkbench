import { Github, Twitter, Zap } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-green to-neon-blue flex items-center justify-center">
                <Zap className="w-6 h-6 text-navy-900" />
              </div>
              <span className="text-xl font-bold">
                <span className="gradient-text">LLM</span>
                <span className="text-gray-300">Workbench</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              2025년 최신 LLM 모델들의 성능을 비교 분석하는 종합 가이드입니다.
              GPT-5.1, Gemini 3.0, Claude Opus 4.5, Grok 3의 벤치마크 점수,
              응답 품질, 가격 정보를 한눈에 비교해보세요.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              {[
                { href: '#benchmark', label: '벤치마크 비교' },
                { href: '#comparison', label: '응답 비교' },
                { href: '#guide', label: '추천 가이드' },
                { href: '#pricing', label: '가격 정보' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-blue text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">공식 사이트</h3>
            <ul className="space-y-2">
              {[
                { href: 'https://openai.com', label: 'OpenAI (GPT)' },
                { href: 'https://deepmind.google', label: 'Google (Gemini)' },
                { href: 'https://anthropic.com', label: 'Anthropic (Claude)' },
                { href: 'https://x.ai', label: 'xAI (Grok)' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-neon-blue text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} LLM Workbench. 교육 및 정보 제공 목적으로 제작되었습니다.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

