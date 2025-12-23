import { Link } from 'react-router-dom'

function App() {

  return (
    <div>
        <h1>Trang chủ</h1>
        <Link to='/login'>Đăng nhập</Link>
        <Link to='/register'>Đăng ký</Link>
    </div>
  )
}

export default App
