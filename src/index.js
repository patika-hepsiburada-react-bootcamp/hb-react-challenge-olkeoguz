import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ProductContextProvider } from './contexts/ProductContext';
import { CartContextProvider } from './contexts/CartContext';
import { BrowserRouter as Router } from 'react-router-dom';
import { FiltersContextProvider } from './contexts/FiltersContext';

ReactDOM.render(
  <Router>
    <ProductContextProvider>
      <FiltersContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </FiltersContextProvider>
    </ProductContextProvider>
  </Router>,
  document.getElementById('root')
);
