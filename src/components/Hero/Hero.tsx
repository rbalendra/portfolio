import heroImage from '../../assets/hero.png'

export default function Hero() {
	return (
		<section
			id='home'
			className='min-h-screen flex items-center justify-center relative overflow-hidden'>
			{/* Animated background elements */}
			<div className='absolute inset-0 opacity-20'>
				<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-red-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse'></div>
				<div className='absolute top-1/3 right-1/4 w-96 h-9 bg-red-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000'></div>
				<div className='absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000'></div>
			</div>

			<div className='max-w-6xl mx-auto px-6 relative z-10'>
				<div className='grid md:grid-cols-2 gap-12 items-center'>
					{/* Text Content */}
					<div className='text-center md:text-left order-2 md:order-1'>
						<h1 className='text-7xl md:text-8xl font-bold mb-8 text-slate-800 leading-tight'>
							Hey, I'm{' '}
							<span className='relative inline-block group cursor-pointer'>
								<span className='bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 bg-clip-text text-transparent transition-all duration-500 group-hover:from-pink-500 group-hover:via-orange-500 group-hover:to-pink-500'>
									Rajeev
								</span>
								<span className='absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-500 ease-out'></span>
							</span>
						</h1>

						{/* Subtitle with hover effect like the reference site */}
						<div className='mb-8 text-xl md:text-2xl text-slate-600 font-medium'>
							<div className='relative inline-block group cursor-pointer'>
								<span className='transition-opacity duration-300 group-hover:opacity-0'>
									Aspiring Full-Stack Developer
								</span>
								<span className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent font-semibold'>
									Focused on function. Driven by design.
								</span>
							</div>
						</div>

						<p className='text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl'>
							Ex-Land Surveyor from Melbourne blending passion for technology
							and user experience with code. Currently transforming ideas into
							digital reality at Nology.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
							<a
								href='#projects'
								className='group inline-flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-slate-800 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl'>
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
								className='inline-flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-semibold hover:border-orange-400 hover:text-orange-500 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-lg'>
								<span>Get In Touch</span>
							</a>
						</div>
					</div>

					{/* Image */}
					<div className='flex justify-center order-1 md:order-2'>
						<div className='relative animate-float'>
							{/* Glowing effect behind image */}
							<div className='absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur-2xl opacity-30 scale-110'></div>
							<img
								src={heroImage}
								alt='Rajeev'
								className='relative w-80 md:w-300 rounded-2xl shadow-2xl border-4 border-white hover:scale-105 transition-all duration-500'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
