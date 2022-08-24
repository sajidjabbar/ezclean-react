import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesImg from "../../assets/img/services-img.png";
import Faq from "../../components/Faq";
import BetterBusiness from "../../components/BetterBusiness";
import serviceIcon1 from "../../assets/img/services-icon1.png";
import serviceIcon2 from "../../assets/img/services-icon2.png";
import serviceIcon3 from "../../assets/img/services-icon3.png";

const Services = () => {
    return (
        <div className="Service_Page">
            <main id="main">
                {/*About Us First Section*/}
                <section className="section-services mt-5 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Providing the <span className="ez-yellow-color"> highest standard cleaning services.</span></h3>
                                <p className="about-text">We believe cleaning should be a luxury every family can afford. For the last two
                                    years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that
                                    .</p>
                                <a className="btn btn-primary ez-clean-btn-rounded mt-3 fnt-wght-blld" href="javascript:void(0);">Learn more</a>
                            </div>
                            <div className="col-md-6">
                                <img className="cleaning-img1" src={ServicesImg} alt="ez-cleaning" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*About Us First Section*/}

                {/*Service*/}
                <section className="section-services mt-4 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                                    <small className="ez-yellow-color">Services</small>
                                    <h3 className="pricing-title font-weight-bold">Best Cleaning Service <span
                                        className="ez-green-color">in Town</span></h3>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-stretch">
                                <div className="service-card d-flex flex-column w-100">
                                    <h4 className="mt-3">Regular Cleaning</h4>
                                    <img className="choose-img" src={serviceIcon1} />
                                    <p className="choose-card-text">Hotline and e-mail available to our</p>
                                    <a className="btn btn-primary ez-clean-btn-rounded mt-auto w-50 ml-auto mr-auto bt-size-ser-qa mb-3" href="javascript:void(0);">Book Now</a>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-stretch">
                                <div className="service-card d-flex flex-column w-100">
                                    <h4 className="mt-3">Deep Cleaning</h4>
                                    <img className="choose-img" src={serviceIcon2} />
                                    <p className="choose-card-text">Hotline and e-mail available to our</p>
                                    <a className="btn btn-primary ez-clean-btn-rounded mt-auto w-50 ml-auto mr-auto bt-size-ser-qa mb-3" href="javascript:void(0);">Book Now</a>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex align-items-stretch">
                                <div className="service-card d-flex flex-column w-100">
                                    <h4 className="mt-3">Move Cleaning</h4>
                                    <img className="choose-img" src={serviceIcon3} />
                                    <p className="choose-card-text">Hotline and e-mail available to our</p>
                                    <a className="btn btn-primary ez-clean-btn-rounded mt-auto w-50 ml-auto mr-auto bt-size-ser-qa mb-3" href="javascript:void(0);">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Service*/}

                {/*Business Bureau*/}
                <div className="margin-top-servc-btm">
                    <BetterBusiness />
                </div>
                {/*Business Bureau*/}
            </main>
        </div>
    );
};

export default Services;
