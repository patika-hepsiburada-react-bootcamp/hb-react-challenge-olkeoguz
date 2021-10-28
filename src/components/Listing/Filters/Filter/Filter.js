import React from 'react';
import { useFilters } from '../../../../contexts/FiltersContext';
import './Filter.scss';

const Filter = ({ data, filterName }) => {
  const { filters, setFilters } = useFilters();

  let filterData = [];
  if (data) {
    filterData = Object.keys(data).map((key) => ({
      name: key,
      quantity: data[key],
    }));
  }

  const changeFilter = (filterName, key) => {
    setFilters((prev) => ({ ...prev, [filterName]: key }));
  };

  return (
    <div className='filter'>
      <h3>{filterName === 'colorFilter' ? 'Colors' : 'Brands'}</h3>
      <ul>
        {filterData &&
          filterData.map((item, index) => (
            <li
              key={index}
              onClick={() => changeFilter(filterName, item.name)}
              className={filters[filterName] === item.name ? 'selected' : ''}
            >
              <span>{item.name}</span> <span>({item.quantity})</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default React.memo(Filter);
