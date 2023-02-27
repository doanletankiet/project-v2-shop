import React from 'react';
import './Auth.scss';

export const Auth = (prop) => {
    return (
        <div className="auth-container">
            <div className="auth__login-main">
                <h4>Đăng nhập tài khoản</h4>
                <div className="auth__login-container">
                    <form action="" className="auth__form">
                        <label htmlFor="">
                            <input type="text" />
                            <input type="password" />
                        </label>
                        <button className="btn btn-primary">Đăng Nhập</button>
                    </form>
                    <div className="auth__next-register">
                        <a className="auth-register__none">Bạn chưa có tài khoản ?</a>
                    </div>
                </div>
            </div>
            <div className="auth__bg">
                <h2 className="auth-title">Tên web</h2>
            </div>
            <div className="auth__register-contaier">
                <div>Đăng kí tài khoản</div>
                <form action="">
                    <label htmlFor="">
                        <input type="text" />
                        <input type="password" />
                        <input type="phone" />
                    </label>
                    <button className="btn btn-primary">Đăng kí</button>
                </form>
            </div>
        </div>
    );
};
