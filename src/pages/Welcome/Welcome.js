import React from "react";
import BetterBusiness from "../../components/BetterBusiness";
import {Link} from "react-router-dom";

const Welcome  = () => {
    return (
        <>
            <main id="main">
                {/*Welcome First Section*/}
                <section className="section-services mt-3 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="search-cleaner">
                                    <input className="cleaner w-100" placeholder="Search Cleaner"/>
                                </div>
                                <div className="col-md-12">
                                    <div className="welcome-name">
                                        <img src="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Welcome  First Section*/}

                {/*Business Bureau*/}
                <BetterBusiness/>
                {/*Business Bureau*/}
            </main>
        </>
    );
};

export default Welcome;
