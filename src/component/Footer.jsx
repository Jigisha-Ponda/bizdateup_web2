import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="#">
                            <img src="/assets/images/BizDateUp-logo.png" alt="header_logo" />
                        </a>
                        <div className="mt-4">
                            <h6 className="heading">Address:</h6>
                            <p className="content">2774 Oak Drive, Plattsburgh, New York</p>
                        </div>
                        <div className="mt-4">
                            <h6 className="heading">Contact:</h6>
                            <p className="content mt-3 mb-0">518-564-3200</p>
                            <p className="content">contact@helby.com</p>
                        </div>
                        <div className="d-flex flex-wrap mt-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/facebook.png" className="icon" alt="icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/instagram.png" className="icon" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/linkdln.png" className="icon" alt="LinkedIn" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/youtube.png" className="icon" alt="YouTube" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 mt-5 mt-md-0">
                        <div className="d-flex flex-row justify-content-md-end justify-content-start">
                            <ul className="navbar-nav ms-md-5">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Contact Us</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-5">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Resources</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">News</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">FAQ'S</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap">
                        <a href="/" className="link">
                            Important Disclosures
                        </a>
                        <a href="/" className="link">
                            Terms of Service
                        </a>
                        <a href="/" className="link">
                            Privacy Policy
                        </a>
                    </div>
                    <div className="copyright-text">
                        © 2024 BizDateUp
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;