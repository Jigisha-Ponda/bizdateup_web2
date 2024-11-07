import React from "react";
import FAQAccordion from "../component/FAQAccordion";

function Investors() {
    const InvestorData = [
        { name: 'Service' },
        { name: 'Healthcare' },
        { name: 'Bio - Technology' },
        { name: 'Real Estate' },
        { name: 'Finance' },
        { name: 'Education' },
        { name: 'AI and Technology' },
        { name: 'Automobile' },
        { name: 'Sustainability' }
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
    return (
        <div className="main-layout">
            <section className="fund-section investor-labels">
                <div className="container">
                    <div className="investor-label d-flex flex-wrap justify-content-center">
                        {InvestorData.map((data, index) => (
                            <div className="investor-data" key={index}>
                                {data.name}
                            </div>
                        ))}
                    </div>
                    <h4 className="head">Healthcare</h4>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img src="/assets/images/fund1-img.jpeg" alt="image" className="img-fluid card-img card-img1" />
                                <img src="/assets/images/HiTech.png" alt="image" className="h-25 w-25 my-3" />
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
                                <img src="/assets/images/fund2-img.png" alt="image" className="img-fluid card-img" />
                                <img src="/assets/images/Eco-Wave.png" alt="image" className="h-50 w-50 my-3" />
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
                                <img src="/assets/images/fund3-img.png" alt="image" className="img-fluid card-img" />
                                <img src="/assets/images/Healthify.png" alt="image" className="h-25 w-25 my-3" />
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
                    <h4 className="head">New</h4>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img src="/assets/images/fund1-img.jpeg" alt="image" className="img-fluid card-img card-img1" />
                                <img src="/assets/images/HiTech.png" alt="image" className="h-25 w-25 my-3" />
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
                                <img src="/assets/images/fund2-img.png" alt="image" className="img-fluid card-img" />
                                <img src="/assets/images/Eco-Wave.png" alt="image" className="h-50 w-50 my-3" />
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
                    <h4 className="head">Closing Soon</h4>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img src="/assets/images/fund2-img.png" alt="image" className="img-fluid card-img" />
                                <img src="/assets/images/Eco-Wave.png" alt="image" className="h-50 w-50 my-3" />
                                <p className="subcontent">Revolutionizing sustainable energy solutions with innovative, eco-friendly technologies.</p>
                                <div className="d-flex flex-wrap">
                                    <label>EV</label>
                                    <label>B2B</label>
                                    <label>Technology</label>
                                    <label>Automobile</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card">
                                <img src="/assets/images/fund2-img.png" alt="image" className="img-fluid card-img" />
                                <img src="/assets/images/Eco-Wave.png" alt="image" className="h-50 w-50 my-3" />
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
            </section>
            <section className="local-favourite-section">
                <div className="container">
                    <div className="text-center">
                        <h4 className="heading"><span>Invest in Founders </span> Driving the Future </h4>
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

export default Investors;