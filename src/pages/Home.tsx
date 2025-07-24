import React from 'react';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDishes />
      <div className="text-center mt-8">
        <Link
          to="/menu"
          className="bg-orange-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-orange-600 transition-all duration-200"
        >
          View Full Menu
        </Link>
      </div>
    </div>
  );
};

export default Home;