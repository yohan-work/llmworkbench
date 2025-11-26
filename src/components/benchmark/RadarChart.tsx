import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';
import type { RadarDataPoint } from '../../types';

interface RadarChartProps {
  data: RadarDataPoint[];
  selectedModels: string[];
  modelColors: Record<string, string>;
}

const modelDisplayNames: Record<string, string> = {
  'gpt-5.1': 'GPT-5.1',
  'gemini-3.0': 'Gemini 3.0',
  'claude-opus-4.5': 'Claude Opus 4.5',
  'grok-3': 'Grok 3',
};

export default function RadarChart({
  data,
  selectedModels,
  modelColors,
}: RadarChartProps) {
  return (
    <div className="w-full h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid stroke="rgba(255,255,255,0.1)" />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: '#9ca3af', fontSize: 12 }}
            tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#6b7280', fontSize: 10 }}
            tickCount={5}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          />
          
          {selectedModels.map((modelId) => (
            <Radar
              key={modelId}
              name={modelDisplayNames[modelId] || modelId}
              dataKey={modelId}
              stroke={modelColors[modelId]}
              fill={modelColors[modelId]}
              fillOpacity={0.15}
              strokeWidth={2}
              dot={{
                r: 4,
                fill: modelColors[modelId],
                strokeWidth: 0,
              }}
              activeDot={{
                r: 6,
                fill: modelColors[modelId],
                stroke: '#fff',
                strokeWidth: 2,
              }}
            />
          ))}
          
          <Legend
            wrapperStyle={{ paddingTop: 20 }}
            formatter={(value: string) => (
              <span className="text-gray-300 text-sm">{value}</span>
            )}
          />
          
          <Tooltip
            contentStyle={{
              backgroundColor: '#0f1629',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
            labelStyle={{ color: '#fff', fontWeight: 600, marginBottom: 8 }}
            itemStyle={{ color: '#9ca3af', fontSize: 13 }}
            formatter={(value: number, name: string) => [
              `${value}점`,
              modelDisplayNames[name] || name,
            ]}
            labelFormatter={(label: string) => {
              const item = data.find((d) => d.category === label);
              return item?.fullName || label;
            }}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}

