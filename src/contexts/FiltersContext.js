import { createContext, useContext, useState } from 'react';

const FiltersContext = createContext();

export default FiltersContext;

export const FiltersContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    color: '',
    brand: '',
    sort: 'lowest',// loewst highest,alpha,nonalpha
  });

  // useEffect(() => {
  //   console.log(filters);
  // },[filters])

  const values = {
    filters,
    setFilters
  };

  return (
    <FiltersContext.Provider value={values}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
