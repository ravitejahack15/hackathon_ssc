import React from 'react';

interface BottomCartProps {
  totalAmount: number;
  totalItems: number;
  onViewCart: () => void;
}

export const BottomCart: React.FC<BottomCartProps> = ({ 
  totalAmount, 
  totalItems, 
  onViewCart 
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      {/* Free delivery notification */}
      <div className="bg-green-50 px-4 py-2 flex items-center">
        <div className="bg-green-500 rounded-full p-1 mr-3">
          <div className="text-white text-xs">✓</div>
        </div>
        <span className="text-green-700 text-sm font-medium">
          Yay! You've got Free delivery and ₹150 Cashback
        </span>
      </div>
      
      {/* Cart summary */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
            <span className="text-orange-600 text-lg">🛒</span>
          </div>
          <div>
            <p className="font-bold text-lg">₹{totalAmount}</p>
            <p className="text-gray-600 text-sm">{totalItems} items ▲</p>
          </div>
        </div>
        
        <button 
          onClick={onViewCart}
          className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};