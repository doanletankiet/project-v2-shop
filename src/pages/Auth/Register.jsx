import React, { useState } from 'react';
import './Register.scss';
import { NavLink } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const handleOnChangeRegister = (e) => {
        setUsername(e.target.value);
    };
    const handleOnChagePass = (e) => {
        setPassword(e.target.value);
    };
    const handleOnChagePhone = (e) => {
        setPhone(e.target.value);
    };

    return (
        <div className="register">
            <div className="register-container">
                <div className="register-main">
                    <div className="register__title">
                        <h2>Tên Website</h2>
                        <p>Trang đăng kí</p>
                    </div>
                    <Form action="">
                        <div className="register__content">
                            <label htmlFor="">Tên tài khoản</label>
                            <input
                                placeholder="Nhập tài khoản"
                                name="username"
                                type="text"
                                required
                                value={username}
                                onChange={(e) => handleOnChangeRegister(e)}
                            />
                            <label htmlFor="">Mật khẩu</label>
                            <input
                                placeholder="Nhập mật khẩu"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={(e) => handleOnChagePass(e)}
                            />
                            <label htmlFor="">Số điện thoại</label>
                            <input
                                placeholder="Nhập số điện thoại"
                                name="phone"
                                type="number"
                                required
                                pattern="(\+84|0)\d{9,10}"
                                value={phone}
                                onChange={(e) => handleOnChagePhone(e)}
                            />
                        </div>
                        <button type="submit">Đăng kí</button>
                    </Form>
                    <div className="register-footer">
                        <div>
                            <NavLink to="/login">Bạn đã có tài khoản?</NavLink>{' '}
                        </div>
                        <div>
                            <NavLink to="/">Trở về trang chủ</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
