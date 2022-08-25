import React from "react";
import { Link } from "react-router-dom";
import BetterBusiness from "../../components/BetterBusiness";
import loginImg from "../../assets/img/login.png";

const Login  = () => {
    return (
        <div className="Auth">
            <main id="main">
                {/*Blog First Section*/}
                <section className="section-services mt-5 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={loginImg} alt="login-img" className="img-fluid"/>
                            </div>
                            <div className="col-md-6">
                                <div className="login-btns">
                                    <Link className="btn btn-primary ez-clean-btn-gradient mt-3 ml-auto d-flex" to={"/LoginPage"}>Login</Link>
                                    {/*<a className="btn btn-primary ez-clean-btn-gradient mt-3 ml-auto d-flex" href="javascript:void(0);">Login</a>*/}
                                    <Link className="btn btn-primary ez-clean-btn-border mt-3 ml-auto d-flex" to={"/RegisterCustomer"}>SignUp as Customer</Link>
                                    {/*<a className="btn btn-primary ez-clean-btn-border mt-3 ml-auto d-flex" href="javascript:void(0);">SignUp as Customer</a>*/}
                                    {/*<a className="btn btn-primary ez-clean-btn-border mt-3 ml-auto d-flex" href="javascript:void(0);">Signup as Cleaner</a>*/}
                                    <Link className="btn btn-primary ez-clean-btn-border mt-3 ml-auto d-flex" to={"/RegisterCleaner"}>Signup as Cleaner</Link>
                                </div>
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

export default Login;
