import React, { useState } from 'react';

function FAQAccordion() {
    const accordionData = [
        {
            id: 1,
            title: 'How does BizDateUp work?',
            content: "Startups can list their companies on BizDateUp, allowing investors to discover them, view multimedia insights, attend engaging events, and track their growth. Investors can select sectors of interest, join syndicate groups, and offer guidance to startups for their personal growth",
        },
        {
            id: 2,
            title: 'How can I invest in startups through BizDateUp?',
            content: 'BizDateUp is a platform where startups and investors connect. Startups can list their businesses, raise capital, and grow, while investors can discover, invest in, and support innovative startups through individual investments or syndicate groups.',
        },
        {
            id: 3,
            title: 'What are syndicate investments?',
            content: "BizDateUp is a platform where startups and investors connect. Startups can list their businesses, raise capital, and grow, while investors can discover, invest in, and support innovative startups through individual investments or syndicate groups.",
        },
        {
            id: 4,
            title: 'How do I join a syndicate on BizDateUp?',
            content: "BizDateUp is a platform where startups and investors connect. Startups can list their businesses, raise capital, and grow, while investors can discover, invest in, and support innovative startups through individual investments or syndicate groups.",
        },
        {
            id: 5,
            title: 'Can I choose specific sectors to invest in?',
            content: 'BizDateUp is a platform where startups and investors connect. Startups can list their businesses, raise capital, and grow, while investors can discover, invest in, and support innovative startups through individual investments or syndicate groups.',
        },
        {
            id: 6,
            title: 'How can I engage with startups beyond investing?',
            content: "BizDateUp is a platform where startups and investors connect. Startups can list their businesses, raise capital, and grow, while investors can discover, invest in, and support innovative startups through individual investments or syndicate groups.",
        }
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className="accordion" id="accordionExample">
                {accordionData.map((item, index) => (
                    <div className="accordion-item mb-3" key={item.id}>
                        <h2 className="accordion-header" id={`heading${item.id}`}>
                            <button
                                className={`accordion-button ${openIndex === index ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => handleToggle(index)}
                                aria-expanded={openIndex === index ? 'true' : 'false'}
                                aria-controls={`collapse${item.id}`}
                            >
                                {item.title}
                                <span className="ms-auto">
                                    {openIndex === index ? (
                                        <img src="/assets/images/accordion-minus.png" />
                                    ) : (
                                        <img src="/assets/images/accordion-plus.png" />
                                    )}
                                </span>
                            </button>
                        </h2>
                        <div
                            id={`collapse${item.id}`}
                            className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                            aria-labelledby={`heading${item.id}`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                {item.content}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="any-question">
                <div className="row">
                    <div className="col-lg-9">
                        <h5 className="heading">Still have questions?</h5>
                        <p className="content">Can’t find the answer you’re looking for? Please get in touch with our team.</p>
                    </div>
                    <div className="col-lg-3 d-flex flex-row justify-content-lg-end mt-4 mt-lg-0">
                        <button className="btn">Get in touch</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default FAQAccordion;
