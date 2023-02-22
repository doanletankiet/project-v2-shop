import React from 'react';
import './ListComponent.scss';

export const ListComponent = () => {
    return (
        <div className="text-center list-container ">
            <ul className="nav-item">
                <li className="items_cart">
                    <a>TRANG CHỦ</a>
                </li>
                <li className="items_cart">
                    <a>KHUYẾN MÃI</a>
                </li>
                <li className="items_cart">
                    <a>TƯ VẤN</a>
                </li>
            </ul>
        </div>
    );
};
