// src/components/ProductCard.jsx
import React from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Static conversion rate from USD to KES
const USD_TO_KES = 128;

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
  const { wishlistItems } = useCart();
  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  const [selectedSize, setSelectedSize] = React.useState(null); 

  const convertToKES = (usd) => (usd * USD_TO_KES).toFixed(0);

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
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${isInWishlist ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-50'
            }`}
        >
          <Heart className="w-5 h-5" fill={isInWishlist ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="p-6">
<h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
{selectedSize && (
  <p className="text-sm text-gray-500">Selected Size: {selectedSize}</p>
)}

        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-600">
              KSh {convertToKES(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                KSh {convertToKES(product.originalPrice)}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mb-2">Available: {product.quantity}</p>

        </div>
        {product.sizes && product.sizes.length > 0 && (
          <>
            <div className="flex flex-wrap gap-2 mb-2">
              {product.sizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 text-xs font-medium rounded-full border ${selectedSize === size
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-gray-100 text-gray-700 border-gray-300'
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {selectedSize && (
              <p className="text-xs text-gray-500 mb-4">
                Selected size: {selectedSize}
              </p>
            )}
          </>
        )}
<button
  onClick={() => onAddToCart({ ...product, selectedSize })}
  disabled={!selectedSize}
  className={`w-full ${
    selectedSize ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
  } text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2`}
>

        {/* <button
          onClick={() => {
            const productToAdd = product.sizes
              ? { ...product, selectedSize }
              : { ...product };
            onAddToCart(productToAdd);
          }}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
        > */}
          <ShoppingCart className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;




