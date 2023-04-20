import './Stats.scss'

import Stat from './Stat'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let indents

const Stats = () => {
	const statisticList = [
		{
			id: 1,
			value: '75',
			text: 'Placów zabaw',
		},
		{
			id: 2,
			value: '13 765m²',
			text: 'Ogrodów',
		},
		{
			id: 3,
			value: '15 225m²',
			text: 'Zielonych dachów',
		},
		{
			id: 4,
			value: '312',
			text: 'Wygranych przetargów',
		},
	]
	indents = []
	for (let i = 0; i < statisticList.length; i++) {
		indents.push(
			<Col xxl={3} key={statisticList[i].id} >
				<Stat
					value={statisticList[i].value}
					text={statisticList[i].text}></Stat>
			</Col>
		)
	}
	return (
		<Container className='section__container'>
			<Row>{indents}</Row>
		</Container>
	)
}

export default Stats
