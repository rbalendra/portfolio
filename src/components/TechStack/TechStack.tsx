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
		icon: <FaReact className='w-12 h-12 text-[#61DAFB]' />,
	},
	{
		name: 'TypeScript',
		icon: <SiTypescript className='w-12 h-12 text-[#3178C6]' />,
	},
	{
		name: 'JavaScript',
		icon: <SiJavascript className='w-12 h-12 text-[#F7DF1E]' />,
	},
	{
		name: 'Java',
		icon: <FaJava className='w-12 h-12 text-[#007396]' />,
	},
	{
		name: 'Spring Boot',
		icon: <SiSpringboot className='w-12 h-12 text-[#6DB33F]' />,
	},
	{
		name: 'SQL',
		icon: <SiMysql className='w-12 h-12 text-[#4479A1]' />,
	},
	{
		name: 'HTML',
		icon: <FaHtml5 className='w-12 h-12 text-[#E34F26]' />,
	},
	{
		name: 'CSS',
		icon: <FaCss3Alt className='w-12 h-12 text-[#1572B6]' />,
	},
	{
		name: 'Tailwind',
		icon: <SiTailwindcss className='w-12 h-12 text-[#06B6D4]' />,
	},
	{
		name: 'Git',
		icon: <FaGitAlt className='w-12 h-12 text-[#F05032]' />,
	},
]

export default function TechStack() {
	return (
		<section className='py-16 overflow-hidden bg-slate-50/50'>
			<div className='max-w-6xl mx-auto px-6 mb-16 text-center'>
				<h2 className='text-4xl md:text-5xl font-bold mb-4 text-slate-800'>
					Technologies I Work With
				</h2>
				<p className='text-slate-600 text-lg'>
					Constantly learning and building with modern technologies
				</p>
			</div>

			{/* Scrolling container */}
			<div className='relative overflow-hidden'>
				{/* Left gradient fade */}
				<div className='absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none'></div>

				{/* Right gradient fade */}
				<div className='absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none'></div>

				{/* Scrolling track - key changes here */}
				<div className='flex animate-scroll whitespace-nowrap'>
					{/* First set */}
					{technologies.map((tech, index) => (
						<div
							key={`first-${index}`}
							className='flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer mx-8 w-32'>
							<div className='mb-3 group-hover:scale-110 transition-transform duration-300 opacity-70 group-hover:opacity-100'>
								{tech.icon}
							</div>
							<span className='text-slate-600 font-medium text-sm group-hover:text-slate-800 transition-colors duration-300 whitespace-nowrap'>
								{tech.name}
							</span>
						</div>
					))}
					{/* Duplicate set for seamless loop */}
					{technologies.map((tech, index) => (
						<div
							key={`second-${index}`}
							className='flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer mx-8 w-32'>
							<div className='mb-3 group-hover:scale-110 transition-transform duration-300 opacity-70 group-hover:opacity-100'>
								{tech.icon}
							</div>
							<span className='text-slate-600 font-medium text-sm group-hover:text-slate-800 transition-colors duration-300 whitespace-nowrap'>
								{tech.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
