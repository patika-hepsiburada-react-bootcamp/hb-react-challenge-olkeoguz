import React from 'react';
import Button from '../../UI/Button/Button';
import './Cart.scss';

const Cart = () => {
  return (
    <div className='cart-items-container'>
      <div className='single-cart-item'>
        <div className='image-container'>
          <img
            src='https://productimages.hepsiburada.net/s/49/400-592/10986385899570.jpg'
            alt='cart-item-image'
          />
        </div>
        <div className="cart-item-details">
            <p className="name">Apple iPhone 11 Siyah Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ipsam!</p>
            <Button text="Kaldır" type="danger" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
