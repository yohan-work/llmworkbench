import { ModelCard } from '@/components/model/ModelCard';
import { llmDataset } from '@/data/llmResults';

export default function ModelsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Models</p>
        <h1 className="text-3xl font-semibold text-white">모델별 상세 개요</h1>
        <p className="text-sm text-slate-400">
          제공자, 강점, 주의점을 빠르게 비교하고 모델 상세 페이지에서 점수와 샘플 응답을 확인하세요.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {llmDataset.models.map((model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
}
