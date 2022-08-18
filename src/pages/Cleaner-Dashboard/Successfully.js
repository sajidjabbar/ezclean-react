import React from "react";
import "../../assets/css/ThankYou.css";
import BetterBusiness from "../../components/BetterBusiness";

const Successfully = () => {
	return (
		<>
			{/* Thanks you starts here */}
			<section className="thankyou-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-6">
							<div className="thank-you-card-wrapper">
								<h2>You've Successfully </h2>
								<h4>
									Completed <span>the Job</span>
								</h4>
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>
			</section>
			{/* Thanks you ends here */}
			{/* tagline sec starts here */}
			<BetterBusiness />
			{/* tagline sec ends here */}
		</>
	);
};

export default Successfully;
