import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export default CartContext;

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // double checking if the product is in the cart
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems((prev) => [...prev, product]);
    }
  };

  console.log("cartItem", cartItems);

  const values = {
    cartItems,
    setCartItems,
    addToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
