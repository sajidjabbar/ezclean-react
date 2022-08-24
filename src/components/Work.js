import React from "react";
import Step1 from "../assets/img/step1icon.png";
import Step2 from "../assets/img/step2icon.png";
import Step3 from "../assets/img/step3icon.png";

const Work  = () => {
    return (
        <>
            <section className="section-services mt-4">
                <div className="container">
                    <div className="row px-5">
                        <div className="col-md-12">
                            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                                <h3 className="pricing-title font-weight-bold">How it <span
                                    className="ez-yellow-color">Works?</span></h3>
                                <small>Visit our FAQ page to find answers to our most commonly asked questions.</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="work-card">
                                <img className={"work-img"} src={Step1}/>
                            </div>
                            <h3 className="ez-yellow-color font-weight-bold mt-5 text-center clr-ylw-imp">Step 01</h3>
                            <p className="work-text mt-3 text-center">Select the size of</p>
                        </div>
                        <div className="col">
                            <hr className="work-separator"/>
                        </div>
                        <div className="col">
                            <div className="work-card">
                                <img className="work-img" src={Step2}/>
                            </div>
                            <h3 className="ez-yellow-color font-weight-bold mt-5 text-center clr-ylw-imp">Step 02</h3>
                            <p className="work-text mt-3 text-center">Select the level of clean-</p>
                        </div>
                        <div className="col">
                            <hr className="work-separator"/>
                        </div>
                        <div className="col">
                            <div className="work-card">
                                <img className="work-img" src={Step3}/>
                            </div>
                            <h3 className="ez-yellow-color font-weight-bold mt-5 text-center clr-ylw-imp">Step 03</h3>
                            <p className="work-text mt-3 text-center">Schedule your preferred day</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Work;