import PortfolioCard from './components/PortfolioCard/PortfolioCard'
import './App.css'
import Experience from './components/Experience/Experience'
import EducationSection from './components/Education/Education'
import ContactForm from './components/ContactForm/ContactForm'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import TechStack from './components/TechStack/TechStack'

const projects = [
	{
		title: 'TODO App',
		description:
			'A full stack app for task management. Built with React, TypeScript, and Spring Boot with a MySQL database.',
		githubLink: 'https://github.com/rbalendra/todo-app',
	},
	{
		title: 'E-commerce Store',
		description:
			'An e-commerce application built with React and Google Firestore to fetch details in the backend.',
		githubLink: 'https://github.com/rbalendra/ecommerce-store',
	},
	{
		title: 'Google Books Search',
		description:
			'First react app built with Google Books API to search for books.',
		githubLink: 'https://github.com/rbalendra/google-books',
		demoLink: 'https://rbalendra.github.io/google-books',
	},
	{
		title: 'Employee Creator App (in progress)',
		description:
			'A full stack application to create and manage employee records. Built with React, TypeScript, and Spring Boot with a MySQL database.',
		githubLink: '',
	},
]

function App() {
	return (
		<div className='font-sans bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen text-slate-100'>
			<Navbar />
			<main className='max-w-6xl mx-auto px-6'>
				<Hero />

				<section id='techstack' className='py-1'>
					<TechStack />
				</section>
				<section id='experience' className='py-16'>
					<Experience />
				</section>
				<section id='education' className='py-16'>
					<EducationSection />
				</section>
				<section id='projects' className='max-w-6xl mx-auto mb-12 px-6 py-16'>
					<h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent'>
						Recent Projects
					</h2>
					<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
						{projects.map((p) => (
							<PortfolioCard key={p.title} {...p} />
						))}
					</div>
				</section>
				<section id='contact' className='py-16'>
					<ContactForm />
				</section>
			</main>
			<Footer />
		</div>
	)
}
export default App
