import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
		<div>
			<div className='container'>
				<header>
					<img src='./img/nav-bar-logo.svg' alt='' class='logo' />
					<nav class='animated-nav'>
						<Link to={"/home"}>
							<span>Home</span>
						</Link>
						<Link to={"/about"}>
							<span>About</span>
						</Link>
						<Link to={"/contact"}>
							<span>Contact</span>
						</Link>
					</nav>
					<div>
						<button id='nav_btn_1'>Let's talk</button>
					</div>
				</header>
			</div>
		</div>
	)
}

export default Navbar
