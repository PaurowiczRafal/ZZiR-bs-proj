import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './CustomCard.scss'
function CustomCard(props) {
  const cardStyle = props.data.id === 'plants' ? 'plants' : 'roofs'
	return (
		<Card className={`c-card ${cardStyle}`}>
			<Card.Img
				variant='top'
				src={props.data.img}
			/>
			<Card.Body className={`c-card__body ${cardStyle}__body`}>
				<Card.Title className={`${cardStyle}__body-title`}>{props.data.title}</Card.Title>
				<Card.Text className={`${cardStyle}__body-text`}>
        {props.data.text}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default CustomCard
