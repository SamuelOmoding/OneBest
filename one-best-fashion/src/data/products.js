// src/data/products.js

export const products = [
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
      brand: 'Fashion Co',
      description: 'Comfortable cotton t-shirt perfect for everyday wear',
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
      brand: 'SportTech',
      description: 'Lightweight sneakers for maximum performance',
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
       brand: 'Elegant Styles',
    description: 'Beautiful summer dress for special occasions',
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
       brand: 'Luxury Leather',
    description: 'Premium leather handbag with elegant design',
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
      brand: 'Denim Plus',
    description: 'High-quality denim jacket with modern fit',
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
      brand: 'SportTech',
    description: 'Professional running shoes for athletes',
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
       brand: 'Style Plus',
    description: 'Trendy women\'s pants for modern style',
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
      brand: 'Casual Wear',
    description: 'Comfortable polo shirt for casual occasions',
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
       brand: 'Travel Gear',
    description: 'Durable backpack for daily use and travel',
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
      brand: 'Luxury Leather',
    description: 'Premium leather shoes for formal occasions',
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
      brand: 'Casual Kicks',
    description: 'Comfortable sneakers for everyday wear',
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
      brand: 'Nike',
    description: 'Premium Nike sneakers for active lifestyle',
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
       brand: 'Denim Co',
    description: 'Classic blue jeans with comfortable fit',
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
       brand: 'Fashion Forward',
    description: 'Stylish top for casual and formal wear',
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
       brand: 'Elegant Styles',
    description: 'Fitted summer dress perfect for special occasions',
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
       brand: 'Royal Collection',
    description: 'Matching top and short set for summer',
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
       brand: 'Comfort Wear',
    description: 'Comfortable and elegant bedtime dress',
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
      brand: 'Urban Wear',
    description: 'Comfortable black hoodie for casual wear',
      rating: 4.8,
      isSale: true
    },
  ];

const slugify = (str) =>
  str.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-');

export const searchProducts = (query, allProducts = products) => {
  if (!query || query.trim() === '') {
    return allProducts;
  }

  const searchTerm = query.toLowerCase().trim();
  return allProducts.filter((product) => {
    const searchableFields = [
      product.name,
      product.category,
      product.subcategory,
      product.brand,
      product.description,
    ]
      .filter(Boolean)
      .map((field) => field.toLowerCase());

    return searchableFields.some(
      (field) =>
        field.includes(searchTerm) ||
        searchTerm
          .split(' ')
          .some((term) => field.includes(term))
    );
  });
};

export const filterProducts = (products, filters) => {
  let filtered = [...products];

  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(
      (product) =>
        product.category?.toLowerCase() === filters.category.toLowerCase()
    );
  }

  if (filters.subcategory && filters.subcategory !== 'all') {
    filtered = filtered.filter(
      (product) => slugify(product.subcategory || '') === filters.subcategory
    );
  }

  if (filters.priceRange) {
    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    );
  }

  if (filters.isNew) {
    filtered = filtered.filter((product) => product.isNew);
  }

  if (filters.isSale) {
    filtered = filtered.filter((product) => product.isSale);
  }

  return filtered;
};

export const sortProducts = (products, sortBy) => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'brand':
      return sorted.sort((a, b) =>
        (a.brand || '').localeCompare(b.brand || '')
      );
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'newest':
      return sorted.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
    default:
      return sorted;
  }
};
