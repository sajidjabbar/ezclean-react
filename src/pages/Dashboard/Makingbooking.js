import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/makingbooking.css";
import make1 from "../../assets/img/make1.png";
import make2 from "../../assets/img/make2.png";
import make3 from "../../assets/img/make3.png";
import dashpic from "../../assets/img/dashpic.png";
import BetterBusiness from "../../components/BetterBusiness";

const Makingbooking = () => {
  return (
    <>
      {/* Making section  */}
      <section className="making-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="making-all">
                <div className="making-booking-text">
                  <h2>Make Bookings</h2>
                  <p>
                    Our three core values match our one mission, delivering the
                    best cleaning experience, trained and trusted cleaners, and
                    environmentally friendly cleaning products to every family
                    of every background. Our three core values match our one
                    mission, delivering the best cleaning experience, trained
                    and trusted cleaners, and environmentally friendly cleaning
                    products to every family of every background.{" "}
                  </p>

                  <div className="making-two-buttons">
                    <Link to="/standard">Standard</Link>
                    <Link to="/urgent">Urgent</Link>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="pic-text">
                    <img className="img-fluid" src={make1}></img>
                    <h5>
                      Regular <br /> Cleaning
                    </h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pic-text">
                    <img className="img-fluid" src={make2}></img>
                    <h5>
                      Deep <br /> Cleaning
                    </h5>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="pic-text">
                    <img className="img-fluid" src={make3}></img>
                    <h5 className="for-upper-padding">
                      Move <br /> Cleaning
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="making-img">
                <img className="img-fluid" src={dashpic}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Making section  */}

      <BetterBusiness />
    </>
  );
};

export default Makingbooking;
