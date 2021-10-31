import { render } from '@testing-library/react';
import CartContext from '../../../contexts/CartContext';
import Cart from './Cart';

import '@testing-library/jest-dom/extend-expect';

describe('cart component', () => {
  let cartItems = [];

  const removeFromCart = () => {};

  it('should be rendered', () => {
    const component = render(
      <CartContext.Provider
        value={{
          cartItems: cartItems,
          removeFromCart,
        }}
      >
        <Cart />
      </CartContext.Provider>
    );

    expect(component).toBeTruthy();
  });

  it('should have 2 items in the cart', () => {
    cartItems = [
      {
        brand: 'Samsung',
        color: 'Kırmızı',
        createdDate: '2021-01-28T10:07:44',
        discount: 10,
        id: 15,
        images: [
          {
            original:
              'https://productimages.hepsiburada.net/s/36/550/10503083130930.jpg/format:webp',
          },
        ],
        name: 'Samsung Galaxy Note 10 Lite',
        price: 6336,
      },
      {
        brand: 'Apple',
        color: 'Siyah',
        createdDate: '2021-01-28T10:07:44',
        discount: 12,
        id: 10,
        images: [
          {
            original:
              'https://productimages.hepsiburada.net/s/36/550/10503083130930.jpg/format:webp',
          },
        ],
        name: 'Samsung Galaxy Note 10 Lite',
        price: 5122,
      },
    ];
    const component = render(
      <CartContext.Provider
        value={{
          cartItems: cartItems,
          removeFromCart,
        }}
      >
        <Cart />
      </CartContext.Provider>
    );

    expect(component.getAllByTestId('single-cart-item').length).toBe(2);
  });

  it('should render the cart is empty message when empty ', () => {
    cartItems = [];
    const component = render(
      <CartContext.Provider
        value={{
          cartItems: cartItems,
          removeFromCart,
        }}
      >
        <Cart />
      </CartContext.Provider>
    );

    expect(component.getByTestId('empty-basket')).toBeInTheDocument();
  });

  // it('should open the modal when remove button is clicked', () => {
  //   cartItems = [
  //     {
  //       brand: 'Samsung',
  //       color: 'Kırmızı',
  //       createdDate: '2021-01-28T10:07:44',
  //       discount: 10,
  //       id: 15,
  //       imageURL:
  //         'https://productimages.hepsiburada.net/s/36/550/10503083130930.jpg/format:webp',
  //       name: 'Samsung Galaxy Note 10 Lite',
  //       price: 6336,
  //     },
  //   ];
  //   const component = render(
  //     <CartContext.Provider
  //       value={{
  //         cartItems: cartItems,
  //         removeFromCart,
  //       }}
  //     >
  //       <Cart />
  //     </CartContext.Provider>
  //   );
  //   const deleteBtn = component.getAllByTestId('button')[1];
  //   fireEvent.click(deleteBtn);
  //   // expect(component.getByTestId('modal-container')).toBeInTheDocument();
  //   expect(component.getAllByTestId('single-cart-item').length).toBe(1);
  // });
});
