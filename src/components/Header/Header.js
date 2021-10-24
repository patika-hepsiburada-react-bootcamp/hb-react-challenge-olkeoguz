import Logo from '../../assets/logo/Logo.svg';
import Search from '../../assets/icons/Search.svg';
import './Header.scss';

const Header = () => {
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
        <button>Sepetim</button>
        <span className="quantity">3</span>
      </div>
    </header>
  );
};

export default Header;
