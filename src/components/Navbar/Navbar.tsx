import { useState } from 'react'
import logoSvg from '../../assets/LOGO.svg'
import { HiMenu, HiX, HiDownload } from 'react-icons/hi'
import rajcv from '../../assets/Rajeev_CV.pdf'

const links = ['Experience', 'Education', 'Projects', 'Contact'] as const

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false) // this

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<nav className='sticky top-0 z-50 backdrop-blur-xl glass-effect  border-b border-slate-900'>
			<div className='max-w-6xl mx-auto flex items-center justify-between py-4 px-6'>
				{/* Logo */}
				<a
					href='#home'
					onClick={closeMenu}
					className='flex items-center gap-3 hover:scale-105 transition-transform duration-300'>
					<img src={logoSvg} alt='Rajeev Logo' className='w-12 h-12' />
					<span className='text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent'></span>
				</a>

				{/* Desktop Menu */}
				<ul className='hidden md:flex space-x-8'>
					{links.map((l) => (
						<li key={l}>
							<a
								href={`#${l.toLowerCase()}`}
								className='text-slate-700 hover:text-orange-500 transition-colors duration-300 font-bold relative group'>
								{l}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 group-hover:w-full transition-all duration-300'></span>
							</a>
						</li>
					))}
				</ul>

				{/* Desktop CV Button */}
				<a
					href={rajcv}
					download
					className='hidden md:inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 font-medium shadow-lg'>
					<HiDownload className='w-4 h-4' />
					Download CV
				</a>

				{/* Mobile Hamburger Button */}
				<button
					onClick={toggleMenu}
					className='md:hidden p-2 text-slate-700 hover:text-orange-500 transition-colors duration-300'
					aria-label='Toggle menu'>
					{isMenuOpen ? (
						<HiX className='w-6 h-6' />
					) : (
						<HiMenu className='w-6 h-6' />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden transition-all duration-300 ease-in-out ${
					isMenuOpen
						? 'max-h-96 opacity-100'
						: 'max-h-0 opacity-0 overflow-hidden'
				}`}>
				<div className='bg-white/90 backdrop-blur-lg border-t border-slate-200'>
					<ul className='py-4 space-y-1'>
						{links.map((l) => (
							<li key={l}>
								<a
									href={`#${l.toLowerCase()}`}
									onClick={closeMenu}
									className='block px-6 py-3 text-slate-700 hover:text-orange-500 hover:bg-slate-50 transition-all duration-300 font-medium'>
									{l}
								</a>
							</li>
						))}
						{/* Mobile CV Button */}
						<li className='px-6 pt-4'>
							<a
								href={rajcv}
								download
								onClick={closeMenu}
								className='flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-all duration-300 font-medium shadow-lg w-full'>
								<HiDownload className='w-4 h-4' />
								Download CV
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
