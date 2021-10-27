import { createContext, useContext, useState } from 'react';
import { useProducts } from './ProductContext';

const CartContext = createContext();

export default CartContext;

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const {products} = useProducts();

  console.log(products);


  const values = {
    cartItems,
    setCartItems,
  };

  return (
    <CartContext.Provider value={values}>{children}</CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
