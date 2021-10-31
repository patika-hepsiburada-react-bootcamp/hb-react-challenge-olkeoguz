import { render } from '@testing-library/react';
import CartContext from '../../../contexts/CartContext';
import SingleProduct from './SingleProduct';

describe('single product component', () => {
  const product = {
    id: 1123,
    brand: 'Apple',
    name: 'Apple Test Pro',
    price: 12000,
    color: 'Siyah',
    images: [
      {
        original:
          'https://productimages.hepsiburada.net/s/36/550/10503083130930.jpg/format:webp',
      },
    ],
    discount: 10,
    createdDate: '2021-10-02T10:07:44',
  };

  const cartItems = [
    {
      id: 1123,
      brand: 'Apple',
      name: 'Apple Test Pro',
      price: 12000,
      color: 'Siyah',
      images: [
        {
          original:
            'https://productimages.hepsiburada.net/s/36/550/10503083130930.jpg/format:webp',
        },
      ],
      discount: 10,
      createdDate: '2021-10-02T10:07:44',
    },
  ];

  const addToCart = () => {};

  it('should be rendered', () => {
    const component = render(
      <CartContext.Provider value={{ addToCart, cartItems }}>
        <SingleProduct product={product} />
      </CartContext.Provider>
    );

    expect(component).toBeTruthy();
  });
});
