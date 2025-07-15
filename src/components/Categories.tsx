import React from 'react';

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
  const categories = [
    { id: 'top-picks', name: 'Top Picks', icon: '⭐', active: true },
    { id: 'local-day', name: 'Local Day Deals', icon: '🏷️' },
    { id: 'fresh-vegetables', name: 'Fresh Vegetables', icon: '🥬' },
    { id: 'oils-ghee', name: 'Oils, Ghee & Masala', icon: '🛢️' },
    { id: 'dairy-bread', name: 'Dairy, Bread & Eggs', icon: '🥛' },
  ];

  return (
    <div className="px-4 py-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended for you</h3>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.id)}
            className={`flex-shrink-0 flex flex-col items-center p-3 rounded-lg min-w-[80px] ${
              category.active 
                ? 'bg-blue-50 border-2 border-blue-500' 
                : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <span className={`text-xs text-center font-medium ${
              category.active ? 'text-blue-600' : 'text-gray-700'
            }`}>
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};