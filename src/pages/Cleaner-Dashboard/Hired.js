import React from "react";
import { clear } from "../../constant";
import "../../assets/css/Hired.css";
import BetterBusiness from "../../components/BetterBusiness";

const Hired = () => {
	return (
		<>
			{/* Hired sec starts here */}
			<section className="hired">
				<div className="container">
					<div className="row">
						<div className="col-lg-3"></div>
						<div className="col-lg-6">
							<div className="hired-wrapper">
								<div className="hired-heading-wrapper">
									<h4>Cleaner has been Hired!</h4>
									<p>
										Our three core values match our one mission, delivering the
										best cleaning experience, trained and trusted cleaners, and
										environmentally friendl
									</p>
								</div>
								<div className="employee-card-wrapper">
									<div className="employee-img-wrapper">
										<figure>
											<img src={clear} alt="" />
										</figure>
									</div>
									<div className="employee-content-wrapper">
										<span>Employee of the month</span>
										<h3>John Martin</h3>
										<div className="rating-wrapper">
											<ul>
												<li>
													<i className="fa fa-star"></i>
												</li>
												<li>
													<i className="fa fa-star"></i>
												</li>
												<li>
													<i className="fa fa-star"></i>
												</li>
												<li>
													<i className="fa fa-star"></i>
												</li>
												<li>
													<i className="fa fa-star gery"></i>
												</li>
												<li>
													<span>4.0 star</span>
												</li>
											</ul>
										</div>
										<p>
											Suit #123, Lorem Ipsum Apartmen, 5th Street, Lorem
											ipsum...
										</p>
									</div>
								</div>
							</div>
							<div className="hired-btn-wrappper">
								<a
									href="/jobPayment"
									className="btn btn-primary ez-clean-btn-rounded mt-3"
								>
									Proceed to Payment
								</a>
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>
			</section>
			{/* Hired sec starts here */}
			{/* tagline sec starts here */}
			<BetterBusiness />
			{/* tagline sec ends here */}
		</>
	);
};

export default Hired;
