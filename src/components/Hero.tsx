import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="px-4 py-4">
      {/* Prime Day Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-4 mb-4 relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-white text-xl font-bold mb-1">local day</h2>
            <p className="text-white text-sm mb-3">
              Support local stores with
              <br />
              added ₹150 cashback
            </p>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-bold text-sm">
              Order now
            </button>
          </div>
          <div className="flex-shrink-0 ml-4">
            <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center">
              <div className="text-white text-2xl">🏪</div>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-8 -mt-8"></div>
        <div className="absolute bottom-0 right-4 w-8 h-8 bg-white/10 rounded-full"></div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white rounded-lg p-4 mb-4">
        <div className="text-center mb-4">
          <p className="text-gray-600 text-xs uppercase tracking-wide mb-2">GUARANTEED BENEFITS FOR YOU</p>
          <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block">
            <span className="text-sm">UNBELIEVABLE SAVINGS OF </span>
            <span className="text-lg font-bold">₹22,880 IN 1 YEAR</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-bold">₹70 CASHBACK</p>
              <p className="text-gray-600 text-sm">on all orders above ₹299</p>
            </div>
            <div className="flex space-x-2">
              <div className="bg-gray-100 px-3 py-1 rounded text-sm">₹70</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-sm">₹14,560</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-bold">FREE DELIVERY</p>
              <p className="text-gray-600 text-sm">on all orders above ₹99</p>
            </div>
            <div className="flex space-x-2">
              <div className="bg-gray-100 px-3 py-1 rounded text-sm">₹30</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-sm">₹6,240</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-bold">NO HIDDEN CHARGES</p>
              <p className="text-gray-600 text-sm">on all orders</p>
            </div>
            <div className="flex space-x-2">
              <div className="bg-gray-100 px-3 py-1 rounded text-sm">₹10</div>
              <div className="bg-gray-100 px-3 py-1 rounded text-sm">₹2,080</div>
            </div>
          </div>

          <div className="border-t pt-3 mt-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-gray-900">TOTAL SAVINGS IN 1 YEAR</p>
                <p className="text-gray-600 text-xs">*IF YOU PLACE 4 ORDERS PER WEEK</p>
              </div>
              <div className="text-xl font-bold">₹22,880</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};