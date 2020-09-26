import React, { useContext } from 'react'
import { StoreContext } from '../context/store/storeContext'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/desktop/logo.png'
import logoMobile from '../assets/images/mobile/logo.png'
import menuMobile from '../assets/images/mobile/menu.png'
import filterOff from '../assets/images/desktop/filterOff.png'
import filterOn from '../assets/images/desktop/filterOn.png'

export const Navbar = () => {
	const token = localStorage.getItem('token')

	const { changeFilter, getFilterParams, filter, switchOffFilter, jogs, fetchJogs } = useContext(StoreContext)

	const url = window.location.pathname

	const handle = () => {
		changeFilter()
		getFilterParams()
	}

	let className = token ? 'acsNavbar navbar' : 'regNavbar navbar'

	let filterClass
	let filterSrc
	if (filter) {
		filterSrc = filterOn
		filterClass = 'filterBtn filterBtnOff'
	} else {
		filterSrc = filterOff
		filterClass = 'filterBtn filterBtnOn'
	}

	const onBtnClick = () => {
		getFilterParams()
		switchOffFilter()
	}

	let filterIcon

	if (url === '/info' || url === '/contact') {
		jogs.length = 0
	}

	if (jogs.length !== 0) {
		filterIcon = (
			<NavLink className='mobileFilter' to='/' onClick={() => handle()}>
				<img src={filterSrc} className={filterClass} alt='Filter' />
			</NavLink>
		)
	} else if (jogs.length === 0) {
		filterIcon = null
		fetchJogs()
	}

	return (
		<div className={className}>
			<div className='logo'>
				<img className='logoDesk' src={logo} alt='Logo' />
				<img className='logoMob' src={logoMobile} alt='Logo' />
			</div>
			{token ? (
				<div className='links'>
					<NavLink className='navLink jogsNav' to='/' exact>
						JOGS
					</NavLink>
					<NavLink className='navLink infoNav' to='/info' onClick={() => onBtnClick()}>
						INFO
					</NavLink>
					<NavLink className='navLink contactNav' to='/contact' onClick={() => onBtnClick()}>
						CONTACT US
					</NavLink>
					<NavLink className='desktopFilter' to='/' onClick={() => handle()}>
						<img src={filterSrc} className={filterClass} alt='Filter' />
					</NavLink>
					{filterIcon}
					<NavLink className='navMenuMobile' to='/menu'>
						<img src={menuMobile} className='menuMobile' alt='Filter' />
					</NavLink>
				</div>
			) : (
				<img src={menuMobile} className='menuMobile' alt='Filter' />
			)}
		</div>
	)
}
