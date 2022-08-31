import React from "react";
import AboutUs from "../../assets/img/about-img.png";
import About1 from "../../assets/img/about1-img.png";
import Community2 from "../../assets/img/community2.png";
import Featured from "../../components/Featured-in";
import ProudPartners from "../../components/ProudPartners";
import BetterBusiness from "../../components/BetterBusiness";
import { OfficeImg1, OfficeImg2, OfficeImg3, OfficeImg4 } from "../../constant";
import Slider from "react-slick";

const About = () => {
	const officeSlider = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
	return (
		<div className="About_Page">
			<main id="main">
				{/*About Us First Section*/}
				<section className="section-services mt-4 mb-4">
					<div className="container">
						<div className="row">
							<div className="col-md-5 pr-5">
								<h3>
									<span className="ez-yellow-color">
										Highest standard cleaning,
									</span>{" "}
									with the best price possible.
								</h3>
								<p className="about-text">
									We believe cleaning should be a luxury every family can
									afford. For the last two years along with several awards we’ve
									accomplished just that. We believe cleaning should be a luxury
									every family can afford. For the last two years along with
									several awards we’ve accomplished just that. We believe
									cleaning should be a luxury every family can afford. For the
									last two years along with several awards we’ve accomplished
									just that. We believe cleaning should be a luxury every family
									can afford. For the last two years along with several awards
									we’ve accomplished just that.
								</p>

								<p className="about-text">
									We believe cleaning should be a luxury every family can
									afford. For the last two years along with several awards we’ve
									accomplished just that. We believe cleaning should be a luxury
									every family can afford. For the last two years along with
									several awards we’ve accomplished just that. We believe
									cleaning should be a luxury every family can afford. For the
									last two years along with several awards we’ve accomplished
									just that. We believe cleaning should be a luxury every family
									can afford. For the last two years along with several awards
									we’ve accomplished just that.
								</p>
							</div>
							<div className="col-md-7 about-col">
								<img
									className="cleaning-img1"
									src={AboutUs}
									alt="ez-cleaning"
								/>
							</div>
						</div>
					</div>
				</section>
				{/*About Us First Section*/}

				{/*Featured In*/}
				<Featured />
				{/*Featured In*/}

				{/*About Us Second Section*/}
				<section className="section-services mt-5">
					<div className="container">
						<div className="row">
							<div className="col-md-5">
								<small className="abt_sml_yllw">About Our Company</small>
								<h3>
									Community, Culture,{" "}
									<span className="ez-yellow-color"> Cleaning. </span>
								</h3>
								<p className="about-text">
									Our three core values match our one mission, delivering the
									best cleaning experience, trained and trusted cleaners, and
									environmentally friendly cleaning products to every family of
									every background. Our three core values match our one mission,
									delivering the best cleaning experience, trained and trusted
									cleaners, and environmentally friendly cleaning products to
									every family of every background.
								</p>

								<p className="about-text">
									Our three core values match our one mission, delivering the
									best cleaning experience, trained and trusted cleaners, and
									environmentally friendly cleaning products to every family of
									every background.Our three core values match our one mission,
									delivering the best cleaning experience, trained and trusted
									cleaners, and environmentally friendly cleaning products to
									every family of every background.
								</p>
							</div>
							<div className="col-md-7">
								<img className="cleaning-img1" src={About1} alt="ez-cleaning" />
							</div>
						</div>
					</div>
				</section>
				{/*About Us Second Section*/}

				{/*Partners*/}
				<ProudPartners />
				{/*Partners*/}

				{/*Clean home or Office*/}
				<section className="pt-5 pb-5 clean-home-section mt-5">
					<div className="container">
						<div className="col-md-12">
							<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
								<h3 className="pricing-title">
									<span className="ez-yellow-color">
										"keeping your home or office clean
									</span>
									can be hard to manage"
								</h3>
								<small className="d-block mt-3 cleaning-heading-text">
									We've got your back, being open 7 days a week allows
								</small>
								<a
									className="btn btn-primary ez-clean-btn bt-about-clrchn mt-3 "
									href="javascript:void(0);"
								>
									Book Now
								</a>
							</div>
						</div>

						<div className="office-slider">
							<Slider {...officeSlider}>
								<div className="img-box">
									<figure>
										<img src={OfficeImg1} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg2} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg3} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg1} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg2} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg3} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg1} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg2} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg3} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg1} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg2} alt="" className="img-fluid" />
									</figure>
								</div>
								<div className="img-box">
									<figure>
										<img src={OfficeImg3} alt="" className="img-fluid" />
									</figure>
								</div>
							</Slider>
						</div>
					</div>
				</section>
				{/*Clean home or Office*/}

				{/*Partners*/}
				<BetterBusiness />
				{/*Partners*/}
			</main>
		</div>
	);
};

export default About;
