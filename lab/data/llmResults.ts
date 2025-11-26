export type LlmModelId = 'gpt-5.1' | 'gemini-3' | 'grok-4.1' | 'claude-opus-4.5';

export interface LlmModel {
  id: LlmModelId;
  name: string;
  provider: string;
  description: string;
  strengths: string[];
  limitations: string[];
}

export type PromptCategory =
  | 'coding'
  | 'reasoning'
  | 'creative'
  | 'translation'
  | 'multimodal'
  | 'general';

export interface PromptItem {
  id: string;
  category: PromptCategory;
  title: string;
  description: string;
  promptText: string;
}

export interface ModelAnswer {
  modelId: LlmModelId;
  promptId: string;
  answerPreview: string;
  fullAnswer: string;
  scoreReasoning: number;
  scoreStructure: number;
  scoreStyle: number;
  scoreKoQuality: number;
  latencyMs: number;
}

export interface LlmDataset {
  models: LlmModel[];
  prompts: PromptItem[];
  answers: ModelAnswer[];
}

export const promptCategoryLabels: Record<PromptCategory, string> = {
  coding: '코딩',
  reasoning: '심층 추론',
  creative: '창의/콘텐츠',
  translation: '번역/로컬라이징',
  multimodal: '멀티모달 리서치',
  general: '일반 활용'
};

const models: LlmModel[] = [
  {
    id: 'gpt-5.1',
    name: 'GPT-5.1',
    provider: 'OpenAI',
    description: '복잡한 에이전트 플로우와 멀티스텝 코딩 작업에 최적화된 최신 플래그십 모델.',
    strengths: ['코딩 자동화', '시스템 설계 제안', '정확한 코드 예시', '폭넓은 도메인 지식'],
    limitations: ['긴 응답 시 토큰 사용량 높음', '일부 다국어 스타일 표현 제한', '비용이 상대적으로 높음']
  },
  {
    id: 'gemini-3',
    name: 'Gemini 3',
    provider: 'Google',
    description: '멀티모달 입력과 장문의 리서치 답변에 강점을 가진 차세대 모델.',
    strengths: ['멀티모달 추론', '방대한 컨텍스트 유지', '빠른 웹 리서치 스타일 답변', '안정적인 한국어'],
    limitations: ['코딩 세부 규칙에서 보수적', 'API 레이턴시가 다소 긴 편', '창의적 문체는 다소 절제됨']
  },
  {
    id: 'grok-4.1',
    name: 'Grok 4.1',
    provider: 'xAI',
    description: '위트 있는 표현과 감성 중심의 크리에이티브 작업에 특화된 모델.',
    strengths: ['감성 표현', '실시간 이슈 반영', '대화형 스타일링', '빠른 응답 속도'],
    limitations: ['심층 추론 정확도가 불안정할 수 있음', '긴 형식 문서는 구조가 헐거움', '기술 번역에서 단위 누락 사례']
  },
  {
    id: 'claude-opus-4.5',
    name: 'Claude Opus 4.5',
    provider: 'Anthropic',
    description: '안전성과 해석 가능한 추론을 강조하는 프리미엄 모델.',
    strengths: ['윤리/안전 가이드라인', '정교한 추론 체계', '법률·경영 컨설팅 톤', '한국어 장문 품질'],
    limitations: ['다소 보수적인 답변', '가벼운 잡담에는 무거운 톤', '일부 API 영문 문서 인용 느림']
  }
];

const prompts: PromptItem[] = [
  {
    id: 'coding-architecture',
    category: 'coding',
    title: 'Next.js SaaS 대시보드 설계',
    description: '신규 SaaS 대시보드 제품을 위한 모놀리식 → 모듈러 구조 전환 전략.',
    promptText:
      'Design a modular Next.js SaaS dashboard architecture that supports feature flags, role-based access, and regional deployments.'
  },
  {
    id: 'coding-agent-automation',
    category: 'coding',
    title: '에이전트 기반 릴리즈 자동화',
    description: 'CI 파이프라인을 감시하는 LLM 에이전트를 설계.',
    promptText:
      'Outline an autonomous release agent that monitors CI logs, triages failures, and opens pull requests with fixes.'
  },
  {
    id: 'reasoning-systems-thinking',
    category: 'reasoning',
    title: '도시 교통 혼잡 전략',
    description: '다중 이해관계자가 얽힌 정책 제안.',
    promptText:
      'Evaluate three policy levers to reduce congestion in mega cities while balancing environmental and economic impact.'
  },
  {
    id: 'reasoning-counterfactual',
    category: 'reasoning',
    title: '반사실 추론',
    description: '공급망 중단 시나리오에서의 의사결정 비교.',
    promptText:
      'Given a semiconductor supply shock, compare counterfactual strategies for an automotive OEM and justify the optimal choice.'
  },
  {
    id: 'creative-brand-story',
    category: 'creative',
    title: '브랜드 세계관 스토리텔링',
    description: '감성적이면서도 미래 지향적인 서사.',
    promptText:
      'Write a short manifesto for a climate-positive fashion brand speaking to Gen Z consumers.'
  },
  {
    id: 'creative-dialogue',
    category: 'creative',
    title: '감성 대화 스크립트',
    description: '두 캐릭터의 감정선이 교차하는 장면.',
    promptText:
      'Create a dialogue between a veteran astronaut and an AI companion at the edge of Saturn.'
  },
  {
    id: 'translation-localization',
    category: 'translation',
    title: '게임 튜토리얼 현지화',
    description: '밈/인터넷 슬랭을 포함한 자연스러운 한국어 번역.',
    promptText:
      'Localize this casual mobile game tutorial for Korean players, keeping the playful tone.'
  },
  {
    id: 'translation-technical',
    category: 'translation',
    title: '보안 문서 번역',
    description: '암호화 API 가이드를 한국어로 정확히 옮기기.',
    promptText:
      'Translate a TLS mutual authentication quickstart guide into Korean without losing precision.'
  },
  {
    id: 'multimodal-research',
    category: 'multimodal',
    title: '리서치 보조 에이전트',
    description: '텍스트+이미지 입력을 요약해 정책 보고서 작성.',
    promptText:
      'Summarize findings from attached research snippets and satellite captions into a policy brief.'
  },
  {
    id: 'multimodal-design-review',
    category: 'multimodal',
    title: '디자인 시스템 리뷰',
    description: 'UI 스크린샷 기반으로 디자인 원칙 피드백.',
    promptText:
      'Given UI captures, critique accessibility, hierarchy, and offer quick Tailwind fixes.'
  },
  {
    id: 'general-productivity',
    category: 'general',
    title: '제품 출시 체크리스트',
    description: 'Launch Day 체크리스트를 역할별로 분류.',
    promptText:
      'Build a cross-functional launch-day checklist grouped by PM, Eng, Design, Support.'
  },
  {
    id: 'general-safety',
    category: 'general',
    title: 'LLM 거버넌스 가이드',
    description: '조직에서 LLM을 안전하게 도입하는 베스트 프랙티스.',
    promptText:
      'Outline a practical governance playbook for adopting LLMs inside a regulated enterprise.'
  }
];

const makeAnswer = (answer: Omit<ModelAnswer, 'scoreReasoning' | 'scoreStructure' | 'scoreStyle' | 'scoreKoQuality'> & {
  scores: Pick<ModelAnswer, 'scoreReasoning' | 'scoreStructure' | 'scoreStyle' | 'scoreKoQuality'>;
}): ModelAnswer => ({
  ...answer,
  scoreReasoning: answer.scores.scoreReasoning,
  scoreStructure: answer.scores.scoreStructure,
  scoreStyle: answer.scores.scoreStyle,
  scoreKoQuality: answer.scores.scoreKoQuality
});

const answers: ModelAnswer[] = [
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'coding-architecture',
    answerPreview: '서비스 모듈, 플랫폼 모듈, 실험 모듈로 나누어 기능 플래그를 겹치는 구조를 제안.',
    fullAnswer:
      'GPT-5.1은 core-platform, service, experiment 세 도메인으로 나눈 멀티레포 전략을 제시하고, Turborepo 캐시, LaunchDarkly 연계를 포함한 상세 배포 단계를 적었습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 3200
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'coding-architecture',
    answerPreview: 'Region-aware edge API 계층과 Config-as-Data 접근법을 강조.',
    fullAnswer:
      'Gemini 3은 Cloud Deploy + Config Sync를 조합해 리전별 기능 차이를 선언적으로 관리하라고 권장하고, Pub/Sub 기반 감사 파이프라인까지 포함했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 3600
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'coding-architecture',
    answerPreview: '모놀리식에서 feature capsule로 나누되 DevRel 친화 문체.',
    fullAnswer:
      'Grok 4.1은 “capsule”이라는 재미있는 메타포를 쓰며 팀별 실험 공간을 강조했지만, 배포 전략은 다소 간략했습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 3 },
    latencyMs: 2100
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'coding-architecture',
    answerPreview: '거버넌스, 감사, 위험 완화 플랜까지 포함한 상세 제안.',
    fullAnswer:
      'Claude Opus 4.5는 역할별 책임과 change advisory board를 명확히 정의하고, feature flag 실험 규약을 템플릿과 함께 제시했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 4000
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'coding-agent-automation',
    answerPreview: 'LLM 에이전트 역할 3단계(감시, 진단, 수정)와 자동 PR 흐름.',
    fullAnswer:
      'GPT-5.1은 CI 이벤트를 webhooks로 수집하고, 실패 로그를 파싱하는 reasoning agent, 수정 제안 agent, 검증 agent를 분리했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 2900
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'coding-agent-automation',
    answerPreview: 'Vertex AI Agent Builder 활용 방안을 자세히 서술.',
    fullAnswer:
      'Gemini 3은 Cloud Build 로그를 BigQuery로 적재한 뒤 Vertex Agent가 쿼리하여 실패 패턴을 라벨링하는 흐름을 설명했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 3100
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'coding-agent-automation',
    answerPreview: '재치 있는 observability 비유와 빠른 롤백 플랜.',
    fullAnswer:
      'Grok 4.1은 “릴리즈 DJ” 콘셉트로 에이전트를 묘사하면서도 roll-forward 전략과 chatops 알림까지 언급했습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 1800
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'coding-agent-automation',
    answerPreview: '안전 가드레일과 승인 체계를 정교하게 정의.',
    fullAnswer:
      'Claude Opus 4.5는 human-in-the-loop 체크포인트, 책임자 승인, audit log 템플릿을 포함한 세밀한 거버넌스를 제공했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3800
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'reasoning-systems-thinking',
    answerPreview: '모달 셰어링, 대중교통 가격 신호, 라스트마일 통합을 정량 근거와 함께.',
    fullAnswer:
      'GPT-5.1은 혼잡세 시나리오별 교통량 변화를 추정 그래프와 함께 설명하고, 민관 데이터 공유 모델을 제안했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 3500
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'reasoning-systems-thinking',
    answerPreview: '위성 데이터/모바일 데이터를 결합한 정책 실험.',
    fullAnswer:
      'Gemini 3은 대중교통 할인과 구독 기반 마이크로 모빌리티를 묶어 실시간 시뮬레이션을 제안했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 3900
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'reasoning-systems-thinking',
    answerPreview: '생활 패턴 변화 캠페인에 초점을 맞춘 창의적 제안.',
    fullAnswer:
      'Grok 4.1은 “야근 없는 수요일” 같은 캠페인을 제안하며 시민 참여 스토리를 강조했지만, 수치 근거는 적었습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 2300
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'reasoning-systems-thinking',
    answerPreview: '법·재정 프레임과 리스크를 균형 있게 설명.',
    fullAnswer:
      'Claude Opus 4.5는 장단기 KPI, 이해관계자 지도, 재원 조달 방식을 체계적으로 배치했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 4100
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'reasoning-counterfactual',
    answerPreview: '반사실 세 가지를 수요 탄력성 차트로 비교.',
    fullAnswer:
      'GPT-5.1은 OEM이 wafer bank를 늘리는 전략, Tier-1을 공동 구매사로 묶는 전략 등을 비교해 가장 안정적 시나리오를 제시했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 3300
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'reasoning-counterfactual',
    answerPreview: '위험 전파 그래프와 복구 시간 추정.',
    fullAnswer:
      'Gemini 3은 공급망 디지털 트윈을 활용해 counterfactual 분석을 정량화하는 단계를 서술했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 3600
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'reasoning-counterfactual',
    answerPreview: '대담한 대체 소재 실험에 집중.',
    fullAnswer:
      'Grok 4.1은 비전통 재료를 쓰는 스타트업 과감 투자안을 제안했으나 세부 실행은 다소 단순했습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 3 },
    latencyMs: 2000
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'reasoning-counterfactual',
    answerPreview: '위험 관리, 보험, 규제 보고까지 포함.',
    fullAnswer:
      'Claude Opus 4.5는 OEM·정부·금융기관 간 공조 체계를 상세히 정리했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 4200
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'creative-brand-story',
    answerPreview: '기후 위기 세대를 위한 Manifesto를 역동적 톤으로 작성.',
    fullAnswer:
      'GPT-5.1은 “Repair what we wear” 슬로건을 제시하며 제품 라이프사이클 데이터까지 녹였습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 2800
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'creative-brand-story',
    answerPreview: '환경 데이터 시각화를 내세우는 서사.',
    fullAnswer:
      'Gemini 3은 위성 데이터 기반 탄소 저감 그래픽을 활용하는 브랜드 세계관을 묘사했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 3000
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'creative-brand-story',
    answerPreview: '톡톡 튀는 은유와 유머가 살아 있는 Manifesto.',
    fullAnswer:
      'Grok 4.1은 “지구와 데이트하기” 같은 표현으로 Z세대 감성을 살렸고, 짧은 문장으로 리듬감을 만들었습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 1700
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'creative-brand-story',
    answerPreview: '품격 있는 문체로 책임 경영 메시지를 전달.',
    fullAnswer:
      'Claude Opus 4.5는 선언문 형식으로 지속가능성 지표와 커뮤니티 약속을 구조화했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3600
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'creative-dialogue',
    answerPreview: '우주선의 기술적 세부 묘사와 감정선을 균형 있게.',
    fullAnswer:
      'GPT-5.1은 Saturn edge에서 발생한 장비 문제와 추억을 엮어 잔잔한 감정을 그렸습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 2500
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'creative-dialogue',
    answerPreview: '시각적 묘사에 강점, 다만 감성 곡선은 절제.',
    fullAnswer:
      'Gemini 3은 반지름, 광선 등 과학적 묘사를 풍부하게 넣었지만, 감정 변화는 담담했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 2800
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'creative-dialogue',
    answerPreview: '재치 있는 농담과 감정 분출이 돋보임.',
    fullAnswer:
      'Grok 4.1은 AI 동반자가 대담한 유머로 긴장감을 풀어주는 서사를 만들었습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 1600
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'creative-dialogue',
    answerPreview: '품격 있는 대화체, 인간-기계 신뢰를 강조.',
    fullAnswer:
      'Claude Opus 4.5는 윤리, 책임, 사명의식을 이야기의 중심에 놓았습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3400
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'translation-localization',
    answerPreview: '게임 특유의 밈을 자연스럽게 옮김.',
    fullAnswer:
      'GPT-5.1은 “튀김 파워” 같은 표현을 한국 게이머 용어로 재치 있게 변환했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 2100
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'translation-localization',
    answerPreview: '명확한 지침, 다만 톤은 다소 정제.',
    fullAnswer:
      'Gemini 3은 UI 문자열을 정확히 옮겼지만, 밈 표현은 중립적입니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 2400
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'translation-localization',
    answerPreview: '과감한 한국 인터넷 밈을 삽입.',
    fullAnswer:
      'Grok 4.1은 “손가락 컨트롤 장인” 같은 표현을 써서 유쾌했지만 일부 용어가 과감했습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 1500
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'translation-localization',
    answerPreview: '정제된 번역과 자연스러운 문장 조합.',
    fullAnswer:
      'Claude Opus 4.5는 문맥에 맞는 존대와 반말 전환을 섬세하게 처리했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3200
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'translation-technical',
    answerPreview: 'TLS 용어를 최신 RFC에 맞춰 번역.',
    fullAnswer:
      'GPT-5.1은 mutual TLS handshake 단계를 표로 정리하며 정확한 한국어 용어를 사용했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 2600
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'translation-technical',
    answerPreview: 'Cloud 문서 스타일과 일관된 번역.',
    fullAnswer:
      'Gemini 3은 구글 개발자 문서 톤을 그대로 재현했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 2900
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'translation-technical',
    answerPreview: '친근한 톤이지만 정확도는 다소 낮음.',
    fullAnswer:
      'Grok 4.1은 용어를 쉬운 표현으로 풀어 설명했으나 일부 인증 용어를 의역했습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 4, scoreKoQuality: 3 },
    latencyMs: 1700
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'translation-technical',
    answerPreview: '법적/보안 표현을 매우 정밀하게 유지.',
    fullAnswer:
      'Claude Opus 4.5는 인증서 정책, 만료 전략 등 세부사항을 충실히 옮겼습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3600
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'multimodal-research',
    answerPreview: '이미지 캡션과 텍스트를 묶어 정책 결론을 제시.',
    fullAnswer:
      'GPT-5.1은 위성 이미지의 산불 흔적과 텍스트 데이터를 연결해 재생림 정책을 권고했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 3100
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'multimodal-research',
    answerPreview: '이미지 인식 세부 수치까지 언급하며 탁월.',
    fullAnswer:
      'Gemini 3은 캡션의 열지도 수치를 인용하고, 텍스트 출처를 조합한 정책 KPI를 제시했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 3300
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'multimodal-research',
    answerPreview: '서사적으로 훌륭하지만 데이터 인용은 단순.',
    fullAnswer:
      'Grok 4.1은 현장 스토리를 중심으로 작성해 공감은 좋았으나, 수치 근거가 부족했습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 1900
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'multimodal-research',
    answerPreview: '정책 윤리·안전 관점까지 포함.',
    fullAnswer:
      'Claude Opus 4.5는 데이터 출처 신뢰도, 정책 위험 완화까지 서술했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3900
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'multimodal-design-review',
    answerPreview: '스크린별 계층과 Tailwind 토큰 교체안 제시.',
    fullAnswer:
      'GPT-5.1은 대비 비율을 계산하고, className diff를 샘플 코드로 보여줬습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 2600
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'multimodal-design-review',
    answerPreview: '시각 분석과 색채 조합 제안에 강점.',
    fullAnswer:
      'Gemini 3은 Material Theme 대비표를 언급하며 Tailwind 색상 매핑을 추천했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 3000
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'multimodal-design-review',
    answerPreview: '디자이너 친화적 멘트, 구체 수치는 적음.',
    fullAnswer:
      'Grok 4.1은 “Hierarchy remix”라는 표현으로 개선 아이디어를 설명했습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 1700
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'multimodal-design-review',
    answerPreview: 'WCAG 지표, 리스크를 함께 제공.',
    fullAnswer:
      'Claude Opus 4.5는 접근성 평가표와 tailwind 클래스 변경안을 블록별로 정리했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3600
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'general-productivity',
    answerPreview: '역할별 체크리스트를 시간대 순으로 정렬.',
    fullAnswer:
      'GPT-5.1은 T-7일 ~ T+1일 타임라인에 PM/Eng/Design/Support 체크를 세분화했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 2400
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'general-productivity',
    answerPreview: 'Google Workspace 자동화 팁과 연동.',
    fullAnswer:
      'Gemini 3은 Chat Sheets, AppScript 자동화를 함께 제시했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 4, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 2600
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'general-productivity',
    answerPreview: '팀 사기를 올리는 메시지를 곳곳에 배치.',
    fullAnswer:
      'Grok 4.1은 체크리스트에 짧은 유머를 넣어 분위기를 살렸습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 1400
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'general-productivity',
    answerPreview: '리스크, 승인, 책임 매트릭스를 명시.',
    fullAnswer:
      'Claude Opus 4.5는 RACI 표와 위험 대응 절차까지 포함했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3200
  }),
  makeAnswer({
    modelId: 'gpt-5.1',
    promptId: 'general-safety',
    answerPreview: 'LLM 거버넌스 5계층(정책→모니터링)을 정의.',
    fullAnswer:
      'GPT-5.1은 Prompt 저장, Drift 감지, 책임자 승인 등 운영 절차를 구체화했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 4, scoreStyle: 4, scoreKoQuality: 4 },
    latencyMs: 3000
  }),
  makeAnswer({
    modelId: 'gemini-3',
    promptId: 'general-safety',
    answerPreview: '데이터 등급별 접근 정책을 예시 다이어그램으로 설명.',
    fullAnswer:
      'Gemini 3은 Cloud DLP, Access Transparency 등 구글 생태계 기능을 연결했습니다.',
    scores: { scoreReasoning: 4, scoreStructure: 5, scoreStyle: 3, scoreKoQuality: 4 },
    latencyMs: 3300
  }),
  makeAnswer({
    modelId: 'grok-4.1',
    promptId: 'general-safety',
    answerPreview: '윤리 가이드라인을 스토리텔링으로 전달.',
    fullAnswer:
      'Grok 4.1은 “Red Team Café”라는 가상의 워크숍을 묘사하며 참여를 유도했습니다.',
    scores: { scoreReasoning: 3, scoreStructure: 3, scoreStyle: 5, scoreKoQuality: 4 },
    latencyMs: 1900
  }),
  makeAnswer({
    modelId: 'claude-opus-4.5',
    promptId: 'general-safety',
    answerPreview: '세부 통제, 감사, 윤리 프레임을 완비.',
    fullAnswer:
      'Claude Opus 4.5는 ISO/IEC 가이드라인을 근거로 지표를 제안했습니다.',
    scores: { scoreReasoning: 5, scoreStructure: 5, scoreStyle: 4, scoreKoQuality: 5 },
    latencyMs: 3800
  })
];

export const llmDataset: LlmDataset = {
  models,
  prompts,
  answers
};

export const modelMap = Object.fromEntries(models.map((model) => [model.id, model]));

export function getModelById(id: LlmModelId) {
  return modelMap[id];
}

export function getPromptById(id: string) {
  return prompts.find((prompt) => prompt.id === id);
}

export function getPromptsByCategory(category: PromptCategory) {
  return prompts.filter((prompt) => prompt.category === category);
}

export function getAnswersForPrompt(promptId: string) {
  return answers.filter((answer) => answer.promptId === promptId);
}

export function getAnswersByModel(modelId: LlmModelId) {
  return answers.filter((answer) => answer.modelId === modelId);
}

export function getCategories() {
  return Object.keys(promptCategoryLabels) as PromptCategory[];
}

export function summarizeScores(modelId: LlmModelId) {
  const modelAnswers = getAnswersByModel(modelId);
  const total = modelAnswers.length || 1;

  const aggregate = modelAnswers.reduce(
    (acc, answer) => {
      acc.scoreReasoning += answer.scoreReasoning;
      acc.scoreStructure += answer.scoreStructure;
      acc.scoreStyle += answer.scoreStyle;
      acc.scoreKoQuality += answer.scoreKoQuality;
      return acc;
    },
    { scoreReasoning: 0, scoreStructure: 0, scoreStyle: 0, scoreKoQuality: 0 }
  );

  return {
    scoreReasoning: +(aggregate.scoreReasoning / total).toFixed(2),
    scoreStructure: +(aggregate.scoreStructure / total).toFixed(2),
    scoreStyle: +(aggregate.scoreStyle / total).toFixed(2),
    scoreKoQuality: +(aggregate.scoreKoQuality / total).toFixed(2)
  };
}

export type ModelCategoryStrength = {
  modelId: LlmModelId;
  category: PromptCategory;
  average: number;
};

export function buildCategoryMatrix(): ModelCategoryStrength[] {
  return models.flatMap((model) =>
    getCategories().map((category) => {
      const promptIds = getPromptsByCategory(category).map((prompt) => prompt.id);
      const subset = answers.filter(
        (answer) => answer.modelId === model.id && promptIds.includes(answer.promptId)
      );
      const avg =
        subset.reduce((acc, item) => acc + item.scoreReasoning + item.scoreStructure, 0) /
          (subset.length * 2 || 1) || 0;
      return {
        modelId: model.id,
        category,
        average: +avg.toFixed(2)
      } satisfies ModelCategoryStrength;
    })
  );
}
