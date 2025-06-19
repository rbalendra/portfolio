const experiences = [
	{
		role: 'Full Stack Developer Graduate',
		company: 'Nology',
		period: '2025 March - Current',
		details:
			'Learning React, TypeScript, Java, Spring Boot, and modern web development practices. Building full-stack applications and mastering both frontend and backend technologies.',
		skills: [
			'React',
			'TypeScript',
			'Java',
			'Spring Boot',
			'SQL',
			'HTML',
			'CSS',
			'Tailwind CSS',
			'Git',
			'Agile Methodologies',
			'Problem Solving',
			'Collaboration',
		],
	},
	{
		role: 'Land Surveyor',
		company: 'Land Management Surveys/CAF Consulting',
		period: '2016 – 2024',
		details:
			'Delivered high-precision cadastral surveys under tight deadlines. Managed complex projects involving boundary determination, topographic mapping, and legal documentation.',
		skills: [
			'Project Management',
			'Technical Documentation',
			'Problem Solving',
			'Client Relations',
			'Attention to Detail',
		],
	},
]

export default function Experience() {
	return (
		<section className='max-w-4xl mx-auto mb-12 px-6'>
			<h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
				Experience
			</h2>
			<div className='space-y-8'>
				{experiences.map((exp, index) => (
					<div
						key={exp.role}
						className='group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-orange-400/50 transition-all duration-300 shadow-xl hover:shadow-orange-500/10'>
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
									<h3 className='text-2xl font-bold text-slate-100 group-hover:text-orange-400 transition-colors duration-300'>
										{exp.role}
									</h3>
									<p className='text-xl text-orange-400 font-semibold'>
										@ {exp.company}
									</p>
									<p className='text-slate-400 mt-1'>{exp.period}</p>
								</div>

								<p className='text-slate-300 leading-relaxed mb-6'>
									{exp.details}
								</p>

								{/* Skills */}
								<div className='flex flex-wrap gap-2'>
									{exp.skills.map((skill) => (
										<span
											key={skill}
											className='px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium border border-slate-600/50 hover:border-orange-400/50 hover:text-orange-400 transition-all duration-300'>
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
