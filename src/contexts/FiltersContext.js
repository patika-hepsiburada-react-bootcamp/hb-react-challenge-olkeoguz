import { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../helpers/useQuery';

const FiltersContext = createContext();

export default FiltersContext;

export const FiltersContextProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    curPage: 1,
    color: '',
    brand: '',
    sort: '', // desc asc,newest,oldest,
    search: '',
  });

  const history = useHistory();
  let query = useQuery();

  useEffect(() => {
    // for the page refreshes
    if (query.get('page')) {
      setFilters((prev) => ({ ...prev, curPage: +query.get('page') }));
    }
    if (query.get('brand')) {
      setFilters((prev) => ({ ...prev, brand: query.get('brand') }));
    }
    if (query.get('color')) {
      setFilters((prev) => ({ ...prev, color: query.get('color') }));
    }
    if (query.get('sort')) {
      setFilters((prev) => ({ ...prev, sort: query.get('sort') }));
    }
    if (query.get('name')) {
      setFilters((prev) => ({ ...prev, search: query.get('name') }));
    }
  }, []);

  useEffect(() => {
    history.push(
      `/?page=${filters.curPage}&brand=${filters.brand}&sort=${filters.sort}&name=${filters.search}&color=${filters.color}`
    );
  }, [filters]);

  const values = {
    filters,
    setFilters,
  };

  return (
    <FiltersContext.Provider value={values}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => useContext(FiltersContext);
