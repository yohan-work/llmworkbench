// LLM 모델 기본 타입
export interface LLMModel {
  id: string;
  name: string;
  provider: string;
  version: string;
  releaseDate: string;
  description: string;
  color: string;
  features: string[];
  contextWindow: number;
  multimodal: boolean;
  logo?: string;
}

// 벤치마크 데이터 타입
export interface BenchmarkScore {
  name: string;
  fullName: string;
  description: string;
  scores: {
    [modelId: string]: number;
  };
  maxScore: number;
}

export interface RadarDataPoint {
  category: string;
  fullName: string;
  [modelId: string]: number | string;
}

// 응답 비교 타입
export type ResponseCategory = 
  | 'layout'        // 레이아웃/구조
  | 'styling'       // 스타일링/CSS
  | 'interaction'   // 인터랙션/JS
  | 'accessibility' // 접근성/웹표준
  | 'troubleshooting'; // 디버깅/문제해결

export interface ResponseExample {
  id: string;
  category: ResponseCategory;
  question: string;
  responses: {
    [modelId: string]: {
      response: string;
      strengths: string[];
      weaknesses: string[];
      rating: number;
    };
  };
  analysis: string;
  recommendedModel: string;
}

export interface CategoryInfo {
  id: ResponseCategory;
  name: string;
  nameKo: string;
  icon: string;
  description: string;
}

// 사용 사례 타입
export interface UseCase {
  id: string;
  title: string;
  titleKo: string;
  description: string;
  icon: string;
  recommendedModels: {
    modelId: string;
    rank: number;
    reason: string;
  }[];
  tips: string[];
}

// 가격 정보 타입
export interface PricingInfo {
  modelId: string;
  inputPricePerMillion: number;
  outputPricePerMillion: number;
  freeTokens?: number;
  hasFreeTier: boolean;
  currency: string;
  notes: string[];
}

// 플레이그라운드 타입
export interface PlaygroundMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  modelId?: string;
  timestamp: Date;
}

export interface APIConfig {
  modelId: string;
  apiKey: string;
  endpoint?: string;
}
