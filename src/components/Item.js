import React, { useContext } from 'react'
import { StoreContext } from '../context/store/storeContext'
import { useHistory } from 'react-router-dom'
import api from '../api/index'
import item from '../assets/images/desktop/item.png'
import deleteIMG from '../assets/images/desktop/deleteIMG.png'

export const Item = (props) => {
	const { getId, fetchJogs } = useContext(StoreContext)

	const history = useHistory()

	const handleClick = (id, user_id) => {
		getId(id, user_id)
		history.push('/form')
	}

	const deleteId = async (id, userId) => {
		console.log('deleteID', id, userId)
		const res = await api.deleteJog({ jog_id: id, user_id: userId })
		let result = res.response
		console.log(result)
		fetchJogs()
	}

	const date = new Date(props.date * 1000)
	let year = date.getFullYear()
	let month = date.getMonth()
	let day = date.getDate()
	if (day < 10) {
		day = '0' + day
	}

	let strMonth = month + 1
	if (strMonth < 9) {
		strMonth = '0' + strMonth
	}

	return (
		<div className='jog'>
			<div className='item' onClick={() => handleClick(props.id, props.user_id)}>
				<div className='itemImg'>
					<img src={item} alt='Jog' />
				</div>
				<div className='itemWrap'>
					<p className='itemDate'>{`${day}.${strMonth}.${year}`}</p>
					<p className='itemText'>
						Speed: <span>15</span>
					</p>
					<p className='itemText'>
						Distance: <span>{props.distance} km</span>
					</p>
					<p className='itemText'>
						Time: <span>{props.time} min</span>
					</p>
				</div>
			</div>
			<div className='deleteWrap'>
				<button className='deleteBtnWrap' onClick={() => deleteId(props.id, props.user_id)}>
					<img className='delImg' src={deleteIMG} width='40px' alt='Delete' />
				</button>
			</div>
		</div>
	)
}
