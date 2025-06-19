const education = [
	{
		school: 'Swinburne University',
		qualification: 'Post Graduate Certificate in Data Analytics',
		year: '2023',
		description:
			'Advanced statistical analysis, machine learning, and data visualisation techniques with Tableau & Power BI.',
		icon: '📊',
	},
	{
		school: '_Nology',
		qualification: 'Full-Stack Development',
		year: '2025 March - Current',
		description:
			'Comprehensive training in modern web technologies, software engineering practices, and agile development. Focused on building scalable, user-friendly applications using React, TypeScript, and Springboot.',
		icon: '💻',
	},
]

export default function EducationSection() {
	return (
		<section className='max-w-4xl mx-auto mb-12 px-6'>
			<h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
				Education
			</h2>
			<div className='grid md:grid-cols-2 gap-8'>
				{education.map((edu) => (
					<div
						key={edu.school}
						className='group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-orange-400/50 transition-all duration-300 shadow-xl hover:shadow-orange-500/10 transform hover:scale-105'>
						{/* Icon */}
						<div className='text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300'>
							{edu.icon}
						</div>

						{/* Content */}
						<div className='mb-4'>
							<h3 className='text-xl font-bold text-slate-100 group-hover:text-orange-400 transition-colors duration-300 mb-2'>
								{edu.qualification}
							</h3>
							<p className='text-orange-400 font-semibold mb-1'>{edu.school}</p>
							<p className='text-slate-400 text-sm font-medium'>{edu.year}</p>
						</div>

						<p className='text-slate-300 leading-relaxed'>{edu.description}</p>

						{/* Decorative Element */}
						<div className='mt-6 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
					</div>
				))}
			</div>
		</section>
	)
}
