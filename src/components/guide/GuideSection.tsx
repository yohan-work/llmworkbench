import { useState } from 'react';
import Section from '../layout/Section';
import UseCaseCard from './UseCaseCard';
import { useCases } from '../../data/useCases';
import { models } from '../../data/models';

export default function GuideSection() {
  const [selectedUseCase, setSelectedUseCase] = useState(useCases[0].id);

  const currentUseCase = useCases.find((uc) => uc.id === selectedUseCase);

  return (
    <Section
      id="guide"
      title="사용 사례별 추천"
      subtitle="목적에 맞는 최적의 모델을 찾아보세요. 각 사용 사례에 대한 상세 가이드와 팁을 제공합니다."
    >
      {/* Use Case Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
        {useCases.map((useCase) => (
          <UseCaseCard
            key={useCase.id}
            useCase={useCase}
            isActive={selectedUseCase === useCase.id}
            onClick={() => setSelectedUseCase(useCase.id)}
          />
        ))}
      </div>

      {/* Selected Use Case Details */}
      {currentUseCase && (
        <div className="glass-card p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Description and Tips */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-2">
                {currentUseCase.titleKo}
              </h3>
              <p className="text-gray-400 mb-6">{currentUseCase.description}</p>

              {/* Tips */}
              <div className="bg-navy-700/30 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-neon-blue mb-3">
                  💡 활용 팁
                </h4>
                <ul className="space-y-2">
                  {currentUseCase.tips.map((tip, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="text-neon-green mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Recommendations */}
            <div className="lg:w-1/2">
              <h4 className="text-sm font-semibold text-gray-400 mb-4">
                추천 모델 순위
              </h4>
              <div className="space-y-4">
                {currentUseCase.recommendedModels.map((rec) => {
                  const model = models.find((m) => m.id === rec.modelId);
                  if (!model) return null;

                  const rankColors: Record<number, string> = {
                    1: 'from-yellow-400/20 to-yellow-600/20 border-yellow-500/30',
                    2: 'from-gray-300/20 to-gray-500/20 border-gray-400/30',
                    3: 'from-amber-600/20 to-amber-800/20 border-amber-600/30',
                  };

                  const rankIcons: Record<number, string> = {
                    1: '🥇',
                    2: '🥈',
                    3: '🥉',
                  };

                  return (
                    <div
                      key={rec.modelId}
                      className={`p-5 rounded-xl bg-gradient-to-r ${
                        rankColors[rec.rank]
                      } border`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl">{rankIcons[rec.rank]}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: `${model.color}30` }}
                            >
                              <span
                                className="font-bold text-sm"
                                style={{ color: model.color }}
                              >
                                {model.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <h5 className="font-semibold text-white">
                                {model.name}
                              </h5>
                              <p className="text-xs text-gray-500">
                                {model.provider}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {rec.reason}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

