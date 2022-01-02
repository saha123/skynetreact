import React from 'react';
import Header from './includes/Header';
import Footer from './includes/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            
            <section className="main-section-home">
	<div className="container">
		<h1 className="text-dark text-center" style={{fontWeight: '300',fontSize: '40px'}}>Trusted &amp; Reliable Consultancy Service Portal</h1>
		<div className="row py-2 m-0 w-100">
          <div className="col-lg-12 py-4">
            <div className="product-heading"><span>Choose A Product</span>
            </div>
          </div>
        </div>
		<div className="main-section-grid pt-4">
			<div className="row">
				<div className="col-md-8">
					<div className="row">
						<div className="col-md-4 col-sm-6">
						<a href="#" data-toggle="modal" data-target="#myModal" title="Health Insurance">
		                <div className="text-center product-div back-insu-color clearfix">
		                  <img src="assets/images/health-insurance1.png" alt="Health Insurance" className="img-fluid" />
		                  <p>Health <span className="m_break">Insurance</span>
		                  </p>
		                </div>
              			</a>

				<div className="modal fade" id="myModal">
					<div className="modal-dialog">
					    <div className="modal-content">
					    
					       <div className="modal-body">
					       	<button type="button" className="close" data-dismiss="modal">&times;</button>
					          <ul>
					          	<li><a href="https://www.bajajallianz.com/health-insurance-plans/individual-health-insurance-plans/buy-online.html" target="_blank">Health Guard Insurance</a></li>
					          	<li><a href="https://www.bajajallianz.com/health-insurance-plans/health-insurance-infinity-plan.html" target="_blank">Infinity Health Insurance</a></li>
					          	<li><a href="https://www.bajajallianz.com/health-insurance-plans/critical-Illness-insurance/buy-online.html" target="_blank">Top Up Health Insurance</a></li>
					          	<li><a href="https://www.bajajallianz.com/health-insurance-plans/top-up-health-insurance/buy-online.html" target="_blank">Critical illness Health Insurance</a></li>
					          </ul>
					        </div>
					        					        
					  </div>
					</div>
				</div>
			 </div>

			<div className="col-md-4 col-sm-6">
				<a href="#" data-toggle="modal" data-target="#myModal2" title="Motor Insurance">
                <div className="text-center product-div back-insu-color clearfix">
                  <img src="assets/images/motor-insurance.png" alt="Health Insurance" className="img-fluid" />
                  <p>Motor <span className="m_break">Insurance</span>
                  </p>
                </div>
              </a>
             
				<div className="modal fade" id="myModal2">
					<div className="modal-dialog">
					    <div className="modal-content">
					   
					       <div className="modal-body">
					       	<button type="button" className="close" data-dismiss="modal">&times;</button>
					        <ul>
					          	<li>
					          		<Link to="/">Bike</Link>
					          		<ul className="sub-menu">
					          			<li><Link to="/">Package Policy</Link></li>
					          			<li><Link to="/">TP Policy</Link></li>
					          		</ul>
					          	</li>
					          	<li><a href="#">Car</a>
					          		<ul className="sub-menu">
					          			<li><Link to="/">Package Policy</Link></li>
					          			<li><Link to="/">TP Policy</Link></li>
					          		</ul>
					          	</li>
					          	<li><a href="#">Other motor Insurance</a></li>
					          </ul> 

					        <ul className="nav nav-tabs" role="tablist"
					        id="popup-tab">
							   <li className="nav-item">
							      <a className="nav-link active" data-toggle="tab" href="#bike">Bike</a>
							   </li>
							   <li className="nav-item">
							      <a className="nav-link" data-toggle="tab" href="#car">Car</a>
							    </li>
							    <li className="nav-item">
							      <a className="nav-link" href="other-motor-insurance.html">Other motor Insurance</a>
							    </li>
 							</ul>

 							
							  <div className="tab-content">
							    <div id="bike" className="container tab-pane active">
							      <h3><a href="https://www.bajajallianz.com/motor-insurance/car-insurance-online/buy-online.html" target="_blank">Package Policy</a></h3>
							      <h3><a href="https://www.bajajallianz.com/motor-insurance/third-party-car-insurance-online/buy-online.html" target="_blank">TP Policy</a></h3>
							    </div>
							    <div id="car" className="container tab-pane fade">
							       <h3><a href="https://www.bajajallianz.com/motor-insurance/car-insurance-online/buy-online.html" target="_blank">Package Policy</a></h3>
							      <h3><a href="https://www.bajajallianz.com/motor-insurance/third-party-car-insurance-online/buy-online.html" target="_blank">TP Policy</a></h3>
							    </div>
							    <div id="other" className="container tab-pane fade">
							    
							    </div>
							  </div>
					        </div>
					        					        
					  </div>
					</div>
				</div>
			</div>

			<div className="col-md-4 col-sm-6">
				<a href="#" data-toggle="modal" data-target="#myModal3" title="Life Insurance">
                <div className="text-center product-div back-insu-color clearfix">
                  <img src="assets/images/life-insurance2.png" alt="Life Insurance" className="img-fluid" />
                  <p>Life <span className="m_break">Insurance</span>
                  </p>
                </div>
              </a>
              
				<div className="modal fade" id="myModal3">
					<div className="modal-dialog">
					    <div className="modal-content">
					  
					       <div className="modal-body">
					       	<button type="button" className="close" data-dismiss="modal">&times;</button>
					       	<h3>Why Life Insurance Plans ?</h3>
					          <ul>
					          	<li><a href="#">Secure Your Retirement Planning</a></li>
					          	<li><a href="#">Savings with Insurance</a></li>
					          	<li><a href="#">Tax Savings Adgantages</a></li>
					          	<li><a href="#">Avail Loan Advanges</a></li>
					          </ul>
					          <div className="form-module">
         					 <h2 className="text-center">Get Life Insurance Quotes</h2>
			         		<form>
			    			<div className="form-row">
						      <div className="col-6">
						        <div className="form-group">
						        	<label for="usr">Name <span className="error">*</span></label>
						          <input type="text" className="form-control" placeholder="Enter Name" name="name" />
						        </div>
						      </div>
						      <div className="col-6">
						        <div className="form-group">
						        <label for="usr">Profession </label>
						        <select className="form-control" name="select-profession">
						          <option value="Salried">Salried</option>
						          <option value="Business">Business</option>
						        </select>
						      </div>
						      </div>

						      <div className="col-6">
						        <div className="form-group">
						        <label for="usr">Phone No. <span className="error">*</span></label>
						        <input type="number" className="form-control" placeholder="Enter Phone number" name="life-insu-phone" />
						      </div>
						      </div>
						      <div className="col-6">
						        <div className="form-group">
						        <label for="usr">Type of Life Insurance</label>
						         <select className="form-control" name="select-life-insu">
						          <option value="Guaranteed Return">Guaranteed Return</option>
						          <option value="Unit Link Policy (ULIP)">Unit Link Policy (ULIP)</option>
						        </select>
						      </div>
						      </div>

						      <div className="col-6">
						        <div className="form-group">
						        	<label for="usr">Date of Birth <span className="error">*</span></label>
						          <input type="text" className="form-control" placeholder="Date of birth" name="insu-dob" />
						        </div>
						      </div>

						      <div className="col-6">
						        <div className="form-group">
						        <label for="usr">Premium Budget</label>
						        <select className="form-control" name="select-budget">
						          <option value="25000-1 Lac Yearly">25000-1 Lac Yearly</option>
						          <option value="1 Lac-3 Lac Yearly">1 Lac-3 Lac Yearly</option>
						          <option value="3 Lac-5 Lac Yearly">3 Lac-5 Lac Yearly</option>
						          <option value="More">More</option>
						        </select>
						      </div>
						      </div>

					      <div className="col-6">
					        <div className="form-group">
					        	<label for="usr">City</label>
					          <input type="text" className="form-control" placeholder="Enter city" name="your-city" />
					        </div>
					      </div>

					      <div className="col-12">
					     	 <button className="btn btn-success btn-lg" type="submit">Submit</button>
					  	  </div>
			    		</div>
			  			</form>
        				</div>
						</div>
						</div>
						</div>
					</div>
				</div>

			<div className="col-md-4 col-sm-6">
				<a href="https://www.bajajallianz.com/pet-dog-insurance/buy-online.html?src=CBM_0698832" target="_blank" title="Pet dog Insurance">
		        <div className="text-center product-div back-insu-color clearfix">
		            <img src="assets/images/pet-dog-insurance.png" alt="Health Insurance" className="img-fluid" />
		            <p>Pet dog <span className="m_break">Insurance</span>
		            </p>
		        </div>
              	</a>
			</div>

			<div className="col-md-4 col-sm-6">
				<a href="https://www.bajajallianz.com/travel-insurance-online/buy-online.html?src=CBM_0801744" target="_blank" title="Travel Insurance">
		        <div className="text-center product-div back-insu-color clearfix">
		            <img src="assets/images/travel-insurance.png" alt="Health Insurance" className="img-fluid" />
		            <p>Travel <span className="m_break">Insurance</span>
		            </p>
		        </div>
              	</a>
			</div>

			<div className="col-md-4 col-sm-6">
				<a href="https://general.bajajallianz.com/Insurance/cybersafe/initCSData.do?src=CBM_0801746" target="_blank" title="Health Insurance">
		        <div className="text-center product-div back-insu-color clearfix">
		            <img src="assets/images/cyber-insurance.png" alt="Cyber Safe Insurance" className="img-fluid" />
		            <p>Cyber Safe <span className="m_break">Insurance</span>
		            </p>
		        </div>
              	</a>
			</div>

			<div className="col-md-4 col-sm-6">
				<a href="https://general.bajajallianz.com/Insurance/ppg/PPGYourDetails.jsp?p_type=PPGY&u_action=new&src=CBM_0564931" title="Health Insurance">
		        <div className="text-center product-div back-insu-color clearfix">
		            <img src="assets/images/accident.png" alt="Personal Accident" className="img-fluid" />
		            <p>Personal Accident</p>
		        </div>
              	</a>
			</div>

			</div>
		</div>
		<div className="col-md-4">
			<div className="right-video clearfix">
				<iframe width="100%" height="360" src="https://www.youtube.com/embed/ztEEORMu_3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>	
		</div>
	</div>

	<div className="row m-0 w-100 pt-4">
          <div className="col-lg-8 text-center">
            <a href="tel:9002430296" className="mt-1 mb-2 btn btn-main-form-continue">Confused ? Whats app your requisition:<span style={{padding: '0px 7px'}}><i className="fa fa-phone faa-tada animated" aria-hidden="true"></i></span>9002430296 
            </a>
          </div>
          <div className="col-lg-4 text-center">
            <a href="#" data-toggle="modal" data-target="#myModal4" className="mt-1 mb-2 btn btn-main-form-continue">Write to Us</a>
         
				<div className="modal fade" id="myModal4">
					<div className="modal-dialog">
					    <div className="modal-content">
					  
					       <div className="modal-body">
					       	<button type="button" className="close" data-dismiss="modal">&times;</button>
					          <div className="form-module">
         					 <h2 className="text-center">Keep in touch</h2>
			         		<form>
			    			<div className="form-row">
						      <div className="col-12">
						        <div className="form-group">
						        	<label for="usr">Name <span className="error">*</span></label>
						          <input type="text" className="form-control" placeholder="Enter Name" name="name2" />
						        </div>
						      </div>

						       <div className="col-12">
						        <div className="form-group">
						        	<label for="usr">Email <span className="error">*</span></label>
						          <input type="email" className="form-control" placeholder="Enter Email Address" name="email2" />
						        </div>
						      </div>
						     
						      <div className="col-12">
						        <div className="form-group">
						        <label for="usr">Phone No. <span className="error">*</span></label>
						        <input type="number" className="form-control" placeholder="Enter Phone number" name="phone2" />
						      </div>
						      </div>
						  
					      <div className="col-12">
					     	 <button className="btn btn-success btn-lg" type="submit">Submit</button>
					  	  </div>
			    		</div>
			  			</form>
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

<section className="pt-4 pb-5 px-advantage">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="row m-0 w-100">
          <div className="col-lg-12 py-4">
            <div className="product-heading"><span>Advantages of Skynet Serve</span>
            </div>
          </div>
          <div className="col-lg-12 pb-4 pt-4">
            <div className="row m-0 w-100">
              
              <div className="col-md-3 col-6 padd-home-0 pb-4 text-center px-1">
                <div className="clearfix">
                  <img src="assets/images/Made-In-India.png" alt="Lowest Price" className="img-fluid" width="100" height="100" />
                </div>
              </div>
              <div className="col-md-3 col-6 padd-home-0 pb-4 text-center px-1">
                <div className="clearfix">
                  <img src="assets/images/lowest-price-guaranteed.png" alt="100% Indian Ownership" className="img-fluid" width="100" height="100" />
                </div>
              </div>
              <div className="col-md-3 col-6 padd-home-0 pb-4 text-center px-1">
                <div className="clearfix">
                  <img src="assets/images/claim-support.png" alt="IRDAI Regulated" className="img-fluid" width="100" height="100" />
                </div>
              </div>
              <div className="col-md-3 col-6 padd-home-0 pb-4 text-center px-1">
                <div className="clearfix">
                  <img src="assets/images/irdai2.png" alt="Claim Support" className="img-fluid" width="100" height="100" />
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="partner-bg py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="m-0 p-0 main-section-heading">How <strong className="font-white">Skynet Serve</strong> Works ?</h2>
      </div>

      <div className="three-col-box">
      	<div className="row">
      		<div className="col-md-4">
      			<div className="grid-box clearfix">
      				<h3><span className="number">1</span>Take Service Directly</h3>
      				<p>Click on the service links and fill all the required fileds & get policy copy instally</p>
      			</div>
      		</div>
      		<div className="col-md-4">
      			<div className="grid-box clearfix">
      				<h3><span className="number">2</span>Informing</h3>
      				<p>Keep providing your kind informations for any confusion, general quiry, claim registration or any complain regarding our service</p>
      			</div>
      		</div>
      		<div className="col-md-4">
      			<div className="grid-box clearfix">
      				<h3><span className="number">3</span>Our Services</h3>
      				<p>Once you informed us regarding your requisition, we contact you as soon and try giving our best endeavour to sort out your problem.</p>
      			</div>
      		</div>
      	</div>
      </div>

      <div className="col-sm-12 pt-5">
        <div className="row m-0">
        		<div className="col-md-4">
        			
        		</div>
        		<div className="col-md-4">
        			
        		</div>
        	
        </div>
      </div>
    </div>
  </div>
</section>

<section className="partner-bg py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="m-0 p-0 main-section-heading">Our <strong className="font-white">Business Partner</strong></h2>
        <p className="mb-0 partner-sub-heading">Compare From Leading Insurers in India</p>
      </div>
      <div className="col-sm-12 pt-5">
        <div className="row m-0">
        		<div className="col-md-6">
        			<img src="assets/images/bazaz2.png" className="clearfix" alt="" />
        		</div>
        		<div className="col-md-6"> 
        			<img src="assets/images/bazaz3.png" className="clearfix" alt="" />
        		</div>
        	
        </div>
      </div>
    </div>
  </div>
</section>

            <Footer />
        </>
    );
}

export default Home;