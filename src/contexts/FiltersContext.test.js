import React from 'react';
import FiltersContext, { FiltersContextProvider } from './FiltersContext';
import { BrowserRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Filters Context', () => {
  let testFilters;

  beforeEach(() => {
    render(
      <Router>
        <FiltersContextProvider>
          <FiltersContext.Consumer>
            {({ filters }) => {
              testFilters = filters;
            }}
          </FiltersContext.Consumer>
        </FiltersContextProvider>
      </Router>
    );
  });


  it('should have filters', () => {
    expect(testFilters).toBeTruthy();
  });

});
