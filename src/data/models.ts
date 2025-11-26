import type { LLMModel } from '../types';

export const models: LLMModel[] = [
  {
    id: 'gpt-5.1',
    name: 'GPT-5.1',
    provider: 'OpenAI',
    version: '5.1',
    releaseDate: '2025-09',
    description: 'OpenAI의 최신 플래그십 모델. 뛰어난 추론 능력과 코드 생성 능력을 갖추고 있으며, 멀티모달 처리 능력이 크게 향상되었습니다.',
    color: '#10a37f',
    features: ['고급 추론', '코드 생성', '멀티모달', '128K 컨텍스트', '함수 호출'],
    contextWindow: 128000,
    multimodal: true,
  },
  {
    id: 'gemini-3.0',
    name: 'Gemini 3.0',
    provider: 'Google',
    version: '3.0',
    releaseDate: '2025-08',
    description: 'Google의 차세대 멀티모달 AI 모델. 텍스트, 이미지, 오디오, 비디오를 네이티브하게 처리하며 과학적 추론에서 탁월한 성능을 보입니다.',
    color: '#4285f4',
    features: ['네이티브 멀티모달', '과학적 추론', '200K 컨텍스트', '실시간 검색', '코드 실행'],
    contextWindow: 200000,
    multimodal: true,
  },
  {
    id: 'claude-opus-4.5',
    name: 'Claude Opus 4.5',
    provider: 'Anthropic',
    version: 'Opus 4.5',
    releaseDate: '2025-10',
    description: 'Anthropic의 최상위 모델. 안전성과 정확성에 중점을 두면서도 창의적 글쓰기와 복잡한 분석 작업에서 뛰어난 성능을 발휘합니다.',
    color: '#cc785c',
    features: ['안전성 중심', '창의적 글쓰기', '긴 문서 분석', '200K 컨텍스트', '헌법적 AI'],
    contextWindow: 200000,
    multimodal: true,
  },
  {
    id: 'grok-3',
    name: 'Grok 3',
    provider: 'xAI',
    version: '3.0',
    releaseDate: '2025-07',
    description: 'xAI의 최신 모델. 실시간 정보 접근과 유머러스한 대화 스타일이 특징이며, X(구 Twitter) 데이터를 활용한 최신 정보 제공이 강점입니다.',
    color: '#1da1f2',
    features: ['실시간 정보', 'X 데이터 연동', '유머러스', '128K 컨텍스트', '빠른 응답'],
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

