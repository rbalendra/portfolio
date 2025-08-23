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
				<h2 className='text-4xl font-bold text-center mb-12 text-slate-800'>
					Recent Projects
				</h2>
				<p className='text-center text-slate-600'>Loading projects...</p>
			</section>
		)
	}

	return (
		<section className='max-w-6xl mx-auto mb-12 px-6 py-16'>
			<div className='text-center mb-16'>
				<h2 className='text-4xl md:text-5xl font-bold mb-4 text-slate-800'>
					Recent Projects
				</h2>
				<p className='text-xl text-slate-600 max-w-2xl mx-auto'>
					A collection of work that showcases my passion for creating beautiful,
					functional digital experiences
				</p>
			</div>

			<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project, index) => (
					<div
						key={project.id}
						className='group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-100 hover:-translate-y-2 transition-all duration-500 border border-slate-300'
						style={{ animationDelay: `${index * 0.1}s` }}>
						{/* Project Image */}
						{project.imageUrl ? (
							<div className='relative h-48 overflow-hidden'>
								<img
									src={project.imageUrl}
									alt={project.title}
									className='w-full h-full object-cover group-hover:scale-101 transition-transform duration-700'
									onError={(e) => {
										e.currentTarget.style.display = 'none'
									}}
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							</div>
						) : (
							<div className='relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center'>
								<div className='text-slate-400 text-5xl'>📁</div>
							</div>
						)}

						{/* Content */}
						<div className='p-6'>
							<h3 className='text-xl font-bold mb-3 text-slate-800 group-hover:text-orange-500 transition-colors duration-300'>
								{project.title}
							</h3>
							<p className='text-slate-600 mb-4 leading-relaxed text-sm'>
								{project.description}
							</p>

							{/* Technologies */}
							<div className='flex flex-wrap gap-2 mb-6'>
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className='px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium  hover:text-orange-600 transition-all duration-300'>
										{tech}
									</span>
								))}
							</div>

							{/* Buttons */}
							<div className='flex gap-3'>
								{project.githubUrl && (
									<a
										href={project.githubUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105'>
										<FaGithub className='w-3 h-3' />
										GitHub
									</a>
								)}
								{project.liveUrl && (
									<a
										href={project.liveUrl}
										target='_blank'
										className='inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl transition-all duration-300 text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105'>
										<FaExternalLinkAlt className='w-3 h-3' />
										Live Demo
									</a>
								)}
								{!project.githubUrl && !project.liveUrl && (
									<p className='text-slate-400 text-sm italic'>
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
