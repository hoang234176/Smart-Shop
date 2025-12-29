import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        <section className="footer-section">
          <h3 className="footer-name-shop">SMART SHOP</h3>
          <p className="footer-slogan">Nơi mua sắm tiện lợi và dễ dàng.</p>
        </section>

        <section className="footer-section">
          <h4>Về chúng tôi</h4>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </section>

        <section className="footer-section">
          <h4>Hỗ trợ</h4>
          <ul>
            <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
            <li><Link to="/shipping">Chính sách giao hàng</Link></li>
            <li><Link to="/returns">Đổi trả & Hoàn tiền</Link></li>
          </ul>
        </section>

        <section className="footer-section">
          <div className="footer-contact">
            <h4>Liên hệ</h4>
            <p>Địa chỉ: 123 Đường ABC, Quận X, TP.HCM</p>
            <p>Email: contact@example.com</p>
            <p>SĐT: 0901 234 567</p>
          </div>
          
          <div className="footer-social-links">
            <h4>Kết nối với chúng tôi</h4>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> 
            <a href="https://youtube.com" target="_blank" rel="noreferrer"> YouTube</a>
          </div>
        </section>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} SmartShop. Bảo lưu mọi quyền.
        </p>
        <p>
          <Link to="/privacy">Chính sách bảo mật</Link> | 
          <Link to="/terms">Điều khoản sử dụng</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;