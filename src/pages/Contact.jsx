import React from 'react'

const Contact = () => {
  return (
		<div>
			<section className='section-4' id='block-3'>
				<footer>
					<div className='section-4-top'>
						<h2>Subscribe to our newsletter</h2>
						<input type='text' placeholder='Email Address' />
						<button>Subscribe</button>
					</div>
				</footer>
			</section>
			<section>
				<footer>
					<div className='section-4-bottom'>
						<img src='./img/section-5-footer-img.svg' alt='' />
						<div className='spans'>
							<span>Style Guide</span>
							<span>Licence</span>
							<span>Changelog</span>
						</div>

						<div className='section-4-logo'>
							<a href='https://www.facebook.com/zuck/' target='_blank'>
								<img src='./img/section-4-bottom-logo-1.svg' alt='' />
							</a>
							<a href='https://twitter.com/realDonaldTrump' target='_blank'>
								<img src='./img/section-4-bottom-logo-2.svg' alt='' />
							</a>
							<a href='https://www.instagram.com/991o2o9/' target='_blank'>
								<img src='./img/section-4-bottom-logo-3.svg' alt='' />
							</a>
						</div>
					</div>
				</footer>
			</section>
		</div>
	)
}

export default Contact
