import React, { useContext } from 'react'
import { StoreContext } from '../context/store/storeContext'
import close from '../assets/images/mobile/close.png'
import logoMenu from '../assets/images/mobile/logoMenu.png'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
	const { getFilterParams, switchOffFilter } = useContext(StoreContext)

	const handle = () => {
		switchOffFilter()
		getFilterParams()
	}

	return (
		<div className='menu'>
			<div className='navMenu'>
				<div className='logoMenu'>
					<img className='logoM' src={logoMenu} alt='Logo' />
				</div>
				<div className='closeMenu'>
					<NavLink to='/'>
						<img className='closeM' src={close} width='40pt' alt='Logo' />
					</NavLink>
				</div>
			</div>
			<div className='mainMenu'>
				<NavLink className='menuLink' to='/'>
					<p>JOGS</p>
				</NavLink>
				<NavLink className='menuLink' to='/info' onClick={() => handle()}>
					<p>INFO</p>
				</NavLink>
				<NavLink className='menuLink' to='/contact' onClick={() => handle()}>
					<p>CONTACT US</p>
				</NavLink>
			</div>
		</div>
	)
}
