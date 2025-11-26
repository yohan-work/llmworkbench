import type { PricingInfo } from '../../types';
import { Check, X, Info } from 'lucide-react';

interface EnrichedPricing extends PricingInfo {
  modelName: string;
  modelColor: string;
  provider: string;
}

interface PricingTableProps {
  data: EnrichedPricing[];
}

export default function PricingTable({ data }: PricingTableProps) {
  // 가격순으로 정렬
  const sortedData = [...data].sort(
    (a, b) => a.inputPricePerMillion + a.outputPricePerMillion - 
              (b.inputPricePerMillion + b.outputPricePerMillion)
  );

  return (
    <div className="space-y-8">
      {/* Desktop Table */}
      <div className="hidden lg:block glass-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-gray-400 font-medium">모델</th>
              <th className="text-right p-4 text-gray-400 font-medium">
                입력 ($/1M 토큰)
              </th>
              <th className="text-right p-4 text-gray-400 font-medium">
                출력 ($/1M 토큰)
              </th>
              <th className="text-center p-4 text-gray-400 font-medium">
                무료 티어
              </th>
              <th className="text-left p-4 text-gray-400 font-medium">비고</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr
                key={item.modelId}
                className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                  index === 0 ? 'bg-neon-green/5' : ''
                }`}
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.modelColor}20` }}
                    >
                      <span
                        className="font-bold"
                        style={{ color: item.modelColor }}
                      >
                        {item.modelName.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium flex items-center gap-2">
                        {item.modelName}
                        {index === 0 && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-neon-green/20 text-neon-green">
                            최저가
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-gray-500">{item.provider}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <span className="text-white font-mono">
                    ${item.inputPricePerMillion.toFixed(2)}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <span className="text-white font-mono">
                    ${item.outputPricePerMillion.toFixed(2)}
                  </span>
                </td>
                <td className="p-4 text-center">
                  {item.hasFreeTier ? (
                    <div className="inline-flex items-center gap-1 text-neon-green">
                      <Check className="w-4 h-4" />
                      <span className="text-sm">
                        {item.freeTokens
                          ? `${(item.freeTokens / 1000000).toFixed(1)}M`
                          : '있음'}
                      </span>
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-gray-500 mx-auto" />
                  )}
                </td>
                <td className="p-4">
                  <ul className="text-sm text-gray-400 space-y-1">
                    {item.notes.slice(0, 2).map((note, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-gray-600">•</span>
                        {note}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {sortedData.map((item, index) => (
          <div
            key={item.modelId}
            className={`glass-card p-5 ${
              index === 0 ? 'ring-1 ring-neon-green/30' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${item.modelColor}20` }}
              >
                <span
                  className="text-lg font-bold"
                  style={{ color: item.modelColor }}
                >
                  {item.modelName.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-white font-semibold flex items-center gap-2">
                  {item.modelName}
                  {index === 0 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-neon-green/20 text-neon-green">
                      최저가
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">{item.provider}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-navy-700/30 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">입력</div>
                <div className="text-lg font-mono text-white">
                  ${item.inputPricePerMillion.toFixed(2)}
                </div>
                <div className="text-xs text-gray-500">/1M 토큰</div>
              </div>
              <div className="bg-navy-700/30 rounded-lg p-3">
                <div className="text-xs text-gray-500 mb-1">출력</div>
                <div className="text-lg font-mono text-white">
                  ${item.outputPricePerMillion.toFixed(2)}
                </div>
                <div className="text-xs text-gray-500">/1M 토큰</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Info className="w-4 h-4 text-gray-500" />
              <span className="text-gray-400">{item.notes[0]}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div className="text-center text-sm text-gray-500">
        * 가격은 2025년 11월 기준이며, 실제 가격은 각 공급자의 공식 사이트에서 확인하세요.
      </div>
    </div>
  );
}

