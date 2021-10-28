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
    <FiltersContextProvider>
      <ProductContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductContextProvider>
    </FiltersContextProvider>
  </Router>,
  document.getElementById('root')
);
