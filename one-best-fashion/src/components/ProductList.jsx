// src/components/ProductList.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';
import SubcategoryFilter from './SubcategoryFilter';
import { products, searchProducts, filterProducts, sortProducts } from '../data/products';

const slugify = (str) => str.toLowerCase().replace(/&/g, '').replace(/ /g, '-');

const ProductList = () => {
  const { addToCart, addToWishlist } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const activeCategory = searchParams.get('category') || 'all';
  const activeSubcategory = searchParams.get('subcategory') || 'all';
  const filter = searchParams.get('filter') || null;
  const searchQuery = searchParams.get('search') || '';

  const searchedProducts = searchProducts(searchQuery, products);
  const filteredProducts = filterProducts(searchedProducts, {
    category: activeCategory,
    subcategory: activeSubcategory,
    isNew: filter === 'new-arrivals',
  });
  
  const handleFilterChange = (value) => {
    if (value === 'New Arrivals') {
      navigate(`?filter=new-arrivals`);
    } else if (value === 'All') {
      navigate(`?category=${activeCategory}`);
    } else {
      navigate(`?category=${activeCategory}&subcategory=${slugify(value)}`);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
          <p className="text-xl text-gray-600">Browse by category or explore new arrivals</p>
        </div>

        <SubcategoryFilter
          selected={filter === 'new-arrivals' ? 'New Arrivals' : activeSubcategory}
          onChange={handleFilterChange}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => addToCart(product)}
                onAddToWishlist={() => addToWishlist(product)}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
