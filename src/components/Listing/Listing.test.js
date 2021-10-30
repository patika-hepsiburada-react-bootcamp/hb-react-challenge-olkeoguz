import { render } from '@testing-library/react';
import FiltersContext from '../../contexts/FiltersContext';
import ProductContext from '../../contexts/ProductContext';
import Filter from './Filters/Filter/Filter';
import Filters from './Filters/Filters';
import Sorting from './Filters/Sorting/Sorting';

import Listing from './index';

describe('listing component', () => {
  const products = [
    {
      id: 1123,
      brand: 'Apple',
      name: 'Apple Test Pro',
      price: 12000,
      color: 'Siyah',
      imageURL:
        'https://productimages.hepsiburada.net/s/49/400-592/10986385899570.jpg',
      discount: 10,
      createdDate: '2021-10-02T10:07:44',
    },
  ];

  let colorsSet = { Siyah: 10 };

  let filters = {
    color: '',
    brand: '',
    sort: '',
    search: '',
  };

  const setFilters = () => {
    filters = {
      color: '',
      brand: '',
      sort: '',
      search: '',
    };
  };

  it('should be rendered', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContext.Provider value={{ products }}>
          <Listing>
            <Filters>
              <Filter colorSet={colorsSet} filterName='color' />
              <Sorting />
            </Filters>
          </Listing>
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );

    expect(component).toBeTruthy();
  });
});
