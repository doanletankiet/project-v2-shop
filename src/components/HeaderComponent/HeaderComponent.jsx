import React from 'react';
import './HeaderComponent.scss';
import { useNavigate } from 'react-router-dom';

export const HeaderComponent = () => {
    const navigate = useNavigate();
    return (
        <header className="d-flex text-center header-container row">
            <div className="col-4">Shop bán ghế</div>
            <div className="col-5">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
            <div className="col-3">
                <button className="btn btn-outline-primary" onClick={() => navigate('/auth')}>
                    Đăng nhập
                </button>
                <button className="btn btn-outline-secondary">Đăng kí</button>
            </div>
        </header>
    );
};
