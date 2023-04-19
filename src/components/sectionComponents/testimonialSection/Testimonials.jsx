import './Testimonials.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import img from '../../../img/roof2-md.jpeg'

const Testimonials = () => {
	return (
		<Container className='section__container'>
			<Row>
				<Col xxl={5}>
					<Row>
						<div className='testimonials testimonials__badge'>
							<p>O nas</p>
						</div>
						<p className='testimonials testimonials__title'>Dlaczego warto współpracować z Zakładem Zieleni?</p>
					</Row>
					<Row>
						<div className='testimonials__image'></div>
					</Row>
				</Col>
				<Col xxl={7}>
					<p className='testimonials testimonials__text '>
						Od 1988 r. zajmujemy się pielęgnacją zieleni, budową parków i terenów zielonych a także usługami budowlano -
						brukarskimi związanymi z terenami zielonymi, wycinką i pielęgnacją drzew
					</p>
				</Col>
			</Row>
		</Container>
	)
}

export default Testimonials
