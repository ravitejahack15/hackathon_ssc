import React, { useState } from 'react';
import { Search, X, MapPin, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
  onStoreSelect?: (storeId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery, onStoreSelect }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('MG Road, Bengaluru 560001');
  const [showLocationModal, setShowLocationModal] = useState(false);

  const locations = [
    { pincode: '560001', area: 'MG Road, Bengaluru', stores: 12 },
    { pincode: '560025', area: 'Brigade Road, Bengaluru', stores: 8 },
    { pincode: '560067', area: 'Whitefield, Bengaluru', stores: 15 },
    { pincode: '560078', area: 'Electronic City, Bengaluru', stores: 10 },
    { pincode: '560100', area: 'Indiranagar, Bengaluru', stores: 18 },
  ];

  const stores = [
    { id: 'zara', name: 'Zara', category: 'Jewellery & Accessories' },
    { id: 'zudio', name: 'Zudio', category: 'Fashion & Clothing' },
    { id: 'mayuri-bakery', name: 'Mayuri Bakery', category: 'Bakery & Sweets' },
    { id: 'nandini', name: 'Nandini Milk Parlour', category: 'Dairy Products' },
    { id: 'medplus', name: 'MedPlus', category: 'Pharmacy & Health' },
    { id: 'karachi-bakery', name: 'Karachi Bakery', category: 'Bakery & Biscuits' },
    { id: 'patanjali', name: 'Patanjali Store', category: 'Ayurvedic & Natural' },
    { id: 'baskin-robbins', name: 'Baskin Robbins', category: 'Ice Cream & Desserts' }
  ];

  const filteredStores = stores.filter(store => 
    store.name.toLowerCase().includes(localQuery.toLowerCase()) ||
    store.category.toLowerCase().includes(localQuery.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSearchSuggestions(false);
    onSearch(localQuery);
  };

  const handleStoreSelect = (storeId: string, storeName: string) => {
    setLocalQuery(storeName);
    setShowSearchSuggestions(false);
    if (onStoreSelect) {
      onStoreSelect(storeId);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalQuery(value);
    setShowSearchSuggestions(value.length > 0 && filteredStores.length > 0);
  };

  const handleInputFocus = () => {
    if (localQuery.length > 0 && filteredStores.length > 0) {
      setShowSearchSuggestions(true);
    }
  };

  const handleLocationChange = (location: string) => {
    setCurrentLocation(location);
    setShowLocationModal(false);
  };

  return (
    <>
      <header className="bg-gradient-to-b from-sky-200 to-sky-100 sticky top-0 z-50">
        <div className="px-4 py-4">
          {/* Amazon Now Logo */}
          <div className="flex items-center justify-center mb-4">
            <h1 className="text-2xl font-bold text-gray-900">
              amazon <span className="text-blue-600 font-normal italic">now</span>
            </h1>
          </div>

          {/* Delivery info and location */}
          <div className="flex items-center justify-between mb-4">
            <div className="bg-yellow-400 text-black px-3 py-1.5 rounded-md font-bold text-sm flex items-center">
              ⚡ 12 mins
            </div>
            
            <button 
              onClick={() => setShowLocationModal(true)}
              className="flex items-center text-gray-800 text-sm hover:bg-white/20 px-3 py-1.5 rounded-md transition-colors"
            >
              <span className="font-medium mr-1">Deliver to Ravi - </span>
              <span className="truncate max-w-32">
                {currentLocation.split(',')[0]}
              </span>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-600" />
            </button>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={localQuery}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                placeholder='Search for "Coffee"'
                className="w-full pl-12 pr-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200 shadow-sm"
              />
            </div>
            
            {/* Search Suggestions */}
            {showSearchSuggestions && filteredStores.length > 0 && (
              <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-50 max-h-60 overflow-y-auto">
                <div className="p-2">
                  <div className="text-xs text-gray-500 mb-2 px-2">STORES</div>
                  {filteredStores.slice(0, 6).map((store) => (
                    <button
                      key={store.id}
                      type="button"
                      onClick={() => handleStoreSelect(store.id, store.name)}
                      className="w-full text-left p-2 hover:bg-gray-50 rounded-md flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">🏪</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{store.name}</div>
                        <div className="text-sm text-gray-500">{store.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </form>
        </div>
      </header>

      {/* Location Change Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-96 overflow-y-auto shadow-2xl">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Change Location</h3>
                <button 
                  onClick={() => setShowLocationModal(false)}
                  className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">Select your delivery location</p>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {locations.map((location) => (
                  <button
                    key={location.pincode}
                    onClick={() => handleLocationChange(`${location.area} ${location.pincode}`)}
                    className={`w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors ${
                      currentLocation.includes(location.pincode) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{location.area}</p>
                        <p className="text-sm text-gray-500">{location.pincode}</p>
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        {location.stores} stores
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};