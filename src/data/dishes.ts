import { Dish } from '../types';

export const dishes: Dish[] = [
  // Starters
  {
    id: 'starter-1',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in aromatic spices and yogurt',
    price: 280,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'starters',
    rating: 4.5,
    preparationTime: '15 mins',
    isVegetarian: true,
    isSpicy: true
  },
  {
    id: 'starter-2',
    name: 'Chicken Tikka',
    description: 'Tender chicken pieces marinated in spices and grilled to perfection',
    price: 320,
    image: 'https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg',
    category: 'starters',
    rating: 4.7,
    preparationTime: '20 mins',
    isVegetarian: false,
    isSpicy: true
  },
  {
    id: 'starter-3',
    name: 'Samosa',
    description: 'Crispy triangular pastry filled with spiced potatoes and peas',
    price: 120,
    image: 'https://images.pexels.com/photos/6119942/pexels-photo-6119942.jpeg',
    category: 'starters',
    rating: 4.2,
    preparationTime: '10 mins',
    isVegetarian: true,
    isSpicy: false
  },

  // Biryani
  {
    id: 'biryani-1',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice layered with tender chicken and exotic spices',
    price: 450,
    image: 'https://images.pexels.com/photos/13775045/pexels-photo-13775045.jpeg',
    category: 'biryani',
    rating: 4.8,
    preparationTime: '45 mins',
    isVegetarian: false,
    isSpicy: true
  },
  {
    id: 'biryani-2',
    name: 'Mutton Biryani',
    description: 'Rich and flavorful biryani with succulent mutton pieces',
    price: 520,
    image: 'https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg',
    category: 'biryani',
    rating: 4.9,
    preparationTime: '60 mins',
    isVegetarian: false,
    isSpicy: true
  },
  {
    id: 'biryani-3',
    name: 'Vegetable Biryani',
    description: 'Fragrant rice cooked with mixed vegetables and aromatic spices',
    price: 380,
    image: 'https://images.pexels.com/photos/17737734/pexels-photo-17737734.jpeg',
    category: 'biryani',
    rating: 4.4,
    preparationTime: '40 mins',
    isVegetarian: true,
    isSpicy: false
  },

  // Curries
  {
    id: 'curry-1',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces',
    price: 420,
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg',
    category: 'curries',
    rating: 4.6,
    preparationTime: '35 mins',
    isVegetarian: false,
    isSpicy: false
  },
  {
    id: 'curry-2',
    name: 'Paneer Butter Masala',
    description: 'Rich and creamy curry with cottage cheese in aromatic gravy',
    price: 360,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    category: 'curries',
    rating: 4.3,
    preparationTime: '25 mins',
    isVegetarian: true,
    isSpicy: false
  },
  {
    id: 'curry-3',
    name: 'Fish Curry',
    description: 'Traditional fish curry cooked in coconut milk and spices',
    price: 480,
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg',
    category: 'curries',
    rating: 4.7,
    preparationTime: '30 mins',
    isVegetarian: false,
    isSpicy: true
  },

  // Dal
  {
    id: 'dal-1',
    name: 'Dal Tadka',
    description: 'Yellow lentils tempered with cumin, garlic, and aromatic spices',
    price: 180,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    category: 'dal',
    rating: 4.1,
    preparationTime: '20 mins',
    isVegetarian: true,
    isSpicy: false
  },
  {
    id: 'dal-2',
    name: 'Dal Makhani',
    description: 'Rich and creamy black lentils cooked with butter and cream',
    price: 220,
    image: 'https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg',
    category: 'dal',
    rating: 4.5,
    preparationTime: '40 mins',
    isVegetarian: true,
    isSpicy: false
  },

  // Breakfast
  {
    id: 'breakfast-1',
    name: 'Masala Dosa',
    description: 'Crispy crepe filled with spiced potato filling, served with chutney',
    price: 150,
    image: 'https://images.pexels.com/photos/5560025/pexels-photo-5560025.jpeg',
    category: 'breakfast',
    rating: 4.4,
    preparationTime: '15 mins',
    isVegetarian: true,
    isSpicy: false
  },
  {
    id: 'breakfast-2',
    name: 'Idli Sambhar',
    description: 'Steamed rice cakes served with lentil curry and coconut chutney',
    price: 120,
    image: 'https://images.pexels.com/photos/5560025/pexels-photo-5560025.jpeg',
    category: 'breakfast',
    rating: 4.2,
    preparationTime: '10 mins',
    isVegetarian: true,
    isSpicy: false
  },
  {
    id: 'breakfast-3',
    name: 'Poha',
    description: 'Flattened rice cooked with onions, peas, and aromatic spices',
    price: 100,
    image: 'https://images.pexels.com/photos/5560025/pexels-photo-5560025.jpeg',
    category: 'breakfast',
    rating: 4.0,
    preparationTime: '12 mins',
    isVegetarian: true,
    isSpicy: false
  }
];

export const categories = [
  { id: 'all', name: 'All Items', icon: '🍽️' },
  { id: 'starters', name: 'Starters', icon: '🥗' },
  { id: 'biryani', name: 'Biryani', icon: '🍚' },
  { id: 'curries', name: 'Curries', icon: '🍛' },
  { id: 'dal', name: 'Dal', icon: '🥣' },
  { id: 'breakfast', name: 'Breakfast', icon: '🥞' }
];