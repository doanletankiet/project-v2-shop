import React from 'react';

import card from './../../assets/img/card3.png';
import './ProductPage.scss';

export const ProductsPage = () => {
    return (
        <main className="product-container d-flex text-center">
            <div className="product__img">
                <img src={card} alt="" />
                <div className="product__imgs row row-cols-2">
                    <img className="col" src={card} alt="" />
                    <img src={card} alt="" className="col" />
                    <img src={card} alt="" className="col" />
                    <img src={card} alt="" className="col" />
                    <img src={card} alt="" className="col" />
                </div>
            </div>
            {/* <div className="null__product"></div> */}
            <div className="product__content">
                <div>
                    <h1>Thông tin sản phẩm</h1>
                    <p>Đây là ghế trung bày</p>
                    <h4>Giá: 300.000 VND</h4>
                </div>
                <div className="product__discription"></div>
                <div className="product__button">
                    <button className="btn btn-primary">Thêm giỏ hàng</button>
                    <button className="btn btn-primary">Mua hàng</button>
                </div>
            </div>
        </main>
    );
};
