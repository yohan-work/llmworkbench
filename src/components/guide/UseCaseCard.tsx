import type { UseCase } from '../../types';
import {
  Code,
  FlaskConical,
  PenTool,
  BarChart3,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

interface UseCaseCardProps {
  useCase: UseCase;
  isActive: boolean;
  onClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Code,
  FlaskConical,
  PenTool,
  BarChart3,
  Briefcase,
  GraduationCap,
};

export default function UseCaseCard({
  useCase,
  isActive,
  onClick,
}: UseCaseCardProps) {
  const Icon = iconMap[useCase.icon] || Code;

  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-xl text-center transition-all border ${
        isActive
          ? 'bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border-neon-blue/40'
          : 'bg-navy-800/50 border-white/5 hover:border-white/20'
      }`}
    >
      <div
        className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${
          isActive ? 'bg-neon-blue/20' : 'bg-navy-700/50'
        }`}
      >
        <Icon
          className={`w-6 h-6 ${isActive ? 'text-neon-blue' : 'text-gray-400'}`}
        />
      </div>
      <h3
        className={`text-sm font-medium ${
          isActive ? 'text-white' : 'text-gray-400'
        }`}
      >
        {useCase.titleKo}
      </h3>
    </button>
  );
}

