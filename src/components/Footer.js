import React from "react";
import { Link } from "react-router-dom";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CancellationPolicy from "../pages/CancellationPolicy/CancellationPolicy";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-1"></div>
						<div className="col-lg-10">
							<h4 className="footer-heading">EzClean</h4>
							<p className="footer-text">A clean home starts with U</p>
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
									<li className="list-inline-item">
										{/*<a href="javascript:void(0);">Cancellation Policy</a>*/}
										<Link className="nav-link" to={"/CancellationPolicy"}>
											Cancellation Policy
										</Link>
									</li>
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
			<div className="copyright-footer">
				<p className="copyright color-text-a">
					Ⓒ 2022 - All Rights Are Reserved.
				</p>
			</div>
		</>
	);
};

export default Footer;
