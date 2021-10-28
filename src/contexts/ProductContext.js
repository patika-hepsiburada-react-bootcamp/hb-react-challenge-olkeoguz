import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useFilters } from './FiltersContext';

const ProductContext = createContext();

export default ProductContext;

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { filters } = useFilters();

  let baseURL = `http://localhost:3000/products?`;
  const color = filters.color.length > 0 ? `color=${filters.color}` : '';
  const brand = filters.brand.length > 0 ? `brand=${filters.brand}` : '';
  baseURL = baseURL + brand + '&' + color;

  console.log(baseURL);

  const fetchData = useCallback(async (baseURL) => {
    setLoading(true);
    // const res = await fetch('http://localhost:3000/products?color=Sarı');
    const res = await fetch(baseURL);
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData(baseURL);
  }, [baseURL]);


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
