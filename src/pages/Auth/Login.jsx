import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.scss';
export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleOnChangeLogin = (e) => {
        setUsername(e.target.value);
    };
    const handleOnChagePass = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login">
            <div className="login-container">
                <div className="login-main">
                    <div className="login__title">
                        <h2>Tên Website</h2>
                        <p>Trang đăng nhập</p>
                    </div>
                    <form action="">
                        <div className="login__content">
                            <label htmlFor="">Tên tài khoản</label>
                            <input
                                placeholder="Nhập tài khoản"
                                type="text"
                                value={username}
                                onChange={(e) => handleOnChangeLogin(e)}
                            />
                            <label htmlFor="">Mật khẩu</label>
                            <input
                                placeholder="Nhập mật khẩu"
                                type="password"
                                value={password}
                                onChange={(e) => handleOnChagePass(e)}
                            />
                        </div>
                        <button type="submit">Đăng nhập</button>
                    </form>
                    <div className="login-footer">
                        <div>
                            <NavLink to="/register">Bạn chưa có tài khoản?</NavLink>{' '}
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
