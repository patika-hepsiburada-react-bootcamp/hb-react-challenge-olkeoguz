import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ProductContextProvider } from './contexts/ProductContext';

ReactDOM.render(
  <ProductContextProvider>
    <App />
  </ProductContextProvider>,
  document.getElementById('root')
);
