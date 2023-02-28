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
                <button className="btn btn-outline-dark" onClick={() => navigate('/login')}>
                    Sign in
                </button>
            </div>
        </header>
    );
};
