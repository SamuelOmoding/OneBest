// src/context/SearchContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [popularSearches, setPopularSearches] = useState([
    'dresses', 'shoes', 'bags', 'jeans', 't-shirts', 'jackets', 'accessories'
  ]);
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  // Load search history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Save search history to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const addToSearchHistory = (query) => {
    if (query.trim() && !searchHistory.includes(query.trim())) {
      const newHistory = [query.trim(), ...searchHistory.slice(0, 9)]; // Keep last 10 searches
      setSearchHistory(newHistory);
    }
  };

  const clearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const removeFromSearchHistory = (query) => {
    setSearchHistory(searchHistory.filter(item => item !== query));
  };

  const generateSearchSuggestions = (query) => {
    if (!query.trim()) {
      setSearchSuggestions([]);
      return;
    }

    const allSuggestions = [
      ...searchHistory,
      ...popularSearches,
      // Add more product-specific suggestions here
      'summer dresses', 'winter coats', 'running shoes', 'formal wear',
      'casual wear', 'party dresses', 'work clothes', 'sports wear'
    ];

    const filtered = allSuggestions
      .filter(item => item.toLowerCase().includes(query.toLowerCase()))
      .slice(0, 5);

    setSearchSuggestions(filtered);
  };

  const value = {
    searchHistory,
    popularSearches,
    searchSuggestions,
    addToSearchHistory,
    clearSearchHistory,
    removeFromSearchHistory,
    generateSearchSuggestions
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;