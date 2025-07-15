import React from 'react';
import { Star, Clock, MapPin, Tag } from 'lucide-react';

interface Store {
  id: string;
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  distance: string;
  image: string;
  featured: boolean;
  discount?: string;
  tags: string[];
}

interface StoreCardProps {
  store: Store;
}

export const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden group">
      <div className="relative">
        <img
          src={store.image}
          alt={store.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {store.featured && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
        {store.discount && (
          <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            {store.discount}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 text-lg">{store.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{store.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{store.category}</p>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1 text-gray-600">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{store.deliveryTime}</span>
          </div>
          <div className="flex items-center space-x-1 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{store.distance}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {store.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
          View Store
        </button>
      </div>
    </div>
  );
};