import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.max(0, action.payload.quantity) }
            : item
        ).filter(item => item.quantity > 0)
      };

    case 'ADD_TO_WISHLIST': {
      const existingWishlistItem = state.wishlistItems.find(item => item.id === action.payload.id);
      if (existingWishlistItem) return state;
      return {
        ...state,
        wishlistItems: [...state.wishlistItems, action.payload]
      };
    }

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlistItems: state.wishlistItems.filter(item => item.id !== action.payload)
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: []
      };

    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };

    case 'REDUCE_STOCK': {
      const updatedProducts = state.products.map(product => {
        const cartItem = state.cartItems.find(item => item.id === product.id);
        if (cartItem) {
          return {
            ...product,
            stock: Math.max(0, product.stock - cartItem.quantity)
          };
        }
        return product;
      });
      return {
        ...state,
        products: updatedProducts,
        cartItems: []
      };
    }

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: [],
    wishlistItems: [],
    products: []
  });

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } });
  };

  const addToWishlist = (product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (productId) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const setProducts = (products) => {
    dispatch({ type: 'SET_PRODUCTS', payload: products });
  };

  const reduceStockOnPurchase = () => {
    dispatch({ type: 'REDUCE_STOCK' });
  };

  const getCartTotal = () => {
    return state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getWishlistItemsCount = () => {
    return state.wishlistItems.length;
  };

  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      wishlistItems: state.wishlistItems,
      products: state.products,
      addToCart,
      removeFromCart,
      updateQuantity,
      addToWishlist,
      removeFromWishlist,
      clearCart,
      setProducts,
      reduceStockOnPurchase,
      getCartTotal,
      getCartItemsCount,
      getWishlistItemsCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart };




