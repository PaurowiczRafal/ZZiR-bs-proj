import './AboutItem.scss'

const AboutItem = (props) =>{
    console.log(props.img);
    return <div className='about__item about__item--bug'>
        <p className='about__item-title'><img src={props.img} alt="svg"/></p>
        <p className='about__item-text'>{props.title}</p>
    </div>
}

export default AboutItem