import { useMemo, useRef } from 'react';
import { useCart } from '../../../contexts/CartContext';
import Button from '../../UI/Button/Button';
import ImageGallery from 'react-image-gallery';
import './SingleProduct.scss';

const SingleProduct = ({ product }) => {
  const { addToCart, cartItems } = useCart();

  const galleryRef = useRef();

  const clickHandler = () => {
    addToCart(product);
  };

  const startAutoPlay = () => {
    galleryRef.current.play();
  };

  const stopAutoPlay = () => {
    galleryRef.current.pause();
  };

  const itemIsInCart = useMemo(
    () => cartItems.some((item) => item.id === product.id),
    [cartItems]
  );
  return (
    <div
      className='single-product'
      data-testid='single-product'
      onMouseOver={startAutoPlay}
      onMouseLeave={stopAutoPlay}
    >
      <div className='image-container'>
        <ImageGallery
          items={product.images}
          showFullscreenButton={false}
          showBullets={true}
          showNav={false}
          showPlayButton={false}
          slideInterval={1500}
          ref={galleryRef}
        />
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
        <Button
          disabled={itemIsInCart}
          text='Sepete ekle'
          type='secondary'
          click={clickHandler}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
