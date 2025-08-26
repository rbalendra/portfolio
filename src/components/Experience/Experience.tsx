import { useState, useEffect } from 'react'
import {
	getAllExperiences,
	type Experience,
} from '../../services/firestore-services'

export default function Experience() {
	const [experiences, setExperiences] = useState<Experience[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchExperiences = async () => {
			console.log('Fetching experiences...')
			try {
				const expData = await getAllExperiences()
				console.log('Fetched experiences:', expData)
				setExperiences(expData)
			} catch (error) {
				console.error('Error loading experiences:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchExperiences()
	}, [])

	if (loading) {
		return (
			<section className='max-w-4xl mx-auto mb-12 px-6'>
				<h2 className='text-4xl font-bold text-center mb-12 text-slate-800'>
					Experience
				</h2>
				<p className='text-center text-slate-600'>Loading experiences...</p>
			</section>
		)
	}

	return (
		<section className='max-w-4xl mx-auto mb-12 px-6'>
			<h2 className='text-4xl md:text-5xl font-bold mb-4 text-slate-800 text-center py-5'>
				Experience
			</h2>
			<div className='space-y-8'>
				{experiences.map((exp, index) => (
					<div
						key={exp.id}
						className='group bg-white backdrop-blur-sm border border-slate-200 rounded-3xl p-8 hover:border-orange-400/50 hover:shadow-2xl transition-all duration-300 shadow-lg'>
						<div className='flex flex-col md:flex-row md:items-start gap-6'>
							{/* Timeline Indicator */}
							<div className='flex-shrink-0'>
								<div className='w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg'>
									{index + 1}
								</div>
							</div>

							{/* Content */}
							<div className='flex-1'>
								<div className='mb-4'>
									<h3 className='text-2xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors duration-300'>
										{exp.role}
									</h3>
									<p className='text-xl text-orange-500 font-semibold'>
										@ {exp.company}
									</p>
									<p className='text-slate-500 mt-1'>{exp.period}</p>
								</div>

								<p className='text-slate-600 leading-relaxed mb-6'>
									{exp.details}
								</p>

								{/* Skills */}
								<div className='flex flex-wrap gap-2'>
									{exp.skills.map((skill) => (
										<span
											key={skill}
											className='px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-orange-400/50 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300'>
											{skill}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
