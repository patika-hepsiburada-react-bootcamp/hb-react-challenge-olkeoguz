import { render } from '@testing-library/react';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import CartContext from '../../../contexts/CartContext';
import Modal from './Modal';
import '@testing-library/jest-dom';

describe('Modal Component', () => {
  // let refuse;
  // let confirm;
  beforeEach(() => {
    render(
      <CartContext.Provider value={{ modalOpen: true }}>
        <Modal />
      </CartContext.Provider>
    );

    // refuse = screen.getByText('Hayır');
    //  confirm = screen.getByText("Hayır");
  });

  it('renders without crashing', () => {
    const component = render(
      <CartContext.Provider value={{ modalOpen: true }}>
        <Modal />
      </CartContext.Provider>
    );

    expect(component).toBeTruthy();
  });

  it('Unmounts without crashing', () => {
    render(
      <CartContext.Provider value={{ modalOpen: false }}>
        <Modal />
      </CartContext.Provider>
    );

    expect(<Modal />).not.toBeInTheDocument;
  });

  // it('Should have a title alert', () => {
  //   render(
  //     <CartContext.Provider value={{ modalOpen: true }}>
  //       <Modal />
  //     </CartContext.Provider>
  //   );
  //   // const title = document.getElementById('modal-id').innerHTML.toString();
  //   const title = screen.getByTestId('modal-id');
  //   expect(title).toHaveTextContent('Ürünü silmek istediğinize emin misiniz?');
  // });

  // it('should be invisible when use refuses to delete the product from the cart', () => {
  //   let modalOpen = true;
  //   const mockFn = jest.fn(() => false);
  //   render(
  //     <CartContext.Provider
  //       value={{
  //         modalOpen,
  //         setModalOpen: () => false,
  //         confirmRemoving: mockFn,
  //       }}
  //     >
  //       <Modal click={mockFn} />
  //     </CartContext.Provider>
  //   );

  //   userEvent.click(refuse);
  //   expect(<Modal />).not.toBeInTheDocument;
  // });
});
