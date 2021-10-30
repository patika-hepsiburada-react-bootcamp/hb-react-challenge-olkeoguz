import { render } from '@testing-library/react';
import FiltersContext from '../../../../contexts/FiltersContext';
import Filter from './Filter';

describe('filter component', () => {
  let filters = {
    color: '',
    brand: '',
    sort: '',
    search: '',
  };

  const setFilters = () => {
    filters = {
      color: '',
      brand: '',
      sort: '',
      search: '',
    };
  };

  let colorsSet = { Siyah: 10 };

  it('should be rendered', () => {
    const component = render(
      <FiltersContext.Provider
        value={{
          filters,
          setFilters,
        }}
      >
        <Filter data={colorsSet} filterName='color' />
      </FiltersContext.Provider>
    );

    expect(component).toBeTruthy();
  });
});
