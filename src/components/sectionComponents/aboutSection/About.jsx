import './About.scss'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

import bug from '../../../icons/bug-sm.svg'
import home from '../../../icons/home-sm.svg'
import layout from '../../../icons/layout-sm.svg'
import pen from '../../../icons/pen-sm.svg'
import plant from '../../../icons/plant-sm.svg'
import ruler from '../../../icons/ruler-sm.svg'
import seedling from '../../../icons/seedling-sm.svg'
import shape from '../../../icons/shape-sm.svg'

import AboutItem from './AboutItem'
import AboutInfo from './AboutInfo'

const aboutList = [
	{
		id: 'ruler',
		img: ruler,
		title: 'Mała architektura',
		text: 'Dobry projekt to nie tylko rośliny, dlatego oferujemy również: budowę bezpiecznych placów zabaw spełniających unijne normy bezpieczeństwa, ławki, altany, oczka wodne, murki, schody, pergole',
	},
	{
		id: 'seedling',
		img: seedling,
		title: 'Zieleń',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quae eum adipisci atque porro corporis dolores quo, ducimus dicta velit nihil nostrum a deserunt non. Ratione veniam culpa assumenda perferendis.',
	},
	{
		id: 'pen',
		img: pen,
		title: 'Projektowanie',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reprehenderit accusantium quo commodi labore odio autem ex, deserunt in quam numquam, incidunt id eum error velit nemo repudiandae vero laborum?',
	},
	{
		id: 'home',
		img: home,
		title: 'Zielone dachy i zielone ściany',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat quia, velit nostrum et ducimus laudantium quae accusamus expedita? Facere corrupti laboriosam in quae atque aperiam eaque ducimus qui quis modi.',
	},
	{
		id: 'plant',
		img: plant,
		title: 'Aranżacja zieleni we wnętrzach',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque adipisci, distinctio voluptate, magni eum quisquam fugit dicta sint corrupti quos nemo ipsa a? Praesentium ullam labore maiores, excepturi cum molestias.',
	},
	{
		id: 'shape',
		img: shape,
		title: 'Inwentaryzacja dendrologiczna i wycinka drzew',
		text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum fuga culpa a magnam porro, similique labore tempora illum expedita suscipit quisquam quos amet? Hic necessitatibus recusandae exercitationem, ab corrupti dignissimos?',
	},
	{
		id: 'bug',
		img: bug,
		title: 'Ochrona kasztanowców',
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus corporis maiores dignissimos, neque cumque quia vel, sequi, laborum dolorem quaerat necessitatibus. Ipsa, iste. Doloremque, iure. Alias similique odio quod.',
	},
	{
		id: 'layout',
		img: layout,
		title: 'Ogrody',
		text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde temporibus optio nulla earum quam maiores laboriosam quo ut doloribus ab, quaerat eveniet repudiandae nesciunt quidem molestias voluptates expedita amet harum!',
	},
]
let content
const About = () => {
	content = []
	for (let i = 0; i < aboutList.length; i++) {
		content.push(
			<Col
				xxl={3}
				key={aboutList[i].id}>
				<AboutItem
                    id={aboutList[i].id}
					img={aboutList[i].img}
					title={aboutList[i].title}
					text={aboutList[i].text}
				/>
			</Col>
		)
	}
	return (
		<Row>
			<Col xxl={7}>
				<Row>{content}</Row>
			</Col>
			<Col xxl={5}>
				<Row>
					<AboutInfo />
				</Row>
			</Col>
		</Row>
	)
}

export default About
