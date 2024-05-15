import React from 'react'

const Home = () => {
  return (
		<div>
			<section className='section-1' id='block-1'>
				<div className='section-1-left'>
					<h1>
						HI, I’M AMIN. <br /> A CREATIVE
						<img src='./img/section1_left_h1_img.svg' alt='' /> DESIGNER <br />
						BASED IN BISHKEK
					</h1>
					<h2>
						DESIGN &nbsp;
						<img src='./img/section1-left-h2-img.svg' alt='' /> &nbsp;
						DEVELOPMENT &nbsp;
						<img src='./img/section1-left-h2-img.svg' alt='' /> &nbsp; WEBFLOW
					</h2>
					<button id='section1-left-btn-1'>Got a project?</button>
					<button id='section1-left-btn-2'>Let's talk.</button>
				</div>
				<div className='section-1-right'>
					<img src='./img/section1-right-main-pic.png' alt='' />
				</div>
			</section>
		</div>
	)
}

export default Home
