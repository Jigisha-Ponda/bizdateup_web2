import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const resourceLink = [
        {
            id: '01',
            src: '/assets/images/about-us-link.png',
            heading: 'About Us',
            subheading: 'Get creative inspiration',
            link: '/about'
        },
        {
            id: '02',
            src: '/assets/images/news-link.png',
            heading: 'News',
            subheading: 'Impactful storytelling',
            link: '/news'
        },
        {
            id: '03',
            src: '/assets/images/faq-link.png',
            heading: "FAQ's",
            subheading: 'Stunning web design',
            link: '/faq'
        },
        {
            id: '04',
            src: '/assets/images/blogs-link.png',
            heading: 'Blogs',
            subheading: 'Functional digital products',
            link: '/blogs'
        },
    ]
    return (
        <div className='container'>
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