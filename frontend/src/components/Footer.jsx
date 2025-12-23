import { Link } from 'react-router-dom'; // Nếu dùng React Router

const Footer = () => {
  return (
    <footer>
      {/* --- PHẦN 1: NỘI DUNG CHÍNH (Thường chia 3-4 cột) --- */}
      <div>
        
        {/* Cột 1: Thông tin công ty & Logo */}
        <section>
          <h3>Tên Công Ty/Logo</h3>
          <p>Slogan hoặc mô tả ngắn gọn về sứ mệnh của công ty bạn tại đây.</p>
        </section>

        {/* Cột 2: Liên kết nhanh (Điều hướng) */}
        <section>
          <h4>Về chúng tôi</h4>
          <ul>
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
        </section>

        {/* Cột 3: Hỗ trợ khách hàng */}
        <section>
          <h4>Hỗ trợ</h4>
          <ul>
            <li><Link to="/faq">Câu hỏi thường gặp</Link></li>
            <li><Link to="/shipping">Chính sách giao hàng</Link></li>
            <li><Link to="/returns">Đổi trả & Hoàn tiền</Link></li>
          </ul>
        </section>

        {/* Cột 4: Thông tin liên hệ & Mạng xã hội */}
        <section>
          <h4>Liên hệ</h4>
          <p>Địa chỉ: 123 Đường ABC, Quận X, TP.HCM</p>
          <p>Email: contact@example.com</p>
          <p>SĐT: 0901 234 567</p>
          
          <div>
            <h4>Kết nối với chúng tôi</h4>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> | 
            <a href="https://youtube.com" target="_blank" rel="noreferrer"> YouTube</a> | 
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"> LinkedIn</a>
          </div>
        </section>

      </div>

      <hr />

      {/* --- PHẦN 2: BẢN QUYỀN & PHÁP LÝ (Dòng dưới cùng) --- */}
      <div>
        <p>
          &copy; {new Date().getFullYear()} Tên Công Ty. Bảo lưu mọi quyền.
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