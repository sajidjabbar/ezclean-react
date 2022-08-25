import React, { useEffect, useState } from "react";
import user from "../../assets/img/user.png";
import "../../assets/css/dash.css";
import "../../assets/css/cleaner-dashboard.css";
import { Link } from "react-router-dom";
import { cleaner, cleaner2, cleaner3, cleaner4 } from "../../constant";
import "react-calendar/dist/Calendar.css";
import $ from "jquery";
import Calendar from "react-calendar";

const CleanerDashboard = () => {
	const [value, onChange] = useState(new Date());
	const [editprofile, seteditprofile] = useState(false);
	const showedit = () => {
		seteditprofile(true);
	};
	const hideedit = () => {
		seteditprofile(false);
	};
	const booking_page = () => {
		window.location.href = "/BookingDetails";
	};
	useEffect(() => {
		$(".booking-details-wrapper").hide();
		$(".Job-com").hide();
		$("div#home td.ActionName a").click(function () {
			$(".booking-details-wrapper").show();
			$(".Job-com").hide();
			$(".booking-wrapper").hide();
		});
		$("#pills-contact div#contact td.ActionName a").click(function () {
			$(".Job-com").show();
			$(".booking-wrapper").hide();
		});
	}, []);
	return (
		<>
			{/* Dashboard  section  */}
			<section className="dashboard-sec">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="john-doe">
								<div className="john">
									<img className="img-fluid" src={user}></img>
									<div className="john-text">
										<h3>John Doe</h3>
										<p>Cleaner Profile</p>
									</div>
								</div>

								<div className="dashboard-sec">
									<ul
										className="nav nav-pills mb-3"
										id="pills-tab"
										role="tablist"
									>
										<li className="nav-item">
											<a
												className="nav-link active"
												id="pills-profile-tab"
												data-toggle="pill"
												href="#pills-profile"
												role="tab"
												aria-controls="pills-profile"
												aria-selected="true"
											>
												My Profile
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="pills-dashboard-tab"
												data-toggle="pill"
												href="#pills-dashboard"
												role="tab"
												aria-controls="pills-dashboard"
												aria-selected="false"
											>
												Dashboard
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="pills-contact-tab"
												data-toggle="pill"
												href="#pills-contact"
												role="tab"
												aria-controls="pills-contact"
												aria-selected="false"
											>
												Jobs
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="pills-Earnings-tab"
												data-toggle="pill"
												href="#pills-Earnings"
												role="tab"
												aria-controls="pills-Earnings"
												aria-selected="false"
											>
												Earnings
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" href="/Notification">
												Notifications
											</a>
										</li>
										<li className="nav-item">
											<a
												className="nav-link"
												id="pills-Rewards-tab"
												data-toggle="pill"
												href="#pills-Rewards"
												role="tab"
												aria-controls="pills-Rewards"
												aria-selected="false"
											>
												Rewards
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-md-9">
							<div className="row">
								<div className="col-md-12">
									<div className="tabs-things">
										<div className="tab-content" id="pills-tabContent">
											<div
												className="tab-pane fade show active"
												id="pills-profile"
												role="tabpanel"
												aria-labelledby="pills-profile-tab"
											>
												<div className="profile-all">
													{/* edit profile starts here */}
													{!editprofile ? (
														<div className="profile-fields-wrapper">
															<div className="profile-head">
																<h3>My Profile</h3>
																<div className="profile-edit">
																	<Link onClick={showedit} to="">
																		Edit
																	</Link>
																</div>
															</div>
															<form>
																<div className="row">
																	<div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					First Name:
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="John"
																				/>
																			</span>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					Address:
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="123, BLV 234, Lorem ipsum, dolor sit int"
																				/>
																			</span>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					Last Name:
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="Doe"
																				/>
																			</span>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					City :
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="Lorem ipsum"
																				/>
																			</span>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					Email Address:
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="janedoe@email.com"
																				/>
																			</span>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					State :
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="Lorem ipsum"
																				/>
																			</span>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group Card	">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					Card Number :
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="**** **** **** 4465"
																				/>
																				<a href="#">update</a>
																				{/* <Link  to="/">update</Link> */}
																			</span>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					Phone :
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="+1 234 567 890"
																				/>
																			</span>
																		</div>
																	</div>

																	<div className="col-md-12">
																		<div className="profile-head">
																			<h3>Security</h3>
																			<div className="profile-edit">
																				<Link onClick={showedit} to="">
																					Edit
																				</Link>
																			</div>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					Password
																				</label>
																				<input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="********"
																				/>
																			</span>
																		</div>
																	</div>
																</div>
															</form>
														</div>
													) : (
														<div className="profile-edit-wrapper">
															<div className="profile-head">
																<h3>My Profile</h3>
																<div className="profile-edit save-profile">
																	{/* <Link onClick={hideedit} to="">
																		Save
																	</Link> */}
																</div>
															</div>
															<form>
																<div className="row">
																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="First Name"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Address"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Last Name"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="City"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Email Address"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="State"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Card Number"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Phone"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="New Password"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Confirm Password"
																				className="form-control"
																			/>
																		</div>
																	</div>

																	<div className="col-md-12">
																		<div className="profile-head">
																			<h3>Security</h3>
																			{/* <div className="profile-edit save-profile">
																				<Link onClick={hideedit} to="">
																					save
																				</Link>
																			</div> */}
																		</div>
																	</div>

																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Password"
																				className="form-control"
																			/>
																		</div>
																	</div>
																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Change Password"
																				className="form-control"
																			/>
																		</div>
																	</div>
																	<div className="col-md-6">
																		<div className="form-group">
																			<input
																				placeholder="Confirm Password"
																				className="form-control"
																			/>
																		</div>
																	</div>
																	<div className="col-md-12 mt-4">
																		<div className="profile-edit save-profile">
																			<Link onClick={hideedit} to="">
																				save
																			</Link>
																		</div>
																	</div>
																</div>
															</form>
														</div>
													)}
													{/* edit profile starts here */}
												</div>
											</div>
											<div
												className="tab-pane fade"
												id="pills-dashboard"
												role="tabpanel"
												aria-labelledby="pills-dashboard-tab"
											>
												<div className="stats-box-row">
													<div className="row">
														<div className="col-lg-4">
															<div className="stats-box-wrapper">
																<div className="stats-name-wrapper">
																	<h4>Total Bookings</h4>
																</div>
																<div className="stats-count-wrapper">
																	<h2>20</h2>
																</div>
															</div>
														</div>
														<div className="col-lg-4">
															<div className="stats-box-wrapper">
																<div className="stats-name-wrapper">
																	<h4>Total Jobs done</h4>
																</div>
																<div className="stats-count-wrapper">
																	<h2>16</h2>
																</div>
															</div>
														</div>
														<div className="col-lg-4">
															<div className="stats-box-wrapper">
																<div className="stats-name-wrapper">
																	<h4>Total Payments</h4>
																</div>
																<div className="stats-count-wrapper">
																	<h2>$ 4800</h2>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="calendar-wrapper">
													<div className="calendar-heading-wrapper">
														<h5>Mark off days</h5>
													</div>
													<div className="cal-wrapper">
														<Calendar onChange={onChange} value={value} />
													</div>
												</div>
												<div className="cleaner-wrapper">
													<div className="row">
														<div className="col-lg-12">
															<div className="content-wrapper">
																<h4>Other Cleaners</h4>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="cleaner-table-wrapper">
																<div className="table-responsive">
																	<table className="table">
																		<thead>
																			<tr>
																				<th scope="col" className="line"></th>
																				<th scope="col" className="name"></th>
																				<th
																					scope="col"
																					className="description"
																				></th>
																				<th scope="col" className="rating"></th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr>
																				<td className="dot-column">
																					<div className="dot-wrapper"></div>
																				</td>
																				<td className="name-box-wrapper">
																					<div className="img-and-name">
																						<img src={cleaner} />
																						<span className="name">
																							{" "}
																							John Doe
																						</span>
																					</div>
																				</td>
																				<td>
																					It is a long established fact that a
																					reader will be distracted by the
																					readable
																				</td>
																				<td>
																					<div className="star-wrapper">
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
																								<i className="fa fa-star-o"></i>
																							</li>
																						</ul>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td className="dot-column">
																					<div className="dot-wrapper"></div>
																				</td>
																				<td className="name-box-wrapper">
																					<div className="img-and-name">
																						<img src={cleaner2} />

																						<span className="name">
																							<span className="month">
																								Employee of the month
																							</span>
																							Manfred James
																						</span>
																					</div>
																				</td>
																				<td>
																					It is a long established fact that a
																					reader will be distracted by the
																					readable
																				</td>
																				<td>
																					<div className="star-wrapper">
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
																								<i className="fa fa-star-o"></i>
																							</li>
																						</ul>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td className="dot-column">
																					<div className="dot-wrapper"></div>
																				</td>
																				<td className="name-box-wrapper">
																					<div className="img-and-name">
																						<img src={cleaner3} />
																						<span className="name">
																							{" "}
																							Marcus Brown
																						</span>
																					</div>
																				</td>
																				<td>
																					It is a long established fact that a
																					reader will be distracted by the
																					readable
																				</td>
																				<td>
																					<div className="star-wrapper">
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
																								<i className="fa fa-star-o"></i>
																							</li>
																						</ul>
																					</div>
																				</td>
																			</tr>
																			<tr>
																				<td className="dot-column">
																					<div className="dot-wrapper"></div>
																				</td>
																				<td className="name-box-wrapper">
																					<div className="img-and-name">
																						<img src={cleaner} />
																						<span className="name">
																							{" "}
																							Jacob Neil
																						</span>
																					</div>
																				</td>
																				<td>
																					It is a long established fact that a
																					reader will be distracted by the
																					readable
																				</td>
																				<td>
																					<div className="star-wrapper">
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
																								<i className="fa fa-star-o"></i>
																							</li>
																						</ul>
																					</div>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div
												className="tab-pane fade"
												id="pills-contact"
												role="tabpanel"
												aria-labelledby="pills-contact-tab"
											>
												<div className="booking-wrapper">
													<div className="tab-wrapper">
														<ul class="nav nav-tabs" id="myTab" role="tablist">
															<li class="nav-item">
																<a
																	class="nav-link active"
																	id="home-tab"
																	data-toggle="tab"
																	href="#home"
																	role="tab"
																	aria-controls="home"
																	aria-selected="true"
																>
																	Upcoming Jobs
																</a>
															</li>
															<li class="nav-item">
																<a
																	class="nav-link"
																	id="contact-tab"
																	data-toggle="tab"
																	href="#contact"
																	role="tab"
																	aria-controls="contact"
																	aria-selected="false"
																>
																	Previous Jobs
																</a>
															</li>
														</ul>
													</div>
													<div className="tab-content-wrapper">
														<div class="tab-content" id="myTabContent">
															<div
																class="tab-pane fade show active"
																id="home"
																role="tabpanel"
																aria-labelledby="home-tab"
															>
																<div className="booking-table-wrapper job-table">
																	<div className="table-responsive">
																		<table className="table table-striped">
																			<thead>
																				<tr>
																					<th className="JobType">
																						<span>Job Type</span>
																					</th>
																					<th className="CleanerName">
																						<span>Cleaner Name</span>
																					</th>
																					<th className="TotalAmont">
																						<span>Total Amont</span>
																					</th>
																					<th className="Action">
																						<span>Action</span>
																					</th>
																					<th className="Status">
																						<span>Status</span>
																					</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="javascript:void(0)">
																							View Detail
																						</a>
																					</td>
																					<td className="StatusName">
																						<span
																							onClick={booking_page}
																							className="Accepted"
																						>
																							Accepted
																						</span>
																						<span className="Rejected">
																							Rejected
																						</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner2}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
																					</td>
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																						<span className="Rejected">
																							Rejected
																						</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
																					</td>
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																						<span className="Rejected">
																							Rejected
																						</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner2}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
																					</td>
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																						<span className="Rejected">
																							Rejected
																						</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
																					</td>
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																						<span className="Rejected">
																							Rejected
																						</span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
															</div>
															<div
																class="tab-pane fade"
																id="contact"
																role="tabpanel"
																aria-labelledby="contact-tab"
															>
																<div className="booking-table-wrapper">
																	<div className="table-responsive">
																		<table className="table table-striped">
																			<thead>
																				<tr>
																					<th className="JobType">
																						<span>Job Type</span>
																					</th>
																					<th className="CleanerName">
																						<span>Cleaner Name</span>
																					</th>
																					<th className="TotalAmont">
																						<span>Total Amont</span>
																					</th>
																					<th className="Action">
																						<span>Action</span>
																					</th>
																					<th className="Status">
																						<span>Status</span>
																					</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="javascript:void(0)">
																							View Detail
																						</a>
																					</td>
																					<td className="StatusName">
																						<span className="Completed">
																							Completed
																						</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner2}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
																					</td>
																					<td className="StatusName">
																						<span className="Completed">
																							Completed
																						</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
																					</td>
																					<td className="StatusName">
																						<span className="Completed">
																							Completed
																						</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner2}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
																					</td>
																					<td className="StatusName">
																						<span className="Completed">
																							Completed
																						</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="typeName">
																						<span>Regular Cleaning</span>
																					</td>
																					<td className="CleanerName">
																						<div className="cleaner-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																							/>
																							<h5>John Doe</h5>
																						</div>
																					</td>
																					<td className="AmountName">
																						<span>$300</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
																					</td>
																					<td className="StatusName">
																						<span className="Rejected">
																							Rejected
																						</span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="booking-details-wrapper">
													<div className="booking-heading-wrapper">
														<h4>Booking Details</h4>
													</div>
													<div className="tag-and-accep-wrapper">
														<span className="job">Job# AD12</span>
														{/* <span className="Accepted">Accepted Job</span> */}
													</div>
													<div className="booker-details-wrapper">
														<ul>
															<li>
																<span className="property">Client Name :</span>
																<span className="value">Mark James</span>
															</li>
															<li>
																<span className="property">Phone :</span>
																<span className="value">+1 234 567 890</span>
															</li>
															<li>
																<span className="property">Address :</span>
																<span className="value">
																	1234, 5th Street, Lorem ipsum, city, state
																</span>
															</li>
															<li>
																<span className="property">Date :</span>
																<span className="value">12 Jan, 2022</span>
															</li>
															<li>
																<span className="property">Time : </span>
																<span className="value">11:00 am</span>
															</li>
														</ul>
													</div>
													<div className="packages-wrapper">
														<div className="packages-heading-wrapper">
															<h4>Package Includes</h4>
														</div>
														<div className="packages-list-wrapper">
															<ul>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Remove belongings from your cabinets and
																		drawers
																	</span>
																</li>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Use a wet paper towel to wipe cabinets out
																		and clean the outside
																	</span>
																</li>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Use an all-purpose cleaner to disinfect the
																		countertops
																	</span>
																</li>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Clean the sink basin, faucet and handles
																	</span>
																</li>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Use an oven cleaner to remove interior grime
																	</span>
																</li>
															</ul>
														</div>
														<div className="package-btn-wrapper">
															<button className="btn btn-primary ez-clean-btn-rounded mt-3">
																Start Job
															</button>
															<button className="btn btn-primary rejec ez-clean-btn-rounded mt-3">
																Reject Job
															</button>
														</div>
													</div>
												</div>
												<div className="Job-com booking-details-wrapper">
													<div className="booking-heading-wrapper">
														<h4>Booking Details</h4>
													</div>
													<div className="tag-and-accep-wrapper">
														<span className="job">Job# AD12</span>
														{/* <span className="Accepted">Accepted Job</span> */}
													</div>
													<div className="booker-details-wrapper">
														<ul>
															<li>
																<span className="property">Client Name :</span>
																<span className="value">Mark James</span>
															</li>
															<li>
																<span className="property">Phone :</span>
																<span className="value">+1 234 567 890</span>
															</li>
															<li>
																<span className="property">Address :</span>
																<span className="value">
																	1234, 5th Street, Lorem ipsum, city, state
																</span>
															</li>
															<li>
																<span className="property">Date :</span>
																<span className="value">12 Jan, 2022</span>
															</li>
															<li>
																<span className="property">Time : </span>
																<span className="value">11:00 am</span>
															</li>
														</ul>
													</div>
													<div className="packages-wrapper">
														<div className="packages-heading-wrapper">
															<h4>Package Includes</h4>
														</div>
														<div className="packages-list-wrapper">
															<ul>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Remove belongings from your cabinets and
																		drawers
																	</span>
																</li>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Use a wet paper towel to wipe cabinets out
																		and clean the outside
																	</span>
																</li>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Use an all-purpose cleaner to disinfect the
																		countertops
																	</span>
																</li>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Clean the sink basin, faucet and handles
																	</span>
																</li>
																<li>
																	<span className="property">Required</span>
																	<span className="value">
																		Use an oven cleaner to remove interior grime
																	</span>
																</li>
															</ul>
														</div>
														<div className="package-btn-wrapper">
															<button className="btn btn-primary ez-clean-btn-rounded mt-3">
																Job Completed
															</button>
														</div>
													</div>
												</div>
											</div>
											<div
												className="tab-pane fade"
												id="pills-Earnings"
												role="tabpanel"
												aria-labelledby="pills-Earnings-tab"
											>
												<div className="earning-wrapper">
													<div className="earning-heading-and-tabs-wrapper">
														<div className="heading-wrapper">
															<h4>My Earnings</h4>
														</div>
														<div className="earnings-tab-wrapper">
															<ul
																class="nav nav-tabs"
																id="myTab"
																role="tablist"
															>
																<li class="nav-item">
																	<a
																		class="nav-link active"
																		id="home-tab"
																		data-toggle="tab"
																		href="#home"
																		role="tab"
																		aria-controls="home"
																		aria-selected="true"
																	>
																		All
																	</a>
																</li>
																<li class="nav-item">
																	<a
																		class="nav-link"
																		id="profile-tab"
																		data-toggle="tab"
																		href="#profile"
																		role="tab"
																		aria-controls="profile"
																		aria-selected="false"
																	>
																		Active
																	</a>
																</li>
																<li class="nav-item">
																	<a
																		class="nav-link"
																		id="contact-tab"
																		data-toggle="tab"
																		href="#contact"
																		role="tab"
																		aria-controls="contact"
																		aria-selected="false"
																	>
																		Previous
																	</a>
																</li>
															</ul>
														</div>
													</div>
													<div className="tabs-content-wrapper">
														<div class="tab-content" id="myTabContent">
															<div
																class="tab-pane fade show active"
																id="home"
																role="tabpanel"
																aria-labelledby="home-tab"
															>
																<div className="earing-table-wrapper">
																	<div class="table-responsive">
																		<table class="table">
																			<thead>
																				<tr>
																					<th className="s">S.No</th>
																					<th className="job-col">Job Type</th>
																					<th className="Client-col">
																						Client Name
																					</th>
																					<th className="Location-col">
																						Location
																					</th>
																					<th className="Status-col">Status</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td className="sign-no">AD12</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">DV22</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">SS33</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner2}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">DS12</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">AD13</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
																<div className="total-earning-wrappers">
																	<div className="row">
																		<div className="col-lg-5">
																			<div className="total-erner-wrapper">
																				<h4>Total Earning</h4>
																				<span>$ 25,000</span>
																			</div>
																			<div className="total-erner-wrapper">
																				<h4>Total Withdrawal</h4>
																				<span>$ 12,500</span>
																			</div>
																			<div className="total-erner-wrapper">
																				<h4>Outstanding</h4>
																				<span>$ 10,000</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div
																class="tab-pane fade"
																id="profile"
																role="tabpanel"
																aria-labelledby="profile-tab"
															>
																<div className="earing-table-wrapper">
																	<div class="table-responsive">
																		<table class="table">
																			<thead>
																				<tr>
																					<th className="s">S.No</th>
																					<th className="job-col">Job Type</th>
																					<th className="Client-col">
																						Client Name
																					</th>
																					<th className="Location-col">
																						Location
																					</th>
																					<th className="Status-col">Status</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td className="sign-no">AD12</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">DV22</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">SS33</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner2}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">DS12</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">AD13</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
																<div className="total-earning-wrappers">
																	<div className="row">
																		<div className="col-lg-5">
																			<div className="total-erner-wrapper">
																				<h4>Total Earning</h4>
																				<span>$ 25,000</span>
																			</div>
																			<div className="total-erner-wrapper">
																				<h4>Total Withdrawal</h4>
																				<span>$ 12,500</span>
																			</div>
																			<div className="total-erner-wrapper">
																				<h4>Outstanding</h4>
																				<span>$ 10,000</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
															<div
																class="tab-pane fade"
																id="contact"
																role="tabpanel"
																aria-labelledby="contact-tab"
															>
																<div className="earing-table-wrapper">
																	<div class="table-responsive">
																		<table class="table">
																			<thead>
																				<tr>
																					<th className="s">S.No</th>
																					<th className="job-col">Job Type</th>
																					<th className="Client-col">
																						Client Name
																					</th>
																					<th className="Location-col">
																						Location
																					</th>
																					<th className="Status-col">Status</th>
																				</tr>
																			</thead>
																			<tbody>
																				<tr>
																					<td className="sign-no">AD12</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">DV22</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">SS33</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner2}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">DS12</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner3}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																				<tr>
																					<td className="sign-no">AD13</td>
																					<td className="job-type">
																						<div className="type-wrapper">
																							<img
																								src={cleaner}
																								className="img-fluid"
																								alt=""
																							/>
																							<h6>Regular Cleaning</h6>
																						</div>
																					</td>
																					<td className="client-name">
																						<span className="name">
																							John Doe
																						</span>
																					</td>
																					<td className="Location">
																						<span className="location-name">
																							Lorem Ipsum
																						</span>
																					</td>
																					<td className="Price-value">
																						<span className="price-">$300</span>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</div>
																</div>
																<div className="total-earning-wrappers">
																	<div className="row">
																		<div className="col-lg-5">
																			<div className="total-erner-wrapper">
																				<h4>Total Earning</h4>
																				<span>$ 25,000</span>
																			</div>
																			<div className="total-erner-wrapper">
																				<h4>Total Withdrawal</h4>
																				<span>$ 12,500</span>
																			</div>
																			<div className="total-erner-wrapper">
																				<h4>Outstanding</h4>
																				<span>$ 10,000</span>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div
												className="tab-pane fade"
												id="pills-Rewards"
												role="tabpanel"
												aria-labelledby="pills-Rewards-tab"
											>
												<div className="rewards-wrapper">
													<div className="rewards-heading-wrapper">
														<h5 className="mt-2">Rewards</h5>
													</div>
													<div className="employee-rating-wrapper">
														<div className="img-wrapper">
															<figure>
																<img src={cleaner4} alt="" />
															</figure>
														</div>
														<div className="employee-name-rating-wrapper">
															<h6>John Doe</h6>
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
																	<i className="fa fa-star"></i>
																</li>
															</ul>
														</div>
														<div className="employee-month-wrapper">
															<button className="btn">
																Employee of the Month
															</button>
														</div>
													</div>
												</div>
												<div className="reward-table-wrapper">
													<div className="row">
														<div className="col-lg-9">
															<div className="table-responsive">
																<table className="table">
																	<thead>
																		<tr>
																			<th className="S-col">S.No</th>
																			<th className="Job-col">Job Type</th>
																			<th className="Rating-col">Rating</th>
																		</tr>
																	</thead>
																	<tbody>
																		<tr>
																			<td className="no">AD12</td>
																			<td className="img-name">
																				<div className="i-and-name-wrapper">
																					<img src={cleaner} alt="" />
																					<h6>John Doe</h6>
																				</div>
																			</td>
																			<td className="no">
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
																							<i className="fa fa-star"></i>
																						</li>
																					</ul>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="no">DV22</td>
																			<td className="img-name">
																				<div className="i-and-name-wrapper">
																					<img src={cleaner3} alt="" />
																					<h6>Mark Oswlad</h6>
																				</div>
																			</td>
																			<td className="no">
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
																							<i className="fa fa-star grey"></i>
																						</li>
																					</ul>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="no">SS33</td>
																			<td className="img-name">
																				<div className="i-and-name-wrapper">
																					<img src={cleaner2} alt="" />
																					<h6>John Doe</h6>
																				</div>
																			</td>
																			<td className="no">
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
																							<i className="fa fa-star"></i>
																						</li>
																					</ul>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="no">DV22</td>
																			<td className="img-name">
																				<div className="i-and-name-wrapper">
																					<img src={cleaner3} alt="" />
																					<h6>Mark Oswlad</h6>
																				</div>
																			</td>
																			<td className="no">
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
																							<i className="fa fa-star grey"></i>
																						</li>
																					</ul>
																				</div>
																			</td>
																		</tr>
																		<tr>
																			<td className="no">SS33</td>
																			<td className="img-name">
																				<div className="i-and-name-wrapper">
																					<img src={cleaner2} alt="" />
																					<h6>John Doe</h6>
																				</div>
																			</td>
																			<td className="no">
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
																							<i className="fa fa-star"></i>
																						</li>
																					</ul>
																				</div>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End of Dashboard section  */}
		</>
	);
};

export default CleanerDashboard;
