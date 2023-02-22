import React from 'react';
import { FaFacebookF, FaPhoneAlt } from 'react-icons/fa';
import './ContactComponent.scss';

export const ContactComponent = () => {
    return (
        <div className="contact-container d-flex">
            <div className=" info col-3">
                <a href="">
                    <FaFacebookF />
                </a>
                <a href="">
                    <FaPhoneAlt />
                </a>
            </div>
            <div className="col-6"></div>
            <div className="page-contact col-3">
                <ul>
                    <li>
                        <a href=""> Chính sách</a>
                    </li>
                    <li>
                        <a href=""> Giới thiệu</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
