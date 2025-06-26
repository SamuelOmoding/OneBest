// const Navbar = () => (
//   <nav className="bg-white shadow p-4 flex justify-between items-center">
//     <h1 className="text-xl font-bold text-pink-600">OneBest Fashion</h1>
//     <div className="space-x-4">
//       <a href="/" className="hover:underline">Home</a>
//       <a href="/shop" className="hover:underline">Shop</a>
//       <a href="/about" className="hover:underline">About</a>
//       <a href="/contact" className="hover:underline">Contact</a>
//     </div>
//   </nav>
// );

// export default Navbar;


// src/components/Header.jsx
import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Heart, Search } from 'lucide-react';

const Navbar = ({ activeCategory, setActiveCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-gray-800">
            OneBest <span className="text-pink-600">Fashion</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-pink-600 transition">Home</a>
            <a href="/shop" className="text-gray-700 hover:text-pink-600 transition">Shop</a>
            <a href="/about" className="text-gray-700 hover:text-pink-600 transition">About</a>
            <a href="/contact" className="text-gray-700 hover:text-pink-600 transition">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600 transition" />
            <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600 transition" />
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer hover:text-pink-600 transition" />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
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
              <a href="/" className="text-gray-700 hover:text-pink-600 transition">Home</a>
              <a href="/shop" className="text-gray-700 hover:text-pink-600 transition">Shop</a>
              <a href="/about" className="text-gray-700 hover:text-pink-600 transition">About</a>
              <a href="/contact" className="text-gray-700 hover:text-pink-600 transition">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
