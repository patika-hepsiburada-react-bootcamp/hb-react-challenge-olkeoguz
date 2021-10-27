import React from 'react';
import { useCart } from '../../../contexts/CartContext';
import Button from '../../UI/Button/Button';
import './Cart.scss';

const Cart = () => {
  const { cartItems } = useCart();

  if (!cartItems.length) {
    return <div className='cart-items-container'>Henüz sepetiniz boş...</div>;
  }
  return (
    <div className='cart-items-container'>
      {cartItems.map((item) => (
        <div key={item.id} className='single-cart-item'>
          <div className='image-container'>
            <img src={item.imageURL} alt={item.name} />
          </div>
          <div className='cart-item-details'>
            <p className='name'>{item.name}</p>
            <Button text='Kaldır' type='danger' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
