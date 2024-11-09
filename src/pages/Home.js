import React, { useRef, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import FAQAccordion from "../component/FAQAccordion";
import AutoScroll from "./startAutoScroll";

function Home() {
    const InvestorData = [
        { name: 'AI-Powered Healthcare Solutions' },
        { name: 'GreenTech for a Sustainable Future' },
        { name: 'Fintech for Financial Inclusion' },
        { name: 'Blockchain for Secure Transactions' },
        { name: 'Smart Home Automation' },
        { name: 'Service' },
        { name: 'Healthcare' },
        { name: 'Bio - Technology' },
        { name: 'Real Estate ' },
        { name: 'Finance' },
        { name: 'Education' },
        { name: 'AI and Technology' },
        { name: 'Automobile' }
    ]
    const favourites = [
        { name: 'Tech' },
        { name: 'AI and Tech' },
        { name: 'Healthcare' },
        { name: 'Bio - Technology' },
        { name: 'Agriculture' },
        { name: 'Aviation' },
        { name: 'Automobile' },
        { name: 'Lifestyle' },
        { name: 'Infrastructure' },
        { name: 'Construction' },
        { name: 'Mining' },
        { name: 'Tech' },
        { name: 'AI and Tech' },
        { name: 'Healthcare' },
        { name: 'Bio - Technology' },
        { name: 'Agriculture' },
        { name: 'Aviation' },
        { name: 'Automobile' },
        { name: 'Lifestyle' },
        { name: 'Infrastructure' },
        { name: 'Construction' },
        { name: 'Mining' },
        { name: 'Consumer Goods' },
        { name: 'Real Estate' },
        { name: 'Mining' }
    ]
    const whyBizDateUp = [
        {
            src: 'assets/images/why-bizdate1.png',
            heading: 'Invest and Own a Piece of the Future',
            content: 'Unlike crowdfunding platforms where you pledge for rewards, on BizDateUp, your investment translates to real equity in high-potential startups.'
        },
        {
            src: 'assets/images/why-bizdate2.png',
            heading: 'Grow Your Wealth with Time',
            content: 'Build a diverse investment portfolio by tapping into emerging startups across sectors. Leverage your expertise, insights, and the collective wisdom of fellow investors for long-term growth.'
        },
        {
            src: 'assets/images/why-bizdate3.png',
            heading: 'Stay Connected and Involved',
            content: "As an investor on BizDateUp, you'll receive exclusive updates, attend events, watch founder videos, and directly engage with startup teams to help shape their journey to success."
        }
    ]
    const investments = [
        {
            heading: 'Access Top Deals',
            content: 'Partner with aligned investors and fund managers, gaining access to high-potential startup opportunities and premium deal flow.'
        },
        {
            heading: 'Streamlined Investing',
            content: 'BizDateUp takes care of compliance, KYC verification, and taxes, so you can focus on making impactful investments.'
        },
        {
            heading: 'Diversify Your Portfolio',
            content: 'Invest across a wide range of industries and syndicates, joining forces with like-minded investors to grow your startup portfolio.'
        }
    ]
    const scrollContainerRef = useRef(null);
    const scrollInterval = useRef(null);

    const startAutoScroll = () => {
        scrollInterval.current = setInterval(() => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                container.scrollTop += 1;

                if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
                    const cardsWrapper = container.querySelector('.cards-wrapper');
                    const firstCard = cardsWrapper.querySelector('.hero-cards');

                    cardsWrapper.appendChild(firstCard);

                    container.scrollTop = container.scrollHeight - container.clientHeight;
                }
            }
        }, 20);
    };

    const stopAutoScroll = () => {
        if (scrollInterval.current) {
            clearInterval(scrollInterval.current);
        }
    };

    useEffect(() => {
        startAutoScroll();

        return () => stopAutoScroll();
    }, []);

    return (
        <div className="main-layout">
            <Header />
            <section className="hero-section mt-0">
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-xl-5">
                            <div className="future-of-startups">
                                <h1>Powering the Future of <span>Startups and Investment</span></h1>
                                <p className="mt-3">Whether you're an investor seeking exciting opportunities or a startup looking for the right support, we bring everything you need to make the right connections.</p>
                                <div className="buttons">
                                    <button className="start-investing-btn">Join BizDateUp<img src="/assets/images/right-arrow.png" alt="icon" className="ms-1" /></button>
                                    <button className="enroll-startup-btn mt-2 mt-sm-0">Start Investing<img src="/assets/images/right-arrow-primary.png" alt="icon" className="ms-1" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 px-5 px-xl-0">
                            <div className="auto-card-scroll">
                                <AutoScroll />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="investor-section">
                <div className="container">
                    <h5 className="heading text-center">Join over 1000+ Investors</h5>
                    <div className="row mt-5">
                        <div className="col-lg-4 text-center"><h1 className="subheading gradient">₹ 400 Cr</h1><p className="subtext">Funds Raised</p></div>
                        <div className="col-lg-4 text-center"><h1 className="subheading">1000 +</h1><p className="subtext">Active Investors</p></div>
                        <div className="col-lg-4 text-center"><h1 className="subheading">50+</h1><p className="subtext" >Active Startups</p></div>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center mt-5">
                        {InvestorData.map((data, index) => (
                            <div className="investor-data" key={index}>
                                {data.name}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="fund-section job-roles">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">Funded Startups on bizdateup</h4>
                        <p className="content mt-3">We partner with visionary founders driving innovation across industries.</p>
                    </div>

                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="card">
                                            <img src="/assets/images/fund1-img.jpeg" alt="img" className="img-fluid card-img card-img1" />
                                            <img src="/assets/images/HiTech.png" alt="img" className="h-25 w-25 my-3" />
                                            <p className="subcontent">Advanced AI-driven cybersecurity solutions to protect businesses from evolving threats.</p>
                                            <div className="d-flex flex-wrap">
                                                <label>EV</label>
                                                <label>B2B</label>
                                                <label>Technology</label>
                                                <label>Automobile</label>
                                            </div>
                                            <p className="fund-details mt-3 mb-0">₹ 1.3 Cr  <span>Raised from 90 Investors</span></p>
                                            <p className="fund-details mt-2 mb-0">₹ 9 Cr <span>Valuation</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="card">
                                            <img src="/assets/images/fund2-img.png" alt="img" className="img-fluid card-img" />
                                            <img src="/assets/images/Eco-Wave.png" alt="img" className="h-50 w-50 my-3" />
                                            <p className="subcontent">Revolutionizing sustainable energy solutions with innovative, eco-friendly technologies.</p>
                                            <div className="d-flex flex-wrap">
                                                <label>EV</label>
                                                <label>B2B</label>
                                                <label>Technology</label>
                                                <label>Automobile</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 mx-auto">
                                        <div className="card">
                                            <img src="/assets/images/fund3-img.png" alt="img" className="img-fluid card-img" />
                                            <img src="/assets/images/Healthify.png" alt="img" className="h-25 w-25 my-3" />
                                            <p className="subcontent">Revolutionizing sustainable energy solutions with innovative, eco-friendly technologies.</p>
                                            <div className="d-flex flex-wrap">
                                                <label>EV</label>
                                                <label>B2B</label>
                                                <label>Technology</label>
                                                <label>Automobile</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4">
                                            <div className="card">
                                                <img src="/assets/images/fund1-img.jpeg" alt="img" className="img-fluid card-img card-img1" />
                                                <img src="/assets/images/HiTech.png" alt="img" className="h-25 w-25 my-3" />
                                                <p className="subcontent">Advanced AI-driven cybersecurity solutions to protect businesses from evolving threats.</p>
                                                <div className="d-flex flex-wrap">
                                                    <label>EV</label>
                                                    <label>B2B</label>
                                                    <label>Technology</label>
                                                    <label>Automobile</label>
                                                </div>
                                                <p className="fund-details mt-3 mb-0">₹ 1.3 Cr  <span>Raised from 90 Investors</span></p>
                                                <p className="fund-details mt-2 mb-0">₹ 9 Cr <span>Valuation</span></p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4">
                                            <div className="card">
                                                <img src="/assets/images/fund2-img.png" alt="img" className="img-fluid card-img" />
                                                <img src="/assets/images/Eco-Wave.png" alt="img" className="h-50 w-50 my-3" />
                                                <p className="subcontent">Revolutionizing sustainable energy solutions with innovative, eco-friendly technologies.</p>
                                                <div className="d-flex flex-wrap">
                                                    <label>EV</label>
                                                    <label>B2B</label>
                                                    <label>Technology</label>
                                                    <label>Automobile</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 mx-auto">
                                            <div className="card">
                                                <img src="/assets/images/fund3-img.png" alt="img" className="img-fluid card-img" />
                                                <img src="/assets/images/Healthify.png" alt="img" className="h-25 w-25 my-3" />
                                                <p className="subcontent">Revolutionizing sustainable energy solutions with innovative, eco-friendly technologies.</p>
                                                <div className="d-flex flex-wrap">
                                                    <label>EV</label>
                                                    <label>B2B</label>
                                                    <label>Technology</label>
                                                    <label>Automobile</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-6 col-lg-4">
                                        <div className="card">
                                            <img src="/assets/images/fund1-img.jpeg" alt="img" className="img-fluid card-img card-img1" />
                                            <img src="/assets/images/HiTech.png" alt="img" className="h-25 w-25 my-3" />
                                            <p className="subcontent">Advanced AI-driven cybersecurity solutions to protect businesses from evolving threats.</p>
                                            <div className="d-flex flex-wrap">
                                                <label>EV</label>
                                                <label>B2B</label>
                                                <label>Technology</label>
                                                <label>Automobile</label>
                                            </div>
                                            <p className="fund-details mt-3 mb-0">₹ 1.3 Cr  <span>Raised from 90 Investors</span></p>
                                            <p className="fund-details mt-2 mb-0">₹ 9 Cr <span>Valuation</span></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4">
                                        <div className="card">
                                            <img src="/assets/images/fund2-img.png" alt="img" className="img-fluid card-img" />
                                            <img src="/assets/images/Eco-Wave.png" alt="img" className="h-50 w-50 my-3" />
                                            <p className="subcontent">Revolutionizing sustainable energy solutions with innovative, eco-friendly technologies.</p>
                                            <div className="d-flex flex-wrap">
                                                <label>EV</label>
                                                <label>B2B</label>
                                                <label>Technology</label>
                                                <label>Automobile</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-4 mx-auto">
                                        <div className="card">
                                            <img src="/assets/images/fund3-img.png" alt="img" className="img-fluid card-img" />
                                            <img src="/assets/images/Healthify.png" alt="img" className="h-25 w-25 my-3" />
                                            <p className="subcontent">Revolutionizing sustainable energy solutions with innovative, eco-friendly technologies.</p>
                                            <div className="d-flex flex-wrap">
                                                <label>EV</label>
                                                <label>B2B</label>
                                                <label>Technology</label>
                                                <label>Automobile</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true">
                                <i className="bi bi-chevron-right"></i>
                            </span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="profit-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">Imagine Your ₹10 Lakhs Turning Into ₹10 Crores</h4>
                        <p className="content mt-3">Don't Miss Out on the Next Zomato! Invest in Tomorrow's Game-Changers Today</p>
                    </div>
                    <div className="profit-content">
                        <div className="row">
                            <div className="col-lg-5">
                                <h4 className="subheading">Don't let the next life-changing opportunity slip away.</h4>
                                <p className="subcontent my-5">₹10 lakhs invested in Zomato in 2010 is now worth ₹10 crores. Don't let the next life-changing opportunity slip away</p>
                                <button className="btn">Start Investing Today</button>
                            </div>
                            <div className="col-lg-7">
                                <img src="/assets/images/profit.png" alt="img" className="ms-lg-auto mt-5 mt-lg-0 img-fluid d-flex justify-content-lg-end" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="local-favourite-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">From <span>Tomorrow’s Breakthrough Giants</span> to Your Local Favorites</h4>
                        <p className="content mt-3">Don't Miss Out on the Next Zomato! Invest in Tomorrow's Game-Changers Today</p>
                    </div>
                    <div className="local-favourite-section-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="subheading">Explore Investment Sectors</h4>
                                <div className="mt-5">
                                    <div className="d-flex flex-wrap">
                                        {favourites.map((data, index) => (
                                            <div className="label" key={index}>
                                                {data.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div id="carouselExampleIndicators3" className="carousel slide">
                                    <div className="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    </div>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="card">
                                                <img src="/assets/images/client.png" alt="img" className="card-img" />
                                                <div className="card-bottom-content">
                                                    <div className="medi-content">
                                                        <img src="/assets/images/plus-image.png" alt="img" className="plus-img" />
                                                        Medi ++
                                                    </div>
                                                    <p className="card-content my-4">Bringing doctors, patients, and AI-powered diagnostics together for ultimate healthcare access.</p>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <h5 className="investors">₹ 7,00,00</h5>
                                                            <p className="investors-content">Invested</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <h5 className="investors">80</h5>
                                                            <p className="investors-content">Investors</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn mt-3">Explore Healthcare Startups</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="card">
                                                <img src="/assets/images/client.png" alt="img" className="card-img" />
                                                <div className="card-bottom-content">
                                                    <div className="medi-content">
                                                        <img src="/assets/images/plus-image.png" alt="img" className="plus-img" />
                                                        Medi ++
                                                    </div>
                                                    <p className="card-content my-4">Bringing doctors, patients, and AI-powered diagnostics together for ultimate healthcare access.</p>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <h5 className="investors">₹ 7,00,00</h5>
                                                            <p className="investors-content">Invested</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <h5 className="investors">80</h5>
                                                            <p className="investors-content">Investors</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn mt-3">Explore Healthcare Startups</button>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="carousel-item">
                                            <div className="card">
                                                <img src="/assets/images/client.png" alt="img" className="card-img" />
                                                <div className="card-bottom-content">
                                                    <div className="medi-content">
                                                        <img src="/assets/images/plus-image.png" alt="img" className="plus-img" />
                                                        Medi ++
                                                    </div>
                                                    <p className="card-content my-4">Bringing doctors, patients, and AI-powered diagnostics together for ultimate healthcare access.</p>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <h5 className="investors">₹ 7,00,00</h5>
                                                            <p className="investors-content">Invested</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <h5 className="investors">80</h5>
                                                            <p className="investors-content">Investors</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn mt-3">Explore Healthcare Startups</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="card">
                                                <img src="/assets/images/client.png" alt="img" className="card-img" />
                                                <div className="card-bottom-content">
                                                    <div className="medi-content">
                                                        <img src="/assets/images/plus-image.png" alt="img" className="plus-img" />
                                                        Medi ++
                                                    </div>
                                                    <p className="card-content my-4">Bringing doctors, patients, and AI-powered diagnostics together for ultimate healthcare access.</p>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <h5 className="investors">₹ 7,00,00</h5>
                                                            <p className="investors-content">Invested</p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <h5 className="investors">80</h5>
                                                            <p className="investors-content">Investors</p>
                                                        </div>
                                                    </div>
                                                    <button className="btn mt-3">Explore Healthcare Startups</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true">
                                        </span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true">
                                            <i className="bi bi-chevron-right"></i>
                                        </span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
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
                                <img src={data.src} alt="img" className="mx-auto" />
                                <h6 className="subheading my-4">{data.heading}</h6>
                                <p className="subcontent">{data.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="risk-section">
                <div className="container">
                    <div className="risk-content">
                        <div className="row">
                            <div className="col-lg-5">
                                <h4 className="subheading">Invest Wisely: Know the Risks</h4>
                                <p className="subcontent my-4">Startups carry higher risks than public companies, and even the most promising ventures can fail. Only invest what you can afford to lose, and plan for the long haul. Be prepared for both big wins and the possibility of losing everything.</p>
                                <button className="btn">Learn more in our investor FAQ</button>
                            </div>
                            <div className="col-lg-7">
                                <img src="/assets/images/profit.png" alt="img" className="ms-lg-auto mt-5 mt-lg-0 d-flex justify-content-lg-end" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="investment-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading">New to Investments</h4>
                        <p className="content mt-3">Here’s how it works on BizDateUp</p>
                    </div>
                    {investments.map((data, index) => (
                        <div className="row" key={index}>
                            <div className="col-lg-6">
                                <div className="img">
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
            <section className="blog-section blog-section-carousel">
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
            <section className="investments-on-bizdateup">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h6 className="subheading">Everything you need to know</h6>
                            <h4 className="heading my-4">Effortless, Fast & Rewarding Investments on BizDateUp</h4>
                            <p className="content">Experience a seamless journey as you invest in startups and syndicates, designed to be simple, quick, and enjoyable.</p>
                            <ul className="nav flex-column nav-tabs mt-5" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="startup-tab" data-bs-toggle="tab" data-bs-target="#startup-tab-pane" type="button" role="tab" aria-controls="startup-tab-pane" aria-selected="true">Invest in startups</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="syndicates-tab" data-bs-toggle="tab" data-bs-target="#syndicate-tab-pane" type="button" role="tab" aria-controls="syndicate-tab-pane" aria-selected="false">Invest in Syndicates</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="investments-tab" data-bs-toggle="tab" data-bs-target="#investments-tab-pane" type="button" role="tab" aria-controls="investments-tab-pane" aria-selected="false">Track your Investments</button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="startup-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
                                    <img src="/assets/images/investment-on-bizdateup.png" className="ms-lg-auto d-flex justify-content-end" alt="img" />
                                </div>
                                <div className="tab-pane fade" id="syndicate-tab-pane" role="tabpanel" aria-labelledby="syndicate-tab" tabIndex="0">
                                    <img src="/assets/images/investment-on-bizdateup.png" className="ms-lg-auto d-flex justify-content-end" alt="img" />
                                </div>
                                <div className="tab-pane fade" id="investments-tab-pane" role="tabpanel" aria-labelledby="investments-tab" tabIndex="0">
                                    <img src="/assets/images/investment-on-bizdateup.png" className="ms-lg-auto d-flex justify-content-end" alt="img" />
                                </div>
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
            <Footer />
        </div>
    )
}

export default Home;