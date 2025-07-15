import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Wallet, CheckCircle } from 'lucide-react';

interface PaymentProps {
  orderDetails: any;
  onBack: () => void;
  onPaymentComplete: () => void;
}

export const Payment: React.FC<PaymentProps> = ({ 
  orderDetails, 
  onBack, 
  onPaymentComplete 
}) => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const paymentOptions = [
    { id: 'upi', name: 'UPI', icon: Smartphone, description: 'Pay using UPI apps' },
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard, description: 'Visa, Mastercard, RuPay' },
    { id: 'wallet', name: 'Digital Wallet', icon: Wallet, description: 'Paytm, PhonePe, Amazon Pay' }
  ];

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      // Auto redirect after success
      setTimeout(() => {
        onPaymentComplete();
      }, 2000);
    }, 3000);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 text-center max-w-sm mx-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-4">Your order has been placed successfully</p>
          <div className="text-sm text-gray-500">
            Order ID: {orderDetails.orderId}
          </div>
        </div>
      </div>
    );
  }

  if (isProcessing) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 text-center max-w-sm mx-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Processing Payment...</h2>
          <p className="text-gray-600">Please wait while we process your payment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center space-x-4">
          <button onClick={onBack} className="p-1">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              amazon <span className="text-blue-600 font-normal italic">now</span>
            </h1>
            <p className="text-sm text-gray-600">Payment</p>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 space-y-6">
        {/* Amount to Pay */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <p className="text-gray-600 mb-2">Amount to Pay</p>
          <p className="text-3xl font-bold text-gray-900">₹{orderDetails.totalAmount}</p>
        </div>

        {/* Payment Options */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-4">Choose Payment Method</h3>
          <div className="space-y-3">
            {paymentOptions.map((option) => {
              const IconComponent = option.icon;
              return (
                <label key={option.id} className="flex items-center space-x-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                  <input
                    type="radio"
                    name="paymentOption"
                    value={option.id}
                    checked={selectedPaymentOption === option.id}
                    onChange={(e) => setSelectedPaymentOption(e.target.value)}
                  />
                  <IconComponent className="h-6 w-6 text-gray-600" />
                  <div>
                    <div className="font-medium text-gray-900">{option.name}</div>
                    <div className="text-sm text-gray-600">{option.description}</div>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* UPI Payment Form */}
        {selectedPaymentOption === 'upi' && (
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Enter UPI ID</h4>
            <input
              type="text"
              placeholder="yourname@upi"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Card Payment Form */}
        {selectedPaymentOption === 'card' && (
          <div className="bg-white rounded-lg p-4 border border-gray-200 space-y-4">
            <h4 className="font-medium text-gray-900">Card Details</h4>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="CVV"
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        {/* Wallet Payment Options */}
        {selectedPaymentOption === 'wallet' && (
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Select Wallet</h4>
            <div className="grid grid-cols-3 gap-3">
              {['Paytm', 'PhonePe', 'Amazon Pay'].map((wallet) => (
                <button
                  key={wallet}
                  className="p-3 border border-gray-300 rounded-lg text-center hover:bg-gray-50"
                >
                  {wallet}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Order Summary */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold text-gray-900 mb-3">Order Summary</h3>
          <div className="space-y-2 text-sm">
            {orderDetails.sellerCarts && (
              <>
                {orderDetails.sellerCarts.map((cart: any) => (
                  <div key={cart.sellerId} className="flex justify-between">
                    <span className="text-gray-600">{cart.sellerName} ({cart.items.length} items)</span>
                    <span className="font-medium">₹{cart.items.reduce((total: number, item: any) => total + (item.price * item.quantity), 0)}</span>
                  </div>
                ))}
              </>
            )}
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">₹{orderDetails.totalAmount - (orderDetails.ecoFriendlyDelivery ? 25 : 30)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery</span>
              <span className="font-medium">
                {orderDetails.ecoFriendlyDelivery ? '₹25 (Eco)' : 'FREE'}
              </span>
            </div>
            <div className="border-t pt-2 flex justify-between font-bold">
              <span>Total</span>
              <span>₹{orderDetails.totalAmount}</span>
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-yellow-400 text-black py-4 rounded-lg font-bold text-lg hover:bg-yellow-500"
        >
          Pay ₹{orderDetails.totalAmount}
        </button>
      </div>
    </div>
  );
};