import React from "react";
import BetterBusiness from "../../components/BetterBusiness";
import { cleaner, cleaner2, cleaner3, cleaner4 } from "../../constant";
import "../../assets/css/notification.css";

const Botification = () => {
	return (
		<div className="Botification_Page">
			{/* Notification starts here */}
			<section className="notification-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-2"></div>
						<div className="col-lg-8">
							<div className="notifications-wrapper">
								<div className="notifications-heading-wrapper">
									<h3>Notifications</h3>
								</div>
								<div className="notification-list-wrapper">
									<div className="single-notification-wrapper">
										<div className="profile-wrapper">
											<div className="profile-img-wrapper">
												<img src={cleaner} alt="" />
											</div>
											<div className="profile-content-wrapper">
												<h6>Employee of the month</h6>
												<h3>James Knot</h3>
											</div>
										</div>
										<div className="msg-wrappper">
											<h4>Job accepted from Cleaner</h4>
										</div>
										<div className="notofication-btn-wrapper">
											<div className="green_dot"></div>
											<div>
												<span className="font-sml-sml">
													29 july 10:30am |2021
												</span>
											</div>
										</div>
									</div>
									<div className="single-notification-wrapper">
										<div className="profile-wrapper">
											<div className="profile-img-wrapper">
												<img src={cleaner2} alt="" />
											</div>
											<div className="profile-content-wrapper">
												<h6>Employee of the month</h6>
												<h3>James Knot</h3>
											</div>
										</div>
										<div className="msg-wrappper">
											<h4>Job accepted from Cleaner</h4>
										</div>
										<div className="notofication-btn-wrapper">
											<div className="green_dot"></div>
											<div>
												<span className="font-sml-sml">
													29 july 10:30am |2021
												</span>
											</div>
										</div>
									</div>
									<div className="single-notification-wrapper">
										<div className="profile-wrapper">
											<div className="profile-img-wrapper">
												<img src={cleaner4} alt="" />
											</div>
											<div className="profile-content-wrapper">
												<h3>James Knot</h3>
											</div>
										</div>
										<div className="msg-wrappper">
											<h4>Job accepted from Cleaner</h4>
										</div>
										<div className="notofication-btn-wrapper">
											{/* <a href="#">View Details</a> */}
											<div className="green_dot"></div>
											<div>
												<span className="font-sml-sml">
													29 july 10:30am |2021
												</span>
											</div>
										</div>
									</div>
									<div className="single-notification-wrapper">
										<div className="profile-wrapper">
											<div className="profile-img-wrapper">
												<img src={cleaner3} alt="" />
											</div>
											<div className="profile-content-wrapper">
												<h3>James Knot</h3>
											</div>
										</div>
										<div className="msg-wrappper">
											<h4>Job accepted from Cleaner</h4>
										</div>
										<div className="notofication-btn-wrapper">
											<div className="green_dot"></div>
											<div>
												<span className="font-sml-sml">
													29 july 10:30am |2021
												</span>
											</div>
										</div>
									</div>
									<div className="single-notification-wrapper">
										<div className="profile-wrapper">
											<div className="profile-img-wrapper">
												<img src={cleaner2} alt="" />
											</div>
											<div className="profile-content-wrapper">
												<h3>James Knot</h3>
											</div>
										</div>
										<div className="msg-wrappper">
											<h4>Job accepted from Cleaner</h4>
										</div>
										<div className="notofication-btn-wrapper">
											<div className="green_dot"></div>
											<div>
												<span className="font-sml-sml">
													29 july 10:30am |2021
												</span>
											</div>
										</div>
									</div>
									<div className="single-notification-wrapper">
										<div className="profile-wrapper">
											<div className="profile-img-wrapper">
												<img src={cleaner4} alt="" />
											</div>
											<div className="profile-content-wrapper">
												<h3>James Knot</h3>
											</div>
										</div>
										<div className="msg-wrappper">
											<h4>Job accepted from Cleaner</h4>
										</div>
										<div className="notofication-btn-wrapper">
											<div className="green_dot"></div>
											<div>
												<span className="font-sml-sml">
													29 july 10:30am |2021
												</span>
											</div>
										</div>
									</div>
									<div className="single-notification-wrapper">
										<div className="profile-wrapper">
											<div className="profile-img-wrapper">
												<img src={cleaner3} alt="" />
											</div>
											<div className="profile-content-wrapper">
												<h3>James Knot</h3>
											</div>
										</div>
										<div className="msg-wrappper">
											<h4>Job accepted from Cleaner</h4>
										</div>
										<div className="notofication-btn-wrapper">
											<div className="green_dot"></div>
											<div>
												<span className="font-sml-sml">
													29 july 10:30am |2021
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-2"></div>
					</div>
				</div>
			</section>
			{/* Notification ends here */}
			{/* tagline sec starts here */}
			<BetterBusiness />
			{/* tagline sec ends here */}
		</div>
	);
};

export default Botification;
