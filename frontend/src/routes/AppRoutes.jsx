import { Routes, Route} from 'react-router-dom'
import LoginPage from '../auth/LoginPage.jsx'
import RegisterPage from '../auth/RegisterPage.jsx'
import App from '../App.jsx'

function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} /> 
        </Routes>
    )
}

export default AppRoutes;