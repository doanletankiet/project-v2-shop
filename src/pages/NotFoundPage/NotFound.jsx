import React from 'react';
import './NotFound.scss';

export const NotFound = () => {
    return (
        <section className="page_404">
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="col-sm-14 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">Look like you're lost</h3>

                                <p>Trang bạn đang tìm kiếm không có sẵn!</p>

                                <a href="/" className="link_404 btn">
                                    Trở về trang chủ!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
