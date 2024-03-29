import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/standard.css";
import make1 from "../../assets/img/make1.png";
import make2 from "../../assets/img/make2.png";
import make3 from "../../assets/img/make3.png";
import standard from "../../assets/img/standard.png";
import BetterBusiness from "../../components/BetterBusiness";
import { check } from "../../constant";

const Standard = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	return (
		<div className="Standards">
			{/* Standard section */}
			<section className="standard-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="standard-things">
								<div className="standard-head">
									<h3>Standard</h3>
									<p>
										Our three core values match our one mission, delivering the
										best cleaning experience, trained and trusted cleaners, and
										environmentally friendl
									</p>
								</div>
							</div>
							<div className="service-text">
								<h5>Select service type</h5>
							</div>

							<div className="row">
								<div className="col-md-4">
									<label class="standard-container">
										<input
											hidden
											type="radio"
											name="Standardradio"
											className="form-check-input"
										/>
										<span class="checkmark">
											<div className="pic-text for-pic-hover">
												<img className="img-fluid" src={make1}></img>
												<h5>
													Regular <br /> Cleaning
												</h5>
											</div>
										</span>
									</label>
								</div>

								<div className="col-md-4">
									<label class="standard-container">
										<input
											hidden
											type="radio"
											name="Standardradio"
											className="form-check-input"
										/>
										<span class="checkmark">
											<div className="pic-text for-pic-hover">
												<img className="img-fluid" src={make2}></img>
												<h5 className="mt-2">
													Deep <br />
													Cleaning
												</h5>
											</div>
										</span>
									</label>
								</div>

								<div className="col-md-4">
									<label class="standard-container">
										<input
											hidden
											type="radio"
											name="Standardradio"
											className="form-check-input"
										/>
										<span class="checkmark">
											<div className="pic-text for-pic-hover">
												<img className="img-fluid" src={make3}></img>
												<h5 className="mt-4">
													Move <br />
													Cleaning
												</h5>
											</div>
										</span>
									</label>
								</div>
							</div>

							<div className="row for-padding-up">
								<div className="col-md-4 pos-rel text-center">
									<label className="selectlabel">Venue Type </label>
									<i className="fa fa-angle-down arrow_set_pos"></i>
									<div className="select-all">
										<select name="cars" id="cars">
											<option value="volvo">Select</option>
											<option value="saab">Select</option>
											<option value="opel">Select</option>
											<option value="audi">Select</option>
										</select>
									</div>
								</div>

								<div className="col-md-4 text-center">
									<label className="selectlabel">No. of Bedrooms</label>
									{/* <div className="select-btn">
										<button>Double</button>
									</div> */}
									<input type="number" className="form-control" />
								</div>

								<div className="col-md-4 text-center">
									<label className="selectlabel">No. of Bathrooms </label>
									<input type="number" className="form-control" />
								</div>
							</div>

							<form>
								<div className="row for-padding-up">
									<div className="col-md-6">
										<div class="form-group">
											<label className="selectlabel" for="exampleInputEmail1">
												Date
											</label>
											<input
												type="date"
												class="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Enter email"
											/>
										</div>
									</div>

									<div className="col-md-6">
										<div class="form-group">
											<label className="selectlabel" for="exampleInputEmail1">
												Time
											</label>
											<input
												type="date"
												class="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Enter email"
											/>
										</div>
									</div>
								</div>
							</form>
						</div>

						<div className="col-md-6">
							<div className="standard-img">
								<img className="img-fluid" src={standard}></img>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* End of Standard section  */}

			{/* Adds on section  */}
			<section className="adds-sec">
				<div className="container">
					<div className="head-address">
						<h4>Add-ons</h4>
					</div>
					<div className="row">
						<div className="col-md-3">
							<div className="adds-things">
								<label class="add-container">
									Dust Plan | 20$
									<input type="checkbox" hidden />
									<span class="checkmark">
										<div className="for-checkbox">
											<img src={check} alt="" className="img-fluid" />
										</div>
									</span>
								</label>
							</div>
						</div>
						<div className="col-md-3">
							<div className="adds-things">
								<label class="add-container">
									Dust Plan | 20$
									<input type="checkbox" hidden />
									<span class="checkmark">
										<div className="for-checkbox">
											<img src={check} alt="" className="img-fluid" />
										</div>
									</span>
								</label>
							</div>
						</div>
						<div className="col-md-3">
							<div className="adds-things">
								<label class="add-container">
									Broom | 20$
									<input type="checkbox" hidden />
									<span class="checkmark">
										<div className="for-checkbox">
											<img src={check} alt="" className="img-fluid" />
										</div>
									</span>
								</label>
							</div>
						</div>
						<div className="col-md-3">
							<div className="adds-things">
								<label class="add-container">
									Liquid Soap | 20$
									<input type="checkbox" hidden />
									<span class="checkmark">
										<div className="for-checkbox">
											<img src={check} alt="" className="img-fluid" />
										</div>
									</span>
								</label>
							</div>
						</div>
						{/* <div className="col-md-3">
							<div className="adds-things">
								<label class="add-container">
									Write your own
									<input type="checkbox" hidden />
									<span class="checkmark">
										<div className="for-checkbox">
											<img src={check} alt="" className="img-fluid" />
										</div>
									</span>
								</label>
							</div>
						</div> */}

						{/* <div className="col-md-6">
							<div className="form-input">
								<div class="form-group">
									<input
										type="text"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Write your own"
									/>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</section>
			{/* End of Adds on section  */}

			{/* Address detail section  */}
			<section className="address-detail-sec">
				<div className="container">
					<div className="head-address">
						<h4>Address details</h4>
					</div>
					<form>
						<div className="row">
							<div className="col-md-6">
								<div class="form-group">
									<label for="exampleInputEmail1">Street Address</label>
									<input
										type="email"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Write your own"
									/>
								</div>

								<div class="form-group">
									<label for="exampleInputEmail1">Building Name</label>
									<input
										type="email"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Your Address"
									/>
								</div>

								<div class="form-group">
									<label for="exampleInputEmail1">Appartment / House #</label>
									<input
										type="email"
										class="form-control"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										placeholder="Your Address"
									/>
								</div>

								<div className="row for-flex">
									<div className="col-md-6">
										<div className="dv-charges">
											<h3>Charges</h3>
											<h2 className="for-left">$300</h2>
										</div>
									</div>

									<div className="col-md-6">
										<div className="standard-regular">
											<h2>Standard</h2>
											<h3>Regular</h3>
											<h3>Cleaning</h3>
											<h4>Apartment type : Double</h4>
										</div>
									</div>

									<div className="col-md-12">
										<div className="standard-btn">
											<Link to="/search">Search for Cleaners</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="col-md-6">
								<div className="row">
									<div className="col-md-6">
										<div class="form-group">
											<label for="exampleInputEmail1">State</label>
											<input
												type="email"
												class="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Your State"
											/>
										</div>
									</div>

									<div className="col-md-6">
										<div class="form-group">
											<label for="exampleInputEmail1">Zip Code</label>
											<input
												type="email"
												class="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Your Postal Code"
											/>
										</div>
									</div>

									<div className="col-md-12">
										<div class="form-group">
											<label for="exampleInputEmail1">Contact Number</label>
											<input
												type="email"
												class="form-control"
												id="exampleInputEmail1"
												aria-describedby="emailHelp"
												placeholder="Your Address"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</section>
			{/* End of Address detail section  */}

			<BetterBusiness />
		</div>
	);
};

export default Standard;
