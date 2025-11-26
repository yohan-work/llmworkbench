import { useState } from "react";
import Section from "../layout/Section";
import CategoryTabs from "./CategoryTabs";
import ResponseCard from "./ResponseCard";
import { categories, responseExamples } from "../../data/responses";
import type { ResponseCategory } from "../../types";
import { models } from "../../data/models";
import { Lightbulb, Trophy } from "lucide-react";

export default function ComparisonSection() {
  const [activeCategory, setActiveCategory] =
    useState<ResponseCategory>("layout");
  const [activeExampleIndex, setActiveExampleIndex] = useState(0);

  const filteredExamples = responseExamples.filter(
    (ex) => ex.category === activeCategory
  );
  const currentExample =
    filteredExamples[activeExampleIndex] || filteredExamples[0];

  const handleCategoryChange = (category: ResponseCategory) => {
    setActiveCategory(category);
    setActiveExampleIndex(0);
  };

  const recommendedModel = models.find(
    (m) => m.id === currentExample?.recommendedModel
  );

  return (
    <Section
      id="comparison"
      title="응답 비교"
      subtitle="동일한 질문에 대해 각 모델이 어떻게 다르게 응답하는지 비교해보세요."
      className="bg-navy-800/30"
    >
      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Example Selector */}
      {filteredExamples.length > 1 && (
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-gray-400">예시:</span>
          {filteredExamples.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveExampleIndex(index)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                activeExampleIndex === index
                  ? "bg-neon-blue text-navy-900"
                  : "bg-navy-700/50 text-gray-400 hover:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}

      {currentExample && (
        <>
          {/* Question */}
          <div className="glass-card p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center shrink-0">
                <span className="text-neon-purple text-lg">Q</span>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">질문</h3>
                <p className="text-gray-300 leading-relaxed">
                  {currentExample.question}
                </p>
              </div>
            </div>
          </div>

          {/* Responses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {models.map((model) => (
              <ResponseCard
                key={model.id}
                model={model}
                response={currentExample.responses[model.id]}
                isRecommended={model.id === currentExample.recommendedModel}
              />
            ))}
          </div>

          {/* Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Overall Analysis */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                <h3 className="text-white font-semibold">분석</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {currentExample.analysis}
              </p>
            </div>

            {/* Recommendation */}
            <div
              className="glass-card p-6 border"
              style={{
                borderColor: `${recommendedModel?.color}30`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy
                  className="w-5 h-5"
                  style={{ color: recommendedModel?.color }}
                />
                <h3 className="text-white font-semibold">이 유형에 추천</h3>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${recommendedModel?.color}20` }}
                >
                  <span
                    className="text-xl font-bold"
                    style={{ color: recommendedModel?.color }}
                  >
                    {recommendedModel?.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {recommendedModel?.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {recommendedModel?.provider}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Section>
  );
}
