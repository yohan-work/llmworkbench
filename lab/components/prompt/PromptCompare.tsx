'use client';

import { useMemo, useState } from 'react';
import { PromptItem, ModelAnswer, getModelById } from '@/data/llmResults';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScoreBadge } from '@/components/ui/ScoreBadge';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PromptCompareProps {
  prompt: PromptItem;
  answers: ModelAnswer[];
}

export function PromptCompare({ prompt, answers }: PromptCompareProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const sortedAnswers = useMemo(
    () =>
      [...answers].sort((a, b) => b.scoreReasoning + b.scoreStructure - (a.scoreReasoning + a.scoreStructure)),
    [answers]
  );

  const toggle = (modelId: string) => {
    setExpanded((prev) => ({ ...prev, [modelId]: !prev[modelId] }));
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 shadow-subtle">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-white">{prompt.title}</h3>
          <Badge variant="outline" className="text-xs uppercase tracking-widest">
            {prompt.category}
          </Badge>
        </div>
        <p className="text-sm text-slate-300">{prompt.description}</p>
        <code className="mt-3 block rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200">
          {prompt.promptText}
        </code>
      </div>

      <Tabs defaultValue={sortedAnswers[0]?.modelId} className="mt-6">
        <TabsList className="flex-wrap">
          {sortedAnswers.map((answer) => {
            const model = getModelById(answer.modelId);
            return (
              <TabsTrigger key={answer.modelId} value={answer.modelId}>
                {model?.name ?? answer.modelId}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {sortedAnswers.map((answer) => {
          const model = getModelById(answer.modelId);
          return (
            <TabsContent key={answer.modelId} value={answer.modelId}>
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">모델</p>
                    <p className="text-lg font-semibold text-white">{model?.name}</p>
                    <p className="text-xs text-slate-500">{model?.provider}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs md:grid-cols-4">
                    <ScoreBadge label="Reasoning" score={answer.scoreReasoning} subtle />
                    <ScoreBadge label="Structure" score={answer.scoreStructure} subtle />
                    <ScoreBadge label="Style" score={answer.scoreStyle} subtle />
                    <ScoreBadge label="KO Quality" score={answer.scoreKoQuality} subtle />
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-200">{answer.answerPreview}</p>
                {expanded[answer.modelId] ? (
                  <p className="mt-3 whitespace-pre-line text-sm text-slate-200">{answer.fullAnswer}</p>
                ) : null}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <span>지연 시간: {answer.latencyMs}ms</span>
                  <Button variant="ghost" size="sm" onClick={() => toggle(answer.modelId)} className="h-8 px-3 text-xs">
                    {expanded[answer.modelId] ? '접기' : '전체 보기'}
                  </Button>
                </div>
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
