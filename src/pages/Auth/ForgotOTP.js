import React from "react";
import BetterBusiness from "../../components/BetterBusiness";
import mainImage from "../../assets/img/blog-page.png";
import blogImg from "../../assets/img/blog-detail-img.png";
import {Link} from "react-router-dom";

const ForgotPassword  = () => {
    return (
        <div className="Auth ForgotOtp">
            <main id="main">
                {/*Blog First Section*/}
                <section className="section-services mt-5 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h3>Forgot Password</h3>
                                    <p className="w-50 mt-3 ml-auto mr-auto">A code has been sent to your email</p>
                                </div>
                            </div>
                            <div className="col-md-4 ml-auto mr-auto">
                                <form className="mt-2">
                                    <div className="row otp">
                                            <div className="col-md-3 mt-3">
                                                <input className="form-control" type="number" placeholder=""/>
                                            </div>
                                            <div className="col-md-3 mt-3">
                                                <input className="form-control" type="number" placeholder=""/>
                                            </div>
                                            <div className="col-md-3 mt-3">
                                                <input className="form-control" type="number" placeholder=""/>
                                            </div>
                                            <div className="col-md-3 mt-3">
                                                <input className="form-control" type="number" placeholder=""/>
                                            </div>
                                            {/*<button className="btn btn-primary ez-clean-btn-rounded mt-3 justify-content-center ml-auto mr-auto d-flex" href="javascript:void(0);">Submit</button>*/}
                                        <Link className="btn btn-primary ez-clean-btn-rounded  justify-content-center ml-auto mr-auto d-flex mt-4" to={"/EnterPassword"}>Submit</Link>
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

export default ForgotPassword;
