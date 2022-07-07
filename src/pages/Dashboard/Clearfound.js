import React from "react";
import "../../assets/css/clearfound.css";
import { Link } from "react-router-dom";
import clear from "../../assets/img/clear.png";
import BetterBusiness from "../../components/BetterBusiness";

const Clearfound = () => {
  return (
    <>
      {/* clear found section  */}
      <section className="clear-found-sec">
        <div className="container">
          <div className="clear-found-head">
            <h2>Cleaner Found</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="row for-flex">
                <div className="col-md-6">
                  <div className="standard-regular">
                    <h2>Standard</h2>
                    <h3>Regular</h3>
                    <h3>Cleaning</h3>
                    <h4>Apartment type : Double</h4>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="dv-charges">
                    <h3>Charges</h3>
                    <h2 className="for-left">$300</h2>
                  </div>
                </div>
              </div>
              <div className="john-martin">
                <div className="john-img">
                  <img className="img-fluid" src={clear}></img>
                </div>
                <div className="john-text">
                  <h3>John Martin</h3>
                  <div className="john-stars">
                    <ul>
                      <li>
                        <Link to="/">
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i class="fa fa-star" aria-hidden="true"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i
                            class="fa fa-star for-grey-color"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </li>
                      <span>4.0 star</span>
                    </ul>
                    <p>Suit #123, Lorem Ipsum Apartmen</p>
                    <p>5th Street, Lorem ipsum</p>
                    <p>City, State, Zip code</p>
                    <div className="hire-btn">
                      <Link to="/">Send Hire request</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="john-para">
                <p>
                  Our three core values match our one mission, delivering the
                  best cleaning experience, trained and trusted cleaners, and
                  environmentally friendly cleaning products to every family Our
                  three core values match our one mission.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="all-text-center">
                <div className="chat-with-cleaner">
                  <Link to="/">Chat with cleaner</Link>
                </div>
                <div className="acced-proceed">
                  <Link to="/">Accept and proceed</Link>
                </div>
                <div className="reject">
                  <Link to="/">Reject and find another</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of clear found section  */}

      <BetterBusiness />
    </>
  );
};

export default Clearfound;
