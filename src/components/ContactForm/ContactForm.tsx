import React, { useState } from 'react'
import { HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { FaGithub, FaSpinner } from 'react-icons/fa'

export default function ContactForm() {
	const [form, setForm] = useState({ name: '', email: '', message: '' })
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => setForm({ ...form, [e.target.name]: e.target.value })

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)

		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 1000))

		console.log(form)
		alert("Thanks for reaching out! I'll get back to you soon.")
		setForm({ name: '', email: '', message: '' })
		setIsSubmitting(false)
	}

	return (
		<section className='max-w-4xl mx-auto px-6'>
			<div className='text-center mb-12'>
				<h2 className='text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
					Let's Work Together
				</h2>
				<p className='text-slate-400 text-lg max-w-2xl mx-auto'>
					Have a project in mind? I'd love to hear from you. Send me a message
					and let's discuss how we can bring your ideas to life.
				</p>
			</div>

			<div className='grid md:grid-cols-2 gap-12 items-center'>
				{/* Contact Info */}
				<div className='space-y-8'>
					<div className='flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-orange-400/50 transition-all duration-300'>
						<div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center'>
							<HiLocationMarker className='w-6 h-6 text-white' />
						</div>
						<div>
							<h3 className='text-white font-semibold'>Location</h3>
							<p className='text-slate-400'>Melbourne, Victoria</p>
						</div>
					</div>

					<div className='flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-orange-400/50 transition-all duration-300'>
						<div className='w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center'>
							<FaGithub className='w-6 h-6 text-white' />
						</div>
						<div>
							<h3 className='text-white font-semibold'>GitHub</h3>
							<p className='text-slate-400'>github.com/rbalendra</p>
						</div>
					</div>
				</div>

				{/* Contact Form */}
				<div className='bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-xl'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='group'>
							<label className='block text-sm font-medium text-slate-300 mb-2'>
								Your Name
							</label>
							<input
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder='John Smith'
								required
								className='w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all duration-300'
							/>
						</div>

						<div className='group'>
							<label className='block text-sm font-medium text-slate-300 mb-2'>
								Email Address
							</label>
							<input
								name='email'
								type='email'
								value={form.email}
								onChange={handleChange}
								placeholder='john@example.com'
								required
								className='w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all duration-300'
							/>
						</div>

						<div className='group'>
							<label className='block text-sm font-medium text-slate-300 mb-2'>
								Message
							</label>
							<textarea
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Tell me about your project...'
								rows={5}
								required
								className='w-full p-4 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 focus:outline-none transition-all duration-300 resize-none'
							/>
						</div>

						<button
							type='submit'
							disabled={isSubmitting}
							className='w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-orange-400 hover:to-pink-400 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 group'>
							{isSubmitting ? (
								<>
									<FaSpinner className='animate-spin w-5 h-5' />
									Sending...
								</>
							) : (
								<>
									<span>Send Message</span>
									<HiArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
