// src/components/Products.jsx
import React from 'react';
// import { Heart, Star } from 'lucide-react';
import ProductCard from './ProductCard'; 
import { useCart } from '../context/CartContext'; 

const ProductList = ({ activeCategory = 'all' }) => {
  const { addToCart, addToWishlist } = useCart();

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
    },
    {
      id: 7,
      name: 'Stylish Sunglasses',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=300&h=400&fit=crop',
      category: 'accessories',
      rating: 4.4
    },
    {
      id: 8,
      name: 'Casual Polo Shirt',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=400&fit=crop',
      category: 'clothing',
      rating: 4.3
    },
    {
      id: 9,
      name: 'Trendy Backpack',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=300&h=400&fit=crop',
      category: 'accessories',
      rating: 4.5
    },
    {
      id: 10,
      name: 'Formal Leather Shoes',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
      category: 'shoes',
      rating: 4.7
    },
    {
      id: 11,
      name: 'Casual Sneakers',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
      category: 'shoes',
      rating: 4.6
    },
       {
    id: 12,
    name: "Red Dress",
    price: 2500,
    image: "/assets/red-dress.jpg",
    category: "Women",
    isNew: true,
    rating: 4.9
    },
    {
      id: 13,
      name: "Blue Jeans",
      price: 80,
      image: "/assets/blue-jeans.jpg",
      category: "Men",
      isSale: true,
      rating: 4.5
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
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
              onAddToWishlist={() => addToWishlist(product)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
