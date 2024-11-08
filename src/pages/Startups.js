import React from "react";
import FAQAccordion from "../component/FAQAccordion";

function Startups() {
    const whyBizDateUp = [
        {
            src: '/assets/images/why-bizdate1.png',
            heading: 'Invest and Own a Piece of the Future',
            content: 'Unlike crowdfunding platforms where you pledge for rewards, on BizDateUp, your investment translates to real equity in high-potential startups.'
        },
        {
            src: '/assets/images/why-bizdate2.png',
            heading: 'Grow Your Wealth with Time',
            content: 'Build a diverse investment portfolio by tapping into emerging startups across sectors. Leverage your expertise, insights, and the collective wisdom of fellow investors for long-term growth.'
        },
        {
            src: '/assets/images/why-bizdate3.png',
            heading: 'Stay Connected and Involved',
            content: "As an investor on BizDateUp, you'll receive exclusive updates, attend events, watch founder videos, and directly engage with startup teams to help shape their journey to success."
        }
    ]
    const investments = [
        {
            src: '/assets/images/bizdateup1.png',
            heading: 'Create Your Startup Profile',
            content: 'Partner with aligned investors and fund managers, gaining access to high-potential startup opportunities and premium deal flow.'
        },
        {
            src: '/assets/images/bizdateup2.png',
            heading: 'Create a Winning Pitch',
            content: 'Craft a compelling pitch that showcases why investors should back your startup. Make it interactive by uploading videos that highlight your product, team, and vision, helping you stand out and truly sell your business to potential investors.'
        },
        {
            src: '/assets/images/bizdateup3.png',
            heading: 'Get listed and gain visibility.',
            content: 'Use the intuitive dashboard to keep an eye on all the investments made in your startup. Stay informed and manage your fundraising efforts with ease.',
        },
        {
            src: '/assets/images/bizdateup4.png',
            heading: 'Engage and Grow with Investor Feedback',
            content: 'Stay active and communicate regularly with investors. Their feedback can offer valuable insights, ideas, and strategies to help boost your sales and improve your business performance.'
        }
    ]
    const companies = [
        {
            src: '/assets/images/portfolio-companies1.png',
            valuation: '₹ 1.4 Cr',
            currentValuation: '₹ 9.2  Cr',
            content: 'Backed by Y Combinator, provides personal environmental exposure analysis and tracking to consumers'
        },
        {
            src: '/assets/images/portfolio-companies2.png',
            valuation: '₹ 1 Cr',
            currentValuation: '₹ 1.7 Cr',
            content: 'Backed by Y Combinator, provides personal environmental exposure analysis and tracking to consumers'
        },
        {
            src: '/assets/images/portfolio-companies3.png',
            valuation: '₹ 20 Cr',
            currentValuation: '₹ 40.6 Cr',
            content: 'Backed by Y Combinator, provides personal environmental exposure analysis and tracking to consumers'
        }
    ]
    return (
        <div className="main-layout">
            <section className="startup-hero-section hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5">
                            <div className="startup-hero">
                                <h1>Grow your business with BizDateUp</h1>
                                <p className="mt-3">Get funded, mentored, and connected to India's leading startup ecosystem</p>
                                <div className="buttons">
                                    <button className="start-investing-btn">Enroll Now<img src="/assets/images/right-arrow.png" alt="icon" className="ms-1" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex flex-row align-items-center justify-content-end mt-5 mt-md-0">
                            <img src="/assets/images/startup-hero.png" className="img-fluid" /> 
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-section blog-section-carousel mt-5">
                <div className="container">
                    <div className="text-center">
                        <h4 className="head">Success Stories <span>real Investors, real Returns</span></h4>
                    </div>
                    <div className="recent-blog-posts">
                        <div id="carouselExampleIndicators2" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="blogs-right-img">
                                                <img src="/assets/images/blog-post.png" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="blogs-content">
                                                <div className="mt-3 mt-md-0">
                                                    <h6 className="heading">Olivia Rhye • 1 Jan 2023</h6>
                                                    <h6 className="subheading">Investment In Healthcare</h6>
                                                </div>
                                            </div>
                                            <p className="right-content">MediConnect is an AI-driven platform that bridges the gap between healthcare providers and patients. By offering remote consultations, personalized treatment plans, and AI diagnostics, it provides easy access to expert medical care from anywhere in the world.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="blogs-right-img">
                                                <img src="/assets/images/blog-post.png" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="blogs-content">
                                                <div className="mt-3 mt-md-0">
                                                    <h6 className="heading">Olivia Rhye • 1 Jan 2023</h6>
                                                    <h6 className="subheading">Investment In Healthcare</h6>
                                                </div>
                                            </div>
                                            <p className="right-content">MediConnect is an AI-driven platform that bridges the gap between healthcare providers and patients. By offering remote consultations, personalized treatment plans, and AI diagnostics, it provides easy access to expert medical care from anywhere in the world.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="blogs-right-img">
                                                <img src="/assets/images/blog-post.png" className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="blogs-content">
                                                <div className="mt-3 mt-md-0">
                                                    <h6 className="heading">Olivia Rhye • 1 Jan 2023</h6>
                                                    <h6 className="subheading">Investment In Healthcare</h6>
                                                </div>
                                            </div>
                                            <p className="right-content">MediConnect is an AI-driven platform that bridges the gap between healthcare providers and patients. By offering remote consultations, personalized treatment plans, and AI diagnostics, it provides easy access to expert medical care from anywhere in the world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true">
                                </span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true">
                                    <i className="bi bi-chevron-right"></i>
                                </span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            <section className="portfolio-companies-section mt-5">
                <div className="container">
                    <div className="text-center">
                        <h4 className="head">Portfolio Companies</h4>
                    </div>
                    <div className="row mt-5">
                        {companies.map((data, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <div className="card">
                                    <img src={data.src} className="img" alt="img"/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5 className="heading">{data.valuation}</h5>
                                            <p className="subheading">Our Valuation</p>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="heading">{data.currentValuation}</h5>
                                            <p className="subheading">Current Valuation</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="details">{data.content}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </section>
            <section className="why-bizdateup-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">Why Invest on <span>BizDateUp</span></h4>
                        <p className="content mt-3">Support founders, build your portfolio</p>
                    </div>
                    <div className="row mt-5">
                        {whyBizDateUp.map((data, index) => (
                            <div className="col-lg-4 mt-5 text-center" key={index}>
                                <img src={data.src} alt="image" className="mx-auto" />
                                <h6 className="subheading my-4">{data.heading}</h6>
                                <p className="subcontent">{data.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="investment-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">New on Bizdateup</h4>
                        <p className="content mt-3">Here’s how Startup enrollment works on BizDateUp</p>
                    </div>
                    {investments.map((data, index) => (
                        <div className="row" key={index}>
                            <div className="col-lg-6">
                                <div className="img d-flex flex-row align-items-center">
                                    <img src={data.src} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex flex-column justify-content-center">
                                <h5 className="subheading">{data.heading}</h5>
                                <p className="subcontent mt-2">{data.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="opportunities-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">Don’t let  funding opportunities slip away</h4>
                        <p className="content mt-3">Enroll your startup today and Get discovered by 1000+ investors</p>
                    </div>
                    <div className="profit-content">
                        <div className="row">
                            <div className="col-lg-5">
                                <h4 className="subheading">Don't Miss Out on Funding Opportunities</h4>
                                <p className="subcontent mt-4 mb-5">Are you a startup founder with a groundbreaking idea? Do you want to take your business to the next level?</p>
                                <button className="btn">Start Investing Today</button>
                            </div>
                            <div className="col-lg-7">
                                <img src="/assets/images/profit.png" alt="image" className="ms-lg-auto mt-5 mt-lg-0 img-fluid d-flex justify-content-lg-end" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">Frequently asked questions</h4>
                        <p className="content mt-3">Everything you need to know about the product and billing.</p>
                    </div>
                    <FAQAccordion />
                </div>
            </section>
        </div>
    )
}

export default Startups;