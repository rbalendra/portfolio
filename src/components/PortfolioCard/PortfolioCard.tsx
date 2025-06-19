import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Props {
	title: string
	description: string
	githubLink: string
	demoLink?: string
}

export default function PortfolioCard({
	title,
	description,
	githubLink,
	demoLink,
}: Props) {
	return (
		<div className='group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 flex flex-col justify-between hover:bg-slate-800/80 hover:border-orange-400/50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/20'>
			<div>
				<h3 className='text-2xl font-bold mb-4 text-slate-100 group-hover:text-orange-400 transition-colors duration-300'>
					{title}
				</h3>
				<p className='text-slate-400 mb-6 leading-relaxed'>{description}</p>
			</div>
			<div className='mt-auto flex space-x-4'>
				<a
					href={githubLink}
					target='_blank'
					rel='noopener noreferrer'
					className='inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-slate-300 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 font-medium'>
					<FaGithub className='w-4 h-4' />
					GitHub
				</a>
				{demoLink && (
					<a
						href={demoLink}
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-xl hover:from-pink-400 hover:to-orange-400 transition-all duration-300 font-medium shadow-lg'>
						<FaExternalLinkAlt className='w-4 h-4' />
						Live Demo
					</a>
				)}
			</div>
		</div>
	)
}
