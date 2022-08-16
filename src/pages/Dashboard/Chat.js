import React from "react";
import { Link } from "react-router-dom";
import chat from "../../assets/css/chat.css";
import BetterBusiness from "../../components/BetterBusiness";
import { cleaner, cleaner2, cleaner3, david, msg } from "../../constant";

const Chat = () => {
	return (
		<>
			{/* Chat section  */}
			<section className="chat-sec">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 align-self-center">
							<div className="confirmation">
								<h3>Confirmation and Chat</h3>
								<p>
									Our three core values match our one mission, delivering the
									best cleaning experience, trained and trusted cleaners, and
									environmentally friend
								</p>

								<div className="lets-talk">
									<h4>John Martin</h4>
									<Link to="/">Lets talk...</Link>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div class="chatting-box">
								{/* <div className="header">
									<figure>
										<img src={cleaner3} className="img-fluid" />
									</figure>
									<div className="name">
										<h4>Abigail Alexandra</h4>
										<p>Lorem ipsum.</p>
									</div>
								</div> */}
								<div className="messages">
									<div className="messenger frst-side">
										<figure>
											<img src={cleaner3} className="img-fluid" />
										</figure>
										<div className="meesage">
											<div className="time">
												<p>
													Lorem Ipsum <span>•</span> 3:15 am
												</p>
											</div>
											<p>
												Our three core values match our one mission, delivering
												the best cleaning experienc
											</p>
										</div>
									</div>
									<div className="messenger scnd-side">
										<div className="meesage">
											<div className="time">
												<p>
													{" "}
													Lorem Ipsum <span>•</span> 3:15 am
												</p>
											</div>
											<p>
												Our three core values match our one mission, delivering
												the best cleaning experienc
											</p>
										</div>
										<figure>
											<img src={david} className="img-fluid" />
										</figure>
									</div>
									<div className="messenger frst-side">
										<figure>
											<img src={cleaner3} className="img-fluid" />
										</figure>
										<div className="meesage">
											<div className="time">
												<p>
													{" "}
													Lorem Ipsum <span>•</span> 3:15 am
												</p>
											</div>
											<p>Our three core values match our one mi</p>
										</div>
									</div>
									<div className="messenger frst-side">
										<figure>
											<img src={david} className="img-fluid" />
										</figure>
										<div className="meesage">
											<div className="time">
												<p>
													{" "}
													Lorem Ipsum <span>•</span> 3:15 am
												</p>
											</div>
											<p>Our three core values match our one</p>
										</div>
									</div>
									<div className="messenger scnd-side">
										<div className="meesage">
											<div className="time">
												<p>
													{" "}
													Lorem Ipsum <span>•</span> 3:15 am
												</p>
											</div>
											<p>
												Our three core values match our one mission, delivering
												the best cleaning experienc
											</p>
										</div>
										<figure>
											<img src={cleaner3} className="img-fluid" />
										</figure>
									</div>
								</div>
								<div className="send-box">
									<input
										type="text"
										placeholder="Type message"
										className="form-control"
									/>
									{/* <button className="btn">Send</button> */}
									<img src={msg} alt="" />
								</div>
							</div>
							<div className="btn-wrapper">
								<button className="btn btn-primary ez-clean-btn-rounded mt-3">
									Send Hire request
								</button>
								<button className="btn btn-primary ez-clean-btn-rounded mt-3">
									Back
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* End of Chat section  */}
			{/* tagline sec starts here */}
			<BetterBusiness />
			{/* tagline sec ends here */}
		</>
	);
};

export default Chat;
