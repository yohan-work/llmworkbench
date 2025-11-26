import type { UseCase } from '../types';

export const useCases: UseCase[] = [
  {
    id: 'development',
    title: 'Software Development',
    titleKo: '소프트웨어 개발',
    description: '코드 작성, 디버깅, 코드 리뷰, 아키텍처 설계 등 개발 관련 작업',
    icon: 'Code',
    recommendedModels: [
      {
        modelId: 'gpt-5.1',
        rank: 1,
        reason: '가장 높은 HumanEval 점수(95.2%)와 MBPP 점수를 보유. 복잡한 알고리즘과 시스템 설계에서 탁월한 성능. 함수 호출 기능으로 개발 워크플로우와 잘 통합됨.',
      },
      {
        modelId: 'claude-opus-4.5',
        rank: 2,
        reason: '코드 문서화와 설명에 뛰어남. 안전한 코딩 패턴을 권장하며, 긴 코드베이스 분석에 강점. 프로덕션 품질의 코드 생성.',
      },
      {
        modelId: 'gemini-3.0',
        rank: 3,
        reason: '멀티모달 기능으로 UI 스크린샷 기반 코드 생성 가능. 코드 실행 기능으로 즉시 검증 가능.',
      },
    ],
    tips: [
      '구체적인 요구사항과 제약조건을 명시하세요',
      '예상되는 입출력 예시를 함께 제공하면 더 정확한 코드를 얻을 수 있습니다',
      '코드 리뷰 시에는 특히 보안과 성능 관점에서 검토를 요청하세요',
    ],
  },
  {
    id: 'research',
    title: 'Research & Analysis',
    titleKo: '연구 및 분석',
    description: '학술 연구, 데이터 분석, 논문 검토, 문헌 조사 등',
    icon: 'FlaskConical',
    recommendedModels: [
      {
        modelId: 'gemini-3.0',
        rank: 1,
        reason: 'GPQA(82.1%)에서 최고 점수. 과학적 추론에 특화되어 있으며, 실시간 검색 기능으로 최신 연구 동향 파악 가능. 멀티모달로 도표/차트 분석 탁월.',
      },
      {
        modelId: 'claude-opus-4.5',
        rank: 2,
        reason: '200K 토큰 컨텍스트로 긴 논문 전체 분석 가능. 정확한 인용과 사실 확인에 강점. 복잡한 개념의 명확한 설명.',
      },
      {
        modelId: 'gpt-5.1',
        rank: 3,
        reason: 'MMLU(92.3%)에서 높은 점수로 광범위한 지식 기반. 다양한 학문 분야를 아우르는 분석 가능.',
      },
    ],
    tips: [
      '연구 분야의 전문 용어를 사용하면 더 정확한 답변을 얻을 수 있습니다',
      '참조가 필요한 경우 반드시 출처 확인을 요청하세요',
      'Gemini의 경우 최신 정보를 위해 실시간 검색 기능 활용을 권장합니다',
    ],
  },
  {
    id: 'content',
    title: 'Content Creation',
    titleKo: '콘텐츠 제작',
    description: '블로그 글, 마케팅 카피, 소셜 미디어, 스크립트 작성 등',
    icon: 'PenTool',
    recommendedModels: [
      {
        modelId: 'claude-opus-4.5',
        rank: 1,
        reason: '창의성 카테고리에서 최고 점수(96). 문학적 품질과 톤 조절이 뛰어남. 브랜드 보이스 유지에 탁월하며, 긴 형식의 콘텐츠에서 일관성 유지.',
      },
      {
        modelId: 'grok-3',
        rank: 2,
        reason: '독특하고 유머러스한 스타일. 소셜 미디어와 바이럴 콘텐츠에 강점. X(트위터) 트렌드에 맞는 최신 콘텐츠 생성.',
      },
      {
        modelId: 'gpt-5.1',
        rank: 3,
        reason: '다양한 스타일과 형식에 유연하게 대응. SEO 최적화 콘텐츠와 구조화된 글쓰기에 강함.',
      },
    ],
    tips: [
      '원하는 톤과 스타일을 구체적으로 명시하세요 (예: 친근한, 전문적인, 유머러스한)',
      '타겟 독자층의 특성을 알려주면 더 적합한 콘텐츠를 얻을 수 있습니다',
      '여러 버전을 요청해 A/B 테스트에 활용하세요',
    ],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis',
    titleKo: '데이터 분석',
    description: '비즈니스 인텔리전스, 통계 분석, 보고서 작성, 인사이트 도출',
    icon: 'BarChart3',
    recommendedModels: [
      {
        modelId: 'claude-opus-4.5',
        rank: 1,
        reason: '정확성 카테고리에서 최고 점수(96). 복잡한 데이터 패턴 분석과 인사이트 도출에 탁월. 비즈니스 컨텍스트를 고려한 분석 제공.',
      },
      {
        modelId: 'gemini-3.0',
        rank: 2,
        reason: '수학(91.2%) 점수 최고. 통계적 분석과 수치 계산에 강점. 코드 실행으로 즉시 분석 결과 검증 가능.',
      },
      {
        modelId: 'gpt-5.1',
        rank: 3,
        reason: 'GSM8K(97.8%) 최고 점수. 단계별 분석과 명확한 보고서 형식. 데이터 시각화 코드 생성 우수.',
      },
    ],
    tips: [
      '데이터의 맥락과 비즈니스 목표를 함께 설명하세요',
      '특정 분석 프레임워크를 요청하면 (예: SWOT, 5 Forces) 더 구조화된 결과를 얻을 수 있습니다',
      '숫자와 함께 의미 해석을 요청하세요',
    ],
  },
  {
    id: 'general',
    title: 'General Productivity',
    titleKo: '일반 업무',
    description: '이메일 작성, 회의록 정리, 일정 계획, 일상적인 질문 응답',
    icon: 'Briefcase',
    recommendedModels: [
      {
        modelId: 'gpt-5.1',
        rank: 1,
        reason: '범용성이 가장 높음. 빠른 응답 속도와 안정적인 품질. 다양한 도구 및 플랫폼과의 통합 생태계가 가장 발달.',
      },
      {
        modelId: 'grok-3',
        rank: 2,
        reason: '빠른 응답 속도와 실시간 정보 접근. 캐주얼한 대화에 적합. X 연동으로 최신 트렌드 반영.',
      },
      {
        modelId: 'claude-opus-4.5',
        rank: 3,
        reason: '정중하고 배려있는 톤. 복잡한 요청도 명확하게 처리. 긴 문서 요약에 강점.',
      },
    ],
    tips: [
      '명확한 형식을 요청하세요 (예: 불릿 포인트, 표, 이메일 형식)',
      '결과물의 길이를 미리 지정하면 더 적합한 답변을 얻을 수 있습니다',
      '반복적인 작업은 템플릿을 만들어 재사용하세요',
    ],
  },
  {
    id: 'education',
    title: 'Education & Learning',
    titleKo: '교육 및 학습',
    description: '개념 설명, 튜토리얼 생성, 학습 자료 제작, 질문 답변',
    icon: 'GraduationCap',
    recommendedModels: [
      {
        modelId: 'claude-opus-4.5',
        rank: 1,
        reason: '복잡한 개념을 이해하기 쉽게 설명하는 능력 탁월. 학습자 수준에 맞춘 설명 제공. 안전하고 정확한 정보 전달.',
      },
      {
        modelId: 'gemini-3.0',
        rank: 2,
        reason: '멀티모달로 시각적 학습 자료 이해/생성. 과학, 수학 분야에서 특히 강점. 실시간 정보로 최신 교육 트렌드 반영.',
      },
      {
        modelId: 'gpt-5.1',
        rank: 3,
        reason: '광범위한 주제 커버리지. 단계별 튜토리얼 생성에 강함. 다양한 학습 스타일에 적응.',
      },
    ],
    tips: [
      '학습자의 현재 수준을 알려주세요',
      '비유나 예시를 많이 포함해달라고 요청하면 이해하기 쉬워집니다',
      '퀴즈나 연습 문제 생성도 요청해보세요',
    ],
  },
];

export const getUseCaseById = (id: string): UseCase | undefined => {
  return useCases.find(useCase => useCase.id === id);
};

