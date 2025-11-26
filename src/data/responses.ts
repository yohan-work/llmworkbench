import type { ResponseExample, CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  {
    id: 'layout',
    name: 'Layout & Structure',
    nameKo: '레이아웃/구조',
    icon: 'Layout',
    description: 'HTML 구조 설계 및 CSS 레이아웃(Flex/Grid) 구현',
  },
  {
    id: 'styling',
    name: 'Styling & Design',
    nameKo: '스타일링/디자인',
    icon: 'Palette',
    description: '매력적인 UI 디자인 및 CSS 애니메이션 효과',
  },
  {
    id: 'interaction',
    name: 'Interaction',
    nameKo: '인터랙션(JS)',
    icon: 'MousePointerClick',
    description: 'JavaScript를 활용한 동적 기능 및 DOM 조작',
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    nameKo: '웹 접근성/표준',
    icon: 'Accessibility',
    description: '스크린 리더 지원 및 시맨틱 마크업 준수',
  },
  {
    id: 'troubleshooting',
    name: 'Troubleshooting',
    nameKo: '문제해결/디버깅',
    icon: 'Wrench',
    description: 'CSS 깨짐 현상 해결 및 버그 수정',
  },
];

export const responseExamples: ResponseExample[] = [
  {
    id: 'layout-1',
    category: 'layout',
    question: 'CSS Flexbox를 사용하여 박스 안에 있는 텍스트를 수직, 수평 모두 완벽하게 중앙 정렬하는 코드를 작성해줘. 초보자도 이해하기 쉽게 주석도 달아줘.',
    responses: {
      'gpt-5.1': {
        response: `\`\`\`html
<div class="container">
  <p class="content">중앙 정렬</p>
</div>

<style>
.container {
  display: flex;          /* Flexbox 모드 켜기 */
  justify-content: center; /* 가로(메인축) 방향 중앙 정렬 */
  align-items: center;     /* 세로(교차축) 방향 중앙 정렬 */
  
  height: 300px;          /* 부모 높이가 있어야 세로 정렬이 보임 */
  background-color: #f0f0f0;
}
</style>
\`\`\`

가장 널리 쓰이는 3줄 공식입니다:
1. \`display: flex\`로 부모를 플렉스 컨테이너로 만듭니다.
2. \`justify-content: center\`로 가로축 가운데로 보냅니다.
3. \`align-items: center\`로 세로축 가운데로 보냅니다.`,
        strengths: ['가장 표준적인 방법 제시', '명확한 주석 설명', '부모 높이 필요성 언급'],
        weaknesses: ['Grid 대안 설명 없음'],
        rating: 9.5,
      },
      'gemini-3.0': {
        response: `CSS Grid를 사용하면 더 간단하게 할 수 있어요!

\`\`\`css
.container {
  display: grid;        /* Grid 모드 사용 */
  place-items: center;  /* 가로/세로 한번에 중앙 정렬 */
  
  height: 100vh;        /* 화면 전체 높이 사용 */
}
\`\`\`

물론 Flexbox를 원하신다면:
\`\`\`css
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
\`\`\`

최신 브라우저에서는 Grid의 \`place-items: center\`가 가장 코드가 짧고 강력합니다.`,
        strengths: ['최신 트렌드(Grid) 소개', '두 가지 방법 비교', '간결한 코드'],
        weaknesses: ['Flexbox 요청에 Grid를 먼저 제안함'],
        rating: 9.2,
      },
      'claude-opus-4.5': {
        response: `안녕하세요! 초보자분들이 가장 많이 궁금해하시는 "마법의 3줄 코드"를 알려드릴게요.

\`\`\`css
.box {
  /* 1. 플렉스 박스 선언 */
  display: flex;
  
  /* 2. 가로 방향(X축) 중앙 정렬 */
  justify-content: center;
  
  /* 3. 세로 방향(Y축) 중앙 정렬 */
  align-items: center;
}
\`\`\`

**💡 팁:**
세로 정렬(\`align-items\`)이 작동하지 않는다면, 부모 박스(\`.box\`)에 **높이(\`height\`)가 지정되어 있는지** 꼭 확인해보세요! 높이가 글자 크기만큼만 있다면 중앙에 온 건지 티가 안 나거든요.`,
        strengths: ['초보자 눈높이 설명', '흔한 실수(높이 지정) 강조', '친절한 톤'],
        weaknesses: ['HTML 구조 예시 없음'],
        rating: 9.8,
      },
      'grok-3': {
        response: `자, 이거 복사해서 붙여넣으세요! 🚀

\`\`\`css
.center-me {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 화면 꽉 차게 */
}
\`\`\`

끝입니다. 쉽죠? 😎 
\`justify\`는 가로, \`align\`은 세로라고 외우면 편해요!`,
        strengths: ['실용적이고 빠름', '외우는 팁 제공', '즉시 사용 가능'],
        weaknesses: ['원리 설명이 부족함'],
        rating: 8.5,
      },
    },
    analysis: 'Claude가 초보자가 자주 범하는 실수(높이 미지정)까지 짚어주어 교육용으로 가장 적합합니다. GPT는 정석적인 답변을, Gemini는 더 최신 기술을 제안하는 특징이 있습니다.',
    recommendedModel: 'claude-opus-4.5',
  },
  {
    id: 'troubleshooting-1',
    category: 'troubleshooting',
    question: '모바일 메뉴를 만들었는데, 메뉴를 열었을 때 뒤에 있는 본문 내용이 스크롤되지 않게 막고 싶어. (`body` 스크롤 막기) 어떻게 해야 해?',
    responses: {
      'gpt-5.1': {
        response: `자바스크립트로 메뉴가 열릴 때 \`body\`에 스타일을 추가하면 됩니다.

\`\`\`javascript
// 메뉴 열기
function openMenu() {
  document.body.style.overflow = 'hidden'; // 스크롤 막기
  document.querySelector('.menu').classList.add('active');
}

// 메뉴 닫기
function closeMenu() {
  document.body.style.overflow = ''; // 스크롤 다시 허용 (초기화)
  document.querySelector('.menu').classList.remove('active');
}
\`\`\`

**설명:**
- \`overflow: hidden\`을 주면 화면 밖으로 넘치는 내용을 잘라내면서 스크롤바가 사라집니다.
- 닫을 때는 빈 문자열 \`''\`을 할당하여 CSS 원래 설정으로 되돌립니다.`,
        strengths: ['명확한 해결책', '열기/닫기 로직 모두 제공', '원리 설명'],
        weaknesses: ['iOS 사파리 버그 처리 미언급'],
        rating: 9.0,
      },
      'gemini-3.0': {
        response: `기본적으로는 \`overflow: hidden\`을 사용하지만, CSS 클래스로 제어하는 것이 더 깔끔합니다.

**CSS:**
\`\`\`css
body.no-scroll {
  overflow: hidden;
}
\`\`\`

**JavaScript:**
\`\`\`javascript
const toggleMenu = () => {
  const body = document.body;
  body.classList.toggle('no-scroll');
};
\`\`\`

주의사항: iOS 모바일 사파리에서는 단순히 이것만으로 안 될 때가 있어서 \`position: fixed; width: 100%;\`를 같이 줘야 할 수도 있습니다.`,
        strengths: ['Class 토글 방식 권장', 'iOS 이슈 언급', '유지보수 용이성'],
        weaknesses: ['iOS 해결책 코드가 구체적이지 않음'],
        rating: 9.3,
      },
      'claude-opus-4.5': {
        response: `\`body\` 태그에 \`overflow: hidden\`을 주는 것이 정석입니다! 하지만 초보자분이시라면 CSS 클래스를 떼었다 붙였다 하는 방식을 추천해요.

1. **CSS에 클래스 미리 만들기**
\`\`\`css
.stop-scrolling {
  overflow: hidden;
  height: 100vh; /* 모바일에서 확실하게 잡기 위해 */
}
\`\`\`

2. **JS로 클래스 넣고 빼기**
\`\`\`javascript
const btn = document.querySelector('.menu-btn');

btn.addEventListener('click', () => {
  // body 태그에 클래스를 토글(있으면 빼고, 없으면 넣기)
  document.body.classList.toggle('stop-scrolling');
});
\`\`\`

이렇게 하면 자바스크립트 안에서 CSS 속성을 직접 건드리지 않아서 코드가 훨씬 깔끔해집니다!`,
        strengths: ['단계별 친절한 설명', 'height: 100vh 팁', '코드 깔끔함 강조'],
        weaknesses: ['심화 이슈(iOS scroll bounce) 생략'],
        rating: 9.4,
      },
      'grok-3': {
        response: `간단합니다. 스크롤바 뺏어버리면 됩니다! 👮‍♂️

\`\`\`javascript
// 메뉴 열 때
document.body.style.overflow = "hidden";

// 메뉴 닫을 때
document.body.style.overflow = "auto";
\`\`\`

근데 이거 하면 PC에서는 스크롤바 사라지면서 화면이 덜컥(layout shift) 거릴 수 있어요. 그건 좀 고급 기술이라 나중에 설명해드릴게요!`,
        strengths: ['핵심만 전달', '레이아웃 시프트 부작용 언급', '재치있는 표현'],
        weaknesses: ['해결책은 나중으로 미룸'],
        rating: 8.8,
      },
    },
    analysis: 'Gemini와 Claude가 CSS 클래스 토글 방식을 권장하여 좋은 습관을 길러줍니다. Gemini는 모바일(iOS) 이슈를, Grok은 PC 레이아웃 시프트 이슈를 짚어주는 등 각자 디테일이 다릅니다.',
    recommendedModel: 'claude-opus-4.5',
  },
  {
    id: 'accessibility-1',
    category: 'accessibility',
    question: '이미지 태그 `<img>`를 쓸 때 `alt` 속성은 왜 꼭 써야 해? 그냥 비워두면 안 돼? 시각장애인을 위한 거라고만 알고 있어.',
    responses: {
      'gpt-5.1': {
        response: `\`alt\` 속성(대체 텍스트)은 필수입니다. 이유는 크게 3가지입니다:

1. **웹 접근성 (Accessibility)**: 시각 장애인분들이 스크린 리더를 사용할 때, 이 텍스트를 읽어주어 이미지의 내용을 파악할 수 있게 합니다.
2. **SEO (검색 엔진 최적화)**: 구글 같은 검색 로봇은 이미지를 볼 수 없어서 텍스트로 내용을 이해합니다. 검색 결과 노출에 중요합니다.
3. **엑박 대비**: 네트워크 오류로 이미지가 로딩되지 않을 때, 대신 텍스트가 표시되어 사용자가 내용을 짐작할 수 있습니다.

**작성 팁:**
- 의미 없는 장식용 이미지라면? \`alt=""\` 처럼 빈 값을 두세요. (스크린 리더가 무시하고 넘어갑니다)`,
        strengths: ['3가지 핵심 이유 명확', 'SEO 관점 언급', '빈 값 처리 방법 안내'],
        weaknesses: ['예시가 조금 더 있었으면 좋음'],
        rating: 9.5,
      },
      'gemini-3.0': {
        response: `비워두면 안 됩니다! 하지만 **어떻게** 비우느냐가 중요합니다.

1. **의미 있는 이미지 (상품 사진 등)**
   - \`alt="빨간색 반팔 티셔츠 앞면"\` -> 필수! 구글 검색에도 잡히고 스크린 리더도 읽습니다.

2. **장식용 이미지 (배경 무늬, 아이콘)**
   - \`alt=""\` (빈 값) -> 추천. 스크린 리더가 "이미지"라고 안 읽고 조용히 넘어갑니다.
   - 아예 \`alt\`를 안 쓰면? -> 스크린 리더가 파일명(image_01.jpg)을 읽어버려서 시각장애인에게 소음이 됩니다.

**결론:** \`alt\` 속성 자체는 무조건 적되, 장식이면 빈 따옴표를 쓰세요.`,
        strengths: ['구체적 상황별 가이드', '안 썼을 때의 부작용(파일명 읽기) 경고', '실무적 조언'],
        weaknesses: ['SEO 설명이 다소 적음'],
        rating: 9.7,
      },
      'claude-opus-4.5': {
        response: `네, 시각장애인분들을 위한 것이 가장 큰 이유지만, **퍼블리셔인 당신을 위해서도** 중요해요!

**왜 중요할까요?**
1. **검색엔진이 좋아해요**: "예쁜 신발" 사진을 올려도 설명이 없으면 구글은 모릅니다. \`alt="여름용 편한 샌들"\`이라고 적어주면 검색에 걸립니다.
2. **이미지가 깨졌을 때**: 서버 문제로 이미지가 안 뜰 때, 텍스트라도 나와야 사용자가 "아 여기 뭐가 있었구나" 하고 알 수 있죠.

**초보자를 위한 팁:**
- "사진", "이미지" 같은 말은 쓰지 마세요. (스크린 리더가 알아서 "이미지"라고 말해줍니다)
- 그냥 눈 감고 친구에게 설명한다고 생각하고 적어보세요!`,
        strengths: ['공감 가는 설명', '직관적인 작성 팁(친구에게 설명)', '퍼블리셔 이익 강조'],
        weaknesses: ['장식용 이미지 처리 설명 부족'],
        rating: 9.2,
      },
      'grok-3': {
        response: `안 쓰면 구글이 싫어하고, 스크린 리더 사용자가 화냅니다! 🚫

- **의미 있으면:** 설명 적으세요.
- **장식이면:** \`alt=""\` 빈칸으로 두세요.
- **아예 없으면:** HTML 표준 위반입니다. (유효성 검사 통과 못함)

그냥 습관 들이세요. \`src\` 쓰는 순간 \`alt\`도 같이 쓰는 겁니다. 1+1 세트 메뉴처럼요!`,
        strengths: ['강렬한 경고', 'HTML 표준 위반 언급', '1+1 비유'],
        weaknesses: ['설명이 다소 짧음'],
        rating: 8.9,
      },
    },
    analysis: 'Gemini가 실무에서 가장 중요한 "장식용 이미지 처리 방법(빈 값 vs 생략)"의 차이를 명확히 설명해주어 퍼블리셔에게 가장 유익합니다. GPT는 교과서적인 설명을 잘 해줍니다.',
    recommendedModel: 'gemini-3.0',
  },
  {
    id: 'interaction-1',
    category: 'interaction',
    question: '버튼을 클릭하면 "다크 모드"가 켜지고 꺼지는 기능을 만들고 싶어. classList.toggle을 쓰면 된다던데 예시 코드 보여줘.',
    responses: {
      'gpt-5.1': {
        response: `\`\`\`html
<!-- HTML -->
<button id="theme-btn">다크 모드 토글</button>

<style>
  body {
    background: white;
    color: black;
    transition: 0.3s; /* 부드럽게 바뀌도록 */
  }
  
  /* 다크 모드일 때 스타일 */
  body.dark-mode {
    background: #333;
    color: white;
  }
</style>

<script>
  const btn = document.getElementById('theme-btn');
  
  btn.addEventListener('click', function() {
    // body에 'dark-mode' 클래스를 넣었다 뺐다 함
    document.body.classList.toggle('dark-mode');
  });
</script>
\`\`\`

이렇게 하면 버튼을 누를 때마다 \`body\` 태그에 \`dark-mode\` 클래스가 추가되거나 제거되어 스타일이 바뀝니다.`,
        strengths: ['완벽한 예제 코드', 'CSS transition 팁', '주석 설명'],
        weaknesses: ['사용자 설정 저장(localStorage) 미언급'],
        rating: 9.4,
      },
      'gemini-3.0': {
        response: `네, \`classList.toggle\`이 핵심입니다! 여기에 사용자의 선택을 기억하는 기능까지 추가해볼까요?

\`\`\`javascript
const btn = document.querySelector('#mode-toggle');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // (심화) 사용자의 선택을 브라우저에 저장하기
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
\`\`\`

이렇게 \`localStorage\`를 활용하면 새로고침해도 다크 모드가 유지됩니다. 퍼블리싱 포트폴리오에 넣기 딱 좋은 기능이죠!`,
        strengths: ['심화 기능(저장) 제안', '포트폴리오 팁', '현대적인 화살표 함수 사용'],
        weaknesses: ['CSS 코드는 생략됨'],
        rating: 9.6,
      },
      'claude-opus-4.5': {
        response: `가장 심플하게 구현해볼까요? HTML, CSS, JS가 어떻게 연결되는지 보세요.

1. **CSS**: \`.dark\` 클래스가 붙으면 색을 반전시킵니다.
2. **JS**: 클릭하면 그 클래스를 스위치처럼 껐다 킵니다.

\`\`\`javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  // 버튼 글자도 바꿔주면 더 좋겠죠?
  if (document.body.classList.contains('dark')) {
    button.innerText = "라이트 모드 켜기 ☀️";
  } else {
    button.innerText = "다크 모드 켜기 🌙";
  }
});
\`\`\`

사용자 경험(UX)을 위해 버튼 텍스트도 같이 바꿔주는 디테일을 추가했습니다!`,
        strengths: ['UX 고려(버튼 텍스트 변경)', '작동 원리 설명', '초보자 친화적'],
        weaknesses: ['전체 코드가 아닌 JS 중심'],
        rating: 9.3,
      },
      'grok-3': {
        response: `코드 나갑니다. ⚡️

\`\`\`html
<button onclick="document.body.classList.toggle('dark')">
  모드 전환
</button>
\`\`\`

HTML 태그 안에 바로 넣을 수도 있어요(인라인 방식). 코드가 엄청 짧아지죠? 하지만 실무에서는 \`addEventListener\`를 쓰는 게 더 권장됩니다. 관리하기 편하거든요.`,
        strengths: ['극단적으로 짧은 코드(인라인)', '실무 권장사항 언급', '흥미 유발'],
        weaknesses: ['인라인 방식은 초보자에게 나쁜 습관이 될 수 있음'],
        rating: 8.7,
      },
    },
    analysis: 'Gemini가 브라우저 저장소(localStorage)를 언급하여 실무적인 완성도를 높여주었고, Claude는 버튼 텍스트 변경이라는 UX 디테일을 챙겼습니다. GPT는 기본에 충실합니다.',
    recommendedModel: 'gemini-3.0',
  },
];

export const getExamplesByCategory = (category: string): ResponseExample[] => {
  return responseExamples.filter(example => example.category === category);
};
