import React, { useEffect, useState } from "react";
import user from "../../assets/img/user.png";
import "../../assets/css/dash.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [editprofile, seteditprofile] = useState(false);
  const showedit = () => {
    seteditprofile(true);
  };
  const hideedit = () => {
    seteditprofile(false);
  };
  // useEffect(() => {

  // }, []);
  return (
    <>
      {/* Dashboard  section  */}
      <section className="dashboard-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="john-doe">
                <div className="john">
                  <img className="img-fluid" src={user}></img>
                  <div className="john-text">
                    <h3>John Doe</h3>
                    <p>Customer Profile</p>
                  </div>
                </div>

                {/* <div className="my-dv">
                  <h5>My Profile</h5>
                </div> */}

                <div className="dashboard-sec">
                  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        id="pills-profile-tab"
                        data-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="true"
                      >
                        My Profile
                      </a>
                    </li>

                    <li class="nav-item">
                      <Link
                        to="/Makingbooking"
                        class="nav-link"
                        id="pills-home-tab"
                        data-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Make Booking
                      </Link>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-dashboard-tab"
                        data-toggle="pill"
                        href="#pills-dashboard"
                        role="tab"
                        aria-controls="pills-dashboard"
                        aria-selected="false"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-contact-tab"
                        data-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Bookings
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-invite-tab"
                        data-toggle="pill"
                        href="#pills-invite"
                        role="tab"
                        aria-controls="pills-invite"
                        aria-selected="false"
                      >
                        Invite Friend
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-Loyalty-tab"
                        data-toggle="pill"
                        href="#pills-Loyalty"
                        role="tab"
                        aria-controls="pills-Loyalty"
                        aria-selected="false"
                      >
                        Loyalty Points
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-Wallet-tab"
                        data-toggle="pill"
                        href="#pills-Wallet"
                        role="tab"
                        aria-controls="pills-Wallet"
                        aria-selected="false"
                      >
                        Wallet
                      </a>
                    </li>

                    <li class="nav-item">
                      <a
                        class="nav-link"
                        id="pills-Notifications-tab"
                        data-toggle="pill"
                        href="#pills-Notifications"
                        role="tab"
                        aria-controls="pills-Notifications"
                        aria-selected="false"
                      >
                        Notifications
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12">
                  <div className="tabs-things">
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        <div className="profile-all">
                          {/* edit profile starts here */}
                          {!editprofile ? (
                            <div className="profile-fields-wrapper">
                              <div className="profile-head">
                                <h3>My Profile</h3>
                                <div className="profile-edit">
                                  <Link onClick={showedit} to="">
                                    Edit
                                  </Link>
                                </div>
                              </div>
                              <form>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          First Name:
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="John"
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          Address:
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="123, BLV 234, Lorem ipsum, dolor sit int"
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          Last Name:
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="Doe"
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          City :
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="Lorem ipsum"
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          Email Address:
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="janedoe@email.com"
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          State :
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="Lorem ipsum"
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          Card Number :
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="**** **** **** ****"
                                        />
                                        {/* <Link  to="/">update</Link> */}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          Phone :
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="+1 234 567 890"
                                        />
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-md-12">
                                    <div className="profile-head">
                                      <h3>Security</h3>
                                      <div className="profile-edit">
                                        <Link onClick={showedit} to="">
                                          Edit
                                        </Link>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <span className="only-for-flex">
                                        {" "}
                                        <label for="exampleInputEmail1">
                                          Password
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          id="exampleInputEmail1"
                                          aria-describedby="emailHelp"
                                          placeholder="********"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          ) : (
                            <div className="profile-edit-wrapper">
                              <div className="profile-head">
                                <h3>My Profile</h3>
                                <div className="profile-edit save-profile">
                                  <Link onClick={hideedit} to="">
                                    Save
                                  </Link>
                                </div>
                              </div>
                              <form>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="First Name"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Address"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Last Name"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="City"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Email Address"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="State"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Card Number"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Phone"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="New Password"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Confirm Password"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>

                                  <div className="col-md-12">
                                    <div className="profile-head">
                                      <h3>Security</h3>
                                      <div className="profile-edit save-profile">
                                        <Link onClick={hideedit} to="">
                                          save
                                        </Link>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Password"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Change Password"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div class="form-group">
                                      <input
                                        placeholder="Confirm Password"
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          )}
                          {/* edit profile starts here */}
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-dashboard"
                        role="tabpanel"
                        aria-labelledby="pills-dashboard-tab"
                      >
                        <div className="stats-box-row">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="stats-box-wrapper">
                                <div className="stats-name-wrapper">
                                  <h4>Total Bookings</h4>
                                </div>
                                <div className="stats-count-wrapper">
                                  <h2>20</h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="stats-box-wrapper">
                                <div className="stats-name-wrapper">
                                  <h4>Total Jobs done</h4>
                                </div>
                                <div className="stats-count-wrapper">
                                  <h2>16</h2>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="stats-box-wrapper">
                                <div className="stats-name-wrapper">
                                  <h4>
                                    Current Balance <span>Wallet</span>
                                  </h4>
                                </div>
                                <div className="stats-count-wrapper">
                                  <h2>$ 420</h2>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="job-history">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="content-wrapper">
                                <h3>Job History</h3>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="job-table-wrapper">
                                <div class="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">Job Type</th>
                                        <th scope="col">Client Name</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Total Amont</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Regular Cleaning</td>
                                        <td>John Doe</td>
                                        <td>Lorem Ipsum</td>
                                        <td>$300</td>
                                      </tr>
                                      <tr>
                                        <td>Regular Cleaning</td>
                                        <td>John Doe</td>
                                        <td>Lorem Ipsum</td>
                                        <td>$300</td>
                                      </tr>
                                      <tr>
                                        <td>Regular Cleaning</td>
                                        <td>John Doe</td>
                                        <td>Lorem Ipsum</td>
                                        <td>$300</td>
                                      </tr>
                                      <tr>
                                        <td>Regular Cleaning</td>
                                        <td>John Doe</td>
                                        <td>Lorem Ipsum</td>
                                        <td>$300</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cleaner-wrapper">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="content-wrapper">
                                <h4>Other Cleaners</h4>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="cleaner-table-wrapper">
                                <div class="table-responsive">
                                  <table class="table">
                                    <thead>
                                      <tr>
                                        <th scope="col" className="line" ></th>
                                        <th scope="col" className="name"></th>
                                        <th scope="col" className="description"></th>
                                        <th scope="col" className="rating"></th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Regular Cleaning</td>
                                        <td className="name-box-wrapper">
                                          <div className="img-and-name">
                                            <img src="" />
                                          </div>
                                        </td>
                                        <td>Lorem Ipsum</td>
                                        <td>$300</td>
                                      </tr>
                                      <tr>
                                        <td>Regular Cleaning</td>
                                        <td>John Doe</td>
                                        <td>Lorem Ipsum</td>
                                        <td>$300</td>
                                      </tr>
                                      <tr>
                                        <td>Regular Cleaning</td>
                                        <td>John Doe</td>
                                        <td>Lorem Ipsum</td>
                                        <td>$300</td>
                                      </tr>
                                      <tr>
                                        <td>Regular Cleaning</td>
                                        <td>John Doe</td>
                                        <td>Lorem Ipsum</td>
                                        <td>$300</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                      ></div>
                      <div
                        class="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                      >
                        C
                      </div>
                      <div
                        class="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                      >
                        D
                      </div>

                      <div
                        class="tab-pane fade"
                        id="pills-invite"
                        role="tabpanel"
                        aria-labelledby="pills-invite-tab"
                      >
                        E
                      </div>

                      <div
                        class="tab-pane fade"
                        id="pills-Loyalty"
                        role="tabpanel"
                        aria-labelledby="pills-Loyalty-tab"
                      >
                        F
                      </div>

                      <div
                        class="tab-pane fade"
                        id="pills-Wallet"
                        role="tabpanel"
                        aria-labelledby="pills-Wallet-tab"
                      >
                        G
                      </div>

                      <div
                        class="tab-pane fade"
                        id="pills-Notifications"
                        role="tabpanel"
                        aria-labelledby="pills-Notifications-tab"
                      >
                        H
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Dashboard section  */}
    </>
  );
};

export default Dashboard;
