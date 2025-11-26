import type { LLMModel } from '../../types';
import { Cpu, Image, MessageSquare } from 'lucide-react';

interface ModelCardProps {
  model: LLMModel;
  index: number;
}

const modelCardClasses: Record<string, string> = {
  'gpt-5.1': 'model-card-gpt',
  'gemini-3.0': 'model-card-gemini',
  'claude-opus-4.5': 'model-card-claude',
  'grok-3': 'model-card-grok',
};

export default function ModelCard({ model, index }: ModelCardProps) {
  return (
    <div
      className={`glass-card p-6 transition-all duration-300 cursor-pointer animate-slide-up border ${modelCardClasses[model.id] || ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${model.color}20` }}
        >
          <Cpu className="w-6 h-6" style={{ color: model.color }} />
        </div>
        <span
          className="text-xs font-mono px-2 py-1 rounded-full"
          style={{ backgroundColor: `${model.color}20`, color: model.color }}
        >
          v{model.version}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-1">{model.name}</h3>
      <p className="text-sm text-gray-500 mb-3">{model.provider}</p>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-4 line-clamp-3">
        {model.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-4">
        {model.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="text-xs px-2 py-1 rounded-full bg-navy-700/50 text-gray-300"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-1.5 text-gray-400">
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs">{(model.contextWindow / 1000)}K</span>
        </div>
        {model.multimodal && (
          <div className="flex items-center gap-1.5 text-gray-400">
            <Image className="w-4 h-4" />
            <span className="text-xs">멀티모달</span>
          </div>
        )}
      </div>
    </div>
  );
}

