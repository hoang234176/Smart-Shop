import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username, password)
        if (username === 'hoang' && password === '123456') {
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
                <label htmlFor="username">Tên đăng: </label>
                <input 
                    type="text"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Tên đăng nhập"
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
        </div>
    )
}

export default LoginPage