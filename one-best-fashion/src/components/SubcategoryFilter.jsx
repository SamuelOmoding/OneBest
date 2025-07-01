// src/components/SubcategoryFilter.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const slugify = (text) =>
  text.toLowerCase().replace(/ & /g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');


const subcategories = [
  { label: 'All', value: 'all' },
  { label: 'Dresses', value: slugify('Dresses') },
  { label: 'Tops-Blouses', value: slugify('Tops-Blouses') },
  { label: 'Bottoms', value: slugify('Bottoms') },
  { label: 'Shirts', value: slugify('Shirts') },
  { label: 'T-Shirts-Polos', value: slugify('T-Shirts-Polos') },
  { label: 'Sweaters', value: slugify('Sweaters') },
  { label: 'Jackets-Coats', value: slugify('Jackets-Coats') },
  { label: 'Pants/Jeans', value: slugify('Pants/Jeans') },
  { label: 'Shorts', value: slugify('Shorts') },
  { label: 'Sneakers', value: slugify('Sneakers') },
  { label: 'Boots', value: slugify('Boots') },
  { label: 'Dress Shoes', value: slugify('Dress Shoes') },
  { label: 'Leather Shoes', value: slugify('Leather Shoes') },
  { label: 'Hoodies-Sweatshirts', value: slugify('Hoodies-Sweatshirts') },
  { label: 'Bags', value: slugify('Bags') },
  { label: 'Accessories', value: slugify('Accessories') },
  { label: 'Jumpsuits-Rompers', value: slugify('Jumpsuits-Rompers') },
  { label: 'New Arrivals', value: slugify('new-arrivals') }
];

const SubcategoryFilter = ({ selected }) => {
  const navigate = useNavigate();
  const location = useLocation();

const handleChange = (e) => {
  const value = e.target.value;
  const params = new URLSearchParams(location.search);

  if (value === 'all') {
    params.delete('subcategory');
    params.delete('filter');
  } else if (value === 'new-arrivals') {
    params.set('filter', 'new-arrivals');
    params.delete('subcategory');
  } else {
    params.set('subcategory', value);
    params.delete('filter');
  }

  navigate({ pathname: location.pathname, search: params.toString() });
};


  return (
    <div className="mb-8 text-right">
      <label className="mr-2 font-medium text-gray-700">Filter by:</label>
      <select
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        value={selected}
        onChange={handleChange}
      >
        {subcategories.map((sub) => (
          <option key={sub.value} value={sub.value}>
            {sub.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubcategoryFilter;
