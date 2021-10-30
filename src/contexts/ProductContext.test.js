import React from 'react';
import ProductContext, { ProductContextProvider } from './ProductContext';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import FiltersContext from './FiltersContext';

describe('Product Context', () => {
  let testProducts;
  let testLoading;
  let testError;
  let testSetProducts;

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

  beforeEach(() => {
    render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContextProvider>
          <ProductContext.Consumer>
            {({ products, loading, error, setProducts }) => {
              testProducts = products;
              testLoading = loading;
              testError = error;
              testSetProducts = setProducts;
            }}
          </ProductContext.Consumer>
        </ProductContextProvider>
      </FiltersContext.Provider>
    );
  });

  it('should not have any products', () => {
    expect(testProducts).toHaveLength(0);
  });

  it('should have loading set to true ', () => {
    expect(testLoading).toBeTruthy();
  });

  it('should not have any error', () => {
    expect(testError).toBeFalsy();
  });

  it('should be able to set products', () => {
    act(() => testSetProducts([{ id: 1, name: 'Apple', color: 'Siyah' }]));
    expect(testProducts).toHaveLength(1);
  });
});
