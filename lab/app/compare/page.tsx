'use client';

import { useEffect, useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ScoreBadge } from '@/components/ui/ScoreBadge';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  PromptCategory,
  getCategories,
  getPromptsByCategory,
  promptCategoryLabels,
  getAnswersForPrompt,
  getModelById
} from '@/data/llmResults';

const categories = getCategories();

export default function ComparePage() {
  const [category, setCategory] = useState<PromptCategory>(categories[0]);
  const prompts = useMemo(() => getPromptsByCategory(category), [category]);
  const [promptId, setPromptId] = useState<string>(prompts[0]?.id ?? '');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setPromptId(prompts[0]?.id ?? '');
    setExpanded({});
  }, [prompts]);

  const answers = useMemo(() => (promptId ? getAnswersForPrompt(promptId) : []), [promptId]);

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Compare</p>
        <h1 className="text-3xl font-semibold text-white">한눈에 4개 모델 답변 비교</h1>
        <p className="text-sm text-slate-400">
          카테고리와 프롬프트를 선택하면 모델별 점수와 응답을 2x2 그리드로 확인할 수 있습니다.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div>
          <Label>카테고리 선택</Label>
          <Select value={category} onValueChange={(value) => setCategory(value as PromptCategory)}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="카테고리" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>카테고리</SelectLabel>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {promptCategoryLabels[cat]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>프롬프트 선택</Label>
          <Select value={promptId} onValueChange={setPromptId}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="프롬프트" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>프롬프트</SelectLabel>
                {prompts.map((prompt) => (
                  <SelectItem key={prompt.id} value={prompt.id}>
                    {prompt.title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </section>

      {promptId && (
        <section className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Prompt</p>
            <div className="mt-2 rounded-2xl border border-slate-900/70 bg-slate-950/70 p-5">
              <p className="text-lg font-semibold text-white">
                {prompts.find((prompt) => prompt.id === promptId)?.title}
              </p>
              <p className="mt-2 text-sm text-slate-300">
                {prompts.find((prompt) => prompt.id === promptId)?.description}
              </p>
              <code className="mt-4 block rounded-xl bg-slate-900/70 p-4 text-sm text-slate-200">
                {prompts.find((prompt) => prompt.id === promptId)?.promptText}
              </code>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:pb-0 md:snap-none snap-x">
            {answers.map((answer) => {
              const model = getModelById(answer.modelId);
              return (
                <Card
                  key={answer.modelId}
                  className="min-w-[280px] flex-1 snap-center border-slate-900/70 bg-slate-950/70 md:min-w-0"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>{model?.name}</CardTitle>
                        <CardDescription>{model?.provider}</CardDescription>
                      </div>
                      <Badge variant="outline">{promptCategoryLabels[category]}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm text-slate-200">
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <ScoreBadge label="Reasoning" score={answer.scoreReasoning} subtle />
                      <ScoreBadge label="Structure" score={answer.scoreStructure} subtle />
                      <ScoreBadge label="Style" score={answer.scoreStyle} subtle />
                      <ScoreBadge label="KO" score={answer.scoreKoQuality} subtle />
                    </div>
                    <p>{answer.answerPreview}</p>
                    {expanded[answer.modelId] && (
                      <p className="whitespace-pre-line text-slate-100">{answer.fullAnswer}</p>
                    )}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                      <span>Latency {answer.latencyMs}ms</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-3 text-[11px]"
                        onClick={() =>
                          setExpanded((prev) => ({ ...prev, [answer.modelId]: !prev[answer.modelId] }))
                        }
                      >
                        {expanded[answer.modelId] ? '접기' : '전체 보기'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
