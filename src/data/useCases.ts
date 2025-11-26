import type { UseCase } from '../types';

export const useCases: UseCase[] = [
  {
    id: 'ui-development',
    title: 'UI Component Development',
    titleKo: 'UI 컴포넌트 개발',
    description: '버튼, 모달, 카드 등 재사용 가능한 UI 요소 구현 및 스타일링',
    icon: 'Layout',
    recommendedModels: [
      {
        modelId: 'claude-opus-4.5',
        rank: 1,
        reason: '초보자도 이해하기 쉬운 설명과 함께 시맨틱 마크업(의미론적 태그)을 잘 지키는 코드를 짜줍니다. 접근성까지 고려한 완성도 높은 코드를 제안합니다.',
      },
      {
        modelId: 'gpt-5.1',
        rank: 2,
        reason: '가장 정석적인 HTML/CSS 코드를 제공합니다. "중앙 정렬하는 법" 같은 기초 질문부터 복잡한 애니메이션까지 넓은 범위를 잘 다룹니다.',
      },
      {
        modelId: 'gemini-3.0',
        rank: 3,
        reason: '최신 CSS 트렌드(Grid, Container Queries 등)를 잘 반영하여 모던한 코드를 제안합니다.',
      },
    ],
    tips: [
      '디자인 시안의 색상 코드(#333 등)나 크기(px)를 같이 알려주면 더 정확해요.',
      '"반응형으로 만들어줘", "호버 효과 넣어줘"라고 구체적으로 요청해보세요.',
    ],
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    titleKo: '반응형 웹 구현',
    description: 'PC, 태블릿, 모바일 등 다양한 화면 크기에 대응하는 레이아웃 제작',
    icon: 'Smartphone',
    recommendedModels: [
      {
        modelId: 'gemini-3.0',
        rank: 1,
        reason: '다양한 기기 해상도에 대한 데이터를 잘 알고 있어서, 미디어 쿼리 분기점(Breakpoint)을 잘 잡아줍니다. 모바일 최적화 팁을 잘 줍니다.',
      },
      {
        modelId: 'gpt-5.1',
        rank: 2,
        reason: 'Flexbox와 Grid를 활용한 레이아웃 변환 코드를 오류 없이 잘 작성합니다. "모바일에서는 세로로 배치해줘" 같은 요청을 잘 이해합니다.',
      },
      {
        modelId: 'claude-opus-4.5',
        rank: 3,
        reason: '반응형 디자인의 원리를 친절하게 설명해주어, 왜 레이아웃이 깨지는지 이해하는 데 도움을 줍니다.',
      },
    ],
    tips: [
      '모바일 화면을 먼저 만드는 "모바일 퍼스트" 방식으로 코드를 짜달라고 해보세요.',
      '화면이 줄어들 때 이미지가 어떻게 변해야 하는지 설명해주면 좋습니다.',
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Cross Browser & Debugging',
    titleKo: '버그 수정 & 호환성',
    description: 'IE나 구형 브라우저 문제 해결, 레이아웃 깨짐 현상 수리',
    icon: 'Wrench',
    recommendedModels: [
      {
        modelId: 'gpt-5.1',
        rank: 1,
        reason: '방대한 데이터를 바탕으로 특정 브라우저 버그(예: Safari의 100vh 문제)에 대한 해결책을 가장 잘 찾아냅니다.',
      },
      {
        modelId: 'grok-3',
        rank: 2,
        reason: '최신 개발자 커뮤니티의 이슈를 잘 알고 있어서, 최근에 발견된 버그의 해결책을 빠르게 제시합니다.',
      },
      {
        modelId: 'claude-opus-4.5',
        rank: 3,
        reason: '왜 코드가 작동하지 않는지 논리적으로 분석해서 원인을 차근차근 설명해줍니다.',
      },
    ],
    tips: [
      '오류가 나는 화면의 상황(예: 아이폰 사파리에서 스크롤이 안 돼요)을 구체적으로 말해주세요.',
      '문제가 되는 CSS 코드를 통째로 붙여넣고 "뭐가 문제야?"라고 물어보세요.',
    ],
  },
  {
    id: 'interaction',
    title: 'JavaScript Interaction',
    titleKo: '동적 인터랙션 (JS)',
    description: '슬라이더, 탭 메뉴, 스크롤 효과 등 움직이는 웹 기능 구현',
    icon: 'MousePointerClick',
    recommendedModels: [
      {
        modelId: 'gpt-5.1',
        rank: 1,
        reason: '복잡한 자바스크립트 로직도 단계별로 잘 짜줍니다. jQuery 대신 바닐라 JS(순수 자바스크립트)로 짜달라고 하면 최신 문법으로 잘 바꿔줍니다.',
      },
      {
        modelId: 'gemini-3.0',
        rank: 2,
        reason: '애니메이션 성능을 고려한 코드를 제안합니다. 버벅임 없는 부드러운 인터랙션 구현에 강점이 있습니다.',
      },
      {
        modelId: 'claude-opus-4.5',
        rank: 3,
        reason: '코드에 주석을 아주 꼼꼼하게 달아줘서, 자바스크립트 초보자가 코드를 해석하고 공부하기에 가장 좋습니다.',
      },
    ],
    tips: [
      '"제이쿼리 쓰지 말고 순수 자바스크립트로 짜줘"라고 요청하는 것이 요즘 트렌드입니다.',
      '어떤 동작을 원하는지 순서대로(클릭하면 -> 창이 뜨고 -> 배경은 어두워짐) 설명하세요.',
    ],
  },
  {
    id: 'accessibility',
    title: 'Web Accessibility',
    titleKo: '웹 접근성 & 표준',
    description: '장애인 차별 금지법 준수, 스크린 리더 대응, 시맨틱 마크업',
    icon: 'Accessibility',
    recommendedModels: [
      {
        modelId: 'claude-opus-4.5',
        rank: 1,
        reason: '가장 윤리적이고 원칙적인 모델이라 웹 접근성 규칙을 철저하게 지킵니다. ARIA 속성 사용법을 아주 정확하게 알려줍니다.',
      },
      {
        modelId: 'gemini-3.0',
        rank: 2,
        reason: '구글의 검색 엔진 가이드라인을 잘 알고 있어서, 접근성과 SEO(검색 최적화)를 동시에 잡는 코드를 제안합니다.',
      },
      {
        modelId: 'gpt-5.1',
        rank: 3,
        reason: '다양한 접근성 체크리스트를 제공하여 놓친 부분이 없는지 검토해줍니다.',
      },
    ],
    tips: [
      '"시각장애인이 이 버튼을 사용할 때 문제가 없을까?"라고 물어보세요.',
      'HTML 태그를 \`div\`로만 짜지 말고 \`header\`, \`nav\` 같은 의미 있는 태그를 추천해달라고 하세요.',
    ],
  },
  {
    id: 'optimization',
    title: 'Performance Optimization',
    titleKo: '웹 성능 최적화',
    description: '이미지 용량 줄이기, 로딩 속도 개선, 코드 경량화',
    icon: 'Zap',
    recommendedModels: [
      {
        modelId: 'gemini-3.0',
        rank: 1,
        reason: '구글 라이트하우스(Lighthouse) 점수를 올리는 구체적인 방법을 가장 잘 알고 있습니다. 이미지 포맷 변환(WebP 등) 제안에 능합니다.',
      },
      {
        modelId: 'gpt-5.1',
        rank: 2,
        reason: 'CSS와 JS 코드를 압축하거나 불필요한 부분을 제거하여 파일을 가볍게 만드는 리팩토링을 잘 수행합니다.',
      },
      {
        modelId: 'grok-3',
        rank: 3,
        reason: '최신 기술 스택에서의 성능 튜닝 팁을 빠르고 간결하게 제공합니다.',
      },
    ],
    tips: [
      '코드가 너무 길면 "이거 더 짧고 효율적으로 줄여줄 수 있어?"라고 물어보세요.',
      '이미지가 많아서 사이트가 느리다면 최적화 방법을 물어보세요.',
    ],
  },
];

export const getUseCaseById = (id: string): UseCase | undefined => {
  return useCases.find(useCase => useCase.id === id);
};
