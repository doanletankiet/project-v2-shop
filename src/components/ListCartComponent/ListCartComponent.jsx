import React from 'react';
import './ListCartComponent.scss';

import card2 from './../../assets/img/card2.jpg';

export const ListCartComponent = () => {
    return (
        <section className="list-section">
            <div className="list-card">
                <a className="card" href="#">
                    <div className="card__background">
                        <img src={card2} alt="" />
                    </div>
                    <div className="card__content text-center ">
                        <p className="card__category">Đã bán: 123</p>
                    </div>
                </a>
            </div>
            <div className="list-card">
                <a className="card" href="#">
                    <div className="card__background">
                        <img src={card2} alt="" />
                        <div className="card__content text-center">
                            <p className="card__category">Đã bán: 123 </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="list-section">
                <a className="card" href="#">
                    <div className="card__background">
                        <img src={card2} alt="" />
                    </div>
                    <div className="card__content text-center">
                        <p className="card__category">Đã bán: 123</p>
                    </div>
                </a>
            </div>
        </section>
    );
};
