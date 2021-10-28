import Logo from '../../assets/logo/Logo.svg';
import Search from '../../assets/icons/Search.svg';
import './Header.scss';
import Button from '../UI/Button/Button';
import Cart from './Cart/Cart';
import { useCart } from '../../contexts/CartContext';
import { useFilters } from '../../contexts/FiltersContext';
import { useEffect, useState } from 'react';
import { useQuery } from '../../helpers/useQuery';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  const { cartItems } = useCart();
  const { filters, setFilters } = useFilters();
  console.log(filters);
  console.log(searchText);

  let query = useQuery();

  useEffect(() => {
    if (query.get('name')) {
      setSearchText(query.get('name'));
    }
  }, []);

  const encodedSearchText = encodeURI(searchText);

  useEffect(() => {
    const searchTime = setTimeout(() => {
      if (searchText.length > 2 || !searchText.length) {
        setFilters((prev) => ({ ...prev, search: encodedSearchText }));
      }
    }, [500]);

    return () => {
      clearTimeout(searchTime);
    };
  }, [searchText]);
  return (
    <header>
      <div className='logo-container'>
        <img className='logo' src={Logo} alt='logo' />
      </div>
      <div className='search-bar'>
        <img src={Search} alt='search-icon' width={17.5} />
        <input
          type='text'
          placeholder="25 milyon'dan fazla ürün içerisinde ara"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className='cart-container'>
        <Button text='Sepetim' />
        <span className='quantity'>{cartItems.length || 0}</span>
        <div className='white-line'></div>
        <div className='cart'>
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
