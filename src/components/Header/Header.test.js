import { render } from '@testing-library/react';
import CartContext from '../../contexts/CartContext';
import FiltersContext from '../../contexts/FiltersContext';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('header component', () => {
  let filters = {
    color: '',
    brand: '',
    sort: '', // desc asc,newest,oldest,
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

  let cartItems = [];
  let input;

  it('should be rendered', () => {
    const component = render(
      <Router>
      <CartContext.Provider value={{ cartItems }}>
        <FiltersContext.Provider
          value={{
            filters,
            setFilters,
          }}
        >
          <Header />
        </FiltersContext.Provider>
      </CartContext.Provider>
      </Router>
    );


    expect(component).toBeTruthy();
  });

  it('should have the input ', () => {
    const component = render(
      <Router>
      <CartContext.Provider value={{ cartItems }}>
        <FiltersContext.Provider
          value={{
            filters,
            setFilters,
          }}
        >
          <Header />
        </FiltersContext.Provider>
      </CartContext.Provider>
      </Router>
    );

    input = component.getByTestId('search-input');

    expect(input).toBeTruthy();
  });

});
