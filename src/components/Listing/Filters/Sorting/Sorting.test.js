import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import FiltersContext from '../../../../contexts/FiltersContext';
import Sorting from './Sorting';

describe('sorting component', () => {
  let filters = {
    color: '',
    brand: '',
    sort: 'asc', // desc asc,newest,oldest,
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

  let sorting;

  it('Sort renders without crashing', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <Sorting />
      </FiltersContext.Provider>
    );

    sorting = component.getByText('Sorting');

    expect(component).toBeTruthy();
    expect(sorting).toBeInTheDocument();
  });

  it('sorting filter changes when use picks another one', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <Sorting />
      </FiltersContext.Provider>
    );

    const sortOption = component.getAllByTestId('sortOption')[1];
    fireEvent.click(sortOption);
    expect(component.getByTestId('selected-sortOption').innerHTML).toBe(
      'En Düşük Fiyat'
    );
  });
});
