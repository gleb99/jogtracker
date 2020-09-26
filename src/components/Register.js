import React, { useContext } from 'react'
import { StoreContext } from '../context/store/storeContext'
import bearImg from '../assets/images/desktop/bearImg.png'
import bearMob from '../assets/images/mobile/bearFace.png'

export const Register = () => {
	const { fetchToken } = useContext(StoreContext)

	const fetch = () => {
		fetchToken()
	}

	return (
		<div className='register'>
			<div className='bearBox'>
				<div className='bearImg'>
					<img className='bearDesc' src={bearImg} alt='Bear' />
					<img className='bearMob' src={bearMob} alt='Bear' />
				</div>
				<div className='bearBtn'>
					<button onClick={() => fetch()} className='letMeIn'>
						Let me in
					</button>
				</div>
			</div>
		</div>
	)
}
