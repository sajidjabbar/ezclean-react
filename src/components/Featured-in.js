import React from "react";
import logo1 from '../assets/img/logo1.png';
import logo2 from '../assets/img/logo2.png';
import logo3 from '../assets/img/logo3.png';
import logo4 from '../assets/img/logo4.png';
import logo5 from '../assets/img/logo5.png';
import logo6 from '../assets/img/logo6.png';

const Featured = () => {
    return (
        <>
{/*Featured In*/}
<section className="section-services">
    <div className="container">
        <div className="row px-5">
            <div className="col-md-12">
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h3 className="pricing-title font-weight-bold"><span
                        className="ez-yellow-color">Featured </span>In</h3>
                </div>
            </div>
            <div className="col-md-2"><img className={"feature-img"} src={logo1}/>
            </div>
            <div className="col-md-2"><img className="feature-img" src={logo2}/>
            </div>
            <div className="col-md-2"><img className="feature-img" src={logo3}/>
            </div>
            <div className="col-md-2"><img className="feature-img" src={logo4}/>
            </div>
            <div className="col-md-2"><img className="feature-img" src={logo5}/>
            </div>
            <div className="col-md-2"><img className="feature-img" src={logo6}/>
            </div>
        </div>
    </div>
</section>
        </>
    );
};

export default Featured;