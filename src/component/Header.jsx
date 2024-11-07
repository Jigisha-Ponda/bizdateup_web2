import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="navbar-responsive">
                    <a className="navbar-brand" href="#">
                        <img src="/assets/images/BizDateUp-logo.png" alt="header_logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/assets/images/nav-menu-icon.png" alt="icon" className="h-75 w-75" />
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><img src="/assets/images/search-icon.png" className="me-2" alt="icon" />Search</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Sign in</Link>
                        </li>
                        <li className="nav-item">
                            <button className="nav-button">
                                Get Started <img src="/assets/images/right-arrow.png" alt="icon" />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;