import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from '../auth/LoginPage.jsx'

function AppRoutes(){
    return (
        <BrowserRouter>
            <Link to='/login'>Đăng nhập</Link>

            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;