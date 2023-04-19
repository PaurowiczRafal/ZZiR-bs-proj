//? Może użyć slicka jako karuzeli
import './TrustedBy.scss'

import Firm from './Firm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const TrustedBy = () => {
	return (
    <Container className='section__container'>
        <Row>
            <Col lg={12}><h2 className='trusted-by trusted-by__title'>Pracowaliśmy z takimi firmami jak:</h2></Col>
        </Row>
        <Row>
            <Col lg={2}>
                <Firm></Firm>
            </Col>
            <Col lg={2}>
                <Firm></Firm>
            </Col>
            <Col lg={2}>
                <Firm></Firm>
            </Col>
            <Col lg={2}>
                <Firm></Firm>
            </Col>
            <Col lg={2}>
                <Firm></Firm>
            </Col>
            <Col lg={2}>
                <Firm></Firm>
            </Col>
        </Row>
    </Container>
    )
}

export default TrustedBy
