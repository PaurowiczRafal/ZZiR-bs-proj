import Circles from './components/backgroundComponent/Circles'
import Navigation from './components/navbarComponent/Navigation'
import CustomSection from './components/sectionComponents/CustomSection'
import Hero from './components/sectionComponents/HeroSection/Hero'

import './index.scss'

function App() {
	return (
		<>
			{/* <div className='wrapper-bg'>
				<Circles />
			</div> */}
			<Navigation />
			<CustomSection>	
        <Hero/>
			</CustomSection>
		</>
	)
}

export default App
