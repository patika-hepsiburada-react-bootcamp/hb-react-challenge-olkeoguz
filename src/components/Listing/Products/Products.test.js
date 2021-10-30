import { render } from '@testing-library/react';
import FiltersContext from '../../../contexts/FiltersContext';
import Products from './Products';
import ProductContext from '../../../contexts/ProductContext';

import '@testing-library/jest-dom/extend-expect';

describe('products component', () => {
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
      sort: 'asc',
      search: '',
    };
  };

  let products = [
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

  let loading = false;

  it('should be rendered if no error and no loading', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContext.Provider value={{ products, loading, error: false }}>
          <Products />
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );

    expect(component).toBeTruthy();
  });

  it('should render loading  if loading is true', () => {
    loading = true;
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContext.Provider value={{ products: [], loading }}>
          <Products />
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );

    expect(component.getAllByTestId('skeleton-loading')[0]).toBeInTheDocument();
  });

  it('should render empty search results if the loading is false and products length is 0', () => {
    loading = false;

    products = [];

    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
          error: false,
          loading: false,
        }}
      >
        <ProductContext.Provider value={{ products, loading }}>
          <Products />
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );

    expect(component.getByTestId('empty-result')).toBeInTheDocument();
  });

  it('should be giving error message if the loading is false and the error is true', () => {
    loading = false;
    let error = true;
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContext.Provider value={{ products, loading, error }}>
          <Products />
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );
    expect(component.getByTestId('fetch-products-error')).toBeInTheDocument();
  });

  it('should render a pagination list when products are listed', () => {
    loading = false;
    let error = false;

    products = [
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
      {
        id: 2,
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
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContext.Provider value={{ products, loading, error }}>
          <Products />
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );
    expect(component.getByTestId('paginationList')).toBeInTheDocument();
  });
});
