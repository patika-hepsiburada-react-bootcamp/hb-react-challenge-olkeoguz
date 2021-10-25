import React from 'react';
import Filter from './Filter/Filter';
import './Filters.scss';
import Sorting from './Sorting/Sorting';

const brandsFilter = {
  filterName: 'brands',
  data: [
    { name: 'Samsung', quantity: 3 },
    { name: 'Nokia', quantity: 3 },
    { name: 'Apple', quantity: 3 },
    { name: 'LG', quantity: 3 },
    { name: 'Huawei', quantity: 3 },
    { name: 'Xiaomi', quantity: 3 },
  ],
};

const colorsFilter = {
  filterName: 'colors',
  data: [
    { name: 'Siyah', quantity: 3 },
    { name: 'Kırmızı', quantity: 3 },
    { name: 'Yeşil', quantity: 3 },
    { name: 'Mavi', quantity: 3 },
    { name: 'Beya', quantity: 3 },
    { name: 'Gri', quantity: 3 },
  ],
};

const Filters = () => {
  return (
    <div className='filters'>
      <div className="sticky">
        <Filter filter={colorsFilter} />
        <Sorting />
        <Filter filter={brandsFilter} />
      </div>
    </div>
  );
};

export default Filters;
