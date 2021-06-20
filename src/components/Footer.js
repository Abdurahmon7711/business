import React from 'react';
import logo from '../img/footer-logo.png'

const Footer = () => {
    return (
        <div>
            <div className="footer" >
                <div className="containers foot">
                    <div className="footer_body">
                        <div className="footer_logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <ul className="footer_ul">
                            <li>HOME</li>
                            <li>FAQ</li>
                            <li>OUT TIME </li>
                            <li>CONTACTS</li>
                        </ul>
                        <div className="icons">
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-messenger"></i>
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-telegram-plane"></i>
                        </div>
                    </div>
                    <p className="footer_text">Copyright 2021 BUSINESS INVEST All rights reserved</p>
                </div>
            </div>
        </div>
    );
};


export default Footer;