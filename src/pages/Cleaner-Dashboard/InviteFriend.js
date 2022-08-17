import React from "react";
import { frient_img } from "../../constant";
import "../../assets/css/InviteFriend.css";
import BetterBusiness from "../../components/BetterBusiness";

const InviteFriend = () => {
	return (
		<>
			{/* Invite Friend sec starts here */}
			<section className="invite-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="invite-content-wrapper">
								<h2>
									Invite a <span>Friend</span>
								</h2>
								<p>
									Our three core values match our one mission, delivering the
									best cleaning experience, trained and trusted cleaners, and
									environmentally friendly
								</p>
								<h2>
									Referral Code : <span>ADF3579</span>
								</h2>
							</div>
							<div className="invite-coonde-wrapper">
								<form action="">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											placeholder="Email"
										/>
										<button className="btn">Send invite</button>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-2"></div>
						<div className="col-lg-4">
							<div className="img-wrapper">
								<figure>
									<img src={frient_img} className="img-fluid" alt="" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Invite Friend sec ends here */}
			{/* tagline sec starts here */}
			<BetterBusiness />
			{/* tagline sec ends here */}
		</>
	);
};

export default InviteFriend;
