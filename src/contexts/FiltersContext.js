import { createContext, useContext } from 'react';
import { useProducts } from './ProductContext';

const FiltersContext = createContext();

export default FiltersContext;

export const FiltersContextProvider = ({ children }) => {
  const { products } = useProducts();

  console.log(products);

  const values = {};

  return (
    <FiltersContext.Provider value={values}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
