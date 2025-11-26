import type { CategoryInfo, ResponseCategory } from '../../types';
import {
  Layout,
  Palette,
  MousePointerClick,
  Accessibility,
  Wrench,
  Code, // fallback
} from 'lucide-react';

interface CategoryTabsProps {
  categories: CategoryInfo[];
  activeCategory: ResponseCategory;
  onCategoryChange: (category: ResponseCategory) => void;
}

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Palette,
  MousePointerClick,
  Accessibility,
  Wrench,
};

export default function CategoryTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => {
        const Icon = iconMap[category.icon] || Code;
        const isActive = activeCategory === category.id;

        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-white border border-neon-blue/30'
                : 'bg-navy-800/50 text-gray-400 hover:text-white hover:bg-navy-700/50 border border-transparent'
            }`}
          >
            <Icon className={`w-4 h-4 ${isActive ? 'text-neon-blue' : ''}`} />
            <span>{category.nameKo}</span>
          </button>
        );
      })}
    </div>
  );
}

