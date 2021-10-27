import Logo from '../../assets/logo/Logo.svg';
import Search from '../../assets/icons/Search.svg';
import './Header.scss';
import Button from '../UI/Button/Button';
import Cart from './Cart/Cart';
import { useCart } from '../../contexts/CartContext';

const Header = () => {
  const {cartItems} = useCart();
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
