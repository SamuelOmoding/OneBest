import React, { useState } from 'react';

const mockProduct = {
    id: 1,
    name: 'Classic Denim Jacket',
    description: 'A timeless denim jacket for all seasons.',
    price: 59.99,
    image: 'https://via.placeholder.com/400x400?text=Denim+Jacket',
    sizes: ['S', 'M', 'L', 'XL'],
};

const ProductDetails = () => {
    const [selectedSize, setSelectedSize] = useState(mockProduct.sizes[0]);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        // Implement add to cart logic here
        alert(`Added ${quantity} x ${mockProduct.name} (Size: ${selectedSize}) to cart.`);
    };

    return (
        <div style={{ maxWidth: 800, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee', display: 'flex', gap: 32 }}>
            <img src={mockProduct.image} alt={mockProduct.name} style={{ width: 400, height: 400, objectFit: 'cover', borderRadius: 8 }} />
            <div style={{ flex: 1 }}>
                <h2>{mockProduct.name}</h2>
                <p style={{ color: '#888' }}>{mockProduct.description}</p>
                <h3 style={{ margin: '16px 0' }}>${mockProduct.price.toFixed(2)}</h3>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="size" style={{ marginRight: 8 }}>Size:</label>
                    <select
                        id="size"
                        value={selectedSize}
                        onChange={e => setSelectedSize(e.target.value)}
                        style={{ padding: 4, fontSize: 16 }}
                    >
                        {mockProduct.sizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label htmlFor="quantity" style={{ marginRight: 8 }}>Quantity:</label>
                    <input
                        id="quantity"
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={e => setQuantity(Number(e.target.value))}
                        style={{ width: 60, padding: 4, fontSize: 16 }}
                    />
                </div>
                <button
                    onClick={handleAddToCart}
                    style={{
                        padding: '10px 24px',
                        background: '#222',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 4,
                        fontSize: 16,
                        cursor: 'pointer'
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;