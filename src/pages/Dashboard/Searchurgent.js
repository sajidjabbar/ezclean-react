import React from "react";
import david from "../../assets/img/david.png";
import kevin from "../../assets/img/kevin.png";
import lucus from "../../assets/img/lucus.png";
import greg from "../../assets/img/greg.png";
import bryan from "../../assets/img/bryan.png";
import search from "../../assets/img/search.png";
import { Link } from "react-router-dom";

const Searchurgent = () => {
	return (
		<>
			<section className="search-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="search-all">
								<div className="standard-head">
									<h3>Urgent Cleaning</h3>
									<p>
										Our three core values match our one mission, delivering the{" "}
										<br />
										best cleaning experience, trained and trusted cleaners, and{" "}
										<br />
										environmentally friendl
									</p>
								</div>
							</div>

							<div className="row align-items-center">
								<div className="col-md-6">
									<div className="search-for-flex">
										<img className="img-fluid" src={david}></img>
										<div className="name-tag">
											<p>Employee of month</p>
											<h5>David Miller</h5>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="search-view-details">
										<Link to="/clearfound">View Detials</Link>
									</div>
								</div>
							</div>

							<div className="row align-items-center">
								<div className="col-md-6">
									<div className="search-for-flex">
										<img className="img-fluid" src={kevin}></img>
										<div className="name-tag">
											<p>Employee of month</p>
											<h5>Kevin Peterson</h5>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="search-view-details">
										<Link to="/">View Detials</Link>
									</div>
								</div>
							</div>

							<div className="row align-items-center">
								<div className="col-md-6">
									<div className="search-for-flex">
										<img className="img-fluid" src={lucus}></img>
										<div className="name-tag">
											{/* <p>Employee of month</p> */}
											<h5>Lucus Himm</h5>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="search-view-details">
										<Link to="/">View Detials</Link>
									</div>
								</div>
							</div>

							<div className="row align-items-center">
								<div className="col-md-6">
									<div className="search-for-flex">
										<img className="img-fluid" src={greg}></img>
										<div className="name-tag">
											{/* <p>Employee of month</p> */}
											<h5>Greg Richard</h5>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="search-view-details">
										<Link to="/">View Detials</Link>
									</div>
								</div>
							</div>

							<div className="row align-items-center">
								<div className="col-md-6">
									<div className="search-for-flex">
										<img className="img-fluid" src={bryan}></img>
										<div className="name-tag">
											{/* <p>Employee of month</p> */}
											<h5>Bryan Fury</h5>
										</div>
									</div>
								</div>

								<div className="col-md-6">
									<div className="search-view-details">
										<Link to="/">View Detials</Link>
									</div>
								</div>
							</div>
							<div className="three-hundred-area">
								<div className="row for-flex">
									<div className="col-md-6">
										<div className="dv-charges">
											<h3>Charges</h3>
											<h2 className="for-left">$300</h2>
										</div>
									</div>

									<div className="col-md-6 bordr-left">
										<div className="standard-regular">
											<h2>Urgent </h2>
											<h3>Regular</h3>
											<h3>Cleaning</h3>
											<h4>Apartment type : Double</h4>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6">
							<div className="search-img">
								<img className="img-fluid" src={search}></img>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Searchurgent;
