import React from "react";
import BetterBusiness from "../../components/BetterBusiness";
import "../../assets/css/CustomerProfile.css";
import {
	cleaner2,
	cleaner3,
	cleaner4,
	make1,
	make2,
	make3,
} from "../../constant";

const CustomerProfile = () => {
	return (
		<>
			{/* customer sec starts here */}
			<section className="customer-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="search-wrapper">
								<form action="">
									<div className="form-group">
										<input
											type="search"
											name=""
											placeholder="Seach cleaner"
											className="form-control"
											id=""
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="profile-img-btn-wrapper">
								<div className="profile-img-wrapper">
									<img src={cleaner4} alt="" />
									<h2>Hi john</h2>
								</div>
								<div className="profile-btn-wrapper">
									<a
										href="/dashboard"
										className="btn btn-primary ez-clean-btn-rounded mt-3"
									>
										My Profile
									</a>
									<button className="btn btn-primary ez-clean-btn-rounded mt-3">
										Dashboard
									</button>
								</div>
							</div>
							<div className="customer-banner-wrapper">
								<div className="row">
									<div className="col-lg-6">
										<div className="customer-content-wrapper">
											<h3>Now Hire...</h3>
											<h3>Instant cleaning services</h3>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="only-price-wrapper">
											<h4>for only</h4>
											<h2>$200</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mt-5">
						<div className="col-lg-6">
							<div className="help-content-wrapper">
								<h4>How can we help you?</h4>
								<p>
									Our three core values match our one mission, delivering the
									best cleaning experience, trained and trusted cleaners, and
									environmentally friendly cleaning products to every family{" "}
								</p>
								<div className="button-wrapper">
									<a
										href="/makingbooking"
										className="form-control btn btn-primary ez-clean-btn-rounded mt-3"
									>
										Make Booking
									</a>
									<a
										href="/InviteFriend"
										className="form-control btn btn-primary ez-clean-btn-rounded mt-3"
									>
										Invite a Friend
									</a>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="row">
								<div className="col-lg-4">
									<div className="cleaner-wrapper">
										<figure>
											<img src={make1} className="img-fluid" alt="" />
										</figure>
										<div className="content-wrapper">
											<h4>Regular Cleaning</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="cleaner-wrapper">
										<figure>
											<img src={make2} className="img-fluid" alt="" />
										</figure>
										<div className="content-wrapper">
											<h4>Deep Cleaning</h4>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="cleaner-wrapper">
										<figure>
											<img src={make3} className="img-fluid" alt="" />
										</figure>
										<div className="content-wrapper">
											<h4>Move Cleaning</h4>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* customer sec ends here */}
			<BetterBusiness />
		</>
	);
};

export default CustomerProfile;
