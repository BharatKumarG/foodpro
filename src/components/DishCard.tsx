import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Leaf, Flame, Plus } from 'lucide-react';
import { Dish } from '../types';
import { useCart } from '../context/CartContext';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(dish);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {dish.isVegetarian && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              Veg
            </div>
          )}
          {dish.isSpicy && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <Flame className="w-3 h-3" />
              Spicy
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full shadow-md flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{dish.rating}</span>
        </div>

        {/* Quick Add Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-200 opacity-0 group-hover:opacity-100"
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
          {dish.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {dish.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {dish.preparationTime}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ₹{dish.price}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;