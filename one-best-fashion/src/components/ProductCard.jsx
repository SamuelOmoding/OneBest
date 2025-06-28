// src/components/ProductCard.jsx
import React from 'react';
import { Heart, Star } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';


const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const { wishlistItems } = useCart();
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            Sale
          </span>
        )}
        <button
          onClick={onAddToWishlist}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
            isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50'
          }`}
        >
          <Heart className="w-5 h-5" fill={isInWishlist ? 'currentColor' : 'none'} />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
        </div>
        
        <button
          onClick={onAddToCart}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;