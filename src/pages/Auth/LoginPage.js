import React from "react";
import BetterBusiness from "../../components/BetterBusiness";
import mainImage from "../../assets/img/blog-page.png";
import blogImg from "../../assets/img/blog-detail-img.png";
import {Link} from "react-router-dom";

const LoginPage  = () => {
    return (
        <>
            <main id="main">
                {/*Blog First Section*/}
                <section className="section-services mt-5 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h3>Login </h3>
                                    <p className="w-50 mt-3 ml-auto mr-auto">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <form className="mt-5">
                                    <div className="row">
                                        <div className="col-md-6 ml-auto mr-auto">
                                            <div className="col-md-12">
                                                <input className="form-control" type="email" placeholder="Email Address"/>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <input className="form-control" type="password" placeholder="Password"/>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="d-flex">
                                                    <div className="text-left remember">
                                                        <input type="checkbox"/>
                                                        <label>Remember Me</label>
                                                    </div>
                                                    <div className="text-right ml-auto forgot-link">
                                                        <Link className="" to={"/ForgotPassword"}>Forgot Password?</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*<a className="btn btn-primary ez-clean-btn-rounded mt-3 justify-content-center ml-auto w-50 mr-auto d-flex" href="javascript:void(0);">Login</a>*/}
                                            <Link className="btn btn-primary ez-clean-btn-rounded mt-3 justify-content-center ml-auto w-50 mr-auto d-flex" to={"/Welcome"}>Login</Link>
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
        </>
    );
};

export default LoginPage;
