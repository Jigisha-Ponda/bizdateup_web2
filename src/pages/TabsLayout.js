import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Investor from "./Investors";
import Startups from "./Startups";
import Syndicate from "./Syndicate";

function TabsLayout() {
    return (
        <div className="main-layout">
            <Header />
            <section className="tabs-layout">
                <div className="container-fluid">
                    <div className="container">
                        <ul className="nav flex-column flex-md-row justify-content-between nav-tabs mt-5" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <div className="nav-link active" id="investors-tab" data-bs-toggle="tab" data-bs-target="#investors-tab-pane" type="button" role="tab" aria-controls="investors-tab-pane" aria-selected="true">
                                    <h4 className="heading">For Investors</h4>
                                    <p className="subheading">Explore innovative startups and be a part of their journey.</p>
                                </div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div className="nav-link" id="startups-tab" data-bs-toggle="tab" data-bs-target="#startups-tab-pane" type="button" role="tab" aria-controls="startups-tab-pane" aria-selected="false">
                                    <h4 className="heading">For Startups</h4>
                                    <p className="subheading">Find high-potential startups curated by industry experts</p>
                                </div>
                            </li>
                            <li className="nav-item" role="presentation">
                                <div className="nav-link" id="syndicate-tab" data-bs-toggle="tab" data-bs-target="#syndicate-tab-pane" type="button" role="tab" aria-controls="syndicate-tab-pane" aria-selected="false">
                                    <h4 className="heading">Syndicate</h4>
                                    <p className="subheading">Join syndicates and invest alongside experienced investors</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="investors-tab-pane" role="tabpanel" aria-labelledby="investors-tab" tabIndex="0">
                            <Investor />
                        </div>
                        <div className="tab-pane fade" id="startups-tab-pane" role="tabpanel" aria-labelledby="startups-tab" tabIndex="0">
                            <Startups />
                        </div>
                        <div className="tab-pane fade" id="syndicate-tab-pane" role="tabpanel" aria-labelledby="syndicate-tab" tabIndex="0">
                            <Syndicate />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default TabsLayout;