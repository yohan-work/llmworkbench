import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MethodologyPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-indigo-200">Methodology</p>
        <h1 className="text-3xl font-semibold text-white">데이터 수집 & 평가 방법</h1>
        <p className="text-sm text-slate-400">
          모든 모델은 동일한 프롬프트 세트에 응답하며, Reasoning · Structure · Style · Korean Quality · Latency 다섯 축으로 평가합니다.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>데이터 수집 가정</CardTitle>
          <CardDescription>현재는 정적 샘플 데이터지만, 실제 환경에서는 자동화 가능합니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-200">
          <ul className="list-disc space-y-2 pl-5">
            <li>공통 프롬프트 12개(카테고리별 2개)를 정의하고 주기적으로 최신 모델에 실행합니다.</li>
            <li>모든 응답은 토큰 수, 응답 시간, 메타데이터와 함께 저장됩니다.</li>
            <li>소규모 큐레이터 팀이 우선 평가하고, 향후에는 자동 점수 모델을 병행할 수 있습니다.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>평가 기준</CardTitle>
          <CardDescription>각 항목은 1~5점 스케일, 가중치는 프로젝트 요구에 맞춰 조정 가능합니다.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-base font-semibold text-white">Reasoning</h3>
            <p className="text-sm text-slate-300">논리 전개, 근거 제시, 추론 깊이.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Structure</h3>
            <p className="text-sm text-slate-300">문장 구성, 섹션 구분, 실행 가능성.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Style</h3>
            <p className="text-sm text-slate-300">톤앤매너, 목적 적합성.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Korean Quality</h3>
            <p className="text-sm text-slate-300">한국어 문장 자연스러움, 맞춤법.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Latency</h3>
            <p className="text-sm text-slate-300">응답 속도(ms) 기반 체감 성능.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>실서비스 전환 시 로드맵</CardTitle>
          <CardDescription>Supabase 등 데이터베이스와 연결하여 자동화할 수 있습니다.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-200">
          <ol className="list-decimal space-y-2 pl-5">
            <li>각 모델 API 키/버전을 관리하는 Vault를 구성하고, 프롬프트 러너를 예약 실행합니다.</li>
            <li>응답과 메타데이터를 Supabase나 Vector DB에 저장해 버전 이력을 추적합니다.</li>
            <li>자동 점수화 모델 + 휴먼 QA 조합으로 평가를 업데이트합니다.</li>
            <li>프론트엔드는 실시간 캐시와 연결해 최신 결과를 스트리밍할 수 있습니다.</li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}
