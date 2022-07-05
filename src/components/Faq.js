import React from "react";

const Faq  = () => {
    return (
        <>
        <section className="section-services">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <small className="ez-yellow-color">frequently asked questions</small>
                        <h3 className="pricing-title font-weight-bold">Got a few <span
                            className="ez-yellow-color">Questions</span></h3>
                    </div>
                </div>
                <div className="faq-section">
                    <div className="content">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingOne" role="tab">
                                    <h6 className="panel-title"><a role="button" data-toggle="collapse"
                                                                   data-parent="#accordion" href="#collapseOne"
                                                                   aria-expanded="true"
                                                                   aria-controls="collapseOne">Whats The
                                        Difference Between A Deep Clean And Regular Clean?<i
                                            className="pull-right fa fa-plus"></i></a></h6>
                                </div>
                                <div className="panel-collapse collapse in" id="collapseOne" role="tabpanel"
                                     aria-labelledby="headingOne">
                                    <div className="panel-body">
                                        <p>A deep clean is recommended for all first time cleaning by SPRUSE. It
                                            allows us extra time to get all the areas that have been missed
                                            during regular cleanings in the past. after the initial deep clean,
                                            most customers switch to a standard 2 hour clean.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingTwo" role="tab">
                                    <h6 className="panel-title"><a className="collapsed" role="button"
                                                                   data-toggle="collapse"
                                                                   data-parent="#accordion" href="#collapseTwo"
                                                                   aria-expanded="false"
                                                                   aria-controls="collapseTwo">How Do I Update
                                        Billing?<i className="pull-right fa fa-plus"></i></a></h6>
                                </div>
                                <div className="panel-collapse collapse" id="collapseTwo" role="tabpanel"
                                     aria-labelledby="headingTwo">
                                    <div className="panel-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                            occaecat craft beer farm-to-table, raw denim aesthetic synth
                                            nesciunt you probably haven't heard of them accusamus labore
                                            sustainable VHS.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading" id="headingThree" role="tab">
                                    <h6 className="panel-title"><a className="collapsed" role="button"
                                                                   data-toggle="collapse"
                                                                   data-parent="#accordion"
                                                                   href="#collapseThree" aria-expanded="false"
                                                                   aria-controls="collapseThree">What Day Is My
                                        Clean?<i className="pull-right fa fa-plus"></i></a></h6>
                                </div>
                                <div className="panel-collapse collapse" id="collapseThree" role="tabpanel"
                                     aria-labelledby="headingThree">
                                    <div className="panel-body">
                                        <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
                                            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
                                            single-origin coffee nulla assumenda shoreditch et. Nihil anim
                                            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                                            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                                            occaecat craft beer farm-to-table, raw denim aesthetic synth
                                            nesciunt you probably haven't heard of them accusamus labore
                                            sustainable VHS.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
};

export default Faq;
