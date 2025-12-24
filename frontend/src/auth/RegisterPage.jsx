import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage(){
    const [fullName, setFullName] = useState('')
    const [numberPhone, setNumberPhone] = useState('')
    const [email, setEmail] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fullName, numberPhone, email, city, password, confirmPassword)
        if (numberPhone === '' || password === '' || confirmPassword === '') {
            alert('Vui lòng nhập đầy đủ thông tin')
            return
        }
        if (password !== confirmPassword) {
            alert('Mật khẩu không khớp')
            return
        }
        alert('Đăng ký thành công')
        navigate('/login')
    }

    return (
        <div>
            <h1>Đăng ký</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Họ và Tên: </label>
                <input 
                    type="text"
                    id="fullName"
                    name="fullName"
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Họ và Tên" 
                />
                <br />
                <label htmlFor="numberPhone">Số điện thoại: </label>
                <input 
                    type="text"
                    id="numberPhone"
                    name="numberPhone"
                    onChange={(e) => setNumberPhone(e.target.value)}
                    placeholder="Số điện thoại"
                />
                <br />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <br />
                <label htmlFor="">Địa chỉ: </label>
                <label htmlFor="city">Thành phố</label>
                <select name="city" id="city" onChange={(e) => setCity(e.target.value)}>
                    <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                    <option value="Cần Thơ">Cần Thơ</option>
                    <option value="An Giang">An Giang</option>
                    <option value="Bà Rịa Vũng Tàu">Bà Rịa Vũng Tàu</option>
                    <option value="Bạc Liêu">Bạc Liêu</option>
                    <option value="Bắc Giang">Bắc Giang</option>
                    <option value="Bắc Kạn">Bắc Kạn</option>
                    <option value="Bắc Ninh">Bắc Ninh</option>
                    <option value="Bến Tre">Bến Tre</option>    
                </select>
                <label htmlFor="password">Mật khẩu: </label>
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mật khẩu"
                />
                <br />
                <label htmlFor="confirmPassword">Xác nhận mật khẩu: </label>
                <input 
                    type="password" 
                    id="confirmPassword"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Mật khẩu"
                />
                <br />
                <input type="submit" />
            </form>
            <h4>Nếu đã có tài khoản, vui lòng đăng nhập tại đây: <Link to='/login'>Đăng nhập</Link></h4>
        </div>
    )
}

export default RegisterPage;