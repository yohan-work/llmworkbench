import { useState } from 'react';
import type { LLMModel } from '../../types';
import { ChevronDown, ChevronUp, Star, ThumbsUp, ThumbsDown, Trophy } from 'lucide-react';

interface ResponseCardProps {
  model: LLMModel;
  response: {
    response: string;
    strengths: string[];
    weaknesses: string[];
    rating: number;
  };
  isRecommended?: boolean;
}

export default function ResponseCard({
  model,
  response,
  isRecommended,
}: ResponseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 마크다운 코드블록 간단 파싱
  const formatResponse = (text: string) => {
    const parts = text.split(/(```[\s\S]*?```)/);
    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        const content = part.replace(/```\w*\n?/, '').replace(/```$/, '');
        return (
          <pre
            key={index}
            className="my-3 p-4 bg-navy-900/80 rounded-lg overflow-x-auto text-sm font-mono text-gray-300"
          >
            <code>{content.trim()}</code>
          </pre>
        );
      }
      return (
        <span key={index} className="whitespace-pre-wrap">
          {part}
        </span>
      );
    });
  };

  const displayResponse = isExpanded
    ? response.response
    : response.response.slice(0, 400) + (response.response.length > 400 ? '...' : '');

  return (
    <div
      className={`glass-card p-6 transition-all border ${
        isRecommended ? 'ring-2' : ''
      }`}
      style={{
        borderColor: `${model.color}30`,
        ...(isRecommended && { ringColor: `${model.color}50` }),
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${model.color}20` }}
          >
            <span className="font-bold" style={{ color: model.color }}>
              {model.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-white font-semibold">{model.name}</h4>
              {isRecommended && (
                <Trophy className="w-4 h-4" style={{ color: model.color }} />
              )}
            </div>
            <p className="text-sm text-gray-500">{model.provider}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-navy-700/50">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-white">
            {response.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Response */}
      <div className="mb-4 text-sm text-gray-300 leading-relaxed">
        {formatResponse(displayResponse)}
        
        {response.response.length > 400 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 mt-3 text-neon-blue hover:text-neon-blue/80 text-sm font-medium transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                접기
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                더 보기
              </>
            )}
          </button>
        )}
      </div>

      {/* Strengths & Weaknesses */}
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="w-4 h-4 text-green-400" />
            <span className="text-xs font-medium text-gray-400">강점</span>
          </div>
          <ul className="space-y-1">
            {response.strengths.map((strength, index) => (
              <li key={index} className="text-xs text-gray-400">
                • {strength}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ThumbsDown className="w-4 h-4 text-red-400" />
            <span className="text-xs font-medium text-gray-400">약점</span>
          </div>
          <ul className="space-y-1">
            {response.weaknesses.map((weakness, index) => (
              <li key={index} className="text-xs text-gray-400">
                • {weakness}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

