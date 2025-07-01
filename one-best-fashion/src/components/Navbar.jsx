// src/components/Header.jsx
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Heart, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = ({ activeCategory, setActiveCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { getCartItemsCount, getWishlistItemsCount } = useCart();
  const cartCount = getCartItemsCount();
  const wishlistCount = getWishlistItemsCount();
  
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={() => navigate('/')}>OneBest <span className="text-green-700">Fashion</span></div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-900 hover:text-green-700 transition hover:underline">Home</a>
            <a href="/categories" className="text-gray-900 hover:text-green-700 transition hover:underline">Categories</a>
            <a href="/shop" className="text-gray-900 hover:text-green-700 transition hover:underline">Shop</a>
            <a href="/about" className="text-gray-900 hover:text-green-700 transition hover:underline">About</a>
            <a href="/contact" className="text-gray-900 hover:text-green-700 transition hover:underline">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search 
              className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-700 transition" 
              onClick={() => navigate('/search')} 
            />
           <div className="relative cursor-pointer" onClick={() => navigate('/wishlist')}>
  <Heart className="w-5 h-5 text-gray-600 hover:text-green-700 transition" />
  {wishlistCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {wishlistCount}
    </span>
  )}
</div>

<div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
  <ShoppingBag className="w-5 h-5 text-gray-600 hover:text-green-700 transition" />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-green-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
      {cartCount}
    </span>
  )}
</div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-gray-900 hover:text-green-700 transition">Home</a>
              <a href="/categories" className="text-gray-900 hover:text-green-700 transition">Categories</a>
              <a href="/shop" className="text-gray-900 hover:text-green-700 transition">Shop</a>
              <a href="/about" className="text-gray-900 hover:text-green-700 transition">About</a>
              <a href="/contact" className="text-gray-900 hover:text-green-700 transition">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;



