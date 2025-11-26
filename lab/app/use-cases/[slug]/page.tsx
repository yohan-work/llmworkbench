import { notFound } from 'next/navigation';
import { PromptCompare } from '@/components/prompt/PromptCompare';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PromptCategory,
  getPromptsByCategory,
  getAnswersForPrompt,
  promptCategoryLabels
} from '@/data/llmResults';

const useCaseMeta: Record<PromptCategory, { title: string; description: string; recommended: string[] }> = {
  coding: {
    title: '코딩 & 에이전트 자동화',
    description: '대규모 리팩터링, 에이전트 기반 CI/CD 자동화에 최적화된 모델 비교.',
    recommended: ['GPT-5.1', 'Claude Opus 4.5']
  },
  reasoning: {
    title: '깊은 추론 & 전략',
    description: '정책 제안, 시나리오 분석 등 고난도 추론 프롬프트.',
    recommended: ['Gemini 3', 'Claude Opus 4.5']
  },
  creative: {
    title: '창의 글쓰기 & 스토리텔링',
    description: '감성 서사, 브랜드 메시지를 위한 모델 비교.',
    recommended: ['Grok 4.1', 'GPT-5.1']
  },
  translation: {
    title: '번역 & 로컬라이징',
    description: '게임/기술 문서를 자연스럽고 정확하게 옮기는 작업.',
    recommended: ['GPT-5.1', 'Claude Opus 4.5']
  },
  multimodal: {
    title: '멀티모달 리서치',
    description: '이미지+텍스트 복합 입력을 해석하는 시나리오.',
    recommended: ['Gemini 3', 'Claude Opus 4.5']
  },
  general: {
    title: '일반 협업 & 거버넌스',
    description: '체크리스트, 가이드, 거버넌스 문서 비교.',
    recommended: ['GPT-5.1', 'Gemini 3']
  }
};

interface UseCasePageProps {
  params: { slug: string };
}

export default function UseCaseDetailPage({ params }: UseCasePageProps) {
  const category = params.slug as PromptCategory;
  const meta = useCaseMeta[category];
  if (!meta) {
    notFound();
  }

  const prompts = getPromptsByCategory(category);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-900/80 bg-slate-950/70 p-8 shadow-subtle">
        <p className="text-xs uppercase tracking-[0.4em] text-indigo-200">Use Case</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{meta.title}</h1>
        <p className="mt-4 text-base text-slate-300">{meta.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {meta.recommended.map((model) => (
            <Badge key={model}>{model}</Badge>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Prompts</p>
          <h2 className="text-2xl font-semibold text-white">
            {promptCategoryLabels[category]} 카테고리 프롬프트
          </h2>
        </div>
        <div className="space-y-8">
          {prompts.map((prompt) => (
            <PromptCompare key={prompt.id} prompt={prompt} answers={getAnswersForPrompt(prompt.id)} />
          ))}
        </div>
      </section>
    </div>
  );
}
