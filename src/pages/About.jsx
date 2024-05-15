import React from 'react'

const About = () => {
  return (
		<div>
			<section className='section-2' id='block-2'>
				<div className='section-2-top'>
					<span>
						DEVELOPMENT
						<img src='./img/section1-left-h2-img.svg' alt='' /> STRATEGY
						<img src='./img/section1-left-h2-img.svg' alt='' /> PRODUCT DESIGN
						<img src='./img/section1-left-h2-img.svg' alt='' /> MOTION GRAPHIC
						<img src='./img/section1-left-h2-img.svg' alt='' /> ART DIRECTION
						<img src='./img/section1-left-h2-img.svg' alt='' /> DESIGN
						<img src='./img/section1-left-h2-img.svg' alt='' /> BRANDING
					</span>
				</div>

				<div className='section-2-mid'>
					<div className='section-2-mid-left'>
						<h3>
							AMIN
							<img src='./img/section1-left-h2-img.svg' alt='' /> SOLTOBEKOV
						</h3>
						<h4>
							Lead product <br /> designer and <br /> art director.
						</h4>
					</div>

					<div className='section-2-mid-right'>
						<div className='section-2-mid-right-top'>
							<span>
								Graduated from Harvard in 2018 with honors, served as a team
								leader for large groups, and gained invaluable experience
								through opportunities at industry leaders such as Google and
								Facebook.
							</span>
						</div>
						<div className='section-2-mid-right-mid'>
							<span>
								Founder and CEO of InnovateX Inc., a pioneering tech company
								revolutionizing the industry.
							</span>
						</div>
					</div>
				</div>
				<div className='section-2-bottom'>
					<button className='border-btn'>
						<h3>7+</h3>
						<span>Years of Experience</span>
					</button>
					<button className='border-btn' id='border-btn-black'>
						<h3>50+</h3>
						<span>Project Completed</span>
					</button>
					<button className='border-btn'>
						<h3>30+</h3>
						<span>Happy Clients</span>
					</button>
				</div>
			</section>
      {/* код для secnd части */}
			<section className='section-3'>
				<div className='section-3-top'>
					<img src='./img/section-3-top-img.svg' alt='' />
					<h5>Services</h5>
					<p>REGONITIONS & ACCOIMPLISHMENTS</p>
				</div>
				<div className='section-3-bottom-cards-top'>
					<div className='section-3-bottom-card1'>
						<h6>Web Design</h6>
						<p>
							Every single project is a challenge that we accept <br /> eagerly.
							Let’s implement innovative ideas together!
						</p>
					</div>
					<div className='section-3-bottom-card2'>
						<h6>Product Design</h6>
						<p>
							Every single project is a challenge that we accept <br /> eagerly.
							Let’s implement innovative ideas together!
						</p>
					</div>
				</div>
				<div className='section-3-bottom-cards-bottom'>
					<div className='section-3-bottom-card3'>
						<h6>UI/UX Design</h6>
						<p>
							Every single project is a challenge that we accept <br /> eagerly.
							Let’s implement innovative ideas together!
						</p>
					</div>
					<div className='section-3-bottom-card4'>
						<h6>Art Direction</h6>
						<p>
							Every single project is a challenge that we accept <br /> eagerly.
							Let’s implement innovative ideas together!
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default About
