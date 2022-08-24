import React from "react";
import BetterBusiness from "../../components/BetterBusiness";
import mainImage from "../../assets/img/blog-page.png";
import blogImg from "../../assets/img/blog-detail-img.png";

const BlogDetails  = () => {
    return (
        <div className="Blog_Details">
            <main id="main">
                {/*Blog First Section*/}
                <section className="section-services mt-5 mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h3>EzClean <span className="ez-yellow-color"> Blog Detail</span></h3>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="blog-detail1 text-center">
                                    <img className="img-fluid mt-4" src={blogImg} alt="blog-image"/>
                                    <div className="blog-details-text text-left d-flex">
                                        <h6 className="font-weight-bold">We believe cleaning should be a luxury every family can afford.</h6>
                                        <span className="blog_detail_right">Apr 08, 2022</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="blog-detail text-center">
                                            <img className="img-fluid mt-4" src={mainImage} alt="blog-image"/>
                                            <div className="blog-details-sidebar text-left">
                                                <h6 className="font-weight-bold">We believe cleaning should be a </h6>
                                                <span className="ml-5 blog-date text-left right_zabardasti1">Apr 08, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="blog-detail text-center">
                                            <img className="img-fluid mt-4" src={mainImage} alt="blog-image"/>
                                            <div className="blog-details-text text-left d-flex">
                                                <h6 className="font-weight-bold">We believe cleaning should be a luxury every family can afford.</h6>
                                                <span className="ml-5 blog-date text-right">Apr 08, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="blogText">
                                    <p>We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that. We believe cleaning should be a luxury every family can afford. For the last two years along with several awards we’ve accomplished just that.</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form>
                                    <h6>Leave a comment</h6>
                                    <label>Name *</label>
                                    <div className="col-md-12">
                                        <input className="w-100 form-control" type="text" placeholder="Your Name"/>
                                    </div>
                                    <label className="mt-3">Email *</label>
                                    <div className="col-md-12">
                                        <input className="w-100 form-control" type="Email" placeholder="Your Email"/>
                                    </div>
                                    <label className="mt-3">Your comment</label>
                                    <div className="col-md-12">
                                        <textarea className="w-100 form-control" rows="4" cols="50" placeholder="Your Comment"></textarea>
                                    </div>
                                    <button className="btn btn-primary ez-clean-btn-rounded mt-3" href="javascript:void(0);">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Blog  First Section*/}

                {/*Business Bureau*/}
                <BetterBusiness/>
                {/*Business Bureau*/}
            </main>
        </div>
    );
};

export default BlogDetails;
