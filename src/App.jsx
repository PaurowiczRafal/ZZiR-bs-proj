import Circles from './backgroundComponent/Circles'
import Navbar from './headerComponent/Navbar'
import HeroSection from './headingComponents/HeroSection'
function App() {
  return <>
  <Navbar />
  <header>
    <div className="wrapper-bg">
    <Circles />
    </div>
    <HeroSection />
  </header>
  </>
}

export default App
