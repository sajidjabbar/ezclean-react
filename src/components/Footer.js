import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "../pages/CancellationPolicy/CancellationPolicy";
import { support } from "../constant";

const Footer = () => {
	const naviagte = useNavigate();
	return (
		<>
			<footer>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<h4 className="footer-heading">EzClean</h4>
							<p className="footer-text">A clean home starts with U</p>
							<h4 className="cleaningDetail">Cleaning Detail</h4>
							<ul className="cleaning-detail">
								<li className="list-inline-item">
									<Link to="/UrgentDetails">Urgent cleaning</Link>
								</li>
								<li className="list-inline-item">
									<Link to="/CleaningDetails">Standard cleaning</Link>
								</li>
							</ul>
							<nav className="nav-footer">
								<ul className="list-inline">
									<li className="list-inline-item">
										<a href="/index">Home</a>
									</li>
									<li className="list-inline-item">
										<a href="/About">About Us</a>
									</li>
									<li className="list-inline-item">
										<a href="javascript:void(0);">Book Now</a>
									</li>
									<li className="list-inline-item">
										<a href="javascript:void(0);">Manage Booking</a>
									</li>
									{/* <li className="list-inline-item">
										<div class="dropdown">
											<button
												class="btn btn-secondary dropdown-toggle"
												type="button"
												id="dropdownMenuButton"
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												Missing Page Link
											</button>
											<div
												class="dropdown-menu"
												aria-labelledby="dropdownMenuButton"
											>
												<a
													onClick={() => {
														naviagte("/dashboard");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 22
												</a>
												<a
													onClick={() => {
														naviagte("/searchurgent");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 27
												</a>
												<a
													onClick={() => {
														naviagte("/clearfound");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 28
												</a>
												<a
													onClick={() => {
														naviagte("/chat");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 29
												</a>
												<a
													onClick={() => {
														naviagte("/Hired");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 30
												</a>
												<a
													onClick={() => {
														naviagte("/CleaningDetails");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 31
												</a>
												<a
													onClick={() => {
														naviagte("/UrgentDetails");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 32
												</a>
												<a
													onClick={() => {
														naviagte("/jobPayment");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 33
												</a>
												<a
													onClick={() => {
														naviagte("/thankyou");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 34
												</a>
												<a
													onClick={() => {
														naviagte("/CustomerProfile");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 35
												</a>
												<a
													onClick={() => {
														naviagte("/InviteFriend");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 36
												</a>
												<a
													onClick={() => {
														naviagte("/Successfully");
													}}
													class="dropdown-item"
													href="#"
												>
													Page 52
												</a>
											</div>
										</div>
									</li> */}
									<li className="list-inline-item">
										<a href="javascript:void(0);">Office Cleaning</a>
									</li>
									<li className="list-inline-item">
										{/*<a href="javascript:void(0);">Privacy Policy</a>*/}
										<Link className="nav-link" to={"/PrivacyPolicy"}>
											Privacy Policy
										</Link>
									</li>
									<li className="list-inline-item">
										{/*<a href="javascript:void(0);">Privacy Policy</a>*/}
										<Link className="nav-link" to={"/Terms"}>
											Terms & Conditions
										</Link>
									</li>
									{/*<a href="javascript:void(0);">Cancellation Policy</a>*/}
									{/* <li className="list-inline-item">
										<Link className="nav-link" to={"/CancellationPolicy"}>
											Cancellation Policy
										</Link>
									</li> */}
									<li className="list-inline-item">
										{/*<a href="javascript:void(0);">Cancellation Policy</a>*/}
										<Link className="nav-link" to={"/RefundPolicy"}>
											Refund Policy
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</footer>
			<div className="customer-support">
				<div className="icon">
					<figure>
						<img src={support} alt="123" className="img-fluid" />
					</figure>
				</div>
				<div className="chat-box">
					<div className="header">
						<figure>
							<img src={support} alt="123" className="img-fluid" />
						</figure>
						<h4>Customer Support</h4>
					</div>
					<div className="chat">
						<div className="left-side">
							<p>How can I assist you?</p>
						</div>
					</div>
					<div className="form-group">
						<input
							type="text"
							placeholder="write message"
							className="form-control"
						/>
					</div>
				</div>
			</div>
			<div className="copyright-footer">
				<p className="copyright color-text-a">
					Ⓒ 2022 - All Rights Are Reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;
