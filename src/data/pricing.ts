import type { PricingInfo } from '../types';

export const pricingData: PricingInfo[] = [
  {
    modelId: 'gpt-5.1',
    inputPricePerMillion: 15.00,
    outputPricePerMillion: 60.00,
    hasFreeTier: false,
    currency: 'USD',
    notes: [
      '128K 컨텍스트 윈도우',
      'ChatGPT Plus($20/월) 포함',
      'API 사용량 기반 과금',
      '배치 API 50% 할인',
    ],
  },
  {
    modelId: 'gemini-3.0',
    inputPricePerMillion: 7.00,
    outputPricePerMillion: 21.00,
    freeTokens: 1000000,
    hasFreeTier: true,
    currency: 'USD',
    notes: [
      '200K 컨텍스트 윈도우',
      '무료 티어: 월 100만 토큰',
      'Google One AI Premium ($20/월) 포함',
      '멀티모달 처리 동일 가격',
    ],
  },
  {
    modelId: 'claude-opus-4.5',
    inputPricePerMillion: 20.00,
    outputPricePerMillion: 80.00,
    hasFreeTier: false,
    currency: 'USD',
    notes: [
      '200K 컨텍스트 윈도우',
      'Claude Pro($25/월) 포함',
      '긴 컨텍스트 처리에 추가 비용 없음',
      '프롬프트 캐싱으로 비용 절감 가능',
    ],
  },
  {
    modelId: 'grok-3',
    inputPricePerMillion: 5.00,
    outputPricePerMillion: 15.00,
    hasFreeTier: true,
    freeTokens: 500000,
    currency: 'USD',
    notes: [
      '128K 컨텍스트 윈도우',
      'X Premium+($16/월) 포함',
      '실시간 정보 접근 포함',
      '가장 저렴한 프리미엄 모델',
    ],
  },
];

// 월간 비용 계산 함수
export interface UsageEstimate {
  inputTokens: number; // 월간 입력 토큰
  outputTokens: number; // 월간 출력 토큰
}

export interface CostBreakdown {
  modelId: string;
  modelName: string;
  inputCost: number;
  outputCost: number;
  totalCost: number;
  freeTokensApplied: number;
  currency: string;
}

export const calculateMonthlyCost = (
  usage: UsageEstimate
): CostBreakdown[] => {
  return pricingData.map((pricing) => {
    let effectiveInputTokens = usage.inputTokens;
    let freeTokensApplied = 0;

    // 무료 토큰 적용
    if (pricing.hasFreeTier && pricing.freeTokens) {
      freeTokensApplied = Math.min(pricing.freeTokens, usage.inputTokens);
      effectiveInputTokens = Math.max(0, usage.inputTokens - pricing.freeTokens);
    }

    const inputCost = (effectiveInputTokens / 1_000_000) * pricing.inputPricePerMillion;
    const outputCost = (usage.outputTokens / 1_000_000) * pricing.outputPricePerMillion;

    return {
      modelId: pricing.modelId,
      modelName: getModelDisplayName(pricing.modelId),
      inputCost: Math.round(inputCost * 100) / 100,
      outputCost: Math.round(outputCost * 100) / 100,
      totalCost: Math.round((inputCost + outputCost) * 100) / 100,
      freeTokensApplied,
      currency: pricing.currency,
    };
  });
};

const getModelDisplayName = (modelId: string): string => {
  const names: Record<string, string> = {
    'gpt-5.1': 'GPT-5.1',
    'gemini-3.0': 'Gemini 3.0',
    'claude-opus-4.5': 'Claude Opus 4.5',
    'grok-3': 'Grok 3',
  };
  return names[modelId] || modelId;
};

// 가격 비교를 위한 정렬된 데이터
export const getSortedByPrice = (type: 'input' | 'output' | 'total'): PricingInfo[] => {
  return [...pricingData].sort((a, b) => {
    if (type === 'input') return a.inputPricePerMillion - b.inputPricePerMillion;
    if (type === 'output') return a.outputPricePerMillion - b.outputPricePerMillion;
    return (a.inputPricePerMillion + a.outputPricePerMillion) - 
           (b.inputPricePerMillion + b.outputPricePerMillion);
  });
};

