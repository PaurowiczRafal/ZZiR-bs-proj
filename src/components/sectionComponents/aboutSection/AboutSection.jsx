import './AboutSection.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AboutHeading from './AboutHeading'
import About from './About'

const AboutSection = () => {
	return (
		<>
			<Container className='section__container'>
				<Row>
					<AboutHeading />
				</Row>
			</Container>
			<Container className='about__conntainer'>
				<div className='container__bg'>
					<Row className='about__content'>
							<About />
					</Row>
				</div>
			</Container>
		</>
	)
}

export default AboutSection
