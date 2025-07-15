import React from 'react';
import { StoreCard } from './StoreCard';

export const StoreGrid: React.FC = () => {
  const stores = [
    {
      id: '1',
      name: 'Ganesh Kirana Store',
      category: 'Grocery & Essentials',
      rating: 4.3,
      deliveryTime: '18 min',
      distance: '2.1 km',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      discount: '20% OFF',
      tags: ['Grocery', 'Dairy', 'Snacks']
    },
    {
      id: '2',
      name: 'Zudio Fashion Store',
      category: 'Fashion & Apparel',
      rating: 4.5,
      deliveryTime: '15 min',
      distance: '1.5 km',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      discount: 'Up to 50% OFF',
      tags: ['Fashion', 'Clothing', 'Accessories']
    },
    {
      id: '3',
      name: 'Mother Dairy Booth',
      category: 'Milk & Dairy Products',
      rating: 4.7,
      deliveryTime: '12 min',
      distance: '0.8 km',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['Milk', 'Dairy', 'Fresh']
    },
    {
      id: '4',
      name: 'Daily Mart Supermarket',
      category: 'Grocery & Household',
      rating: 4.2,
      deliveryTime: '22 min',
      distance: '2.8 km',
      image: 'https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['Supermarket', 'Grocery', 'Household']
    },
    {
      id: '5',
      name: 'Fresh Fruits Corner',
      category: 'Fruits & Vegetables',
      rating: 4.4,
      deliveryTime: '16 min',
      distance: '1.2 km',
      image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      discount: '15% OFF',
      tags: ['Fruits', 'Vegetables', 'Organic']
    },
    {
      id: '6',
      name: 'Max Fashion',
      category: 'Fashion & Lifestyle',
      rating: 4.3,
      deliveryTime: '20 min',
      distance: '2.5 km',
      image: 'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['Fashion', 'Lifestyle', 'Trendy']
    },
    {
      id: '7',
      name: 'Cera Sanitaryware',
      category: 'Home & Hardware',
      rating: 4.1,
      deliveryTime: '25 min',
      distance: '3.2 km',
      image: 'https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: false,
      tags: ['Hardware', 'Sanitaryware', 'Home']
    },
    {
      id: '8',
      name: 'Book Palace',
      category: 'Books & Stationery',
      rating: 4.6,
      deliveryTime: '14 min',
      distance: '1.8 km',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=400',
      featured: true,
      discount: '30% OFF',
      tags: ['Books', 'Stationery', 'Educational']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Stores Near You</h2>
        <button className="text-orange-600 hover:text-orange-700 font-medium">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  );
};