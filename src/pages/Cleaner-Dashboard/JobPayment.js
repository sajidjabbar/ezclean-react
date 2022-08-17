import React from "react";
import "../../assets/css/JobPayment.css";
import BetterBusiness from "../../components/BetterBusiness";

const JobPayment = () => {
	return (
		<>
			{/* Job Payment starts here */}
			<section className="job_payment">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="job-payment-wrapper">
								<div className="payment-heading-btn-wrapper">
									<h2>Job Payment</h2>
									<button className="btn">Active job</button>
								</div>
								<p>
									Our three core values match our one mission, delivering the
									best cleaning experience, trained and trusted cleaners, and
									environmentally friendl
								</p>
							</div>
							<div className="charges-and-standards-wrapper">
								<div className="charges-wrapper">
									<h6>Charges</h6>
									<h2>$400</h2>
								</div>
								<div className="starndard-wrapper">
									<h2>Standard</h2>
									<h4>
										Regular <br />
										Cleaning
									</h4>
									<h6>Apartment type : Double</h6>
								</div>
							</div>
						</div>
						<div className="col-lg-6"></div>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="job-form-wrapper">
								<form action="/Thankyou">
									<div className="form-group">
										<label htmlFor="Name">Name on card</label>
										<input
											type="text"
											className="form-control"
											placeholder="Your Name on Card"
										/>
									</div>
									<div className="form-group CardNumber row">
										<div className="col-lg-12">
											<label htmlFor="">Card Number</label>
										</div>
										<div className="col-lg-3">
											<input
												type="text"
												className="form-control"
												placeholder="****"
											/>
										</div>
										<div className="col-lg-3">
											<input
												type="text"
												className="form-control"
												placeholder="****"
											/>
										</div>
										<div className="col-lg-3">
											<input
												type="text"
												className="form-control"
												placeholder="****"
											/>
										</div>
										<div className="col-lg-3">
											<input
												type="text"
												className="form-control"
												placeholder="****"
											/>
										</div>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="btn btn-primary ez-clean-btn-rounded mt-3"
										>
											Pay now
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-3">
							<form action="">
								<div className="form-group ExpiryDate row">
									<div className="col-lg-12">
										<label htmlFor="Expiry">Expiry Date</label>
									</div>
									<div className="col-lg-4">
										<input
											type="text"
											className="form-control"
											placeholder="dd"
										/>
									</div>
									<div className="col-lg-4">
										<input
											type="text"
											className="form-control"
											placeholder="mm"
										/>
									</div>
									<div className="col-lg-4">
										<input
											type="text"
											className="form-control"
											placeholder="yy"
										/>
									</div>
								</div>
								<div className="form-group CVV row">
									<div className="col-lg-12">
										<label htmlFor="">CVV</label>
									</div>
									<div className="col-lg-3">
										<input
											type="text"
											className="form-control"
											placeholder="****"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			{/* Job Payment ends here */}
			{/* tagline sec starts here */}
			<BetterBusiness />
			{/* tagline sec ends here */}
		</>
	);
};

export default JobPayment;
