import React from "react";
import customerService1 from '../assets/img/customer-service-1.png';
import customerService2 from '../assets/img/customer-service-2.png';
import customerService3 from '../assets/img/customer-service-3.png';

const ChooseUs  = () => {
    return (
        <section className="section-services mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                            <small className="ez-yellow-color">What makes us special</small>
                            <h3 className="pricing-title font-weight-bold">Why you should <span
                                className="ez-green-color">Choose Us!</span></h3>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <div className="choose-card d-flex flex-column">
                            <img className="choose-img" src={customerService1}/>
                            <h4>24/7 Customer</h4>
                            <p className="choose-card-text">Hotline and e-mail available to our</p>
                            <a className="btn btn-primary ez-white-btn mt-auto" href="javascript:void(0);">Get Help</a>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <div className="choose-card d-flex flex-column">
                            <img className="choose-img" src={customerService2}/>
                            <h4>Trusted</h4>
                            <p className="choose-card-text">Our cleaners are background</p>
                            <a className="btn btn-primary ez-white-btn mt-auto" href="javascript:void(0);">Book
                                Now</a>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex align-items-stretch">
                        <div className="choose-card d-flex flex-column">
                            <img className="choose-img" src={customerService3}/>
                            <h4>Affordable</h4>
                            <p className="choose-card-text">Our flexible and affordable subscription model, to
                                give</p>
                            <a className="btn btn-primary ez-white-btn mt-auto" href="javascript:void(0);">Book
                                Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;