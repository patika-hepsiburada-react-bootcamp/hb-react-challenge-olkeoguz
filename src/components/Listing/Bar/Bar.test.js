import { render, fireEvent } from '@testing-library/react';
import FiltersContext from '../../../contexts/FiltersContext';
import Bar from './Bar';

import '@testing-library/jest-dom/extend-expect';

describe('bar component', () => {
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
        <Bar />
      </FiltersContext.Provider>
    );

    expect(component).toBeTruthy();
  });

  it('should have a button', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <Bar />
      </FiltersContext.Provider>
    );

    expect(component.getByTestId('button')).toBeInTheDocument();
  });

  it('should render sorting options when button is hovered ', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <Bar />
      </FiltersContext.Provider>
    );
    const button = component.getByTestId('button');
    fireEvent.mouseOver(button);
    expect(component.getByTestId('sorting-options')).toBeInTheDocument();
  });

  it('should render the word user searches ', () => {
    filters = {
      sort: 'asc',
      search: 'samsung',
    };
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <Bar />
      </FiltersContext.Provider>
    );
    expect(component.getByTestId('searched-word').innerHTML).toBe('samsung');
  });

  it('should change the sorting option when clicked ', () => {
    filters = {
      sort: 'asc',
      search: '',
    };
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <Bar />
      </FiltersContext.Provider>
    );
    const option = component.getAllByTestId('single-option')[2];
    fireEvent.click(option);
    expect(component.getByTestId('selected-sorting-option').innerHTML).toBe(
      'En Düşük Fiyat'
    );
  });
});
