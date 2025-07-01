import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const {
    cartItems,
    getCartTotal,
    reduceStockOnPurchase
  } = useCart();

  const handleConfirmPurchase = () => {
    reduceStockOnPurchase();
    alert('Thank you for your purchase!');
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md mt-10 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200 mb-6">
            {cartItems.map(item => (
              <li key={item.id} className="py-4 flex justify-between">
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
                <p className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>

          <div className="text-xl font-bold mb-6">
            Total: ${getCartTotal().toFixed(2)}
          </div>

          <button
            onClick={handleConfirmPurchase}
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
          >
            Confirm Purchase
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
