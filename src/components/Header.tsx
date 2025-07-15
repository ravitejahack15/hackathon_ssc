import React, { useState } from 'react';
import { Search, X, MapPin, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const [currentLocation, setCurrentLocation] = useState('MG Road, Bengaluru 560001');
  const [showLocationModal, setShowLocationModal] = useState(false);

  const locations = [
    { pincode: '560001', area: 'MG Road, Bengaluru', stores: 12 },
    { pincode: '560025', area: 'Brigade Road, Bengaluru', stores: 8 },
    { pincode: '560067', area: 'Whitefield, Bengaluru', stores: 15 },
    { pincode: '560078', area: 'Electronic City, Bengaluru', stores: 10 },
    { pincode: '560100', area: 'Indiranagar, Bengaluru', stores: 18 },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(localQuery);
  };

  const handleLocationChange = (location: string) => {
    setCurrentLocation(location);
    setShowLocationModal(false);
  };

  return (
    <>
      <header className="bg-gradient-to-r from-sky-200 to-sky-300 sticky top-0 z-50">
        <div className="px-4 py-3">
          {/* Top row with logo and close */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-black">
                amazon <span className="text-blue-600 font-normal italic">now</span>
              </h1>
            </div>
            <X className="h-6 w-6 text-black" />
          </div>

          {/* Delivery info */}
          <div className="flex items-center justify-between mb-4">
            <div className="bg-yellow-400 text-black px-3 py-1 rounded-md font-bold text-sm flex items-center mr-3">
              ⚡ 12 mins
            </div>
            <button 
              onClick={() => setShowLocationModal(true)}
              className="flex items-center text-black text-sm hover:bg-white/20 px-2 py-1 rounded"
            >
              <MapPin className="h-4 w-4 mr-1" />
              <span className="font-medium">Deliver to Ravi - {currentLocation}</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="text-xs text-black/70">
              Stores within 0.5 km radius
            </div>
          </div>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder="Search for products, stores..."
                className="w-full pl-10 pr-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
      </header>

      {/* Location Change Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-96 overflow-y-auto">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Change Location</h3>
                <button 
                  onClick={() => setShowLocationModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-1">Select your delivery location</p>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {locations.map((location) => (
                  <button
                    key={location.pincode}
                    onClick={() => handleLocationChange(`${location.area} ${location.pincode}`)}
                    className={`w-full text-left p-3 rounded-lg border hover:bg-gray-50 ${
                      currentLocation.includes(location.pincode) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{location.area}</p>
                        <p className="text-sm text-gray-600">{location.pincode}</p>
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