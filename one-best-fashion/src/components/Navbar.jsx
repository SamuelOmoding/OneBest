// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Menu, X, Heart, Search, Clock, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';

const Navbar = ({ activeCategory, setActiveCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);
  
  const navigate = useNavigate();
  const { getCartItemsCount, getWishlistItemsCount } = useCart();
  const { 
    searchHistory, 
    popularSearches, 
    searchSuggestions, 
    addToSearchHistory, 
    generateSearchSuggestions 
  } = useSearch();
  
  const cartCount = getCartItemsCount();
  const wishlistCount = getWishlistItemsCount();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) &&
          suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query = null) => {
    const searchTerm = query || searchQuery;
    if (searchTerm.trim()) {
      addToSearchHistory(searchTerm.trim());
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchQuery('');
      setShowSuggestions(false);
      setIsSearchOpen(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    generateSearchSuggestions(value);
    setShowSuggestions(true);
  };

  const handleSearchIconClick = () => {
    if (window.innerWidth < 768) {
      setIsSearchOpen(!isSearchOpen);
    } else {
      document.getElementById('search-input').focus();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
    if (!searchQuery) {
      generateSearchSuggestions('');
    }
  };

  const renderSuggestions = () => {
    if (!showSuggestions) return null;

    const hasSearchQuery = searchQuery.trim().length > 0;
    const suggestions = hasSearchQuery ? searchSuggestions : [];
    const historyToShow = hasSearchQuery ? [] : searchHistory.slice(0, 5);
    const popularToShow = hasSearchQuery ? [] : popularSearches.slice(0, 5);

    if (suggestions.length === 0 && historyToShow.length === 0 && popularToShow.length === 0) {
      return null;
    }

    return (
      <div
        ref={suggestionsRef}
        className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
      >
        {/* Search Suggestions */}
        {suggestions.length > 0 && (
          <div className="p-2">
            <div className="text-xs text-gray-500 uppercase tracking-wide px-2 py-1">
              Suggestions
            </div>
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="flex items-center px-2 py-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Search className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-700">{suggestion}</span>
              </div>
            ))}
          </div>
        )}

        {/* Search History */}
        {historyToShow.length > 0 && (
          <div className="p-2 border-t border-gray-100">
            <div className="text-xs text-gray-500 uppercase tracking-wide px-2 py-1">
              Recent Searches
            </div>
            {historyToShow.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-2 py-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => handleSuggestionClick(item)}
              >
                <Clock className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Popular Searches */}
        {popularToShow.length > 0 && (
          <div className="p-2 border-t border-gray-100">
            <div className="text-xs text-gray-500 uppercase tracking-wide px-2 py-1">
              Popular Searches
            </div>
            {popularToShow.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-2 py-2 hover:bg-gray-100 cursor-pointer rounded"
                onClick={() => handleSuggestionClick(item)}
              >
                <TrendingUp className="w-4 h-4 text-gray-400 mr-3" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-gray-800 cursor-pointer" onClick={() => navigate('/')}>
            OneBest <span className="text-green-700">Fashion</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-900 hover:text-green-700 transition hover:underline">Home</a>
            <a href="/categories" className="text-gray-900 hover:text-green-700 transition hover:underline">Categories</a>
            <a href="/shop" className="text-gray-900 hover:text-green-700 transition hover:underline">Shop</a>
            <a href="/about" className="text-gray-900 hover:text-green-700 transition hover:underline">About</a>
            <a href="/contact" className="text-gray-900 hover:text-green-700 transition hover:underline">Contact</a>
          </nav>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
            <form onSubmit={handleSearchSubmit} className="relative w-full" ref={searchRef}>
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={handleInputFocus}
                placeholder="Search products, categories, brands..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-700 transition"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            {renderSuggestions()}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <Search 
              className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-700 transition md:hidden"
              onClick={handleSearchIconClick}
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

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-4 border-t relative">
            <form onSubmit={handleSearchSubmit} className="relative" ref={searchRef}>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onFocus={handleInputFocus}
                placeholder="Search products, categories, brands..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                autoFocus
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-700 transition"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
            {renderSuggestions()}
          </div>
        )}

        {/* Mobile Menu */}
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