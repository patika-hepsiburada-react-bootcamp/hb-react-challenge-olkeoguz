import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('pagination component', () => {
  const paginate = () => {};
  let currentPage = 1;
  let totalNum = 10;
  let numPerPage = 2;

  it('should be rendered', () => {
    const component = render(
      <Pagination
        paginate={paginate}
        currentPage={currentPage}
        totalNum={totalNum}
        numPerPage={numPerPage}
      />
    );

    expect(component).toBeTruthy();
  });
});
