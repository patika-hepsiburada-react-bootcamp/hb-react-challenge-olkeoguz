import { useMemo } from 'react';
import { useCart } from '../../../contexts/CartContext';
import Button from '../../UI/Button/Button';
import './SingleProduct.scss';

const SingleProduct = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const clickHandler = () => {
    addToCart(product);
  };

  const itemIsInCart = useMemo(
    () => cartItems.some((item) => item.id === product.id),
    [cartItems]
  );
  return (
    <div className='single-product' data-testid="single-product">
      <div className='image-container'>
        <img src={product.imageURL} alt={product.name} />
      </div>
      <p className='product-name'>{product.name}</p>
      <div className='product-body'>
        <p className='brand'>
          <span>Marka: </span>
          {product.brand}
        </p>
        <p className='color'>
          <span>Renk: </span>
          {product.color}
        </p>
        <p className='new-price'>{product.price} TL</p>
        <div className='old-price'>
          <span>
            {(
              product.price +
              product.price / (100 / (product.discount || 20))
            ).toFixed(0)}{' '}
            TL
          </span>
          <span>{product.discount}%</span>
        </div>
      </div>
      <div className='product-cart-btn'>
        <Button disabled={itemIsInCart} text='Sepete ekle' type='secondary' click={clickHandler} />
      </div>
    </div>
  );
};

export default SingleProduct;
