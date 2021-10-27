import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export default CartContext;

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // double checking if the product is in the cart
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  const removeFromCart = (prodId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== prodId);
    setCartItems(updatedCartItems);
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
