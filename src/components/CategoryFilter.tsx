import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../data/dishes';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-12">
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 shadow-md border border-gray-200'
          }`}
        >
          <span className="text-lg">{category.icon}</span>
          <span>{category.name}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;