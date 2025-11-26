# LLM 비교 연구소 (LLM Compare Lab)

Next.js 15(App Router) + TypeScript + Tailwind + shadcn/ui 기반으로 최신 LLM 모델 비교 대시보드를 구성합니다.

## 초기 세팅

```bash
# 1. 패키지 설치
pnpm install # 또는 npm / yarn

# 2. Tailwind + PostCSS 초기화 (필요 시)
npx tailwindcss init -p

# 3. shadcn/ui 설정
npx shadcn-ui@latest init
```

> 위 명령은 이미 반영된 설정 파일을 기반으로 다시 실행해도 안전합니다.

## 주요 스크립트

- `pnpm dev` – Next.js 개발 서버
- `pnpm build` – 프로덕션 빌드
- `pnpm lint` – ESLint 검사

## 구조

- `app/` – App Router 페이지, 레이아웃
- `components/` – 재사용 UI 컴포넌트
- `data/` – 정적 LLM 비교 데이터셋
- `lib/` – 유틸리티 함수

## 환경 변수

현재 정적 데이터만 사용하므로 환경 변수는 필요하지 않습니다. 추후 Supabase/DB 연동 시 `.env.local`에 API 키를 추가하세요.
