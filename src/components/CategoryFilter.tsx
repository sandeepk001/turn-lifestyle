'use client';

interface CategoryFilterProps {
  categories: readonly string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium whitespace-nowrap transition-all ${
            selectedCategory === category
              ? 'bg-black text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
