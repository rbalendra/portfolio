import './App.css'
import Experience from './components/Experience/Experience'
import EducationSection from './components/Education/Education'
import ContactForm from './components/ContactForm/ContactForm'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'
import TechStack from './components/TechStack/TechStack'
import PortfolioCard from './components/PortfolioCard/PortfolioCard'

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
				<section id='projects'>
					<PortfolioCard />
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
