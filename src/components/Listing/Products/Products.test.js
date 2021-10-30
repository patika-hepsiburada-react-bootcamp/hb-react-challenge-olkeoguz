import { render } from '@testing-library/react';
import FiltersContext from '../../../contexts/FiltersContext';
import Products from './Products';
import ProductContext from '../../../contexts/ProductContext';

describe('header component', () => {
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

  let loading = false;

  it('should be rendered', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContext.Provider value={{ products, loading }}>
          <Products />
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );

    expect(component).toBeTruthy();
  });

  it('should be rendered if the loading is true', () => {
    loading = false;
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <ProductContext.Provider value={{ products, loading }}>
          <Products />
        </ProductContext.Provider>
      </FiltersContext.Provider>
    );

    expect(component).toBeTruthy();
  });
});


// describe('should render Single Product when products are provided', () => {
//   it('is mini cart rendering on Hover', () => {

//     beforeEach(() => {
//       // console.log("Her testten önce çalışacağım!");
//       render(
//         <ProductContextProvider
//           value={{
//             products: [
//               {
//                 id: 1123,
//                 brand: 'Apple',
//                 name: 'Apple Test Pro',
//                 price: 12000,
//                 color: 'Siyah',
//                 imageURL:
//                   'https://productimages.hepsiburada.net/s/49/400-592/10986385899570.jpg',
//                 discount: 10,
//                 createdDate: '2021-10-02T10:07:44',
//               },
//             ],
//           }}
//         >
//           <Products />
//         </ProductContextProvider>
//       );
//     });

//     const element = screen.getByText("Apple Test Pro")
//     expect(element).toBeInTheDocument();
//   });
// });
