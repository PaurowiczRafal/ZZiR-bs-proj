import './Stats.scss'

import Stat from './Stat'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let indents

const Stats = () => {
	const statisticList = [
		{
			value: '75',
			text: 'Placów zabaw',
		},
		{
			value: '13 765m²',
			text: 'Ogrodów',
		},
		{
			value: '15 225m²',
			text: 'Zielonych dachów',
		},
		{
			value: '312',
			text: 'Wygranych przetargów',
		},
	]
	indents = []
	for (let i = 0; i < statisticList.length; i++) {
		indents.push(<Col xxl={3}>
            <Stat value={statisticList[i].value} text={statisticList[i].text}></Stat>
        </Col>)
	}
	return (
		<Container className='section__container'>
			<Row>
				{indents}
			</Row>
		</Container>
	)
}

export default Stats
