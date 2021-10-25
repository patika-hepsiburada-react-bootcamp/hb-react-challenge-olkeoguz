import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export default ProductContext;

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/products');
      const data = await res.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const values = {
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
