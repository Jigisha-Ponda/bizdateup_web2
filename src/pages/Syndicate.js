import React from "react";
import FAQAccordion from "../component/FAQAccordion";

function Syndicate() {
    const deals = [
        {
            src: '/assets/images/syndicates.png',
            invested: '₹ 1.4 Cr',
            investors: '₹ 9.2  Cr',
            content: 'Backed by Y Combinator, provides personal environmental exposure analysis and tracking to consumers'
        },
        {
            src: '/assets/images/syndicates.png',
            invested: '₹ 1 Cr',
            investors: '₹ 1.7 Cr',
            content: 'Backed by Y Combinator, provides personal environmental exposure analysis and tracking to consumers'
        },
        {
            src: '/assets/images/syndicates.png',
            invested: '₹ 20 Cr',
            investors: '₹ 40.6 Cr',
            content: 'Backed by Y Combinator, provides personal environmental exposure analysis and tracking to consumers'
        }
    ]
    const syndicates = [
        {
            src: '/assets/images/syndicate1.png',
            heading: 'Create Investor Account',
            content: 'Set up your profile, indicating your interests and preferred investment sectors. This helps us match you with syndicates that align with your goals.'
        },
        {
            src: '/assets/images/syndicate2.png',
            heading: 'Join a Syndicate',
            content: 'Once you’ve found a syndicate that interests you, join it with a few clicks. Pool your resources with other investors and begin your syndicate journey.'
        },
        {
            src: '/assets/images/syndicate1.png',
            heading: 'Stay Engaged and Grow Together',
            content: 'Stay updated with real-time information on your syndicate investments, attend startup events, and engage with the startup teams. Provide feedback and watch as your syndicate investment grows.',
        }
    ]
    return (
        <div className="main-layout">
            <section className="startup-hero-section hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5">
                            <div className="startup-hero">
                                <h1>Diversify Your Portfolio</h1>
                                <p className="mt-3">Syndicates enable you to invest in multiple startups across different sectors with reduced individual risk. By diversifying your investments, you can spread your capital and minimize the impact of potential losses while maximizing your chances of returns.</p>
                                <div className="buttons">
                                    <button className="start-investing-btn">Join Syndicate<img src="/assets/images/right-arrow.png" alt="icon" className="ms-1" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 d-flex flex-row align-items-center justify-content-end mt-5 mt-md-0">
                            <img src="/assets/images/diversify-portfolio.png" className="img-fluid" alt="img" />
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
                                                <img src="/assets/images/blog-post.png" className="img-fluid" alt="img" />
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
                                                <img src="/assets/images/blog-post.png" className="img-fluid" alt="img" />
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
                                                <img src="/assets/images/blog-post.png" className="img-fluid" alt="img" />
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
            <section className="deals-section mt-5">
                <div className="container">
                    <div className="text-center">
                        <h4 className="head">Completed Syndicates and Successful Deals</h4>
                        <p className="content">Explore the syndicates that have successfully closed on the BizDateUp platform, where investors teamed up to back promising startups.</p>
                    </div>
                    <div className="row mt-5">
                        {deals.map((data, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
                                <div className="card">
                                    <img src={data.src} className="img" alt="img" />
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5 className="heading">{data.invested}</h5>
                                            <p className="subheading">Our Valuation</p>
                                        </div>
                                        <div className="col-md-6">
                                            <h5 className="heading">{data.investors}</h5>
                                            <p className="subheading">Current Valuation</p>
                                        </div>
                                    </div>
                                    <p className="details">{data.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="syndicate-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">New to Syndicates on BizDateUp</h4>
                        <p className="content mt-3">Here’s how it works on BizDateUp</p>
                    </div>
                    {syndicates.map((data, index) => (
                        <div className="row" key={index}>
                            <div className="col-lg-6">
                                <div className="img d-flex flex-row align-items-center">
                                    <img src={data.src} className="img-fluid" alt="img" />
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

export default Syndicate;