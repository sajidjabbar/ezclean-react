import React from "react";
import { Link } from "react-router-dom";

const BetterBusiness  = () => {
    return (
        <>
            <small className="ez-yellow-color faq-contact-link">Have more questions? Check more <a
                className="faq-link font-weight-bold" href="javascript:void(0);">FAQs</a> or
                {/*<a className="contact-link font-weight-bold" href="javascript:void(0);">Contact us</a>*/}
                <Link className="contact-link font-weight-bold" to={"/Contact"}>Contact us</Link></small>
            <section className="section-services mt-4">
                <div className="container-fluid yellow-bg">
                    <div className="business-text">
                        <p>Better Business Bureau (BBB) Accredited Businesses</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BetterBusiness;
