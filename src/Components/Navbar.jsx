import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/crl-logo.png";
import facebookIcon from "../assets/images/Facebook.png";
import instagramIcon from "../assets/images/Instagram.png";
import whatsappIcon from "../assets/images/WhatsApp.png";
import callIcon from "../assets/images/call.png";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header2">
            {/* Reach Us Top Bar */}
            <div className="reach-us-container">
                <div className="reach-us">
                    <span>Reach us</span>

                    <a
                        href="https://www.facebook.com/profile.php?id=61587466176300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                     <img src={facebookIcon} alt="Facebook" />
                    </a>

                    <a
                        href="https://www.instagram.com/crl_packers_and_movers_nagpur_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                          <img src={instagramIcon} alt="Instagram" />
                    </a>

                    <a
                        href="https://wa.me/917499358403"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                          <img src={whatsappIcon} alt="WhatsApp" />
                    </a>
                </div>
            </div>

            {/* Navbar */}
            <header>
                <nav className="navbar">
                    {/* Logo */}
                    <div className="logo">
                       <a href="/"><img src={logo} alt="Logo" /></a> 
                    </div>

                    {/* Mobile Toggle */}
                    <div
                        className="menu-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        &#9776;
                    </div>

                    {/* Navbar Links */}
                    <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/service">Services</a>
                            </li>
                            <li>
                                <a href="/project">Project</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div className="navbar-right">
                        <div className="call-box">
                            <div className="call-icon">
                                   <img src={callIcon} alt="Call" />
                            </div>

                            <div className="call-text">
                                <span>Call us Anytime</span>
                                <a href="tel:+917499358403">+91 74993 58403</a>
                            </div>

                            <div className="quote-wrapper">
                                <a href="/contact" className="quote-btn">
                                    Request A Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;