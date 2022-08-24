import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BetterBusiness from "../../components/BetterBusiness";
import mainImage from "../../assets/img/blog-page.png";
import blog1 from "../../assets/img/blog1.png";
import blog2 from "../../assets/img/blog2.png";
import blog3 from "../../assets/img/blog3.png";
import blog4 from "../../assets/img/blog4.png";
import blog5 from "../../assets/img/blog5.png";
import blog6 from "../../assets/img/blog6.png";
import blog7 from "../../assets/img/blog7.png";
import blog8 from "../../assets/img/blog8.png";


const Blogs = () => {

    const navigate = useNavigate();

    return (
        <div className="Blog_Page">
            <main id="main">
                {/*About Us First Section*/}
                <section className="section-services mt-5 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="blog-detail text-center">
                                    <h3>EzClean <span className="ez-yellow-color"> Blogs</span></h3>
                                    <img className="img-fluid mt-4" src={mainImage} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                {/* /BlogDetails */}

                                <div className="blog  text-center">
                                    <img className="img-fluid blogs_images " src={blog1} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="blog-detail text-center">
                                    <img className="img-fluid blogs_images" src={blog2} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="blog-detail text-center">
                                    <img className="img-fluid blogs_images " src={blog3} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="blog-detail text-center">
                                    <img className="img-fluid blogs_images " src={blog4} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="blog-detail text-center">
                                    <img className="img-fluid blogs_images " src={blog5} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="blog-detail text-center">
                                    <img className="img-fluid blogs_images " src={blog6} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="blog-detail text-center">
                                    <img className="img-fluid blogs_images " src={blog7} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 mt-5">
                                <div className="blog-detail text-center">
                                    <img className="img-fluid blogs_images " src={blog8} alt="blog-image" />
                                    <p className="mt-3 text-left blog-text">We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <div className="blog-btn text-left d-flex">
                                        <a className="btn btn-primary ez-clean-btn-rounded mt-3 blog_cursor" onClick={() => { navigate('/BlogDetails') }} href="javascript:void(0);">Read More</a>
                                        <span className="ml-5 blog-date">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About Us First Section*/}


                {/*Business Bureau*/}
                <BetterBusiness />
                {/*Business Bureau*/}
            </main>
        </div>
    );
};

export default Blogs;
