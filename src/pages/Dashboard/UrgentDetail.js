import React, { useEffect } from "react";
import BetterBusiness from "../../components/BetterBusiness";

const UrgentDetail = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			{/* Urgent ccleaing starts here */}
			<section className="cleaning-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="job-payment-wrapper">
								<div className="payment-heading-btn-wrapper">
									<h2>Cleaning Details</h2>
									<button className="btn">Active job</button>
								</div>
								<p>
									Our three core values match our one mission, delivering the
									best cleaning experience, trained and trusted cleaners, and
									environmentally friendl
								</p>
							</div>
							<div className="charges-and-standards-wrapper">
								<div className="starndard-wrapper">
									<h2>Urgent</h2>
									<h4>
										Regular <br />
										Cleaning
									</h4>
									<h6>Apartment type : Double</h6>
								</div>
								<div className="charges-wrapper">
									<h6>Charges</h6>
									<h2>$400</h2>
								</div>
							</div>
							<div className="packages-include-wrapper">
								<div className="package-heading-wrapper">
									<h5>Kitchen Cleaning</h5>
								</div>
								<div className="packages-list-wrapper">
									<ul>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Remove belongings from your cabinets and drawers
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use a wet paper towel to wipe cabinets out and clean the
												outside
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use an all-purpose cleaner to disinfect the countertops
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Clean the sink basin, faucet and handles
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use an oven cleaner to remove interior grime
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Spray the oven’s interior, then use a scraper to remove
												grease and grime
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="packages-include-wrapper">
								<div className="package-heading-wrapper">
									<h5>Living Room Cleaning</h5>
								</div>
								<div className="packages-list-wrapper">
									<ul>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Remove belongings from your cabinets and drawers
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use a wet paper towel to wipe cabinets out and clean the
												outside
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use an all-purpose cleaner to disinfect the countertops
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Clean the sink basin, faucet and handles
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use an oven cleaner to remove interior grime
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Spray the oven’s interior, then use a scraper to remove
												grease and grime
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="packages-include-wrapper">
								<div className="package-heading-wrapper">
									<h5>Dining Room Cleaning</h5>
								</div>
								<div className="packages-list-wrapper">
									<ul>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Remove belongings from your cabinets and drawers
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use a wet paper towel to wipe cabinets out and clean the
												outside
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use an all-purpose cleaner to disinfect the countertops
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Clean the sink basin, faucet and handles
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use an oven cleaner to remove interior grime
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Spray the oven’s interior, then use a scraper to remove
												grease and grime
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="packages-include-wrapper">
								<div className="package-heading-wrapper">
									<h5>Bathroom Cleaning</h5>
								</div>
								<div className="packages-list-wrapper">
									<ul>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Remove belongings from your cabinets and drawers
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use a wet paper towel to wipe cabinets out and clean the
												outside
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use an all-purpose cleaner to disinfect the countertops
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Clean the sink basin, faucet and handles
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Use an oven cleaner to remove interior grime
											</span>
										</li>
										<li>
											<span className="Done">Done</span>
											<span className="text">
												Spray the oven’s interior, then use a scraper to remove
												grease and grime
											</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="review-wrapper">
								<form action="">
									<div className="form-group">
										<label className="la" htmlFor="">
											Write a review
										</label>
										<textarea
											name=""
											className="form-control"
											id=""
											cols="30"
											rows="5"
										></textarea>
									</div>
									<div className="form-group">
										<label className="la" htmlFor="">
											Rate the provided services
										</label>
										<ul class="rate-area">
											<input type="radio" id="5-star" name="rating" value="5" />
											<label for="5-star" title="Amazing">
												5 stars
											</label>
											<input type="radio" id="4-star" name="rating" value="4" />
											<label for="4-star" title="Good">
												4 stars
											</label>
											<input type="radio" id="3-star" name="rating" value="3" />
											<label for="3-star" title="Average">
												3 stars
											</label>
											<input type="radio" id="2-star" name="rating" value="2" />
											<label for="2-star" title="Not Good">
												2 stars
											</label>
											<input type="radio" id="1-star" name="rating" value="1" />
											<label for="1-star" title="Bad">
												1 star
											</label>
										</ul>
									</div>
									<div className="form-group">
										<button className="btn btn-primary ez-clean-btn-rounded mt-3">
											Job Complete
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Urgent ccleaing Ends here */}

			<BetterBusiness />
		</>
	);
};

export default UrgentDetail;
