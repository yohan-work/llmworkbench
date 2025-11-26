import { useState } from "react";
import Section from "../layout/Section";
import RadarChart from "./RadarChart";
import BarChart from "./BarChart";
import { radarData, benchmarks, modelColors } from "../../data/benchmarks";
import { models } from "../../data/models";

type ChartType = "radar" | "bar";

export default function BenchmarkSection() {
  const [chartType, setChartType] = useState<ChartType>("radar");
  const [selectedModels, setSelectedModels] = useState<string[]>(
    models.map((m) => m.id)
  );

  const toggleModel = (modelId: string) => {
    setSelectedModels((prev) =>
      prev.includes(modelId)
        ? prev.filter((id) => id !== modelId)
        : [...prev, modelId]
    );
  };

  return (
    <Section
      id="benchmark"
      title="벤치마크 비교"
      subtitle="주요 AI 벤치마크에서의 성능을 비교합니다. 각 모델의 강점과 약점을 한눈에 파악하세요."
    >
      {/* Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        {/* Chart Type Toggle */}
        <div className="flex items-center gap-2 p-1 bg-navy-800/50 rounded-xl">
          <button
            onClick={() => setChartType("radar")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              chartType === "radar"
                ? "bg-neon-blue text-navy-900"
                : "text-gray-400 hover:text-white"
            }`}
          >
            레이더 차트
          </button>
          <button
            onClick={() => setChartType("bar")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              chartType === "bar"
                ? "bg-neon-blue text-navy-900"
                : "text-gray-400 hover:text-white"
            }`}
          >
            바 차트
          </button>
        </div>

        {/* Model Filter */}
        <div className="flex flex-wrap items-center gap-2">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => toggleModel(model.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all border ${
                selectedModels.includes(model.id)
                  ? "border-transparent"
                  : "border-gray-700 opacity-50"
              }`}
              style={{
                backgroundColor: selectedModels.includes(model.id)
                  ? `${model.color}20`
                  : "transparent",
                color: selectedModels.includes(model.id)
                  ? model.color
                  : "#6b7280",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: model.color }}
              />
              {model.name}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="glass-card p-6 md:p-8 mb-8">
        {chartType === "radar" ? (
          <RadarChart
            data={radarData}
            selectedModels={selectedModels}
            modelColors={modelColors}
          />
        ) : (
          <BarChart
            data={benchmarks}
            selectedModels={selectedModels}
            modelColors={modelColors}
          />
        )}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {models.map((model) => (
          <div
            key={model.id}
            className={`glass-card p-4 transition-all ${
              selectedModels.includes(model.id) ? "opacity-100" : "opacity-40"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: model.color }}
              />
              <span className="font-semibold text-white">{model.name}</span>
            </div>
            <p className="text-sm text-gray-400">{model.provider}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {model.features.slice(0, 2).map((feature) => (
                <span
                  key={feature}
                  className="text-xs px-2 py-0.5 rounded-full bg-navy-700/50 text-gray-400"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
