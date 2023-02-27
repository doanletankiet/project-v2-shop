import React, { useState } from 'react';
import './ListCartComponent.scss';

import card3 from './../../assets/img/card3.png';
import { useNavigate } from 'react-router-dom';
const listCardArr = [
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 1,
    },
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 2,
    },
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 3,
    },
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 3,
    },
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 4,
    },
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 5,
    },
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 6,
    },
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 7,
    },
    {
        Image: card3,
        title: 'Ghế nhập khẩu',
        id: 8,
    },
];

export const ListCartComponent = () => {
    const navigate = useNavigate();
    return (
        <section className="d-flex">
            <div className="list-card__left"></div>
            <div className="d-flex list-card-container">
                {listCardArr.map((item) => (
                    <div
                        className="list-card__items"
                        style={{ background: `url(${item.Image})` }}
                        onClick={() => navigate(`/products/${item.id}`)}
                    >
                        <div className="overlay">
                            <div className="item"></div>
                            <div className="list-card__title head">{item.title}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="list-card__right"></div>
        </section>
    );
};
