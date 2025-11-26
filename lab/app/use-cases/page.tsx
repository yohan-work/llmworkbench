import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const useCases = [
  {
    slug: 'coding',
    title: '코딩 & 에이전트 자동화',
    description: '대규모 코드 리팩터링, 릴리즈 에이전트, 개발 파이프라인 자동화.',
    models: ['GPT-5.1', 'Claude Opus 4.5']
  },
  {
    slug: 'reasoning',
    title: '깊은 추론 & 정책 분석',
    description: '복수 이해관계자, 정책 제안, 전략 기획 문서.',
    models: ['Gemini 3', 'Claude Opus 4.5']
  },
  {
    slug: 'creative',
    title: '창의 글쓰기 & 스토리텔링',
    description: '브랜드 카피, 대화 스크립트, 감성 서사.',
    models: ['Grok 4.1', 'GPT-5.1']
  },
  {
    slug: 'translation',
    title: '번역 / 로컬라이징',
    description: '게임 튜토리얼, 기술 문서, 다국어 QA.',
    models: ['GPT-5.1', 'Claude Opus 4.5']
  },
  {
    slug: 'multimodal',
    title: '멀티모달 리서치',
    description: '이미지+텍스트 결합 분석, 리서치 보조.',
    models: ['Gemini 3', 'Claude Opus 4.5']
  },
  {
    slug: 'general',
    title: '일반 협업 & 거버넌스',
    description: '체크리스트, 거버넌스 플레이북, 조직 규정.',
    models: ['GPT-5.1', 'Gemini 3']
  }
];

export default function UseCasesPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Use Cases</p>
        <h1 className="text-3xl font-semibold text-white">업무 상황별 추천 모델</h1>
        <p className="text-sm text-slate-400">카테고리를 선택해 프롬프트와 모델 응답을 자세히 비교하세요.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {useCases.map((useCase) => (
          <Card key={useCase.slug} className="border-slate-900/70 bg-slate-950/70 transition hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{useCase.title}</CardTitle>
              <CardDescription>{useCase.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {useCase.models.map((model) => (
                  <Badge key={model} variant="outline">
                    {model}
                  </Badge>
                ))}
              </div>
              <Link href={`/use-cases/${useCase.slug}`} className="text-sm text-indigo-300">
                상세 보기 →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
