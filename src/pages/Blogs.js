import React from "react";
import FAQAccordion from "../component/FAQAccordion";
import Header from "../component/Header";
import Footer from "../component/Footer";

function ReadingTime({ minutes }) {
    return (
        <div className="reading-time me-3">
            {minutes} min read
        </div>
    );
}

function Blogs() {
    const blogData = [
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
    const Blogs = [
        {
            src: '/assets/images/blog-detail1.png',
            name: 'Alex George',
            date: '11 October 2024',
            heading: 'The Future is Female: Women in Venture Capital',
            content: 'Venture capital-backed startups have long been recognized as a male-dominated field, but recent years have shown increases in women beginning to enter and take part in the venture capital space. What is the status of women in this space today, and how can we continue moving forward in the future? ',
        },
        {
            src: '',
            name: 'Alex George',
            date: '11 October 2024',
            heading: 'The Future is Female: Women in Venture Capital',
            content: 'Venture capital-backed startups have long been recognized as a male-dominated field, but recent years have shown increases in women beginning to enter and take part in the venture capital space. What is the status of women in this space today, and how can we continue moving forward in the future? ',
        },
        {
            src: '/assets/images/blog-detail1.png',
            name: 'Alex George',
            date: '11 October 2024',
            heading: 'The Future is Female: Women in Venture Capital',
            content: 'Venture capital-backed startups have long been recognized as a male-dominated field, but recent years have shown increases in women beginning to enter and take part in the venture capital space. What is the status of women in this space today, and how can we continue moving forward in the future? ',
        },
        {
            src: '',
            name: 'Alex George',
            date: '11 October 2024',
            heading: 'The Future is Female: Women in Venture Capital',
            content: 'Venture capital-backed startups have long been recognized as a male-dominated field, but recent years have shown increases in women beginning to enter and take part in the venture capital space. What is the status of women in this space today, and how can we continue moving forward in the future? ',
        },
        {
            src: '/assets/images/blog-detail2.png',
            name: 'Alex George',
            date: '11 October 2024',
            heading: 'The Future is Female: Women in Venture Capital',
            content: 'Venture capital-backed startups have long been recognized as a male-dominated field, but recent years have shown increases in women beginning to enter and take part in the venture capital space. What is the status of women in this space today, and how can we continue moving forward in the future? ',
        }
    ]
    return (
        <div className="main-layout">
            <Header />
            <section className="blogs-section">
                <div className="container">
                    <h4 className="heading">BizDateup Blog</h4>
                    <p className="content">We post industry news, investor guides, company updates and more.</p>
                    <div className="blog-labels">
                        <div className="blog-label d-flex flex-wrap">
                            {blogData.map((data, index) => (
                                <div className="blog-data" key={index}>
                                    {data.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-details">
                <div className="container">
                    {Blogs.map((data, index) => (
                        <div className="blog-content" key={index}>
                            <div className="row d-flex justify-content-between">
                                <div className={data.src != '' ? "col-lg-7" : "col"}>
                                    <div className="d-flex flex-row flex-wrap flex-lg-nowrap align-items-center">
                                        <div className="profile-img">
                                            <img src="/assets/images/blogs-writer.png" alt="img" className="img" />
                                        </div>
                                        <h5 className="blogger-writer">{data.name}</h5>
                                        <p className="date">{data.date}</p>
                                    </div>
                                    <h4 className="heading">{data.heading}</h4>
                                    <p className="content">{data.content}</p>
                                    <div className="footer  d-flex flex-row justify-content-end align-items-center">
                                        <ReadingTime minutes={5} />
                                        <img src="/assets/images/article-thumbnail.png" alt="Article" className="ms-1 thumbnail-img" />
                                        <img src="/assets/images/article-thumbnail.png" alt="Article" className="ms-1 thumbnail-img" />
                                        <img src="/assets/images/article-thumbnail.png" alt="Article" className="ms-1 thumbnail-img" />
                                    </div>
                                </div>
                                {data.src && (
                                    <div className="col-lg-4 mt-5 mt-lg-0">
                                        <img src={data.src} className="img" alt="img" />
                                    </div>
                                )}
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
            <Footer />
        </div>
    )
}

export default Blogs;