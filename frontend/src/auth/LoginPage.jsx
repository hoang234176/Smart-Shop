import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage(){
    const [numberPhone, setNumberPhone] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(numberPhone, password)
        if (numberPhone === '0123456789' && password === '123456') {
            navigate('/')
        }
        else {
            alert('Đăng nhập thất bại')
        }
    }

    return (
        <div>
            <Link to='/'>Trang chủ</Link>
            <h1>Đăng nhập</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="numberPhone">Số điện thoại </label>
                <input 
                    type="text"
                    name="numberPhone"
                    onChange={(e) => setNumberPhone(e.target.value)}
                    placeholder="Số điện thoại"
                />
                <br />
                <label htmlFor="">Mật khẩu: </label>
                <input 
                    type="password" 
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                />
                <br />
                <input type="submit" />
            </form>
            <h4>Nếu chưa có tài khoản, vui lòng đăng ký tại đây: <Link to='/register'>Đăng ký</Link></h4>
        </div>
    )
}

export default LoginPage