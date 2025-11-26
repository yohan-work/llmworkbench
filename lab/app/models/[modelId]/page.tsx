import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { LlmModelId } from '@/data/llmResults';
import {
  getModelById,
  getAnswersByModel,
  getCategories,
  getPromptsByCategory,
  promptCategoryLabels,
  summarizeScores
} from '@/data/llmResults';
import { ModelScoreRadar } from '@/components/model/ModelScoreRadar';

interface ModelPageProps {
  params: { modelId: string };
}

export default function ModelPage({ params }: ModelPageProps) {
  const model = getModelById(params.modelId as LlmModelId);
  if (!model) {
    notFound();
  }

  const answers = getAnswersByModel(model.id);
  const radarScores = summarizeScores(model.id);
  const categoryStats = getCategories().map((category) => {
    const promptIds = getPromptsByCategory(category).map((prompt) => prompt.id);
    const subset = answers.filter((answer) => promptIds.includes(answer.promptId));
    const total = subset.length || 1;
    const reasoning = subset.reduce((acc, curr) => acc + curr.scoreReasoning, 0) / total;
    const structure = subset.reduce((acc, curr) => acc + curr.scoreStructure, 0) / total;
    return {
      category,
      count: subset.length,
      average: +((reasoning + structure) / 2).toFixed(2)
    };
  });

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-900 bg-slate-950/70 p-8 shadow-subtle">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline">{model.provider}</Badge>
          <h1 className="text-3xl font-semibold text-white">{model.name}</h1>
        </div>
        <p className="mt-4 text-base text-slate-300">{model.description}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>강점</CardTitle>
              <CardDescription>이 모델이 특히 잘하는 영역</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-slate-100">
                {model.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>주의할 점</CardTitle>
              <CardDescription>답변을 사용할 때 참고할 것</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-slate-100">
                {model.limitations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>점수 레이더</CardTitle>
            <CardDescription>Reasoning / Structure / Style / KO Quality 평균</CardDescription>
          </CardHeader>
          <CardContent>
            <ModelScoreRadar scores={radarScores} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>카테고리별 응답 통계</CardTitle>
            <CardDescription>응답 수와 평균 점수</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>카테고리</TableHead>
                  <TableHead>응답 수</TableHead>
                  <TableHead>평균 점수</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categoryStats.map((row) => (
                  <TableRow key={row.category}>
                    <TableCell>{promptCategoryLabels[row.category]}</TableCell>
                    <TableCell>{row.count}</TableCell>
                    <TableCell>{row.average.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">샘플 프롬프트</p>
          <h2 className="text-2xl font-semibold text-white">대표 응답 미리보기</h2>
          <p className="text-sm text-slate-400">최근 4개 프롬프트 기준</p>
        </div>
        <div className="space-y-4">
          {answers.slice(0, 4).map((answer) => (
            <div key={answer.promptId} className="rounded-2xl border border-slate-900/80 bg-slate-950/60 p-5">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Prompt</p>
              <p className="text-sm text-slate-200">{answer.promptId}</p>
              <p className="mt-3 text-sm text-slate-100">{answer.answerPreview}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
