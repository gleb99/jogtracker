import React, { useState, useContext } from 'react'
import api from '../api/index'
import { NavLink, useHistory } from 'react-router-dom'
import { StoreContext } from '../context/store/storeContext'
import cancelDesktop from '../assets/images/desktop/cancel.png'
import cancelMobile from '../assets/images/mobile/cancel.png'

export const Form = () => {
	const { fetchJogs, item, getId } = useContext(StoreContext)

	let history = useHistory()

	let closeForm = () => history.push('/')

	const initialState = {
		distance: '',
		time: '',
		date: '',
	}

	const [state, setState] = useState(initialState)

	const getData = (evt) => {
		evt.preventDefault()
		const target = evt.target
		const name = target.name
		const value = target.value

		setState({ ...state, [name]: value })
	}

	const createJog = async (evt) => {
		evt.preventDefault()
		console.log(item)
		const distance = state.distance
		const time = state.time
		const date = state.date
		const token = localStorage.getItem('token')
		api.token = token

		if (distance && time && date) {
			if (item === null) {
				const res = await api.addJog({ date, time, distance })
				// eslint-disable-next-line
    let result = res.response;
				fetchJogs()
			} else {
				const id = item.id
				const user = item.userID
				const res = await api.putJog({ date: date, time: time, distance: distance, jog_id: id, user_id: user })
				// eslint-disable-next-line
        let result = res.response;
				fetchJogs()
				getId()
			}
			setState(initialState)
			closeForm()
		}
	}

	return (
		<div className='formJog'>
			<NavLink className='close' to='/'>
				<img className='cancelDesktop' src={cancelDesktop} alt='Cancel' />
				<img className='cancelMobile' src={cancelMobile} alt='Cancel' />
			</NavLink>
			<form className='form' onSubmit={createJog}>
				<div className='inpDiv'>
					<label className='label labelDistance'>Distance</label>
					<input
						className='inputForm'
						name='distance'
						type='number'
						value={state.distance}
						onChange={(evt) => getData(evt)}
					/>
				</div>
				<div className='inpDiv'>
					<label className='label labelTime'>Time</label>
					<input className='inputForm' name='time' type='number' value={state.time} onChange={(evt) => getData(evt)} />
				</div>
				<div className='inpDiv'>
					<label className='label labelDate'>Date</label>
					<input
						className='inputForm dateForm'
						name='date'
						type='Date'
						min='1970-01-01'
						max='2029-12-31'
						value={state.date}
						onChange={(evt) => getData(evt)}
					/>
				</div>
				<input className='submitBtn' type='submit' value='Save' />
			</form>
		</div>
	)
}
