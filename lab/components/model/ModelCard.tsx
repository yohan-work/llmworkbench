import Link from 'next/link';
import { LlmModel } from '@/data/llmResults';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ModelCardProps {
  model: LlmModel;
}

export function ModelCard({ model }: ModelCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{model.name}</CardTitle>
          <Badge variant="outline">{model.provider}</Badge>
        </div>
        <CardDescription>{model.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">강점</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-100">
            {model.strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-400">주의할 점</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-100">
            {model.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <Button asChild variant="secondary" className="mt-auto">
          <Link href={`/models/${model.id}`}>자세히 보기</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
