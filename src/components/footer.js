import React from 'react';
import logo from './img/coursezz.JPG';

function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-1">
                <div className="logo-footer">
                    <img height="50" width="140" src={logo} alt="Coursezz Logo" />
                </div>
                <div className="col">
                    <div className="col-heading">Get to know us</div>
                    <div className="col-links"><a href="#">Why choose us?</a></div>
                    <div className="col-links"><a href="#">FAQs?</a></div>
                </div>
                <div className="col">
                    <div className="col-heading">Let us help you</div>
                    <div className="col-links"><a href="#">What we offer</a></div>
                    <div className="col-links"><a href="#">Careers</a></div>
                    <div className="col-links"><a href="#">Contact us</a></div>
                    <div className="col-links"><a href="#">Help</a></div>
                </div>
                <div className="col">
                    <div className="col-heading">More</div>
                    <div className="col-links"><a href="#">Investors</a></div>
                    <div className="col-links"><a href="#">Developers</a></div>
                    <div className="col-links"><a href="#">Tech Blog</a></div>
                </div>
            </div>
            <div className="footer-2">
                <div>
                    <i className="fa fa-facebook" ></i>
                    <i className="fa fa-instagram" ></i>
                    <i className="fa fa-linkedin" ></i>
                    <i className="fa fa-twitter" ></i>
                </div>
                <div className="inc">©2021 Coursezz Inc.</div>
                <div className="tos">
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;