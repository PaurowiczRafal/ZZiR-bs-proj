import Circles from './backgroundComponent/Circles'
import Navbar from './headerComponent/Navbar'
import HeroSection from './headingComponents/HeroSection'
function App() {
	return (
		<>
			<div className='wrapper-bg'>
				<Circles />
			</div>
			<Navbar />
			<header>
				<HeroSection />
			</header>
		</>
	)
}

export default App
