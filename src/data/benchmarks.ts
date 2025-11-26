import type { BenchmarkScore, RadarDataPoint } from '../types';

// 개별 벤치마크 점수
export const benchmarks: BenchmarkScore[] = [
  {
    name: 'MMLU',
    fullName: 'Massive Multitask Language Understanding',
    description: '57개 분야의 학문적 지식을 테스트하는 종합 평가',
    scores: {
      'gpt-5.1': 92.3,
      'gemini-3.0': 91.8,
      'claude-opus-4.5': 93.1,
      'grok-3': 89.5,
    },
    maxScore: 100,
  },
  {
    name: 'HumanEval',
    fullName: 'Code Generation Benchmark',
    description: 'Python 코드 생성 및 문제 해결 능력 평가',
    scores: {
      'gpt-5.1': 95.2,
      'gemini-3.0': 92.4,
      'claude-opus-4.5': 93.8,
      'grok-3': 88.9,
    },
    maxScore: 100,
  },
  {
    name: 'MATH',
    fullName: 'Mathematics Problem Solving',
    description: '고난도 수학 문제 해결 능력 평가',
    scores: {
      'gpt-5.1': 89.7,
      'gemini-3.0': 91.2,
      'claude-opus-4.5': 88.4,
      'grok-3': 85.3,
    },
    maxScore: 100,
  },
  {
    name: 'GSM8K',
    fullName: 'Grade School Math',
    description: '수학적 추론 및 단계별 문제 해결',
    scores: {
      'gpt-5.1': 97.8,
      'gemini-3.0': 96.5,
      'claude-opus-4.5': 97.2,
      'grok-3': 94.1,
    },
    maxScore: 100,
  },
  {
    name: 'GPQA',
    fullName: 'Graduate-Level Physics, Chemistry, Biology',
    description: '대학원 수준의 과학 문제 해결',
    scores: {
      'gpt-5.1': 78.4,
      'gemini-3.0': 82.1,
      'claude-opus-4.5': 79.8,
      'grok-3': 74.2,
    },
    maxScore: 100,
  },
  {
    name: 'ARC-C',
    fullName: 'AI2 Reasoning Challenge',
    description: '상식 및 과학적 추론 능력',
    scores: {
      'gpt-5.1': 96.8,
      'gemini-3.0': 95.2,
      'claude-opus-4.5': 97.1,
      'grok-3': 93.4,
    },
    maxScore: 100,
  },
  {
    name: 'HellaSwag',
    fullName: 'Commonsense Natural Language Inference',
    description: '상황에 맞는 다음 행동 예측',
    scores: {
      'gpt-5.1': 98.2,
      'gemini-3.0': 97.8,
      'claude-opus-4.5': 98.5,
      'grok-3': 96.1,
    },
    maxScore: 100,
  },
  {
    name: 'MBPP',
    fullName: 'Mostly Basic Python Problems',
    description: '기본 Python 프로그래밍 문제',
    scores: {
      'gpt-5.1': 94.6,
      'gemini-3.0': 91.8,
      'claude-opus-4.5': 93.2,
      'grok-3': 89.7,
    },
    maxScore: 100,
  },
];

// 레이더 차트용 종합 카테고리 점수
export const radarData: RadarDataPoint[] = [
  {
    category: '추론',
    fullName: '논리적 추론 능력',
    'gpt-5.1': 94,
    'gemini-3.0': 92,
    'claude-opus-4.5': 95,
    'grok-3': 88,
  },
  {
    category: '코딩',
    fullName: '프로그래밍 능력',
    'gpt-5.1': 95,
    'gemini-3.0': 92,
    'claude-opus-4.5': 93,
    'grok-3': 89,
  },
  {
    category: '수학',
    fullName: '수학적 문제 해결',
    'gpt-5.1': 91,
    'gemini-3.0': 93,
    'claude-opus-4.5': 90,
    'grok-3': 86,
  },
  {
    category: '창의성',
    fullName: '창의적 콘텐츠 생성',
    'gpt-5.1': 90,
    'gemini-3.0': 88,
    'claude-opus-4.5': 96,
    'grok-3': 91,
  },
  {
    category: '멀티모달',
    fullName: '이미지/비디오 이해',
    'gpt-5.1': 92,
    'gemini-3.0': 97,
    'claude-opus-4.5': 89,
    'grok-3': 85,
  },
  {
    category: '정확성',
    fullName: '사실적 정확도',
    'gpt-5.1': 93,
    'gemini-3.0': 91,
    'claude-opus-4.5': 96,
    'grok-3': 87,
  },
];

export const modelColors = {
  'gpt-5.1': '#10a37f',
  'gemini-3.0': '#4285f4',
  'claude-opus-4.5': '#cc785c',
  'grok-3': '#1da1f2',
};

