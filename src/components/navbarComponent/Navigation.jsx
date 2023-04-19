import { useState } from 'react'
import { useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import PrimaryButton from '../buttons/PrimaryButton'

import './Navigation.scss'

function Navigation() {
	const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY >= 50)
        })
    }, [])
	return (
		<Navbar
			expand='lg'
			className={scroll ? 'nav nav--border' : 'nav'}>
			<Container className='nav__container'>
				<Navbar.Brand
					href='#home'
					className='nav__brand'>
					Zakład Zieleni
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto nav__list'>
							<Nav.Link
								href='#green-roofs'
								className='nav__list--item'>
								Zielone dachy
							</Nav.Link>
							<Nav.Link
								href='#aboutus'
								className='nav__list--item'>
								O nas
							</Nav.Link>
							<Nav.Link
								href='#contac'
								className='nav__list--item'>
								Kontakt
							</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<PrimaryButton />
			</Container>
		</Navbar>
	)
}

export default Navigation
