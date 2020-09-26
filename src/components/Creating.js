import React from 'react'
import { NavLink } from 'react-router-dom'
import sadDesktop from '../assets/images/desktop/sad.png'
import sadMobile from '../assets/images/mobile/sad.png'

export const Creating = () => (
	// const remove = () => {
	//     localStorage.removeItem('token')
	// }

	<div className='createDiv'>
		<div className='sadImg'>
			<img className='sadDesktop' src={sadDesktop} alt='Delete' />
			<img className='sadMobile' src={sadMobile} alt='Delete' />
		</div>
		<div className='sadText'>
			<p>Nothing is here</p>
		</div>
		<div>
			<NavLink to='/form'>
				<button className='createLink'>Create your jog first</button>
			</NavLink>
		</div>
	</div>
)
