import { useState } from 'react';
import Section from '../layout/Section';
import PricingTable from './PricingTable';
import CostCalculator from './CostCalculator';
import { pricingData } from '../../data/pricing';
import { models } from '../../data/models';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<'table' | 'calculator'>('table');

  // 가격 데이터에 모델 정보 추가
  const enrichedPricingData = pricingData.map((pricing) => {
    const model = models.find((m) => m.id === pricing.modelId);
    return {
      ...pricing,
      modelName: model?.name || pricing.modelId,
      modelColor: model?.color || '#ffffff',
      provider: model?.provider || '',
    };
  });

  return (
    <Section
      id="pricing"
      title="가격 비교"
      subtitle="각 모델의 API 사용 비용을 비교하고, 예상 월간 비용을 계산해보세요."
      className="bg-navy-800/30"
    >
      {/* Tab Switcher */}
      <div className="flex items-center gap-2 p-1 bg-navy-800/50 rounded-xl w-fit mb-8">
        <button
          onClick={() => setActiveTab('table')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'table'
              ? 'bg-neon-blue text-navy-900'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          가격표
        </button>
        <button
          onClick={() => setActiveTab('calculator')}
          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'calculator'
              ? 'bg-neon-blue text-navy-900'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          비용 계산기
        </button>
      </div>

      {/* Content */}
      {activeTab === 'table' ? (
        <PricingTable data={enrichedPricingData} />
      ) : (
        <CostCalculator />
      )}
    </Section>
  );
}

