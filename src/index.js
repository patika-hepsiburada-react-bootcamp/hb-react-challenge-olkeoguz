import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { ProductContextProvider } from './contexts/ProductContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <ProductContextProvider>
      <App />
    </ProductContextProvider>
  </Router>,
  document.getElementById('root')
);
