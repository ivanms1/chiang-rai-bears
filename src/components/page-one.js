import React from 'react';
import Navbar from './navbar.js';

const PageOne = (props) => {
	return(
			<div className="page-one-navbar">
				<Navbar/>
				<div className="page-one">
				<div className="logo-container">
					<img src="./images/logo2.png" alt="" className="logo"/>
				</div>
				<div className="motto-container">
					<h1 className="motto">Chiang Rai Bears</h1>
					<p>For King & Country</p>
				</div>
				</div>
			</div>
		)
}

export default PageOne;