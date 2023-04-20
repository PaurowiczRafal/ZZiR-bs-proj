import Col from 'react-bootstrap/esm/Col'
import './AboutHeading.scss'
import Row from 'react-bootstrap/esm/Row'

const AboutHeading = () => {
	return (
		<>
			<Col xxl={2}>
				<h2 className='about__heading-title'>Nasza Oferta</h2>
			</Col>
			<Col xxl={10}>
				<p className='about__heading-text'>
					Wykonujemy usługi dla różnych instytucji, w tym urzędów miejskich, spółdzielni mieszkaniowych, zakładów
					przemysłowych oraz szkół. Nasi pracownicy to doświadczeni specjaliści, którzy są związani z naszą firmą od
					wielu lat. Dzięki temu posiadają oni wiedzę i umiejętności, które pozwalają na prawidłowe wykonywanie prac
				</p>
			</Col>
		</>
	)
}

export default AboutHeading
