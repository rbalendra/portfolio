import {
	FaCss3Alt,
	FaGitAlt,
	FaHtml5,
	FaJava,
	FaPython,
	FaReact,
} from 'react-icons/fa'
import {
	SiJavascript,
	SiMysql,
	SiSpringboot,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'

const technologies = [
	{
		name: 'React',
		icon: <FaReact className='w-8 h-8 text-[#61DAFB]' />,
	},
	{
		name: 'TypeScript',
		icon: <SiTypescript className='w-8 h-8 text-[#3178C6]' />,
	},
	{
		name: 'JavaScript',
		icon: <SiJavascript className='w-8 h-8 text-[#F7DF1E]' />,
	},

	{
		name: 'Java',
		icon: <FaJava className='w-8 h-8 text-[#007396]' />,
	},
	{
		name: 'Spring Boot',
		icon: <SiSpringboot className='w-8 h-8 text-[#6DB33F]' />,
	},
	{
		name: 'Python',
		icon: <FaPython className='w-8 h-8 text-[#3776AB]' />,
	},
	{
		name: 'SQL',
		icon: <SiMysql className='w-8 h-8 text-[#4479A1]' />,
	},
	{
		name: 'HTML',
		icon: <FaHtml5 className='w-8 h-8 text-[#E34F26]' />,
	},
	{
		name: 'CSS',
		icon: <FaCss3Alt className='w-8 h-8 text-[#1572B6]' />,
	},
	{
		name: 'Tailwind',
		icon: <SiTailwindcss className='w-8 h-8 text-[#06B6D4]' />,
	},
	{
		name: 'Git',
		icon: <FaGitAlt className='w-8 h-8 text-[#F05032]' />,
	},
]

export default function TechStack() {
	return (
		<section className='py-16 overflow-hidden'>
			<div className='max-w-6xl mx-auto px-6 mb-12 text-center'>
				<h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
					Technologies I Work With
				</h2>
				<p className='text-slate-400 text-lg'>
					Constantly learning and building with modern technologies
				</p>
			</div>
			{/* Scrolling container */}
			<div className='relative'>
				{/* Gradient overlays */}
				{/* <div className='absolute left-0 top-0 w-50 h-full bg-gradient-to-r from-slate-900  to-transparent z-10'></div> */}
				<div className='absolute left-0 top-0 w-50  z-10'></div>
				<div className='absolute right-0 top-0 w-50 z-10 '></div>

				{/* Scrolling track */}
				<div className='flex animate-scroll'>
					{/* First set */}
					{technologies.map((tech, index) => (
						<div
							key={`first-${index}`}
							className='flex-shrink-0 mx-4 w-30 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 group'>
							<div className='text-center'>
								<div className='text-4xl mb-3 group-hover:scale-150 transition-transform duration-300 flex justify-center items-center'>
									{tech.icon}
								</div>
								<span className='text-slate-300 font-medium group-hover:text-orange-400 transition-colors duration-300 flex justify-center items-center'>
									{tech.name}
								</span>
							</div>
						</div>
					))}
					{/* Duplicate set for seamless loop */}
					{technologies.map((tech, index) => (
						<div
							key={`second-${index}`}
							className='flex-shrink-0 mx-4 w-30 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 group'>
							<div className='text-center'>
								<div className='text-4xl mb-3 group-hover:scale-150 transition-transform duration-300 flex justify-center items-center'>
									{tech.icon}
								</div>
								<span className='text-slate-300 font-medium group-hover:text-orange-400 transition-colors duration-300 flex justify-center items-center'>
									{tech.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
