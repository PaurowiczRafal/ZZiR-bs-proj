import { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './CustomCard.scss'
function CustomCard(props) {
	return (
		<Card
			className={`c-card${props.status ? ' active' : ''}${props.data.id === 'roofs' ? ' roofs' : ''}`}
			onClick={props.customClickEvent}>
			<Card.Img
				variant='top'
				src={props.data.img}
			/>
			<Card.Body className={`c-card__body${props.status ? ' active__body' : ''}`}>
				<Card.Title className={`c-card__body-title${props.status ? ' active__body-title' : ''}`}>
					{props.data.title}
				</Card.Title>
				<Card.Text className={`c-card__body-text${props.status ? ' active__body-text' : ''}`}>
					{props.data.text}
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default CustomCard
