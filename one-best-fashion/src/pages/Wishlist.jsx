import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Wishlist</h1>
          <p className="text-xl text-gray-600 mb-8">Your wishlist is empty</p>
          <Link
            to="/shop"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Wishlist</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-green-600 font-bold text-xl mb-4">${item.price}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Link
            to="/shop"
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
