import { useState, useEffect } from 'react'
import { FaGraduationCap, FaLaptopCode, FaChartBar } from 'react-icons/fa'
import {
	getAllEducation,
	type Education,
} from '../../services/firestore-services'

// Icon mapping based on qualification type
const getEducationIcon = (qualification: string) => {
	if (qualification.toLowerCase().includes('data')) {
		return <FaChartBar className='w-8 h-8 text-orange-400' />
	}
	if (
		qualification.toLowerCase().includes('development') ||
		qualification.toLowerCase().includes('stack')
	) {
		return <FaLaptopCode className='w-8 h-8 text-orange-400' />
	}
	return <FaGraduationCap className='w-8 h-8 text-orange-400' />
}

export default function EducationSection() {
	const [education, setEducation] = useState<Education[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchEducation = async () => {
			try {
				const eduData = await getAllEducation()
				setEducation(eduData)
			} catch (error) {
				console.error('Error loading education:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchEducation()
	}, [])

	if (loading) {
		return (
			<section className='max-w-4xl mx-auto mb-12 px-6'>
				<h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
					Education
				</h2>
				<p className='text-center text-slate-600'>Loading education...</p>
			</section>
		)
	}

	return (
		<section className='max-w-4xl mx-auto mb-12 px-6'>
			<h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
				Education
			</h2>
			<div className='grid md:grid-cols-2 gap-8'>
				{education.map((edu) => (
					<div
						key={edu.id}
						className='group bg-white backdrop-blur-sm border border-slate-200 rounded-3xl p-8 hover:border-orange-400/50 hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:scale-100'>
						{/* Icon */}
						<div className='mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center'>
							<div className='w-20 h-16 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-2xl flex items-center justify-center border border-orange-400/20 group-hover:border-orange-400/40 transition-colors duration-300'>
								{getEducationIcon(edu.qualification)}
							</div>
						</div>

						{/* Content */}
						<div className='mb-4'>
							<h3 className='text-2xl font-bold text-slate-800 group-hover:text-orange-500 transition-colors duration-300 mb-2'>
								{edu.qualification}
							</h3>
							<p className='text-orange-500 font-semibold mb-1 text-xl'>
								{edu.institution}
							</p>
							<p className='text-slate-500 text-sm font-medium'>{edu.period}</p>
						</div>

						<p className='text-slate-600 leading-relaxed mb-6'>
							{edu.description}
						</p>

						{/* Skills */}
						{edu.skills && edu.skills.length > 0 && (
							<div className='flex flex-wrap gap-2 mb-4'>
								{edu.skills.map((skill) => (
									<span
										key={skill}
										className='px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-orange-400/50 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300'>
										{skill}
									</span>
								))}
							</div>
						)}

						{/* Decorative Element */}
						<div className='h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
					</div>
				))}
			</div>
		</section>
	)
}
