// src/pages/SearchResults.jsx

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, Grid, List, Heart, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { searchProducts, filterProducts, sortProducts, products } from '../data/products';

// Static conversion rate from USD to KES
const USD_TO_KES = 128;

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, isInWishlist } = useCart();

  
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('relevance');
  const [filterBy, setFilterBy] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);


  const convertToKES = (usd) => (usd * USD_TO_KES).toFixed(0);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchQuery(query);
    
    // Simulate API call
    setTimeout(() => {
      const results = searchProducts(query, products);
      setSearchResults(results);
      setFilteredResults(results);
      setLoading(false);
    }, 500);
  }, [location.search]);

    useEffect(() => {
    const filters = {
      category: filterBy !== 'all' ? filterBy : null,
      priceRange: priceRange
        ? [priceRange[0] / USD_TO_KES, priceRange[1] / USD_TO_KES]
        : [0, 1000 / USD_TO_KES],
        setPriceRange: (range) => setPriceRange(range),
    };
    
    let filtered = filterProducts(searchResults, filters);
    filtered = sortProducts(filtered, sortBy);
    
    setFilteredResults(filtered);
  }, [searchResults, sortBy, filterBy, priceRange]);

  const handleNewSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleAddToCart = (product) => {
    // If product has sizes, we need to handle size selection
    if (product.sizes && product.sizes.length > 0) {
      // For now, we'll add the first available size
      // In a real app, you'd want to show a size selector modal
      // or dropdown to let the user choose a size
      const productWithSize = { ...product, selectedSize: product.sizes[0] };
      addToCart(productWithSize);
    } else {
      addToCart(product);
    }
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <form onSubmit={handleNewSearch} className="relative max-w-2xl mx-auto mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products, categories, brands..."
            className="w-full px-6 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg"
          />
          <button
            type="submit"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-700 transition"
          >
            <Search className="w-6 h-6" />
          </button>
        </form>
        
        <div className="text-center text-gray-600">
          {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} 
          {searchQuery && ` for "${searchQuery}"`}
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <div className="flex items-center space-x-4">
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="all">All Categories</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
            <option value="clothing">Clothing</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="relevance">Sort by Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
            <option value="brand">Brand A-Z</option>
            <option value="rating">Rating</option>
            <option value="newest">Newest First</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-700 text-white' : 'bg-gray-200'}`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Results */}
      {filteredResults.length === 0 ? (
        <div className="text-center py-12">
          <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">No results found</h2>
          <p className="text-gray-500">Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
          {filteredResults.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className={`object-cover cursor-pointer ${
                    viewMode === 'list' ? 'w-32 h-32' : 'w-full h-48'
                  }`}
                  onClick={() => navigate(`/product/${product.id}`)}
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
              </div>
              
              <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <h3 
                  className="font-semibold text-lg mb-2 cursor-pointer hover:text-green-700 transition"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-2">{product.brand}</p>
                
                {product.rating && (
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
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-700 font-bold text-xl">
                      KSh {convertToKES(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-500 text-sm line-through">
                        KSh {convertToKES(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-500">Qty: {product.quantity}</span>
                </div>
                
                {product.sizes && product.sizes.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">
                      Sizes: {product.sizes.join(', ')}
                    </p>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex-1 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className={`p-2 rounded-lg transition ${
                      isInWishlist(product.id) 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;