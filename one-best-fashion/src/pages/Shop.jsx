import React from 'react';
import ProductList from '../components/ProductList';

const Shop = () => {
    return (
        <div>
            <h1>Shop</h1>
            <p>Welcome to the shop page. Browse our products!</p>
            {/* Add product listing or shop components here */}
            <ProductList />
            {/* You can pass products as props to ProductList if needed */}
            {/* <ProductList products={products} /> */}
        </div>
    );
};

export default Shop;