// src/components/Products.jsx
import React from 'react';
import { Heart, Star } from 'lucide-react';

const ProductCard = ({ activeCategory }) => {
  const products = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 29.99,
      originalPrice: 39.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
      category: 'clothing',
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: 'Designer Sneakers',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop',
      category: 'shoes',
      rating: 4.9,
      isSale: true
    },
    {
      id: 3,
      name: 'Elegant Summer Dress',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop',
      category: 'clothing',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Leather Handbag',
      price: 149.99,
      originalPrice: 199.99,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop',
      category: 'accessories',
      rating: 4.6,
      isSale: true
    },
    {
      id: 5,
      name: 'Classic Denim Jacket',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop',
      category: 'clothing',
      rating: 4.5
    },
    {
      id: 6,
      name: 'Running Shoes',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
      category: 'shoes',
      rating: 4.8,
      isNew: true
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600">Discover our handpicked collection</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">New</span>}
                {product.isSale && <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">Sale</span>}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-pink-600" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">({product.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-pink-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
