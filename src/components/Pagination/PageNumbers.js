import React from 'react';
import './pagination.scss';

const PageNumbers = ({ pageNumbers, paginate, currentPage }) => {
  let number = 1;

  if (currentPage > 3) {
    number = currentPage - 2;
  }

  let list = (
    <ul className='paginationList'>
      {pageNumbers.map((num) => (
        <li
          key={num}
          className={num === currentPage ? 'pageNum active' : 'pageNum'}
          onClick={() => paginate(num)}
        >
          <span className='pageLink'>{num}</span>
        </li>
      ))}
    </ul>
  );

  if (pageNumbers.length >= 7) {
    list = (
      <ul className='paginationList'>
        <li
          className={number === currentPage ? 'pageNum active' : 'pageNum'}
          onClick={() => paginate(currentPage > 3 ? +`${number}` : 1)}
        >
          <span className='pageLink'>{currentPage > 3 ? +`${number}` : 1}</span>
        </li>
        <li
          className={number === currentPage - 1 ? 'pageNum active' : 'pageNum'}
          onClick={() => paginate(currentPage > 3 ? +`${number + 1}` : 2)}
        >
          <span className='pageLink'>
            {currentPage > 3 ? `${number + 1}` : 2}
          </span>
        </li>
        <li
          className={number === currentPage - 2 ? 'pageNum active' : 'pageNum'}
          onClick={() => paginate(currentPage > 3 ? `${currentPage}` : 3)}
        >
          <span className='pageLink'>{currentPage > 3 ? currentPage : 3}</span>
        </li>

        <li>
          <span className='pageLink dot'>...</span>
        </li>

        <li onClick={() => paginate(pageNumbers.length - 3)}>
          <span className='pageLink'>{pageNumbers.length - 3}</span>
        </li>
        <li onClick={() => paginate(pageNumbers.length - 2)}>
          <span className='pageLink'>{pageNumbers.length - 2}</span>
        </li>
        <li onClick={() => paginate(pageNumbers.length - 1)}>
          <span className='pageLink'>{pageNumbers.length - 1}</span>
        </li>
      </ul>
    );
  }

  if (pageNumbers.length >= 7 && currentPage >= pageNumbers.length - 3) {
    list = (
      <ul className='paginationList'>
        <li
          className={
            pageNumbers.length - 3 === currentPage
              ? 'pageNum active'
              : 'pageNum'
          }
          onClick={() => paginate(pageNumbers.length - 3)}
        >
          <span className='pageLink'>{pageNumbers.length - 3}</span>
        </li>
        <li
          className={
            pageNumbers.length - 2 === currentPage
              ? 'pageNum active'
              : 'pageNum'
          }
          onClick={() => paginate(pageNumbers.length - 2)}
        >
          <span className='pageLink'>{pageNumbers.length - 2}</span>
        </li>
        <li
          className={
            pageNumbers.length - 1 === currentPage
              ? 'pageNum active'
              : 'pageNum'
          }
          onClick={() => paginate(pageNumbers.length - 1)}
        >
          <span className='pageLink'>{pageNumbers.length - 1}</span>
        </li>
      </ul>
    );
  }
  return <>{list}</>;
};

export default PageNumbers;
