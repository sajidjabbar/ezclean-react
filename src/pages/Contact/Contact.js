import React from "react";
import BetterBusiness from "../../components/BetterBusiness";
import mainImage from "../../assets/img/blog-page.png";
import blogImg from "../../assets/img/blog-detail-img.png";

const Contact  = () => {
    return (
        <div className="ContactUs_Page">
            <main id="main">
                {/*Blog First Section*/}
                <section className="section-services mt-5 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h3>Reach <span className="ez-yellow-color">Us</span></h3>
                                </div>
                                <form className="mt-5">
                                    <div className="row">
                                        <div className="col-md-8 ml-auto mr-auto">
                                            <div className="col-md-12">
                                                <input className="form-control" type="text" placeholder="Name"/>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <input className="form-control" type="email" placeholder="Email"/>
                                            </div>
                                            <div className="row">
                                                <div className="col mt-3 ml-3">
                                                    <input className="form-control" type="phone" placeholder="Phone"/>
                                                </div>
                                                <div className="col mt-3 mr-3">
                                                    <input className="form-control" type="text" placeholder="Location"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <textarea className="form-control" row="4" cols="50" type="text" placeholder="Brief"/>
                                            </div>
                                            <button className="btn btn-primary ez-clean-btn-rounded mt-3 ml-auto d-flex bt-clr-lghtgrn" href="javascript:void(0);">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Blog  First Section*/}

                {/*Business Bureau*/}
                <BetterBusiness/>
                {/*Business Bureau*/}
            </main>
        </div>
    );
};

export default Contact;
