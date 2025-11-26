import { useState, useMemo } from 'react';
import { calculateMonthlyCost } from '../../data/pricing';
import { models } from '../../data/models';
import { Calculator, TrendingDown, TrendingUp } from 'lucide-react';

export default function CostCalculator() {
  const [inputTokens, setInputTokens] = useState(1000000);
  const [outputTokens, setOutputTokens] = useState(500000);

  const costs = useMemo(() => {
    return calculateMonthlyCost({
      inputTokens,
      outputTokens,
    });
  }, [inputTokens, outputTokens]);

  // 정렬된 비용 (저렴한 순)
  const sortedCosts = [...costs].sort((a, b) => a.totalCost - b.totalCost);
  const cheapestCost = sortedCosts[0]?.totalCost || 0;
  const mostExpensiveCost = sortedCosts[sortedCosts.length - 1]?.totalCost || 0;

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-8">
      {/* Input Controls */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="w-5 h-5 text-neon-blue" />
          <h3 className="text-white font-semibold">월간 사용량 입력</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Tokens */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              월간 입력 토큰
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={100000}
                max={100000000}
                step={100000}
                value={inputTokens}
                onChange={(e) => setInputTokens(Number(e.target.value))}
                className="flex-1 h-2 bg-navy-700 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-neon-blue
                  [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <span className="w-20 text-right text-white font-mono text-lg">
                {formatNumber(inputTokens)}
              </span>
            </div>
          </div>

          {/* Output Tokens */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              월간 출력 토큰
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min={50000}
                max={50000000}
                step={50000}
                value={outputTokens}
                onChange={(e) => setOutputTokens(Number(e.target.value))}
                className="flex-1 h-2 bg-navy-700 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-4
                  [&::-webkit-slider-thumb]:h-4
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:bg-neon-purple
                  [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <span className="w-20 text-right text-white font-mono text-lg">
                {formatNumber(outputTokens)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {sortedCosts.map((cost, index) => {
          const model = models.find((m) => m.id === cost.modelId);
          const savingsPercent =
            mostExpensiveCost > 0
              ? Math.round(
                  ((mostExpensiveCost - cost.totalCost) / mostExpensiveCost) * 100
                )
              : 0;

          return (
            <div
              key={cost.modelId}
              className={`glass-card p-5 transition-all border ${
                index === 0
                  ? 'ring-2 ring-neon-green/50 border-neon-green/30'
                  : 'border-white/10'
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${model?.color}20` }}
                  >
                    <span
                      className="font-bold text-sm"
                      style={{ color: model?.color }}
                    >
                      {model?.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-white font-medium">{cost.modelName}</span>
                </div>
                {index === 0 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-neon-green/20 text-neon-green flex items-center gap-1">
                    <TrendingDown className="w-3 h-3" />
                    최저가
                  </span>
                )}
              </div>

              {/* Total Cost */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-white font-mono">
                  ${cost.totalCost.toFixed(2)}
                </div>
                <div className="text-sm text-gray-500">예상 월간 비용</div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-400">
                  <span>입력 비용</span>
                  <span className="font-mono">${cost.inputCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>출력 비용</span>
                  <span className="font-mono">${cost.outputCost.toFixed(2)}</span>
                </div>
                {cost.freeTokensApplied > 0 && (
                  <div className="flex justify-between text-neon-green">
                    <span>무료 토큰</span>
                    <span className="font-mono">
                      -{formatNumber(cost.freeTokensApplied)}
                    </span>
                  </div>
                )}
              </div>

              {/* Savings */}
              {index > 0 && savingsPercent > 0 && (
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <TrendingUp className="w-3 h-3 text-red-400" />
                    최저가 대비{' '}
                    <span className="text-red-400 font-medium">
                      +${(cost.totalCost - cheapestCost).toFixed(2)}
                    </span>{' '}
                    더 비쌈
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Usage Tips */}
      <div className="glass-card p-5 bg-neon-blue/5 border border-neon-blue/20">
        <h4 className="text-sm font-semibold text-neon-blue mb-2">💡 비용 절감 팁</h4>
        <ul className="text-sm text-gray-400 space-y-1">
          <li>• 프롬프트 최적화: 불필요한 지시사항을 줄여 입력 토큰을 절약하세요</li>
          <li>• 출력 길이 제한: 필요한 만큼만 출력하도록 max_tokens를 설정하세요</li>
          <li>• 배치 처리: 여러 요청을 묶어 처리하면 오버헤드를 줄일 수 있습니다</li>
          <li>• 캐싱 활용: 동일한 프롬프트에 대한 응답을 캐싱하여 재사용하세요</li>
        </ul>
      </div>
    </div>
  );
}

