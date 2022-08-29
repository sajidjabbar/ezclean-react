import React from "react";
import Header from "../../components/Header";
import BannerImg from "../../assets/img/banner-img.png";
import Featured from "../../components/Featured-in";
import Work from "../../components/Work";
import DownloadApp from "../../components/DownloadApp";
import ProudPartners from "../../components/ProudPartners";
import ChooseUs from "../../components/ChooseUs";
import Footer from "../../components/Footer";
import Faq from "../../components/Faq";
import BetterBusiness from "../../components/BetterBusiness";
// import betterBussiness from "../../components/BetterBusiness";
import Slider from "react-slick";
import blogdetailimg from "../../assets/img/blog-detail-img.png";
import blog3 from "../../assets/img/blog3.png";
import blog2 from "../../assets/img/blog2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="Home_Page_Content">
			<Slider>
				<div className="intro intro-carousel">
					<div id="carousel" className="owl-carousel owl-theme">
						<div className="carousel-item-a">
							<div className="intro-content display-table">
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<div className="intro-body">
												<h3 className="banner-title mb-2">
													Providing the{" "}
													<span className="banner-text">
														highest standard cleaning,
													</span>
													with the best price possible.
												</h3>
												<span className="banner-description mb-4">
													We believe cleaning should be a luxury every family
													can afford. For the last two years along with several
													awards we’ve accomplished just that.
												</span>
												<p className="intro-subtitle intro-price">
													<Link
														to="/makingbooking"
														className="btn btn-primary ez-clean-btn no_brdr_home"
													>
														Book Now
													</Link>
												</p>
											</div>
										</div>
										<div className="col-lg-6">
											<img className={"img-fluid"} src={BannerImg} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="intro intro-carousel">
					<div id="carousel" className="owl-carousel owl-theme">
						<div className="carousel-item-a">
							<div className="intro-content display-table">
								<div className="container">
									<div className="row">
										<div className="col-lg-6">
											<div className="intro-body">
												<h3 className="banner-title mb-2">
													Providing the{" "}
													<span className="banner-text">
														highest standard cleaning,
													</span>
													with the best price possible.
												</h3>
												<span className="banner-description mb-4">
													We believe cleaning should be a luxury every family
													can afford. For the last two years along with several
													awards we’ve accomplished just that.
												</span>
												<p className="intro-subtitle intro-price">
													<a
														href="javascript:void(0);"
														className="btn btn-primary ez-clean-btn no_brdr_home"
													>
														Book Now
													</a>
												</p>
											</div>
										</div>
										<div className="col-lg-6">
											<img className={"img-fluid"} src={BannerImg} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Slider>

			<main id="main">
				<section className="section-services">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
									<h3 className="pricing-title font-weight-bold">
										Choose A{" "}
										<span className="ez-yellow-color">Cleaning Plan</span>
									</h3>
									<div className="pricing-description">
										<small className="lead">
											We’re known for our flexible subscription model, leave it
											to you to change, customize, and add whatever details
											you’d like!
										</small>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="pricing-card card mb-4 box-shadow mr-3">
									<h4 className="my-0 font-weight-bold text-center font-wght-zaam-head-qa">
										Regular
									</h4>
									<small className="text-center mt-1">Starting at</small>
									<div className="card-body">
										<h1 className="card-title pricing-card-title text-center">
											$60
										</h1>
									</div>
									<small className="text-center">2 hours, per clean</small>
									<ul className="list-unstyled mt-3 mb-4 text-center">
										<li>Ideal for 2 bed 2 bath or larger place.</li>
									</ul>
									<a
										href="javascript:void(0)"
										className="book-now-btn text-center"
									>
										Book Now
									</a>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card pricing-card mb-4 box-shadow mr-3">
									<h4 className="my-0 font-weight-normal text-center font-wght-zaam-head-qa">
										Deep Clean
									</h4>
									<small className="text-center  mt-1">Starting at</small>
									<div className="card-body">
										<h1 className="card-title pricing-card-title text-center">
											$90
										</h1>
									</div>
									<small className="text-center">3 hours, per clean</small>
									<ul className="list-unstyled mt-3 mb-4 text-center">
										<li>Ideal for 2 bed 2 bath or larger place.</li>
									</ul>
									<a
										href="javascript:void(0)"
										className="book-now-btn text-center"
									>
										Book Now
									</a>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card pricing-card mb-4 box-shadow text-center mr-1">
									<h4 className="my-0 font-weight-normal font-wght-zaam-head-qa">
										Move Out/In Clean
									</h4>
									<small className="text-center  mt-1">Starting at</small>
									<div className="card-body">
										<h1 className="card-title pricing-card-title">$189</h1>
									</div>
									<small>2 hours, per clean</small>
									<ul className="list-unstyled mt-3 mb-4">
										<li>Ideal for 2 bed 2 bath or larger place.</li>
									</ul>
									<a href="javascript:void(0)" className="book-now-btn">
										Book Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/*Featured In*/}
				<Featured />
				{/*Featured In*/}

				{/*How it works*/}
				<Work />
				{/*How it works*/}

				{/*Community Culture and Cleaning*/}
				<section className="section-services mt-4">
					<div className="container">
						<div className="row">
							<div className="col-md-12 ">
								<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
									<small className="ez-yellow-color mb-3 d-block">
										About Our Company
									</small>
									<h3 className="pricing-title font-weight-bold">
										Community, Culture,{" "}
										<span className="ez-yellow-color">Cleaning</span>
									</h3>
									<small className="d-block mt-3 cleaning-heading-text">
										Our three core values match our one mission, delivering the
										best cleaning experience, trained and trusted cleaners, and
										environmentally friendly cleaning products to every family
										of every background.
									</small>
									<a
										className="btn btn-primary theme-btn ez-clean-btn mt-3"
										href="javascript:void(0);"
									>
										Learn more
									</a>
								</div>
							</div>
							<div className="col-md-5 d-flex align-items-stretch">
								<img
									className="cleaning-img"
									src={require("../../assets/img/community1.png")}
									alt="ez-cleaning"
								/>
							</div>
							<div className="col-md-7 d-flex align-items-stretch">
								<img
									className="cleaning-img1"
									src={require("../..//assets/img/community2.png")}
									alt="ez-cleaning"
								/>
							</div>
						</div>
					</div>
				</section>
				{/*Community Culture and Cleaning*/}

				{/*Download Application*/}
				<DownloadApp />
				{/*Download Application*/}

				{/*Partners*/}
				<ProudPartners />
				{/*Partners*/}

				{/*Choose Us*/}
				<ChooseUs />
				{/*Choose Us*/}

				{/*Testimonial*/}
				<section className="pt-5 pb-5 pb-home-tesitmmm">
					<div className="container">
						<div className="col-md-12">
							<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
								<small className="ez-yellow-color">testimonial</small>
								<h3 className="pricing-title font-weight-bold">
									<span className="ez-yellow-color">Satisfied</span> Customers
								</h3>
								<small className="lead">
									Satisfied customers across Washington
								</small>
							</div>
						</div>
						<div className="testimonial-section">
							<div className="card col-md-12 mt-2">
								<div
									id="carouselExampleControls"
									className="carousel slide"
									data-ride="carousel"
									data-interval="100000"
								>
									<div className="carousel-inner mb-5" role="listbox">
										<div className="carousel-item active">
											<div className="bg"></div>
											<div className="row">
												<div className="col-md-4">
													<div className="carousel-caption">
														<div className="row">
															<div className="col-sm-9 col-8">
																<div className="testimonial-separator">
																	<hr />
																</div>
																<small className="testimonial-text">
																	"We called them when we needed an apartment
																	cleaned after we had moved out."{" "}
																</small>
															</div>
														</div>
														<small className="smallest float-right font-weight-bold mute testimonial-author">
															Simons
														</small>
													</div>
												</div>
												<div className="col-md-4">
													<div className="carousel-caption">
														<div className="row">
															<div className="col-sm-9 col-8">
																<div className="testimonial-separator">
																	<hr />
																</div>
																<small className="testimonial-text">
																	"These folks were excellent. They were very
																	quick in responding, easy to work with, and
																	they arrived on time."
																</small>
															</div>
														</div>
														<small className="smallest float-right font-weight-bold mute testimonial-author">
															David
														</small>
													</div>
												</div>
												<div className="col-md-4">
													<div className="carousel-caption">
														<div className="row">
															<div className="col-sm-9 col-8">
																<div className="testimonial-separator">
																	<hr />
																</div>
																<small className="testimonial-text">
																	"These folks were excellent. They were very
																	quick in responding, easy to work with, and
																	they arrived on time."
																</small>
															</div>
														</div>
														<small className="smallest float-right font-weight-bold mute testimonial-author">
															David
														</small>
													</div>
												</div>
											</div>
										</div>
										<div className="carousel-item">
											<div className="bg"></div>
											<div className="row">
												<div className="col-md-4">
													<div className="carousel-caption">
														<div className="row">
															<div className="col-sm-9 col-8">
																<div className="testimonial-separator">
																	<hr />
																</div>
																<small className="testimonial-text">
																	"We called them when we needed an apartment
																	cleaned after we had moved out."{" "}
																</small>
															</div>
														</div>
														<small className="smallest float-right font-weight-bold mute testimonial-author">
															Simons
														</small>
													</div>
												</div>
												<div className="col-md-4">
													<div className="carousel-caption">
														<div className="row">
															<div className="col-sm-9 col-8">
																<div className="testimonial-separator">
																	<hr />
																</div>
																<small className="testimonial-text">
																	"These folks were excellent. They were very
																	quick in responding, easy to work with, and
																	they arrived on time."
																</small>
															</div>
														</div>
														<small className="smallest float-right font-weight-bold mute testimonial-author">
															David
														</small>
													</div>
												</div>
												<div className="col-md-4">
													<div className="carousel-caption">
														<div className="row">
															<div className="col-sm-9 col-8">
																<div className="testimonial-separator">
																	<hr />
																</div>
																<small className="testimonial-text">
																	"These folks were excellent. They were very
																	quick in responding, easy to work with, and
																	they arrived on time."
																</small>
															</div>
														</div>
														<small className="smallest float-right font-weight-bold mute testimonial-author">
															David
														</small>
													</div>
												</div>
											</div>
										</div>
									</div>
									<a
										className="carousel-control-prev"
										href="#carouselExampleControls"
										role="button"
										data-slide="prev"
									>
										<span
											className="carousel-control-prev-icon active-testi"
											aria-hidden="true"
										>
											<i className="fa fa-circle"></i>
										</span>
										<span className="sr-only">Previous</span>
									</a>
									<a
										className="carousel-control-next"
										href="#carouselExampleControls"
										role="button"
										data-slide="next"
									>
										<span
											className="carousel-control-next-icon"
											aria-hidden="true"
										>
											<i className="fa fa-circle"></i>
										</span>
										<span className="sr-only">Next</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*Testimonial*/}

				{/*Clean home or Office*/}
				<section className="pt-5 pb-5 clean-home-section">
					<div className="container">
						<div className="col-md-12">
							<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
								<h3 className="pricing-title">
									<span className="ez-yellow-color">
										"keeping your home or office clean{" "}
									</span>
									can be hard to manage"
								</h3>
								<small className="d-block mt-3 cleaning-heading-text">
									We've got your back, being open 7 days a week allows
								</small>
								<a
									className="btn btn-primary ez-clean-btn mt-3 no_brdr_home brdr-rounded"
									href="javascript:void(0);"
								>
									Book Now
								</a>
							</div>
						</div>

						<div className="col-md-12 mt-2">
							<div
								id="carouselExampleControls1"
								className="carousel slide"
								data-ride="carousel"
								data-interval="100000"
							>
								<div className="carousel-inner mb-5" role="listbox">
									<div className="carousel-item active">
										<div className="bg"></div>
										<div className="row">
											<div className="col-md-4">
												<div className="carousel-caption1">
													<div className="row">
														<div className="col-sm-12 col-12">
															<img
																className="home-clean-img"
																src={blogdetailimg}
																alt="slider"
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="carousel-caption1">
													<div className="row">
														<div className="col-sm-12 col-12">
															<img
																className="home-clean-img"
																src={blog3}
																alt="slider"
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="carousel-caption1">
													<div className="row">
														<div className="col-sm-12 col-12">
															<img
																className="home-clean-img"
																src={blog2}
																alt="slider"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="carousel-item">
										<div className="bg"></div>
										<div className="row">
											<div className="col-md-4">
												<div className="carousel-caption1">
													<div className="row">
														<div className="col-sm-12 col-12">
															<img
																className="home-clean-img"
																src={blogdetailimg}
																alt="slider"
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="carousel-caption1">
													<div className="row">
														<div className="col-sm-12 col-12">
															<img
																className="home-clean-img"
																src={blog3}
																alt="slider"
															/>
														</div>
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<div className="carousel-caption1">
													<div className="row">
														<div className="col-sm-12 col-12">
															<img
																className="home-clean-img"
																src={blog2}
																alt="slider"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<a
									className="carousel-control-prev"
									href="#carouselExampleControls1"
									role="button"
									data-slide="prev"
								>
									<span
										className="carousel-control-prev-icon active"
										aria-hidden="true"
									>
										<i className="fa fa-circle"></i>
									</span>
								</a>
								<a
									className="carousel-control-next"
									href="#carouselExampleControls1"
									role="button"
									data-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									>
										<i className="fa fa-circle"></i>
									</span>
								</a>
							</div>
						</div>
					</div>
				</section>
				{/*Clean home or Office*/}

				{/* FAQ*/}
				<Faq />
				{/*FAQ */}
				{/*Business Bureau*/}
				{/* <BetterBusiness /> */}
				{/*Business Bureau*/}
			</main>
			{/*End #main*/}
		</div>
	);
};

export default Home;
