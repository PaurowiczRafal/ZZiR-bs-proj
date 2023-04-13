import { useState } from 'react'

import classes from './Navbar.scss'
import { useEffect } from 'react'

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY >= 100)
        })
    }, [])

	return (
		<nav className={scroll ? 'navbar navbar--border' : 'navbar'}>
			<div className='wrapper'>
				<div className='navbar__nav'>
					<div className='navbar__logo'><a href="#">Zakład Zieleni</a></div>
					{/* <button className='hamburger'></button> */}
					<ul className='navbar__list'>
						<li className='navbar__item'>
							<a href='#green-roofs'>Zielone dachy</a>
						</li>
						<li className='navbar__item'>
							<a href='#aboutus'>O nas</a>
						</li>
						<li className='navbar__item'>
							<a href='#contact'>Kontakt</a>
						</li>
					</ul>
                    <button className="navbar__contact"><a href="#">Napisz do nas</a></button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
