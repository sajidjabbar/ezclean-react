import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import user from "../../assets/img/user.png";
import "../../assets/css/dash.css";
import "../../assets/css/cleaner-dashboard.css";
import { Link } from "react-router-dom";
import { cleaner, cleaner2, cleaner3, cleaner4 } from "../../constant";
import $ from "jquery";

const Dashboard = () => {
	const ratingChanged = (newRating) => {
		console.log(newRating);
	};
	const [editprofile, seteditprofile] = useState(false);
	const showedit = () => {
		seteditprofile(true);
	};
	const hideedit = () => {
		seteditprofile(false);
	};
	useEffect(() => {
		$(".booking-details-wrapper").hide();
		$("td.ActionName a").click(function () {
			$(".PendingJob").show();
			$(".booking-wrapper").hide();
		});

		$("td.ActionName2 a").click(function () {
			$(".CompletedJob").show();
			$(".booking-wrapper").hide();
		});
	}, []);
	return (
		<div className="Dashboard_Page">
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
										<p>Customer Profile</p>
									</div>
								</div>

								{/* <div className="my-dv">
                  <h5>My Profile</h5>
                </div> */}

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

										{/* <li className="nav-item">
											<Link
												to="/Makingbooking"
												className="nav-link"
												id="pills-home-tab"
												data-toggle="pill"
												href="#pills-home"
												role="tab"
												aria-controls="pills-home"
												aria-selected="true"
											>
												Make Booking
											</Link>
										</li> */}
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
												Bookings
											</a>
										</li>

										{/* <li className="nav-item">
											<a className="nav-link" href="/InviteFriend">
												Invite Friend
											</a>
										</li> */}

										<li className="nav-item">
											<a
												className="nav-link"
												id="pills-Loyalty-tab"
												data-toggle="pill"
												href="#pills-Loyalty"
												role="tab"
												aria-controls="pills-Loyalty"
												aria-selected="false"
											>
												Loyalty Points
											</a>
										</li>

										{/* <li className="nav-item">
											<a
												className="nav-link"
												id="pills-reward-tab"
												data-toggle="pill"
												href="#pills-rew	ard"
												role="tab"
												aria-controls="pills-reward"
												aria-selected="false"
											>
												Reward
											</a>
										</li> */}

										<li className="nav-item">
											<a
												className="nav-link"
												id="pills-Wallet-tab"
												data-toggle="pill"
												href="#pills-Wallet"
												role="tab"
												aria-controls="pills-Wallet"
												aria-selected="false"
											>
												Wallet
											</a>
										</li>

										<li className="nav-item">
											<a className="nav-link" href="/Notification-customer">
												Notifications
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

																	{/* <div className="col-md-6">
																		<div className="form-group">
																			<span className="only-for-flex">
																				{" "}
																				<label for="exampleInputEmail1">
																					Card Number :
																				</label>
																				<p className="mb-0 ml-3 mt-2 text-black">
																					**** **** **** ****{" "}
																					<span className="update_dashboard">
																						update
																					</span>
																				</p>
																			</span>
																		</div>
																	</div> */}

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
																				{/* <input
																					type="text"
																					className="form-control"
																					id="exampleInputEmail1"
																					aria-describedby="emailHelp"
																					placeholder="********"
																				/> */}
																				<p className="mb-0 ml-5 mt-2 text-black">
																					************
																				</p>
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
																	<Link
																		className="bt-chngee"
																		onClick={hideedit}
																		to=""
																	>
																		Save
																	</Link>
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
																			{/* <p className="mb-0 ml-5 mt-2 text-black">**** **** **** ****</p> */}
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
																			<div className="profile-edit save-profile">
																				<Link
																					className="bt-chngee"
																					onClick={hideedit}
																					to=""
																				>
																					save
																				</Link>
																			</div>
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
																	<h4>
																		Current Balance <span>Wallet</span>
																	</h4>
																</div>
																<div className="stats-count-wrapper">
																	<h2>$ 420</h2>
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="job-history">
													<div className="row">
														<div className="col-lg-12">
															<div className="content-wrapper">
																<h3>Job History</h3>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="job-table-wrapper">
																<div className="table-responsive">
																	<table className="table">
																		<thead>
																			<tr>
																				<th scope="col">Job Type</th>
																				<th scope="col">Client Name</th>
																				<th scope="col">Location</th>
																				<th scope="col">Total Amont</th>
																			</tr>
																		</thead>
																		<tbody>
																			<tr>
																				<td>Regular Cleaning</td>
																				<td>John Doe</td>
																				<td>Lorem Ipsum</td>
																				<td>$300</td>
																			</tr>
																			<tr>
																				<td>Regular Cleaning</td>
																				<td>John Doe</td>
																				<td>Lorem Ipsum</td>
																				<td>$300</td>
																			</tr>
																			<tr>
																				<td>Regular Cleaning</td>
																				<td>John Doe</td>
																				<td>Lorem Ipsum</td>
																				<td>$300</td>
																			</tr>
																			<tr>
																				<td>Regular Cleaning</td>
																				<td>John Doe</td>
																				<td>Lorem Ipsum</td>
																				<td>$300</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* <div className="cleaner-wrapper">
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
																							{" "}
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
												</div> */}
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
																	Upcoming Bookings
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
																	Previous Bookings
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
																					<th className="Status">
																						<span>Status</span>
																					</th>
																					<th className="Action">
																						<span>Action</span>
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
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="javascript:void(0)">
																							View Detail
																						</a>
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
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
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
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
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
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
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
																					<td className="StatusName">
																						<span className="Accepted">
																							Accepted
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
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
																					<th className="Status">
																						<span>Status</span>
																					</th>
																					<th className="Action">
																						<span>Action</span>
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
																					<td className="StatusName">
																						<span className="Completed">
																							Completed
																						</span>
																					</td>
																					<td className="ActionName2">
																						<a href="javascript:void(0)">
																							View Detail
																						</a>
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
																					<td className="StatusName">
																						<span className="Completed">
																							Completed
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
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
																					<td className="StatusName">
																						<span className="Completed">
																							Completed
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
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
																					<td className="StatusName">
																						<span className="Completed">
																							Completed
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
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
																					<td className="StatusName">
																						<span className="Rejected">
																							Rejected
																						</span>
																					</td>
																					<td className="ActionName">
																						<a href="#">View Detail</a>
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
												<div className="booking-details-wrapper pr-5 mr-5 mt-4 PendingJob">
													<div className="booking-heading-wrapper">
														<h4>Booking Detailszz</h4>
													</div>
													<div className="tag-and-accep-wrapper">
														<span className="job">Job# AD12</span>
														<span className="pending">Pending</span>
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
															<li className="justify-right">
																<span className="property rght-force1">
																	Date :
																</span>
																<span className="value rght-force">
																	12 Jan, 2022
																</span>
															</li>
															<li className="justify-right">
																<span className="property prop-mr-cuss">
																	Time :{" "}
																</span>
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
													</div>
												</div>
												<div className="booking-details-wrapper pr-5 mr-5 mt-4 CompletedJob">
													<div className="booking-heading-wrapper">
														<h4>Booking Detailszz</h4>
													</div>
													<div className="tag-and-accep-wrapper">
														<span className="job">Job# AD12</span>
														<div className="button-group">
															<button
																type="button"
																class="btn btn-primary"
																data-toggle="modal"
																data-target="#GiveRating"
															>
																Give Rating
															</button>
															<span className="Completed">Completed</span>
														</div>
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
															<li className="justify-right">
																<span className="property rght-force1">
																	Date :
																</span>
																<span className="value rght-force">
																	12 Jan, 2022
																</span>
															</li>
															<li className="justify-right">
																<span className="property prop-mr-cuss">
																	Time :{" "}
																</span>
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
													</div>
												</div>
											</div>
											<div
												className="tab-pane fade"
												id="pills-profile"
												role="tabpanel"
												aria-labelledby="pills-profile-tab"
											>
												C
											</div>
											<div
												className="tab-pane fade"
												id="pills-contact"
												role="tabpanel"
												aria-labelledby="pills-contact-tab"
											>
												D
											</div>

											<div
												className="tab-pane fade"
												id="pills-invite"
												role="tabpanel"
												aria-labelledby="pills-invite-tab"
											>
												E
											</div>

											<div
												className="tab-pane fade"
												id="pills-Loyalty"
												role="tabpanel"
												aria-labelledby="pills-Loyalty-tab"
											>
												<div className="row">
													<div className="col-lg-12">
														<div className="loyal-wrapper">
															<div className="loyal-heading-wrapper">
																<h2 className="mt-2"> </h2>
															</div>
															<div className="loyalty-table-wrapper">
																<div className="table-responsive">
																	<table className="table">
																		<thead>
																			<tr>
																				<th className="job">Job Type</th>
																				<th className="job">Job Date</th>
																				<th className="job">Amount</th>
																				<th className="Points">
																					Earned Loyality Points
																				</th>
																				{/* <th className="Reward">
																					Reward Status
																				</th> */}
																			</tr>
																		</thead>
																		<tbody>
																			<tr className="row1">
																				<td className="cleaing-cate">
																					Regular Cleaning
																				</td>
																				<td className="date">9-04-2022</td>
																				<td className="amount">$500</td>
																				<td className="price">$2000</td>
																				{/* <td className="app">
																					<span className="btn Approved">
																						Approved
																					</span>
																				</td> */}
																			</tr>
																			<tr className="row1">
																				<td className="cleaing-cate">
																					Urgent Cleaning
																				</td>
																				<td className="date">9-04-2022</td>
																				<td className="amount">$500</td>
																				<td className="price">$2000</td>
																				{/* <td className="app">
																					<span className="btn Approved">
																						Approved
																					</span>
																				</td> */}
																			</tr>
																			<tr className="row1">
																				<td className="cleaing-cate">
																					Regular Cleaning
																				</td>
																				<td className="date">9-04-2022</td>
																				<td className="amount">$500</td>
																				<td className="price">$2000</td>
																				{/* <td className="app">
																					<span className="btn pending">
																						Pending
																					</span>
																				</td> */}
																			</tr>
																			<tr className="row1">
																				<td className="cleaing-cate">
																					Regular Cleaning
																				</td>
																				<td className="date">9-04-2022</td>
																				<td className="amount">$500</td>
																				<td className="price">$2000</td>
																				{/* <td className="app">
																					<span className="btn Approved">
																						Approved
																					</span>
																				</td> */}
																			</tr>
																			<tr className="row1">
																				<td className="cleaing-cate">
																					Urgent Cleaning
																				</td>
																				<td className="date">9-04-2022</td>
																				<td className="amount">$500</td>
																				<td className="price">$2000</td>
																				{/* <td className="app">
																					<span className="btn pending">
																						Pending
																					</span>
																				</td> */}
																			</tr>
																		</tbody>
																	</table>
																</div>
															</div>
															<div className="total-redeem-wraappper">
																<div className="total-points-wrapper">
																	<h6>Total Points</h6>
																	<h6>6000</h6>
																</div>
																<div className="redeem-points-wrapper">
																	<button className="btn btn-primary ez-clean-btn-rounded">
																		Redeem Points
																	</button>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div
												className="tab-pane fade"
												id="pills-reward"
												role="tabpanel"
												aria-labelledby="pills-reward-tab"
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
																Cleaner of the Month
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

											<div
												className="tab-pane fade"
												id="pills-Wallet"
												role="tabpanel"
												aria-labelledby="pills-Wallet-tab"
											>
												<div className="wallet-wrapper">
													<div className="wallet-heading-wrapper">
														<h4 className="mt-2">Wallet</h4>
													</div>
													<div className="wallet-content-wrapper">
														<div className="amount-wrapper">
															<h2>$420.00</h2>
															<h5>Current Wallet Balance</h5>
														</div>
														{/* <div className="add-money-wrapper">
															<button className="btn">
																Add Money to Wallet
															</button>
														</div> */}
													</div>
												</div>
												<div className="transferrred-wrapper">
													<div className="single-transfer-wrapper">
														<div className="name-wrapper">
															<h5>Transferred to James Knot</h5>
															<span>Balance $420</span>
														</div>
														<div className="balance-wrapper">
															<h5>$100</h5>
															<h6>12 April 22 | 10:30am</h6>
														</div>
													</div>
													<div className="single-transfer-wrapper">
														<div className="name-wrapper">
															<h5>Transferred to James Knot</h5>
															<span>Balance $420</span>
														</div>
														<div className="balance-wrapper">
															<h5>$100</h5>
															<h6>12 April 22 | 10:30am</h6>
														</div>
													</div>
													<div className="single-transfer-wrapper">
														<div className="name-wrapper">
															<h5>Transferred to James Knot</h5>
															<span>Balance $420</span>
														</div>
														<div className="balance-wrapper">
															<h5>$100</h5>
															<h6>12 April 22 | 10:30am</h6>
														</div>
													</div>
													<div className="single-transfer-wrapper">
														<div className="name-wrapper">
															<h5>Transferred to James Knot</h5>
															<span>Balance $420</span>
														</div>
														<div className="balance-wrapper">
															<h5>$100</h5>
															<h6>12 April 22 | 10:30am</h6>
														</div>
													</div>
													<div className="single-transfer-wrapper">
														<div className="name-wrapper">
															<h5>Transferred to James Knot</h5>
															<span>Balance $420</span>
														</div>
														<div className="balance-wrapper">
															<h5>$100</h5>
															<h6>12 April 22 | 10:30am</h6>
														</div>
													</div>
												</div>
											</div>

											<div
												className="tab-pane fade"
												id="pills-Notifications"
												role="tabpanel"
												aria-labelledby="pills-Notifications-tab"
											>
												H
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

			<div
				className="modal fade"
				id="GiveRating"
				tabindex="-1"
				role="dialog"
				aria-labelledby="GiveRatingTitle"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<div className="heading">
								<h3>Reviews</h3>
							</div>
							<form action="">
								<div className="form-group">
									<label>Post Your Review</label>
									<textarea className="form-control"></textarea>
								</div>
								<div className="form-group rating-stars">
									<label>Rating</label>
									<ReactStars
										count={5}
										onChange={ratingChanged}
										size={24}
										activeColor="#ffd700"
									/>
								</div>
								<div className="button-group">
									<button className="btn">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
