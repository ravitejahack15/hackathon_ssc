import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Package, Truck, MapPin, User, Phone } from 'lucide-react';

interface OrderTrackingProps {
  orderDetails: any;
  onBackToHome: () => void;
}

export const OrderTracking: React.FC<OrderTrackingProps> = ({ 
  orderDetails, 
  onBackToHome 
}) => {
  const [sellerStatuses, setSellerStatuses] = useState<{ [key: string]: number }>({});
  const [estimatedTimes, setEstimatedTimes] = useState<{ [key: string]: number }>({});

  const trackingSteps = [
    { id: 0, title: 'Order Placed', description: 'Your order has been placed', icon: CheckCircle },
    { id: 1, title: 'Seller Accepted', description: 'Seller confirmed your order', icon: User },
    { id: 2, title: 'Preparing', description: 'Store is preparing your order', icon: Package },
    { id: 3, title: 'Out for Delivery', description: 'Your order is on the way', icon: Truck },
    { id: 4, title: 'Delivered', description: 'Order delivered successfully', icon: MapPin }
  ];

  const deliveryPartners = [
    { name: 'Rajesh Kumar', phone: '+91 98765 43210', vehicle: 'Bike' },
    { name: 'Priya Sharma', phone: '+91 87654 32109', vehicle: 'Scooter' },
    { name: 'Amit Singh', phone: '+91 76543 21098', vehicle: 'Bike' },
    { name: 'Sneha Patel', phone: '+91 65432 10987', vehicle: 'Car' }
  ];

  useEffect(() => {
    // Initialize seller statuses
    const initialStatuses: { [key: string]: number } = {};
    const initialTimes: { [key: string]: number } = {};
    
    orderDetails.sellerCarts.forEach((cart: any, index: number) => {
      // Amazon starts at step 2 (no seller acceptance needed)
      initialStatuses[cart.sellerId] = cart.sellerId === 'amazon' ? 2 : 0;
      initialTimes[cart.sellerId] = cart.sellerId === 'amazon' ? 8 : 15;
    });
    
    setSellerStatuses(initialStatuses);
    setEstimatedTimes(initialTimes);

    // Simulate progress for each seller
    const timer = setInterval(() => {
      setSellerStatuses(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(sellerId => {
          if (updated[sellerId] < 4) {
            // Random chance to progress
            if (Math.random() > 0.7) {
              updated[sellerId] += 1;
              setEstimatedTimes(prevTimes => ({
                ...prevTimes,
                [sellerId]: updated[sellerId] === 4 ? 0 : Math.max(0, prevTimes[sellerId] - 3)
              }));
            }
          }
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [orderDetails]);

  const getDeliveryPartner = (index: number) => {
    return deliveryPartners[index % deliveryPartners.length];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <h1 className="text-xl font-bold text-gray-900">
          amazon <span className="text-blue-600 font-normal italic">now</span>
        </h1>
        <p className="text-sm text-gray-600">Order ID: {orderDetails.orderId}</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Delivery Map Placeholder */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Live Tracking</h3>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            {/* Map Header */}
            <div className="bg-blue-600 text-white p-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="font-medium">Live Map Tracking</span>
              </div>
              <div className="text-sm">
                {orderDetails.ecoFriendlyDelivery ? 'Eco Route' : 'Multiple Routes'}
              </div>
            </div>
            
            {/* Simulated Map View */}
            <div className="relative h-64 bg-gradient-to-br from-green-100 to-blue-100">
              {/* Map Grid Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-gray-300"></div>
                  ))}
                </div>
              </div>
              
              {/* Store Locations */}
              <div className="absolute top-4 left-6 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute bottom-12 left-12 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              
              {/* Delivery Routes */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 30 20 Q 100 50 200 40 Q 250 60 280 80"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
                <path
                  d="M 320 40 Q 280 100 200 120 Q 150 140 100 160"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-pulse"
                />
              </svg>
              
              {/* Delivery Partners */}
              <div className="absolute top-12 left-20 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center animate-bounce">
                <Truck className="h-2 w-2 text-white" />
              </div>
              <div className="absolute bottom-20 right-16 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center animate-bounce">
                <Truck className="h-2 w-2 text-white" />
              </div>
              
              {/* Your Location */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {/* Location Labels */}
              <div className="absolute top-1 left-4 text-xs bg-white px-1 rounded shadow">Store 1</div>
              <div className="absolute top-5 right-4 text-xs bg-white px-1 rounded shadow">Store 2</div>
              <div className="absolute bottom-8 left-8 text-xs bg-white px-1 rounded shadow">Store 3</div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs bg-white px-1 rounded shadow">Your Location</div>
            </div>
            
            {/* Map Legend */}
            <div className="p-3 bg-white border-t">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600">Stores</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">Delivery Partners</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600">Your Location</span>
                  </div>
                </div>
                <div className="text-gray-500">
                  Updated 30s ago
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seller-wise Tracking */}
        {orderDetails.sellerCarts.map((cart: any, index: number) => {
          const currentStatus = sellerStatuses[cart.sellerId] || 0;
          const estimatedTime = estimatedTimes[cart.sellerId] || 0;
          const partner = getDeliveryPartner(index);

          return (
            <div key={cart.sellerId} className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900">{cart.sellerName}</h3>
                  <p className="text-sm text-gray-600">
                    {cart.items.length} items • {currentStatus === 4 ? 'Delivered!' : `${estimatedTime} mins`}
                  </p>
                </div>
                {estimatedTime > 0 && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {estimatedTime} mins
                  </div>
                )}
              </div>

              {/* Horizontal Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  {trackingSteps.map((step, stepIndex) => {
                    const actualIndex = stepIndex;
                    const IconComponent = step.icon;
                    const isCompleted = actualIndex <= currentStatus;
                    const isCurrent = actualIndex === currentStatus;
                    
                    return (
                      <div key={step.id} className="flex flex-col items-center flex-1">
                        <div className={`flex items-center justify-center w-8 h-8 rounded-full mb-1 ${
                          isCompleted ? 'bg-green-500' : 'bg-gray-200'
                        }`}>
                          <IconComponent className={`h-4 w-4 ${
                            isCompleted ? 'text-white' : 'text-gray-500'
                          }`} />
                        </div>
                        <h4 className={`text-xs font-medium text-center ${
                          isCompleted ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {step.title}
                        </h4>
                        {isCurrent && (
                          <div className="flex items-center space-x-1 mt-1">
                            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-xs text-blue-500">Active</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Progress Line */}
                <div className="relative">
                  <div className="h-1 bg-gray-200 rounded-full mx-4"></div>
                  <div 
                    className="absolute top-0 left-4 h-1 bg-green-500 rounded-full transition-all duration-1000"
                    style={{ 
                      width: `calc(${(currentStatus / 4) * 100}% - 2rem)` 
                    }}
                  ></div>
                </div>
              </div>

              {/* Delivery Partner */}
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">
                        {partner.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{partner.name}</h4>
                      <p className="text-sm text-gray-600">{partner.vehicle} • {partner.phone}</p>
                    </div>
                  </div>
                  <button className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium flex items-center space-x-1">
                    <Phone className="h-3 w-3" />
                    <span>Call</span>
                  </button>
                </div>
              </div>

              {/* Order Items */}
              <div className="mt-3 pt-3 border-t border-gray-200">
                <div className="space-y-2">
                  {cart.items.slice(0, 2).map((item: any) => (
                    <div key={item.id} className="flex items-center space-x-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-8 h-8 object-cover rounded"
                      />
                      <span className="text-sm text-gray-600 flex-1">{item.name}</span>
                      <span className="text-sm font-medium">x{item.quantity}</span>
                    </div>
                  ))}
                  {cart.items.length > 2 && (
                    <p className="text-sm text-gray-500">+{cart.items.length - 2} more items</p>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Action Buttons */}
        <div className="space-y-3">
          {Object.values(sellerStatuses).every(status => status === 4) && (
            <button
              onClick={onBackToHome}
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-bold hover:bg-yellow-500"
            >
              Order Again
            </button>
          )}
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50">
            Need Help?
          </button>
        </div>
      </div>
    </div>
  );
};