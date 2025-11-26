'use client';

interface ModelScoreRadarProps {
  scores: {
    scoreReasoning: number;
    scoreStructure: number;
    scoreStyle: number;
    scoreKoQuality: number;
  };
}

const metrics = [
  { key: 'scoreReasoning', label: 'Reasoning' },
  { key: 'scoreStructure', label: 'Structure' },
  { key: 'scoreStyle', label: 'Style' },
  { key: 'scoreKoQuality', label: 'KO Quality' }
];

export function ModelScoreRadar({ scores }: ModelScoreRadarProps) {
  const size = 200;
  const center = size / 2;
  const radius = 80;
  const maxValue = 5;

  const getPoint = (index: number, value: number) => {
    const angle = (index * Math.PI * 2) / metrics.length - Math.PI / 2;
    const r = (value / maxValue) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return { x, y };
  };

  const points = metrics.map((metric, index) =>
    getPoint(index, scores[metric.key as keyof typeof scores])
  );

  const pathData = points
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ') + ' Z';

  const gridLines = Array.from({ length: 5 }, (_, i) => {
    const level = (i + 1) / 5;
    return (
      <circle
        key={i}
        cx={center}
        cy={center}
        r={radius * level}
        fill="none"
        stroke="rgba(148, 163, 184, 0.2)"
        strokeWidth="1"
      />
    );
  });

  const axisLines = metrics.map((metric, index) => {
    const angle = (index * Math.PI * 2) / metrics.length - Math.PI / 2;
    const x2 = center + radius * Math.cos(angle);
    const y2 = center + radius * Math.sin(angle);
    return (
      <line
        key={metric.key}
        x1={center}
        y1={center}
        x2={x2}
        y2={y2}
        stroke="rgba(148, 163, 184, 0.3)"
        strokeWidth="1"
      />
    );
  });

  const labels = metrics.map((metric, index) => {
    const angle = (index * Math.PI * 2) / metrics.length - Math.PI / 2;
    const labelRadius = radius + 20;
    const x = center + labelRadius * Math.cos(angle);
    const y = center + labelRadius * Math.sin(angle);
    return (
      <text
        key={metric.key}
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#cbd5f5"
        fontSize="12"
        className="font-medium"
      >
        {metric.label}
      </text>
    );
  });

  return (
    <div className="flex h-64 w-full items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {gridLines}
        {axisLines}
        <path
          d={pathData}
          fill="rgba(99, 102, 241, 0.3)"
          stroke="#818cf8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#a5b4fc"
            stroke="#818cf8"
            strokeWidth="2"
          />
        ))}
        {labels}
      </svg>
    </div>
  );
}
