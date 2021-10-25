import Button from '../../UI/Button/Button';
import './SingleProduct.scss';

const SingleProduct = ({ product }) => {
  console.log(product);
  return (
    <div className='single-product'>
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
            {product.price + product.price / (product.discount || 20)} TL
          </span>
          <span>{product.discount}%</span>
        </div>
      </div>
      <div className='product-cart-btn'>
        <Button text='Sepete ekle' />
      </div>
    </div>
  );
};

export default SingleProduct;
