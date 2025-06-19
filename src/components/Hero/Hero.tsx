import heroImage from '../../assets/hero.png'

export default function Hero() {
	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center relative overflow-hidden'>
			{/* Animated background elements */}
			<div className='absolute inset-0 opacity-10'>
				<div className='absolute top-1/4 left-1/4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000'></div>
				<div className='absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000'></div>
			</div>

			<div className='max-w-6xl mx-auto px-6 relative z-10'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					{/* Text Content */}
					<div className='text-center md:text-left order-2 md:order-1'>
						<h1 className='text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-400 bg-clip-text text-transparent leading-25'>
							Hey, I'm Rajeev
						</h1>
						<p className='text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl'>
							Aspiring Full-Stack Dev & ex-Land Surveyor from Melbourne blending
							the passion for technology and user experience with code.
							Currently transforming ideas into digital reality at Nology.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
							<a
								href='#projects'
								className='group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold hover:from-orange-400 hover:to-pink-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25'>
								<span>View My Work</span>
								<svg
									className='w-5 h-5 group-hover:translate-x-1 transition-transform'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17 8l4 4m0 0l-4 4m4-4H3'
									/>
								</svg>
							</a>
							<a
								href='#contact'
								className='inline-flex items-center justify-center gap-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 px-8 py-4 rounded-2xl font-semibold hover:border-orange-400/50 hover:text-orange-400 transform hover:scale-105 transition-all duration-300'>
								<span>Get In Touch</span>
							</a>
						</div>
					</div>

					{/* Image */}
					<div className='flex justify-center order-1 md:order-2'>
						<div className='relative'>
							{/* Glowing effect behind image */}
							<div className='absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-2xl opacity-20 scale-110'></div>
							<img
								src={heroImage}
								alt='Rajeev'
								className='relative w-150 shadow-2xl border-1 rounded-xl border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
