import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

const ProductContext = createContext();

export default ProductContext;

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const res = await fetch('http://localhost:3000/products');
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const values = {
    products,
    setProducts,
    loading,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
