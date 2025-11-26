import { Badge } from '@/components/ui/badge';

interface ScoreBadgeProps {
  label: string;
  score: number;
  subtle?: boolean;
}

const variantByScore = (score: number) => {
  if (score >= 4.5) return 'success';
  if (score >= 3.5) return 'default';
  if (score >= 2.5) return 'warning';
  return 'danger';
};

export function ScoreBadge({ label, score, subtle }: ScoreBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-slate-400">{label}</span>
      <Badge
        variant={variantByScore(score) as never}
        className={subtle ? 'text-[10px] uppercase tracking-widest' : ''}
      >
        {score.toFixed(1)}점
      </Badge>
    </div>
  );
}
