import React from "react";
import "../../assets/css/Booking.css";
import BetterBusiness from "../../components/BetterBusiness";

const CompleteJob = () => {
	const Susses_page = () => {
		window.location.href = "/Successfully";
	};
	return (
		<>
			{/* Booking details starts here */}
			<section className="Booking-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-9">
							<div className="booking-details-wrapper">
								<div className="booking-heading-wrapper">
									<h4>Booking Details</h4>
								</div>
								<div className="tag-and-accep-wrapper">
									<span className="job">Job# AD12</span>
									{/* <span className="Accepted">Accepted Job</span> */}
								</div>
								<div className="booker-details-wrapper">
									<ul>
										<li>
											<span className="property">Client Name :</span>
											<span className="value">Mark James</span>
										</li>
										<li>
											<span className="property">Phone :</span>
											<span className="value">+1 234 567 890</span>
										</li>
										<li>
											<span className="property">Address :</span>
											<span className="value">
												1234, 5th Street, Lorem ipsum, city, state
											</span>
										</li>
										<li>
											<span className="property">Date :</span>
											<span className="value">12 Jan, 2022</span>
										</li>
										<li>
											<span className="property">Time : </span>
											<span className="value">11:00 am</span>
										</li>
									</ul>
								</div>
								<div className="packages-wrapper">
									<div className="packages-heading-wrapper">
										<h4>Package Includes</h4>
									</div>
									<div className="packages-list-wrapper">
										<ul>
											<li>
												<span className="property">Required</span>
												<span className="value">
													Remove belongings from your cabinets and drawers
												</span>
											</li>
											<li>
												<span className="property">Required</span>
												<span className="value">
													Use a wet paper towel to wipe cabinets out and clean
													the outside
												</span>
											</li>
											<li>
												<span className="property">Required</span>
												<span className="value">
													Use an all-purpose cleaner to disinfect the
													countertops
												</span>
											</li>
											<li>
												<span className="property">Required</span>
												<span className="value">
													Clean the sink basin, faucet and handles
												</span>
											</li>
											<li>
												<span className="property">Required</span>
												<span className="value">
													Use an oven cleaner to remove interior grime
												</span>
											</li>
										</ul>
									</div>
									<div className="package-btn-wrapper">
										<button
											onClick={Susses_page}
											className="btn btn-primary ez-clean-btn-rounded mt-3"
										>
											Complete Job
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Booking details ends here */}
			{/* tagline sec starts here */}
			<BetterBusiness />
			{/* tagline sec ends here */}
		</>
	);
};

export default CompleteJob;
