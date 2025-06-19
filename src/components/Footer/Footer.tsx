import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

export default function Footer() {
	return (
		<footer className='bg-slate-900/80 backdrop-blur-lg border-t border-slate-700/50 py-12 mt-16'>
			<div className='max-w-6xl mx-auto px-6'>
				<div className='grid md:grid-cols-3 gap-8 mb-8'>
					{/* Brand Section */}
					<div className='text-center md:text-left'>
						<h3 className='text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent mb-4'>
							Rajeev Balendra
						</h3>
						<p className='text-slate-400 leading-relaxed'>
							Full-Stack Developer passionate about creating amazing digital
							experiences.
						</p>
					</div>

					{/* Quick Links */}
					<div className='text-center'>
						<h4 className='text-lg font-semibold text-slate-200 mb-4'>
							Quick Links
						</h4>
						<ul className='space-y-2'>
							{['Experience', 'Projects', 'Contact'].map((link) => (
								<li key={link}>
									<a
										href={`#${link.toLowerCase()}`}
										className='text-slate-400 hover:text-orange-400 transition-colors duration-300'>
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social Links */}
					<div className='text-center md:text-right'>
						<h4 className='text-lg font-semibold text-slate-200 mb-4'>
							Connect
						</h4>
						<div className='flex justify-center md:justify-end space-x-4'>
							<a
								href='https://github.com/rbalendra'
								target='_blank'
								rel='noopener noreferrer'
								className='w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-110'>
								<FaGithub className='w-5 h-5' />
							</a>
							<a
								href='https://linkedin.com/in/rajeevbalendra'
								target='_blank'
								rel='noopener noreferrer'
								className='w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110'>
								<FaLinkedin className='w-5 h-5' />
							</a>
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='border-t border-slate-700/50 pt-8 text-center'>
					<p className='text-slate-400 flex items-center justify-center gap-2'>
						© {new Date().getFullYear()} Rajeev Balendra. Crafted with
						<FaHeart className='text-red-400 w-4 h-4' />
						using React & Tailwind CSS
					</p>
				</div>
			</div>
		</footer>
	)
}
