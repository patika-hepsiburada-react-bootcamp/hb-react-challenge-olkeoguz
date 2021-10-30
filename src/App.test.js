import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Filter from './components/Listing/Filters/Filter/Filter';
import Filters from './components/Listing/Filters/Filters';
import Sorting from './components/Listing/Filters/Sorting/Sorting';
import FiltersContext from './contexts/FiltersContext';
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';
import Listing from './components/Listing';
import Modal from './components/UI/Modal/Modal';
import App from './App';

describe('app component', () => {
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

  let cartItems = [];

  let modalOpen = false;

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
      <Router>
        <FiltersContext.Provider
          value={{
            filters,
            setFilters,
          }}
        >
          <ProductContext.Provider value={{ products }}>
            <CartContext.Provider value={{ cartItems,modalOpen }}>
             <App>
             <Listing>
                <Filters>
                  <Filter colorSet={colorsSet} filterName='color' />
                  <Sorting />
                </Filters>
              </Listing>
              <Modal
                title='Ürünü silmek istediğinize emin misiniz?'
                text='Ürünü sepet listenizden kaldırmak istediğinizden emin misiniz? Dilerseniz ürünü sepetinizde tutup fiyatı düştüğünde haberdar olabilirsiniz.'
              />
             </App>
            </CartContext.Provider>
          </ProductContext.Provider>
        </FiltersContext.Provider>
      </Router>
    );

    expect(component).toBeTruthy();
  });
});
