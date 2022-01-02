import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
           <footer className="mainfooter" role="contentinfo">
  <div className="footer-middle">
  <div className="container">
  	<div className="footer-top">
  		<div className="row">
      <div className="col-md-3 col-sm-12">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Health Insurance</h4>
          <ul className="list-unstyled">
            <li><Link to="/"></Link></li>
            <li><Link to="/">Family Health Insurance</Link></li>
            <li><Link to="/">Critical Illness Insurance</Link></li>
            <li><Link to="/">Health Top-Up Plan</Link></li>
            <li><Link to="/">Senior Citizen Insurance</Link></li>
            <li><Link to="/">Individual Health Insurance</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Life Insurance</h4>
          <ul className="list-unstyled">
            <li><Link to="/">Child Plan</Link></li>
            <li><Link to="/">Investment Plans</Link></li>
            <li><Link to="/">Pension Plans</Link></li>
            <li><Link to="/">ULIP Plans</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        {/* <!--Column1--> */}
        <div className="footer-pad">
          <h4>Important Links</h4>
          <ul className="list-unstyled">
            <li><Link to="/">Network Hospitals</Link></li>
            <li><Link to="/">Best Health Insurance Plans</Link></li>
            <li><Link to="/">Health Insurance Companies</Link></li>
            <li><Link to="/">Health Insurance Calculator</Link></li>
            <li><Link to="/">Life Insurance Companies</Link></li>
            <li><Link to="/">Best Term Insurance Plans</Link></li>
            <li><Link to="/">Mediclaim Policy</Link></li>
          </ul>
        </div>
      </div>
    	<div className="col-md-3 col-sm-12">
    		<h4>Follow Us</h4>
            <ul className="social-network social-circle">
             <li><Link to="/" className="icoFacebook" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
             <li><Link to="/" className="icoWhatsapp" title="Whatsapp"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link></li>
            </ul>				
		</div>
      </div>
  	</div>
    
	<div className="row">
		<div className="col-md-12 copy">
			<p className="text-center">&copy; Copyright 2021 - Skynet serve.  All rights reserved.</p>
		</div>
	</div>

  </div>
  </div>
</footer>
        </>
    );
}

export default Footer;