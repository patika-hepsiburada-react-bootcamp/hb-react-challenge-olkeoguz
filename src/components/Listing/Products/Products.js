import {  useState } from 'react';

import { useProducts } from '../../../contexts/ProductContext';
import { useFilters } from '../../../contexts/FiltersContext';

import SingleProduct from '../SingleProduct/SingleProduct';
import Pagination from '../../Pagination/Pagination';
import Loading from '../../UI/SkeletonLoading/Loading';

import './Products.scss';

const Products = ({ scrollToProductsRef }) => {
  const [numPerPage] = useState(12);
  const { products, loading } = useProducts();

  const { filters, setFilters } = useFilters();

  const indexOfLastResult = filters.curPage * numPerPage;
  const indexOfFirstResult = indexOfLastResult - numPerPage;
  const currentResults = products.slice(indexOfFirstResult, indexOfLastResult);

  const totalNum = products.length;

  const paginate = (pageNumber) => {
    setFilters((prev) => ({ ...prev, curPage: pageNumber }));
    scrollToProductsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='products-main'>
      <div className='products-container'>
        {loading && [...Array(12)].map((_, index) => <Loading key={index} />)}
        {currentResults.map((prod) => (
          <SingleProduct key={prod.id} product={prod} />
        ))}
      </div>
      <Pagination
        numPerPage={numPerPage}
        totalNum={totalNum}
        paginate={paginate}
        currentPage={filters.curPage}
      />
    </div>
  );
};

export default Products;
