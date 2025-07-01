import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';

const Shop = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const category = queryParams.get('category') || 'all';
    const subcategory = queryParams.get('subcategory') || 'all';    
    const filter = queryParams.get('filter') || 'null';

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Shop</h1>
            <p className="text-lg text-center text-gray-600 mb-8">Welcome to the shop page.Browse our products by category, subcategory or filter!</p>
            <ProductList activeCategory={category} activeSubcategory={subcategory} filter={filter} />
        </div>
        </div>
    );
};

export default Shop;