import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useProducts } from '../../../contexts/ProductContext';
import SingleProduct from '../SingleProduct/SingleProduct';
import Pagination from '../../Pagination/Pagination';
import Loading from '../../UI/SkeletonLoading/Loading';
import './Products.scss';
import { useQuery } from '../../../helpers/useQuery';

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

const Products = ({ scrollToProductsRef }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPerPage] = useState(12);
  const { products, loading } = useProducts();

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
    // history.push(`/page=${pageNumber}`);
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    // history.push({
    //   path: history.location.pathname,
    //   search: { page: pageNumber },
    // });
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
        currentPage={currentPage}
      />
    </div>
  );
};

export default Products;
