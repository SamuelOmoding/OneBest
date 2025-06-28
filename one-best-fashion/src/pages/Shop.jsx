import React from 'react';
import ProductList from '../components/ProductList';

const Shop = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Shop</h1>
            <p className="text-lg text-center text-gray-600 mb-8">Welcome to the shop page. Browse our products!</p>
            <ProductList />
        </div>
        </div>
    );
};

export default Shop;