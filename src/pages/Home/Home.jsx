import React from 'react';
import { CarouselComponent } from '../../components/CarouselComponent/CarouselComponent';
import { FooterComponet } from '../../components/FooterComponent/FooterComponet';
import { ListCartComponent } from '../../components/ListCartComponent/ListCartComponent';

import './Home.scss';

export const Home = () => {
    return (
        <main className="home-main">
            <CarouselComponent />
            <div className="home-container">
                <div className="list-cart_container">
                    <h2>DANH MỤC SẢN PHẨM</h2>
                </div>
                <div className="list-cart">
                    <ListCartComponent />
                </div>

                <div className="list-cart_container">
                    <h2>SẢN PHẨM KHUYẾN MÃI</h2>
                </div>
                <div className="list-cart">
                    <ListCartComponent />
                </div>
                <div className="list-cart_container">
                    <h2>SẢN PHẨM BÁN CHẠY</h2>
                    <div className="list-cart">
                        <ListCartComponent />
                    </div>
                </div>
            </div>
            <FooterComponet />
        </main>
    );
};
