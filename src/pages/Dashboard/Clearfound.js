import React from "react";
import "../../assets/css/clearfound.css";
import { Link } from "react-router-dom";
import clear from "../../assets/img/clear.png";
import BetterBusiness from "../../components/BetterBusiness";
import {
	ReviewImg1,
	ReviewImg2,
	ReviewImg3,
	ReviewImg4,
	ReviewImg5,
} from "../../constant";

const Clearfound = () => {
	return (
		<>
			{/* clear found section  */}
			<section className="clear-found-sec">
				<div className="container">
					<div className="clear-found-head">
						<h2>Cleaner Found</h2>
					</div>
					<div className="row">
						<div className="col-md-6">
							<div className="row for-flex">
								<div className="col-md-6">
									<div className="standard-regular">
										<h2>Standard</h2>
										<h3>Regular</h3>
										<h3>Cleaning</h3>
										<h4>Apartment type : Double</h4>
									</div>
								</div>

								<div className="col-md-6">
									<div className="dv-charges">
										<h3>Charges</h3>
										<h2 className="for-left">$300</h2>
									</div>
								</div>
							</div>
							<div className="john-martin">
								<div className="john-img">
									<img className="img-fluid" src={clear}></img>
								</div>
								<div className="john-text">
									<h3>John Martin</h3>
									<div className="john-stars">
										<ul>
											<li>
												<Link to="/">
													<i class="fa fa-star" aria-hidden="true"></i>
												</Link>
											</li>
											<li>
												<Link to="/">
													<i class="fa fa-star" aria-hidden="true"></i>
												</Link>
											</li>
											<li>
												<Link to="/">
													<i class="fa fa-star" aria-hidden="true"></i>
												</Link>
											</li>
											<li>
												<Link to="/">
													<i class="fa fa-star" aria-hidden="true"></i>
												</Link>
											</li>
											<li>
												<Link to="/">
													<i
														class="fa fa-star for-grey-color"
														aria-hidden="true"
													></i>
												</Link>
											</li>
											<span>4.0 star</span>
										</ul>
										<p>Suit #123, Lorem Ipsum Apartmen</p>
										<p>5th Street, Lorem ipsum</p>
										<p>City, State, Zip code</p>
										<div className="hire-btn">
											<Link to="/Hired">Send Hire request</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="john-para">
								<p>
									Our three core values match our one mission, delivering the
									best cleaning experience, trained and trusted cleaners, and
									environmentally friendly cleaning products to every family Our
									three core values match our one mission.
								</p>
							</div>
						</div>

						<div className="col-md-6">
							<div className="all-text-center">
								<div className="chat-with-cleaner">
									<Link to="/chat">Chat with cleaner</Link>
								</div>
								{/* <div className="acced-proceed">
									<Link to="/Hired">Accept and proceed</Link>
								</div> */}
								<div className="reject">
									<Link to="/searchurgent">Find other cleaner</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End of clear found section  */}

			{/* Reviews Sec Start Here */}
			<div class="reviews_sec">
				<div className="container">
					<div class="heading">
						<h3>Reviews</h3>
					</div>
					<div class="reviewDv">
						<div class="questionDv reviews">
							<div class="user-img">
								<figure>
									<img src={ReviewImg3} class="img-fluid" />
								</figure>
							</div>
							<div class="detailDv">
								<div class="header">
									<h5 class="name">Joeby Ragpa </h5>
									<p>- 12 April, 2014 at 16:50</p>
								</div>
								<p>
									We possess within us two minds. So far I have written only of
									the conscious mind. I would now like to introduce you to your
									second mind, the hidden and mysterious subconscious. Our
									subconscious mind contains such power and complexity that it
									literally staggers the imagination.
								</p>
								<div class="bottom-bar">
									<div class="rating">
										<ul class="stars">
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star-o" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star-o" aria-hidden="true"></i>
											</li>
										</ul>
										<p class="count">3.9</p>
									</div>
									{/* <div class="rplyDv">
										<a href="#">Reply</a>
									</div> */}
								</div>
							</div>
						</div>
						{/* <div class="answersDv">
							<div class="vertical-line"></div>
							<div class="answer reviews">
								<div class="user-img">
									<figure>
										<img src={ReviewImg2} class="img-fluid" />
									</figure>
								</div>
								<div class="detailDv">
									<div class="header">
										<h5 class="name">Joeby Ragpa </h5>
										<p>- 12 April, 2014 at 16:50</p>
									</div>
									<p>
										We possess within us two minds. So far I have written only
										of the conscious mind. I would now like to introduce you to
										your second mind the hidden and mysterious subconscious.
									</p>
								</div>
							</div>
							<div class="answer reviews">
								<div class="user-img">
									<figure>
										<img src={ReviewImg3} class="img-fluid" />
									</figure>
								</div>
								<div class="detailDv">
									<div class="header">
										<h5 class="name">Joeby Ragpa </h5>
										<p>- 12 April, 2014 at 16:50</p>
									</div>
									<p>
										We possess within us two minds. So far I have written only
										of the conscious mind. I would now like to introduce you to
										your
									</p>
								</div>
							</div>
							<div class="answer reviews">
								<div class="user-img">
									<figure>
										<img src={ReviewImg4} class="img-fluid" />
									</figure>
								</div>
								<div class="detailDv">
									<div class="header">
										<h5 class="name">Joeby Ragpa </h5>
										<p>- 12 April, 2014 at 16:50</p>
									</div>
									<p>
										We possess within us two minds. So far I have written only
										of the conscious mind. I would now like to introduce you to
										your second mind,
									</p>
								</div>
							</div>
						</div> */}
					</div>
					<div class="reviewDv">
						<div class="questionDv reviews">
							<div class="user-img">
								<figure>
									<img src={ReviewImg5} class="img-fluid" />
								</figure>
							</div>
							<div class="detailDv">
								<div class="header">
									<h5 class="name">Joeby Ragpa </h5>
									<p>- 12 April, 2014 at 16:50</p>
								</div>
								<p>
									We possess within us two minds. So far I have written only of
									the conscious mind. I would now like to introduce you to your
									second mind, the hidden and mysterious subconscious. Our
									subconscious mind contains such power and complexity that it
									literally staggers the imagination.
								</p>
								<div class="bottom-bar">
									<div class="rating">
										<ul class="stars">
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star-o" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star-o" aria-hidden="true"></i>
											</li>
										</ul>
										<p class="count">3.9</p>
									</div>
									{/* <div class="rplyDv">
										<a href="#">Reply</a>
									</div> */}
								</div>
							</div>
						</div>
					</div>
					<div class="reviewDv">
						<div class="questionDv reviews">
							<div class="user-img">
								<figure>
									<img src={ReviewImg4} class="img-fluid" />
								</figure>
							</div>
							<div class="detailDv">
								<div class="header">
									<h5 class="name">Joeby Ragpa </h5>
									<p>- 12 April, 2014 at 16:50</p>
								</div>
								<p>
									We possess within us two minds. So far I have written only of
									the conscious mind. I would now like to introduce you to your
									second mind, the hidden and mysterious subconscious. Our
									subconscious mind contains such power and complexity that it
									literally staggers the imagination.
								</p>
								<div class="bottom-bar">
									<div class="rating">
										<ul class="stars">
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star-o" aria-hidden="true"></i>
											</li>
											<li>
												<i class="fa fa-star-o" aria-hidden="true"></i>
											</li>
										</ul>
										<p class="count">3.9</p>
									</div>
									{/* <div class="rplyDv">
										<a href="#">Reply</a>
									</div> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Reviews Sec End Here */}
			<BetterBusiness />
		</>
	);
};

export default Clearfound;
