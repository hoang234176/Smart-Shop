import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            {/* Header */}
            <Header/>
            
            {/* Routes */}
            <AppRoutes/>

            {/* Footer */}
            <Footer/>
        </BrowserRouter>
    </StrictMode>
)
