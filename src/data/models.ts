import type { LLMModel } from '../types';

export const models: LLMModel[] = [
  {
    id: 'gpt-5.1',
    name: 'GPT-5.1',
    provider: 'OpenAI',
    version: '5.1',
    releaseDate: '2025-09',
    description: 'OpenAI의 최신 모델. 가장 방대한 학습 데이터로 어떤 질문에도 "표준 정답"을 제시합니다. 복잡한 자바스크립트 로직도 척척 짜줍니다.',
    color: '#10a37f',
    features: ['표준 코드 생성', 'JS 로직 강점', '버그 해결', '128K 컨텍스트', '가장 대중적'],
    contextWindow: 128000,
    multimodal: true,
  },
  {
    id: 'gemini-3.0',
    name: 'Gemini 3.0',
    provider: 'Google',
    version: '3.0',
    releaseDate: '2025-08',
    description: 'Google의 AI. 구글 검색 엔진의 최신 정보를 바탕으로 SEO(검색 최적화)와 최신 웹 기술(Modern CSS)에 강합니다.',
    color: '#4285f4',
    features: ['SEO 최적화', '최신 CSS 트렌드', '이미지 분석', '200K 컨텍스트', '구글 연동'],
    contextWindow: 200000,
    multimodal: true,
  },
  {
    id: 'claude-opus-4.5',
    name: 'Claude Opus 4.5',
    provider: 'Anthropic',
    version: 'Opus 4.5',
    releaseDate: '2025-10',
    description: '가장 "친절한 선생님" 같은 모델. 초보자가 이해하기 쉽게 원리를 설명해주고, 깔끔하고 가독성 좋은 코드를 짜줍니다.',
    color: '#cc785c',
    features: ['친절한 설명', '웹 접근성 준수', '깔끔한 코드', '200K 컨텍스트', '초보자 추천'],
    contextWindow: 200000,
    multimodal: true,
  },
  {
    id: 'grok-3',
    name: 'Grok 3',
    provider: 'xAI',
    version: '3.0',
    releaseDate: '2025-07',
    description: '개발자 커뮤니티의 최신 트렌드를 빠르게 반영합니다. 짧고 간결한 코드를 선호하며, 최신 라이브러리 활용에 능합니다.',
    color: '#1da1f2',
    features: ['최신 트렌드', '간결한 코드', '빠른 응답', '128K 컨텍스트', '실시간 정보'],
    contextWindow: 128000,
    multimodal: true,
  },
];

export const getModelById = (id: string): LLMModel | undefined => {
  return models.find(model => model.id === id);
};

export const getModelColor = (id: string): string => {
  return getModelById(id)?.color || '#ffffff';
};
