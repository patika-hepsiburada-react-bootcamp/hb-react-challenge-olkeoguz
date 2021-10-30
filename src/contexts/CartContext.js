import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export default CartContext;

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [prodId, setProdId] = useState(); // product to be deleted

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
    setProdId(prodId);
    setModalOpen(true);
  };

  const confirmRemoving = (isConfirmed) => {
    if (isConfirmed) {
      const updatedCartItems = cartItems.filter((item) => item.id !== prodId);
      setCartItems(updatedCartItems);
    }
    setModalOpen(false);
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    modalOpen,
    setModalOpen,
    confirmRemoving,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
