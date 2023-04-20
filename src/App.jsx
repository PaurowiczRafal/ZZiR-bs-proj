import Circles from './components/backgroundComponent/Circles'
import Navigation from './components/navbarComponent/Navigation'
import CustomSection from './components/sectionComponents/CustomSection'
import Hero from './components/sectionComponents/heroSection/Hero'
import TrustedBy from './components/sectionComponents/trustedbySection/TrustedBy'
import Stats from './components/sectionComponents/statsSection/Stats'
import Testimonials from './components/sectionComponents/testimonialSection/Testimonials'
import Stroke from './components/sectionComponents/Stroke'
import AboutSection from './components/sectionComponents/aboutSection/AboutSection'
import './index.scss'

function App() {
	return (
		<>
			{/* <div className='wrapper-bg'>
				<Circles />
			</div> */}
			<Navigation />
			<CustomSection>
				<Hero />
			</CustomSection>
			<CustomSection>
				<TrustedBy />
			</CustomSection>
			<CustomSection>
				<Stats />
			</CustomSection>
			<CustomSection>
				<Testimonials />
			</CustomSection>
			<CustomSection>
			<Stroke/>
			</CustomSection>
			<CustomSection>
				<AboutSection/>
			</CustomSection>
		</>
	)
}

export default App
