import React from 'react';
import CartContext, { CartContextProvider } from './CartContext';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';

describe('Cart Context', () => {
  let testModalOpen;
  let testCartItems;
  let testSetModalOpen;

  beforeEach(() => {
    render(
      <CartContextProvider>
        <CartContext.Consumer>
          {({ modalOpen, cartItems, setModalOpen }) => {
            testModalOpen = modalOpen;
            testCartItems = cartItems;
            testSetModalOpen = setModalOpen;
          }}
        </CartContext.Consumer>
      </CartContextProvider>
    );
  });

  it('should not render modal', () => {
    expect(testModalOpen).toBeFalsy();
  });

  it('should not have any cart items', () => {
    expect(testCartItems).toBeFalsy();
  });

  it('should set the modal state to true ', () => {
    act(() => testSetModalOpen(1));
    expect(testModalOpen).toBeTruthy();
  });
});
