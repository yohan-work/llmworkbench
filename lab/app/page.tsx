import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  llmDataset,
  promptCategoryLabels,
  buildCategoryMatrix,
  getCategories
} from '@/data/llmResults';

const recommendationCards = [
  {
    title: '복잡한 코딩 & 에이전트 자동화',
    description: '멀티모듈 리팩터링이나 릴리즈 파이프라인 자동화엔 두 모델이 가장 안정적입니다.',
    models: ['GPT-5.1', 'Claude Opus 4.5'],
    href: '/use-cases/coding'
  },
  {
    title: '감성 섞인 창의 글쓰기',
    description: '공감 각본, 브랜드 카피 등 감성 서사는 Grok이 돋보입니다.',
    models: ['Grok 4.1'],
    href: '/use-cases/creative'
  },
  {
    title: '멀티모달 리서치 & Deep Reasoning',
    description: '자료가 많고 분석이 필요한 리서치는 Gemini와 Claude 조합이 강력합니다.',
    models: ['Gemini 3', 'Claude Opus 4.5'],
    href: '/use-cases/multimodal'
  }
];

const matrix = buildCategoryMatrix();
const categories = getCategories();

const levelByScore = (score: number) => {
  if (score >= 4.5) return { label: 'Strong', variant: 'success' } as const;
  if (score >= 3.7) return { label: 'Good', variant: 'default' } as const;
  return { label: 'OK', variant: 'warning' } as const;
};

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-900/80 bg-gradient-to-br from-slate-950 via-indigo-950/40 to-slate-900 p-10 shadow-subtle">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">LLM Compare Lab</p>
        <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          최신 LLM 모델, 어떤 작업에 어떤 모델이 좋을까?
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          프롬프트별 응답 데이터와 점수를 기반으로 Gemini 3, GPT-5.1, Grok 4.1, Claude Opus 4.5의 강점/약점을 비교합니다.
          필요한 작업 유형에 맞는 모델을 빠르게 찾아보세요.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/compare">모델 바로 비교하기</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/methodology">평가 방법 살펴보기</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Matrix</p>
            <h2 className="text-2xl font-semibold text-white">모델 vs 작업 유형 매트릭스</h2>
          </div>
          <p className="max-w-sm text-sm text-slate-400">
            Reasoning/Structure 점수 평균을 기반으로 Strong / Good / OK 레벨을 표시합니다.
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="sticky left-0 bg-slate-950/90 p-4 text-left text-sm font-medium text-slate-400">
                  모델
                </th>
                {categories.map((category) => (
                  <th key={category} className="p-4 text-sm font-medium text-slate-400">
                    {promptCategoryLabels[category]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {llmDataset.models.map((model) => (
                <tr key={model.id} className="border-t border-slate-900/80">
                  <td className="sticky left-0 bg-slate-950/70 p-4 text-sm font-semibold text-white">
                    {model.name}
                  </td>
                  {categories.map((category) => {
                    const entry = matrix.find(
                      (item) => item.modelId === model.id && item.category === category
                    );
                    if (!entry) return <td key={category} className="p-4" />;
                    const level = levelByScore(entry.average);
                    return (
                      <td key={category} className="p-4">
                        <Badge variant={level.variant as never}>{level.label}</Badge>
                        <p className="mt-2 text-xs text-slate-500">평균 {entry.average.toFixed(1)}</p>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">추천</p>
          <h2 className="text-2xl font-semibold text-white">이런 질문엔 이 모델</h2>
          <p className="text-sm text-slate-400">카드를 클릭하면 상세 Use Case로 이동합니다.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recommendationCards.map((card) => (
            <Card key={card.title} className="flex flex-col justify-between border-slate-900/70 bg-slate-950/70">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {card.models.map((model) => (
                    <Badge key={model}>{model}</Badge>
                  ))}
                </div>
                <Button asChild variant="ghost" className="justify-start px-0 text-indigo-300">
                  <Link href={card.href}>관련 Use Case 보기 →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
