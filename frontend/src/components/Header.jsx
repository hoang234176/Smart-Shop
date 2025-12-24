import { Link } from 'react-router-dom';
import smartShopLogo from '../assets/images/smart-shop-logo.png';
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={smartShopLogo} alt="Logo" />
          <h1 className='shop-name'>Smart Shop</h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/" className="nav-link">Trang chủ</Link></li>
          <li><Link to="/login" className="nav-link">Đăng nhập</Link></li>
          <li><Link to="/register" className="nav-link">Đăng ký</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;