import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../css/Navbar.css"

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/ryanGordonLawWebsite" className="navbar-item">
                    <div className="google-font-pd is-size-2 is-size-5-mobile">RYAN GORDON LAW</div>
                </Link>
                <div
                    className={`navbar-burger burger ${menuOpen ? 'is-active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
                <div className="navbar-start"></div>
                <div className="navbar-end">
                    <Link to="/ryanGordonLawWebsite" className="navbar-item google-font-ss">
                        Home
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to="/ryanGordonLawWebsite" className="navbar-link google-font-ss">
                            Services
                        </Link>
                        <div className="navbar-dropdown">
                            <Link to="/Estate" className="navbar-item google-font-ss">
                                Estate Planning
                            </Link>

                            <Link to="/Trust" className="navbar-item google-font-ss">
                                Estate and Trust Administration
                            </Link>

                            <Link to="/Probate" className="navbar-item google-font-ss">
                                Probate Fiduciary
                            </Link>

                            <Link to="/Commercial" className="navbar-item google-font-ss">
                                Commercial Litigation
                            </Link>

                            <Link to="/Malpractice" className="navbar-item google-font-ss">
                                Attorney Malpractice Litigation
                            </Link>

                            <Link to="/Business" className="navbar-item google-font-ss">
                                Business Law
                            </Link>

                            <Link to="/RealEstate" className="navbar-item google-font-ss">
                                Real Estate Law
                            </Link>

                            <Link to="/Tax" className="navbar-item google-font-ss">
                                Tax Law
                            </Link>
                        </div>
                    </div>
                    <Link to="/About" className="navbar-item google-font-ss">
                        About
                    </Link>
                    <Link to="/ContactUs" className="navbar-item google-font-ss">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
