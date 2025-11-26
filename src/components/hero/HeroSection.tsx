import { ArrowDown, Sparkles } from 'lucide-react';
import ModelCard from './ModelCard';
import { models } from '../../data/models';

export default function HeroSection() {
  const scrollToNext = () => {
    const benchmarkSection = document.getElementById('benchmark');
    if (benchmarkSection) {
      benchmarkSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-blue/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-neon-green/15 via-transparent to-transparent blur-3xl" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/50 border border-neon-blue/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-neon-blue" />
            <span className="text-sm text-gray-300">2025년 11월 최신 업데이트</span>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">차세대 AI 모델</span>
            <br />
            <span className="gradient-text">완벽 비교 가이드</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            GPT-5.1, Gemini 3.0, Claude Opus 4.5, Grok 3 —
            <br className="hidden md:block" />
            최신 LLM 모델들의 성능, 특징, 가격을 한눈에 비교하세요.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: '4', label: '비교 모델' },
            { value: '8+', label: '벤치마크' },
            { value: '5', label: '사용 사례' },
            { value: '15+', label: '응답 비교' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`glass-card p-6 text-center animate-slide-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Model Cards */}
        <div className="mb-16">
          <h2 className="text-center text-xl font-semibold text-white mb-8">
            비교 대상 모델
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {models.map((model, index) => (
              <ModelCard key={model.id} model={model} index={index} />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <button
            onClick={scrollToNext}
            className="p-3 rounded-full bg-navy-800/50 border border-white/10 text-gray-400 hover:text-white hover:border-neon-blue/50 transition-all"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

