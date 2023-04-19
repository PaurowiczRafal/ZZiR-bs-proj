import './Hero.scss'

import PrimaryButton from '../../buttons/PrimaryButton'
import SecondaryButton from '../../buttons/SecondaryButton'
import CustomCard from './CustomCard'

import cardImg1 from '../../../img/flowers-md.jpeg'
import cardImg2 from '../../../img/roof-md.jpeg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Hero = () => {
	const cardInfo = [
		{
			id: 'plants',
			img: cardImg1,
			title: 'Zieleń miejska i ogrody',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		},
		{
			id: 'roofs',
			img: cardImg2,
			title: 'Zielone dachy',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
		},
	]
	return (
		<Container className='section__container'>
			<Row>
				<Col lg={7}>
					<h1 className='hero__title'>
						Tworzymy <span className='hero__title--decoration'>piękne ogrody</span> i{' '}
						<span className='hero__title--decoration'>zielone dachy</span> na każdej powierzchni &nbsp;
						<svg
							width='32'
							height='50'
							viewBox='0 6 30 28'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M30.9971 6.5V10.25C30.9971 12.8359 29.9698 15.3158 28.1414 17.1443C26.3129 18.9728 23.8329 20 21.2471 20H17.4971V27.5H14.4971V17L14.5256 15.5C14.7145 13.0512 15.8207 10.7639 17.623 9.09532C19.4253 7.42677 21.791 6.4999 24.2471 6.5H30.9971ZM6.99707 0.5C9.20117 0.49994 11.3494 1.19318 13.1378 2.48159C14.9261 3.76999 16.2638 5.58827 16.9616 7.679C15.8139 8.65185 14.8737 9.84558 14.1967 11.1892C13.5198 12.5328 13.12 13.9988 13.0211 15.5H11.4971C8.7123 15.5 6.04158 14.3938 4.07245 12.4246C2.10332 10.4555 0.99707 7.78477 0.99707 5V0.5H6.99707Z'
								fill='#006155'
							/>
						</svg>
					</h1>
				</Col>
				<Col lg={5}>
					<Row>
						<Col>
							<p className='hero__text'>
								Wspólnie z nami stwórz funkcjonalną i piękną przestrzeń zieloną. Dzięki naszemu doświadczeniu, zdobytemu
								w ciągu wielu lat praktyki i szkoleń, zagwarantujemy Ci najlepsze efekty.
							</p>
						</Col>
					</Row>
					<Row>
						<Col
							lg={4}
							className='mt-2'>
							<PrimaryButton />
						</Col>
						<Col
							lg={8}
							className='mt-2'>
							<SecondaryButton />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className='mt-64'>
				<Col
					lg={6}>
					<CustomCard data={cardInfo[0]} />
				</Col>
				<Col
					lg={6}>
					<CustomCard data={cardInfo[1]} />
				</Col>
			</Row>
		</Container>
	)
}

export default Hero
