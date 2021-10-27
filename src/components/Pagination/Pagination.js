import PageNumbers from './PageNumbers';
import './pagination.scss';

const Pagination = ({ numPerPage, totalNum, paginate, currentPage }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalNum / numPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      {currentPage !== 1 && (
        <span className='arrow' onClick={() => paginate(currentPage - 1)}>
          {'<'}
        </span>
      )}
      <PageNumbers
        numPerPage={numPerPage}
        totalNum={totalNum}
        paginate={paginate}
        currentPage={currentPage}
        pageNumbers={pageNumbers}
      />
      {currentPage <= Math.floor(totalNum / (numPerPage + 1)) && (
        <span className='arrow' onClick={() => paginate(currentPage + 1)}>
          {'>'}
        </span>
      )}
    </div>
  );
};

export default Pagination;
