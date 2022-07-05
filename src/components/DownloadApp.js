import React from "react";
import googleplay from "../assets/img/google-play.png";
import appstore from "../assets/img/app-store.png";

const DownloadApp  = () => {
    return (
        <section className="section-services application-section mt-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="app-description">
                            <h3 className="font-weight-bold app-heading">Download the <span
                                className="ez-yellow-color">Application</span></h3>
                            <p className="app-text">Our three core values match our one mission, delivering the best
                                cleaning experience, trained and trusted cleaners, and environmentally friendly
                                cleaning products to every family
                                of every background.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="google-play-section">
                            <img className="google-play-img" src={googleplay}
                                 alt="google-play"/>
                        </div>
                        <div className="app-store-section">
                            <img className="app-store-img" src={appstore}
                                 alt="app-store"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;