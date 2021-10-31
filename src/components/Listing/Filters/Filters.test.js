import { render, fireEvent, screen } from '@testing-library/react';

import ProductContext from '../../../contexts/ProductContext';
import FiltersContext from '../../../contexts/FiltersContext';

import Filters from './Filters';
import Filter from './Filter/Filter';
import Sorting from './Sorting/Sorting';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

describe('filters component', () => {
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
          <Filters>
            <Filter colorSet={colorsSet} filterName='color' />
            <Sorting />
          </Filters>
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );

    expect(component).toBeTruthy();
  });

  it('should render the selected Filter', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContext.Provider value={{ products }}>
          <Filters>
            <Filter colorSet={colorsSet} filterName='color' />
            <Sorting />
          </Filters>
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );

    const filter = component.getAllByTestId('filter')[1];
    fireEvent.click(filter);
    expect(screen.getByText('Apple')).toBeInTheDocument();
  });
});
