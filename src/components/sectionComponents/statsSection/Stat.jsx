import './Stat.scss'

const Stat = props => {
	return (
		<div
			className='stat'
			id={props.id}>
			<h1 className='stat__value'>{props.value}</h1>
			<h2 className='stat__text'>{props.text}</h2>
		</div>
	)
}

export default Stat
