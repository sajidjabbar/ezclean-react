import React, { useState } from "react";
import BetterBusiness from "../components/BetterBusiness";
const Faq = () => {
	const [faqShow, Setfaq] = useState(false);
	const showFaq = () => {
		Setfaq(true);
	};
	const FaqContent = [
		{
			id: 1,
			faq_no: "One",
			question: "Whats The Difference Between A Deep Clean And Regular Clean?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 2,
			faq_no: "Two",
			question: "How Do I Update Billing?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 3,
			faq_no: "three",
			question: "What Day Is My Clean?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 4,
			faq_no: "four",
			question: "Will The Same Cleaner Come Every-Time?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 5,
			faq_no: "five",
			question: "What Day Is My Clean?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 6,
			faq_no: "six",
			question: "Will The Same Cleaner Come Every-Time?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 7,
			faq_no: "seven",
			question: "What Day Is My Clean?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 8,
			faq_no: "eight",
			question: "Will The Same Cleaner Come Every-Time?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 9,
			faq_no: "nine",
			question: "What Day Is My Clean?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
		{
			id: 10,
			faq_no: "ten",
			question: "Will The Same Cleaner Come Every-Time?",
			answer:
				"A deep clean is recommended for all first time cleaning by SPRUSE. It allows us extra time to get all the areas that have been missed during regular cleanings in the past. after the initial deep clean, most customers switch to a standard 2 hour clean.",
		},
	];
	return (
		<>
			<section className="section-services">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
								<h3 className="pricing-title font-weight-bold">
									Got a few <span className="ez-yellow-color">Questions</span>
								</h3>
								<small className="ez-yellow-color">
									frequently asked questions
								</small>
							</div>
						</div>
						<div className="faq-section">
							{/* <div className="content">
								<div
									className="panel-group"
									id="accordion"
									role="tablist"
									aria-multiselectable="true"
								>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingOne" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseOne"
													aria-expanded="false"
													aria-controls="collapseOne"
												>
													Whats The Difference Between A Deep Clean And Regular
													Clean?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapseOne"
											role="tabpanel"
											aria-labelledby="headingOne"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingTwo" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseTwo"
													aria-expanded="false"
													aria-controls="collapseTwo"
												>
													How Do I Update Billing?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapseTwo"
											role="tabpanel"
											aria-labelledby="headingTwo"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingThree" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapsethree"
													aria-expanded="false"
													aria-controls="collapsethree"
												>
													What Day Is My Clean?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapsethree"
											role="tabpanel"
											aria-labelledby="headingThree"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingFour" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseFour"
													aria-expanded="false"
													aria-controls="collapseFour"
												>
													Will The Same Cleaner Come Every-Time?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapseFour"
											role="tabpanel"
											aria-labelledby="headingFour"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingFive" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseFive"
													aria-expanded="false"
													aria-controls="collapseFive"
												>
													What Day Is My Clean?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapseFive"
											role="tabpanel"
											aria-labelledby="headingFive"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingSix" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseSix"
													aria-expanded="false"
													aria-controls="collapseSix"
												>
													Will The Same Cleaner Come Every-Time?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapseSix"
											role="tabpanel"
											aria-labelledby="headingSix"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingSeven" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseSeven"
													aria-expanded="false"
													aria-controls="collapseSeven"
												>
													What Day Is My Clean?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapseSeven"
											role="tabpanel"
											aria-labelledby="headingSeven"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingEight" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseEight"
													aria-expanded="false"
													aria-controls="collapseEight"
												>
													Will The Same Cleaner Come Every-Time?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapseEight"
											role="tabpanel"
											aria-labelledby="headingEight"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading" id="headingNine" role="tab">
											<h6 className="panel-title">
												<a
													className="collapsed"
													role="button"
													data-toggle="collapse"
													data-parent="#accordion"
													href="#collapseNine"
													aria-expanded="false"
													aria-controls="collapseNine"
												>
													What Day Is My Clean?
													<i className="pull-right fa fa-plus"></i>
												</a>
											</h6>
										</div>
										<div
											className="panel-collapse collapse"
											id="collapseNine"
											role="tabpanel"
											aria-labelledby="headingNine"
										>
											<div className="panel-body">
												<p>
													Anim pariatur cliche reprehenderit, enim eiusmod high
													life accusamus terry richardson ad squid. 3 wolf moon
													officia aute, non cupidatat skateboard dolor brunch.
													Food truck quinoa nesciunt laborum eiusmod. Brunch 3
													wolf moon tempor, sunt aliqua put a bird on it squid
													single-origin coffee nulla assumenda shoreditch et.
													Nihil anim keffiyeh helvetica, craft beer labore wes
													anderson cred nesciunt sapiente ea proident. Ad vegan
													excepteur butcher vice lomo. Leggings occaecat craft
													beer farm-to-table, raw denim aesthetic synth nesciunt
													you probably haven't heard of them accusamus labore
													sustainable VHS.
												</p>
											</div>
										</div>
									</div>
								
								</div>
							</div> */}
							<div id="accordion">
								<div class="card">
									<div class="card-header" id="headingOne">
										<h5 class="mb-0">
											<button
												class="btn btn-link"
												data-toggle="collapse"
												data-target="#collapseOne"
												aria-expanded="true"
												aria-controls="collapseOne"
											>
												<h5>
													Whats The Difference Between A Deep Clean And Regular
													Clean?
												</h5>
												<i class="fa fa-plus" aria-hidden="true"></i>
											</button>
										</h5>
									</div>

									<div
										id="collapseOne"
										class="collapse show"
										aria-labelledby="headingOne"
										data-parent="#accordion"
									>
										<div class="card-body">
											A deep clean is recommended for all first time cleaning by
											SPRUSE. It allows us extra time to get all the areas that
											have been missed during regular cleanings in the past.
											after the initial
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="headingTwo">
										<h5 class="mb-0">
											<button
												class="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseTwo"
												aria-expanded="false"
												aria-controls="collapseTwo"
											>
												<h5>How Do I Update Billing?</h5>
												<i class="fa fa-plus" aria-hidden="true"></i>
											</button>
										</h5>
									</div>
									<div
										id="collapseTwo"
										class="collapse"
										aria-labelledby="headingTwo"
										data-parent="#accordion"
									>
										<div class="card-body">
											A deep clean is recommended for all first time cleaning by
											SPRUSE. It allows us extra time to get all the areas that
											have been missed during regular cleanings in the past.
											after the initial
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="headingThree">
										<h5 class="mb-0">
											<button
												class="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseThree"
												aria-expanded="false"
												aria-controls="collapseThree"
											>
												<h5>What Day Is My Clean?</h5>
												<i class="fa fa-plus" aria-hidden="true"></i>
											</button>
										</h5>
									</div>
									<div
										id="collapseThree"
										class="collapse"
										aria-labelledby="headingThree"
										data-parent="#accordion"
									>
										<div class="card-body">
											A deep clean is recommended for all first time cleaning by
											SPRUSE. It allows us extra time to get all the areas that
											have been missed during regular cleanings in the past.
											after the initial
										</div>
									</div>
								</div>
								<div class="card">
									<div class="card-header" id="headingFour">
										<h5 class="mb-0">
											<button
												class="btn btn-link collapsed"
												data-toggle="collapse"
												data-target="#collapseFour"
												aria-expanded="false"
												aria-controls="collapseFour"
											>
												<h5>Will The Same Cleaner Come Every-Time?</h5>
												<i class="fa fa-plus" aria-hidden="true"></i>
											</button>
										</h5>
									</div>
									<div
										id="collapseFour"
										class="collapse"
										aria-labelledby="headingFour"
										data-parent="#accordion"
									>
										<div class="card-body">
											A deep clean is recommended for all first time cleaning by
											SPRUSE. It allows us extra time to get all the areas that
											have been missed during regular cleanings in the past.
											after the initial
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*Business Bureau*/}
			<BetterBusiness />
			{/*Business Bureau*/}
		</>
	);
};

export default Faq;
