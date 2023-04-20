import './AboutItem.scss'

const AboutItem = (props) =>{
    return <div className={`about__item about__item--${props.id}`}>
        <p><img src={props.img} alt="svg"/></p>
        <p className='about__item-text'>{props.title}</p>
    </div>
}

export default AboutItem