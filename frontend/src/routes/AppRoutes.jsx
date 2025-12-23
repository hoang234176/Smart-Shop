import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LoginPage from '../auth/LoginPage.jsx'
import App from '../App.jsx'

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}

export default AppRoutes;