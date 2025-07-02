// src/components/Products.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';
import SubcategoryFilter from './SubcategoryFilter';

const slugify = (str) => str.toLowerCase().replace(/&/g, '').replace(/ /g, '-');

const ProductList = () => {
  const { addToCart, addToWishlist } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const activeCategory = searchParams.get('category') || 'all';
  const activeSubcategory = searchParams.get('subcategory') || 'all';
  const filter = searchParams.get('filter') || null;

  const handleFilterChange = (value) => {
    if (value === 'New Arrivals') {
      navigate(`?filter=new-arrivals`);
    } else if (value === 'All') {
      navigate(`?category=${activeCategory}`);
    } else {
      navigate(`?category=${activeCategory}&subcategory=${slugify(value)}`);
    }
  };

  const products = [
    {
      id: 1,
      name: 'Premium Cotton T-Shirt',
      price: 4.00,
      originalPrice: 6.99,
      quantity: 3,
      sizes: ['M', 'L', 'XL', '2XL', '3XL'],
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop',
      category: 'Men',
      subcategory: 'T-Shirts-Polos',
      rating: 4.8,
      isNew: true
    },
    {
      id: 2,
      name: 'Designer Sneakers',
      price: 40.00,
      originalPrice: 59.99,
      quantity: 2,
      sizes: [38, 40, 41, 42, 43, 44],
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=400&fit=crop',
      category: 'shoes',
      subcategory: 'Sneakers',
      rating: 4.9,
      isSale: true
    },
    {
      id: 3,
      name: 'Elegant Summer Dress',
      price: 79.99,
      quantity: 1,
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=300&h=400&fit=crop',
      category: 'Women',
      subcategory: 'Dresses',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Leather Handbag',
      price: 149.99,
      originalPrice: 199.99,
      quantity: 10,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&h=400&fit=crop',
      category: 'accessories',
      subcategory: 'Bags',
      rating: 4.6,
      isSale: true
    },
    {
      id: 5,
      name: 'Classic Denim Jacket',
      price: 45.00,
      quantity: 5,
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop',
      category: 'clothing',
      subcategory: 'Jackets-Coats',
      rating: 4.5
    },
    {
      id: 6,
      name: 'Running Shoes',
      price: 99.99,
      quantity: 3,
      sizes: [38, 39, 40, 41, 42, 43],
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=400&fit=crop',
      category: 'shoes',
      subcategory: 'Running Shoes',
      rating: 4.8,
      isNew: true
    },
    {
      id: 7,
      name: 'Stylish Woman',
      price: 50.00,
      quantity: 2,
      sizes: ['38', '40', '42', '44'],
      image: '/images/categories/women.jpeg',
      category: 'Women',
      subcategory: 'Pants-Jeans',
      isSale: true,
      rating: 4.4
    },
    {
      id: 8,
      name: 'Casual Polo Shirt',
      price: 8.8125,
      quantity: 3,
      sizes: ['S', 'M', 'L', 'XL'],
      image: '/images/catalog/Polo.jpeg',
      category: 'Men',
      subcategory: 'T-Shirts-Polos',
      isNew: true,
      rating: 4.3
    },
    {
      id: 9,
      name: 'Trendy Backpack',
      price: 19.53125,
      quantity: 4,
      image: '/images/catalog/Backpack.jpeg',
      category: 'accessories',
      subcategory: 'Bags',
      rating: 4.5
    },
    {
      id: 10,
      name: 'Formal Leather Shoes',
      price: 125.00,
      quantity: 2,
      sizes: [40, 41, 42, 43, 44],
      image: './images/catalog/Leathershoes.jpeg',
      category: 'Men',
      subcategory: 'Leather Shoes',
      isSale: true,
      originalPrice: 150.00,
      rating: 4.7
    },
    {
      id: 11,
      name: 'Casual Sneakers',
      price: 65.80,
      quantity: 1,
      sizes: [38, 39, 40, 41, 42, 43],
      image: '/images/catalog/SneakersB.jpeg',
      category: 'shoes',
      subcategory: 'Sneakers',
      isNew: true,
      originalPrice: 80.00,
      rating: 4.6
    },
    {
      id: 12,
      name: 'Nike',
      price: 66.40625,
      quantity: 1,
      sizes: [38, 39, 40, 41, 42, 43],
      image: '/images/catalog/NikeS.jpeg',
      category: 'Women',
      subcategory: 'Sneakers',
      isNew: true,
      rating: 4.9
    },
    {
      id: 13,
      name: 'Blue Jeans',
      price: 15.625,
      quantity: 2,
      sizes: [38, 39, 40, 41, 42, 43],
      image: '/images/catalog/LightBlueWash.jpeg',
      category: 'Women',
      subcategory: 'Jeans',
      isSale: true,
      rating: 4.5
    },
    {
      id: 14,
      name: 'Top',
      price: 19.53125,
      quantity: 3,
      sizes: ['S', 'M', 'L', 'XL'],
      image: '/images/tops/Top1.jpeg',
      category: 'Women',
      subcategory: 'Tops-Blouses',
      isNew: true,
      rating: 4.5
    },
    {
      id: 15,
      name: 'Elegant Fitted Summer Dress',
      price: 75.00,
      quantity: 1,
      sizes: ['S', 'M', 'L', 'XL'],
      image: '/images/tops/blackandwhitefitted.jpeg',
      category: 'Women',
      subcategory: 'Dresses',
      rating: 4.7
    },
     {
      id: 16,
      name: 'Top & Short',
      price: 19.53125,
      quantity: 3,
      sizes: ['S', 'M', 'L', 'XL'],
      image: '/images/tops/RoyalReese.jpeg',
      category: 'Women',
      subcategory: 'Tops-Blouses',
      isNew: true,
      rating: 4.5
    },
    {
      id: 17,
      name: 'Elegant Bedtime Dress',
      price: 75.00,
      quantity: 1,
      sizes: ['S', 'M', 'L', 'XL'],
      image: '/images/tops/Bedtime.jpeg',
      category: 'Women',
      subcategory: 'Dresses',
      rating: 4.7
    },
    {
      id: 18,
      name: 'Black Hoodie',
      price: 89.99,
      quantity: 2,
      sizes: ['S', 'M', 'L', 'XL'],
      image: '/images/catalog/BlackHood.jpeg',
      category: 'Men',
      subcategory: 'Hoodies-Sweatshirts',
      rating: 4.8,
      isSale: true
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category?.toLowerCase() === activeCategory.toLowerCase();
    const matchesSubcategory = activeSubcategory === 'all' || slugify(product.subcategory || '') === activeSubcategory;
    const matchesFilter = filter === 'new-arrivals' ? product.isNew : true;
    return matchesCategory && matchesSubcategory && matchesFilter;
  });

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
            filteredProducts.map(product => (
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
