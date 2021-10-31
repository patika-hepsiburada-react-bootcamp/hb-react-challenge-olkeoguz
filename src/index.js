import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import { ProductContextProvider } from './contexts/ProductContext';
import { CartContextProvider } from './contexts/CartContext';
import { FiltersContextProvider } from './contexts/FiltersContext';

import './index.scss';

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
