// src/data/products.js

  const products = [
  {
    id: 1,
    name: 'T-Shirt',
    brand: 'Brand A',
    category: 'Men',
    price: 10,
    rating: 4.5,
    isNew: true,
    isSale: false,
    quantity: 10,
    sizes: ['S', 'M', 'L'],
    image: '/images/tshirt.jpg',
  },
  // ... more products
];

/**
 * Search products by name, brand or category
 */
export function searchProducts(query) {
  if (!query) return products;
  const lower = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lower) ||
      p.brand.toLowerCase().includes(lower) ||
      p.category.toLowerCase().includes(lower)
  );
}

/**
 * Filter products based on category and price range
 */
export function filterProducts(productList, filters) {
  return productList.filter((p) => {
    const categoryMatch =
      !filters.category || p.category.toLowerCase() === filters.category.toLowerCase();
    const priceMatch =
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1];
    return categoryMatch && priceMatch;
  });
}

/**
 * Sort products based on criteria
 */
export function sortProducts(productList, sortBy) {
  const sorted = [...productList];

  switch (sortBy) {
    case 'price-low':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'brand':
      sorted.sort((a, b) => a.brand.localeCompare(b.brand));
      break;
    case 'rating':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      sorted.sort((a, b) => b.id - a.id);
      break;
    default:
      // relevance = no change
      break;
  }

  return sorted;
}

export default products;