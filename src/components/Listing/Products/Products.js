import { useProducts } from '../../../contexts/ProductContext';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Products.scss';

const Products = () => {
  const { products } = useProducts();
  console.log(products);
  return (
    <div className='products-container'>
      {products.map((prod) => (
        <SingleProduct key={prod.id} product={prod} />
      ))}
    </div>
  );
};

export default Products;
