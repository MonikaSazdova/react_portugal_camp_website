import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {

	//change menu buttun from burger to x
	//set state with new variable called click
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	//function that updates the state
	const handleClick = () => setClick(!click);
	//function that will close the menu on mobile
	const closeMobileMenu = () => setClick(false);
	//function that will remove the btn and displayes it depending on the screen size
	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	
	// sign button won't show every time we refresh the site
	useEffect(() => {
		showButton()
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					{/* brand logo */}
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<i class="fas fa-campground"></i>
						<span className="logo-text">P-CAMP</span>
					</Link> 
					{/* menu burger button */}
					<div className="menu-icon" onClick={handleClick}>
						{/* change menu buttun from burger to x (toggle)*/}
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
					</div>
					{/* nav menu dissapears when cliked */}
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to="/" className="nav-links" onClick={closeMobileMenu}>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to="/services" className="nav-links" onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className='nav-item'>
							<Link to="/gallery" className="nav-links" onClick={closeMobileMenu}>
								Gallery
							</Link>
						</li>
						{/* <li className='nav-item'>
							<Link to="/book" className="nav-links" onClick={closeMobileMenu}>
								Sign Up
							</Link>
						</li> */}
					</ul>
					{ button && <Button buttonStyle='btn--outline'>Book Now</Button>}
				</div>
			</nav>
		</>
	)
}

export default Navbar;
