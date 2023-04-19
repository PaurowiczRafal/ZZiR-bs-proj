import classes from './Circle.scss'

const Circle = ({color, number}) => {

	return <div className={`circle-${color}--${number}`} ></div>
}

export default Circle