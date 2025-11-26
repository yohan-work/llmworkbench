import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from 'recharts';
import type { BenchmarkScore } from '../../types';

interface BarChartProps {
  data: BenchmarkScore[];
  selectedModels: string[];
  modelColors: Record<string, string>;
}

const modelDisplayNames: Record<string, string> = {
  'gpt-5.1': 'GPT-5.1',
  'gemini-3.0': 'Gemini 3.0',
  'claude-opus-4.5': 'Claude Opus 4.5',
  'grok-3': 'Grok 3',
};

export default function BarChart({
  data,
  selectedModels,
  modelColors,
}: BarChartProps) {
  // 데이터 변환
  const chartData = data.map((benchmark) => {
    const item: Record<string, string | number> = {
      name: benchmark.name,
      fullName: benchmark.fullName,
    };
    selectedModels.forEach((modelId) => {
      item[modelId] = benchmark.scores[modelId] || 0;
    });
    return item;
  });

  return (
    <div className="w-full h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={chartData}
          margin={{ top: 20, right: 30, bottom: 60, left: 20 }}
          barCategoryGap="20%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.05)"
            vertical={false}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            domain={[0, 100]}
            tick={{ fill: '#6b7280', fontSize: 11 }}
            tickLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tickFormatter={(value) => `${value}%`}
          />
          
          {selectedModels.map((modelId) => (
            <Bar
              key={modelId}
              dataKey={modelId}
              name={modelDisplayNames[modelId] || modelId}
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            >
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={modelColors[modelId]}
                  fillOpacity={0.8}
                />
              ))}
            </Bar>
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
            itemStyle={{ fontSize: 13 }}
            formatter={(value: number, name: string) => [
              `${value}%`,
              modelDisplayNames[name] || name,
            ]}
            labelFormatter={(label: string) => {
              const item = data.find((d) => d.name === label);
              return item?.fullName || label;
            }}
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}

