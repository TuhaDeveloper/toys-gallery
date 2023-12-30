import React from 'react';
import './Footer.css'
import logo from '../Assets/Images/logo2.JPG'
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <div className="footer-header">
                <h1>TOYS GALLERY</h1>
            </div>
            <footer className="footer">
                <div className="footer-container">
                    <div className="left-side">
                        {/* Logo and Name */}
                        <div className="logo-name">
                            <Link to='/'>
                                <img src={logo} alt="Logo" className="logo" />

                            </Link>
                            <span className="company-name">Toys Gallery</span>
                        </div>
                    </div>
                    <div className="center-side">
                        {/* Tree line with 4 links */}
                        <div className="links">
                            <Link to='/'>Affiliate</Link>
                            <Link to='/'>Contact us</Link>
                            <Link to='/'>Policy</Link>
                            <Link to='/'>FAQ</Link>

                        </div>
                        <div className="links">
                            <Link to='/'>About us</Link>
                            <Link to='/'>Help info</Link>
                            <Link to='/'>Revies</Link>
                            <Link to='/'>Sing Up</Link>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="social-logos">
                            <Link><FaFacebook style={{ color: '#1877F2' }} /></Link>
                            <Link><FaTwitter style={{ color: '#1DA1F2' }} /></Link>
                            <Link><FaLinkedin style={{ color: '#0A66C2' }} /></Link>
                        </div>

                    </div>
                </div>
                <div className="copyright">
                    <span>&copy; {new Date().getFullYear()} Toys Gallery. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
