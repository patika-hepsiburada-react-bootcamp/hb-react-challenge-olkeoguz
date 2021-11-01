import React from 'react';
import { useCart } from '../../../contexts/CartContext';
import Button from '../../UI/Button/Button';
import './Cart.scss';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  if (!cartItems) {
    return (
      <div className='cart-items-container' data-testid='empty-basket'>
        Henüz sepetiniz boş...
      </div>
    );
  }
  return (
    <div className='cart-items-container' data-testid='cart-items-container'>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className='single-cart-item'
          data-testid='single-cart-item'
        >
          <div className='image-container'>
            <img src={item.images[0].original} alt={item.name} />
          </div>
          <div className='cart-item-details'>
            <p className='name'>{item.name}</p>
            <Button
              text='Kaldır'
              type='danger'
              click={() => removeFromCart(item.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Cart);
