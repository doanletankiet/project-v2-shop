import React from 'react';

import './FooterComponent.scss';

export const FooterComponet = () => {
    return (
        <footer className="footer-main ">
            <div className="footer-container col-md-3">
                <div className="info__logo">
                    <h3>SHOP BAN GHE</h3>
                </div>
                <div className="info__content">
                    <p>
                        Công Ty TNHH Thương Mại Dịch Vụ Nội Thất LAVACO Số ĐKKD 0314138150 do Sở KHĐT Tp. HCM cấp ngày
                        01/12/2016
                    </p>
                    <p> Người đại diện: Trịnh Hoài Lân</p>
                    <p>Địa chỉ: 23 Bàu Cát 8, Phường 14, Quận Tân Bình, TP Hồ Chí Minh.</p>
                    <p>Hotline: 0907.14.58.58 - 0968.79.25.75</p>
                    <p>Email: lavaco.vn@gmail.com</p>
                </div>
            </div>
            <div></div>
            <div className="col-md-3"></div>
        </footer>
    );
};
