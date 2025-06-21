import { useState, useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { getAllProjects, type Project } from '../../services/firestore-services'

export default function PortfolioCard() {
	const [projects, setProjects] = useState<Project[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const projectData = await getAllProjects()
				setProjects(projectData)
			} catch (error) {
				console.error('Error loading projects:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchProjects()
	}, [])

	if (loading) {
		return (
			<section className='max-w-6xl mx-auto mb-12 px-6 py-16'>
				<h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
					Recent Projects
				</h2>
				<p className='text-center text-slate-400'>Loading projects...</p>
			</section>
		)
	}

	return (
		<section className='max-w-6xl mx-auto mb-12 px-6 py-16'>
			<h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
				Recent Projects
			</h2>
			<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project) => (
					<div
						key={project.id}
						className='group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:bg-slate-800/80 hover:border-orange-400/50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/20'>
						{/* Project Image - IMPROVED VERSION */}
						{project.imageUrl ? (
							<div className='relative h-80 overflow-hidden'>
								<img
									src={project.imageUrl}
									alt={project.title}
									className='w-full h-full object-cover group-hover:scale-100 transition-transform duration-300'
									onError={(e) => {
										// Hide image if it fails to load
										e.currentTarget.style.display = 'none'
									}}
								/>
								<div className='absolute inset-0'></div>
							</div>
						) : (
							// Placeholder when no image
							<div className='relative h-56 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center'>
								{' '}
								{/* Changed from h-48 to h-56 */}
								<div className='text-slate-400 text-6xl'>📁</div>
								<div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent'></div>
							</div>
						)}

						{/* Content */}
						<div className='p-8'>
							<h3 className='text-2xl font-bold mb-4 text-slate-100 group-hover:text-orange-400 transition-colors duration-300'>
								{project.title}
							</h3>
							<p className='text-slate-400 mb-4 leading-relaxed'>
								{project.description}
							</p>

							{/* Technologies */}
							<div className='flex flex-wrap gap-2 mb-6'>
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-600/50 hover:border-orange-400/50 hover:text-orange-400 transition-all duration-300'>
										{tech}
									</span>
								))}
							</div>

							{/* Buttons */}
							<div className='flex flex-wrap gap-3'>
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-4 py-2 bg-slate-700/70 border-orange-500 text-slate-300 rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm font-medium border hover:border-orange-400'>
										<FaGithub className='w-3 h-3' />
										GitHub
									</a>
								)}
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/80 to-orange-500/80 text-white rounded-lg hover:from-pink-500 hover:to-orange-500 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg'>
										<FaExternalLinkAlt className='w-3 h-3' />
										Live Demo
									</a>
								)}
								{!project.githubUrl && !project.liveUrl && (
									<p className='text-slate-500 text-sm italic'>
										Links coming soon...
									</p>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
