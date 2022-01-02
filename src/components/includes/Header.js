import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
<header className="header-section">
	<nav className="navbar navbar-expand-lg navbar-light sticky-top">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="assets/images/logo.png" alt="" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile_nav" aria-controls="mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span> 
        </button>
        <div className="collapse navbar-collapse" id="mobile_nav">
        
        <ul className="navbar-nav navbar-light">
            <li className="nav-item dropdown megamenu-li dmenu">
                <a className="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Others Insurance</a>
                <div className="dropdown-menu megamenu sm-menu border-top" aria-labelledby="dropdown01">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link className="dropdown-item" to="/">Marine Insurance</Link>
                            <Link className="dropdown-item" to="/">Fire Insurance</Link>
                            <Link className="dropdown-item" to="/">My Home Insurance</Link>
                        </div>
                       <div className="col-lg-3 col-md-4 col-sm-6">
                            <Link className="dropdown-item" to="/">Shop Keeper Insurance</Link>
                            <Link className="dropdown-item" to="/">Doctors Indemnity Insurance</Link>
                            <Link className="dropdown-item" to="/">Employee Compensation</Link>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <Link className="dropdown-item" to="/">Plant & Machinery Insurance</Link>
                            <Link className="dropdown-item" to="/">Electronics Item Extended Warranty Insurance</Link>
                        </div>
                    </div>
                </div>
            </li>
          
              <li className="nav-item dropdown megamenu-li dmenu">
                <a className="nav-link dropdown-toggle" href="#" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Inform to Us</a>
                <div className="dropdown-menu megamenu sm-menu border-top" aria-labelledby="dropdown02">
                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <Link className="dropdown-item" to="/">General Queries</Link>
                        </div>
                       <div className="col-sm-6 col-lg-4">
                            <Link className="dropdown-item" to="/">Claim Registration</Link>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <Link className="dropdown-item" to="/">Complain Launch</Link>
                        </div>
                    </div>
                </div>
            </li>

            <li className="nav-item"><Link className="nav-link" to="/partner-registration">New Partner Registration</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/">Partner Login</Link></li>
        </ul>
        </div>
    </div>
</nav>
</header>
        </>
    );
}

export default Header;