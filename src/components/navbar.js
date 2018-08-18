import React from 'react';

const Navbar = (props) => {
	return(
		<React.Fragment>
			<nav className="transparent z-depth-0">
			<div className="nav-wrapper">
			<a href="#home" className="brand-logo black-text">Bears</a>
			<a href="#home" data-target="mobile-demo" className="sidenav-trigger"><i className="md-18 black-text material-icons">menu</i></a>
			<ul className="right hide-on-med-and-down">
				<li><a href="#team" className="black-text">Team</a></li>
				<li><a href="#news" className="black-text">News</a></li>
				<li><a href="#schedule" className="black-text">Schedule</a></li>
				<li><a href="#contact" className="black-text">Contact</a></li>
			</ul>
			</div>
		</nav>
		
		<ul className="sidenav" id="mobile-demo">
			<li><a href="#team" className="black-text">Team</a></li>
			<li><a href="#news" className="black-text">News</a></li>
			<li><a href="#schedule" className="black-text">Schedule</a></li>
			<li><a href="#contact" className="black-text">Contact</a></li>
		</ul>
	  </React.Fragment>
		)
}

export default Navbar;