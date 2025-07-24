export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  preparationTime: string;
  isVegetarian: boolean;
  isSpicy: boolean;
}

export interface CartItem extends Dish {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}