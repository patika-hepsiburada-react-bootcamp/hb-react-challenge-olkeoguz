import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useProducts } from '../../../contexts/ProductContext';
import SingleProduct from '../SingleProduct/SingleProduct';
import Pagination from '../../Pagination/Pagination';
import './Products.scss';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPerPage] = useState(12);
  const { products } = useProducts();

  const history = useHistory();
  let query = useQuery();

  useEffect(() => {
    // for the page refreshes
    if (query.get('page')) {
      setCurrentPage(+query.get('page'));
    }
  }, [currentPage]);

  const indexOfLastResult = currentPage * numPerPage;
  const indexOfFirstResult = indexOfLastResult - numPerPage;
  const currentResults = products.slice(indexOfFirstResult, indexOfLastResult);

  const totalNum = products.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    history.push(`/?page=${pageNumber}`);
  };
  return (
    <div className="products-main">
      <div className='products-container'>
        {currentResults.map((prod) => (
          <SingleProduct key={prod.id} product={prod} />
        ))}
      </div>
      <Pagination
        numPerPage={numPerPage}
        totalNum={totalNum}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Products;
