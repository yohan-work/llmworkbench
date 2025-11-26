import type { BenchmarkScore, RadarDataPoint } from '../types';

// 개별 벤치마크 점수
export const benchmarks: BenchmarkScore[] = [
  {
    name: 'HTML/CSS',
    fullName: 'Markup & Styling Accuracy',
    description: '디자인 시안을 얼마나 정확하게 코드로 변환하는지 평가',
    scores: {
      'gpt-5.1': 92.3,
      'gemini-3.0': 91.8,
      'claude-opus-4.5': 93.1,
      'grok-3': 89.5,
    },
    maxScore: 100,
  },
  {
    name: 'JS Logic',
    fullName: 'JavaScript Interaction Logic',
    description: '동적인 웹 기능(메뉴, 슬라이더 등) 구현 능력',
    scores: {
      'gpt-5.1': 95.2,
      'gemini-3.0': 92.4,
      'claude-opus-4.5': 93.8,
      'grok-3': 88.9,
    },
    maxScore: 100,
  },
  {
    name: 'Accessblty',
    fullName: 'Web Accessibility Compliance',
    description: '웹 접근성 표준(WA) 준수 및 시맨틱 마크업 작성 능력',
    scores: {
      'gpt-5.1': 89.7,
      'gemini-3.0': 91.2,
      'claude-opus-4.5': 97.4, // Claude가 접근성에 강함
      'grok-3': 85.3,
    },
    maxScore: 100,
  },
  {
    name: 'Debugging',
    fullName: 'Cross-Browser Debugging',
    description: '레이아웃 깨짐 및 브라우저 호환성 문제 해결 능력',
    scores: {
      'gpt-5.1': 97.8,
      'gemini-3.0': 96.5,
      'claude-opus-4.5': 97.2,
      'grok-3': 94.1,
    },
    maxScore: 100,
  },
  {
    name: 'Modern CSS',
    fullName: 'Modern CSS Features Usage',
    description: '최신 CSS(Grid, Flex, Variables) 활용 능력',
    scores: {
      'gpt-5.1': 94.6,
      'gemini-3.0': 95.8, // Gemini가 최신 트렌드에 강함
      'claude-opus-4.5': 93.2,
      'grok-3': 89.7,
    },
    maxScore: 100,
  },
];

// 레이더 차트용 종합 카테고리 점수
export const radarData: RadarDataPoint[] = [
  {
    category: '마크업',
    fullName: 'HTML 구조 설계',
    'gpt-5.1': 94,
    'gemini-3.0': 92,
    'claude-opus-4.5': 95,
    'grok-3': 88,
  },
  {
    category: '스타일링',
    fullName: 'CSS 구현 능력',
    'gpt-5.1': 95,
    'gemini-3.0': 92,
    'claude-opus-4.5': 93,
    'grok-3': 89,
  },
  {
    category: '인터랙션',
    fullName: 'JS 동적 기능',
    'gpt-5.1': 96,
    'gemini-3.0': 93,
    'claude-opus-4.5': 90,
    'grok-3': 86,
  },
  {
    category: '접근성',
    fullName: '웹 표준/접근성',
    'gpt-5.1': 90,
    'gemini-3.0': 88,
    'claude-opus-4.5': 98,
    'grok-3': 85,
  },
  {
    category: '최신기술',
    fullName: '최신 트렌드 반영',
    'gpt-5.1': 92,
    'gemini-3.0': 97,
    'claude-opus-4.5': 89,
    'grok-3': 91,
  },
  {
    category: '설명력',
    fullName: '초보자 눈높이 설명',
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
