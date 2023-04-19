import Circles from './components/backgroundComponent/Circles'
import Navigation from './components/navbarComponent/Navigation'
import CustomSection from './components/sectionComponents/CustomSection'
import Hero from './components/sectionComponents/heroSection/Hero'
import TrustedBy from './components/sectionComponents/trustedBy/TrustedBy'
import Stats from './components/sectionComponents/statsSection/Stats'
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
      <CustomSection>
        <TrustedBy />
      </CustomSection>
      <CustomSection>
        <Stats />
      </CustomSection>
      
		</>
	)
}

export default App
