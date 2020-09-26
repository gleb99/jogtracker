import React, { useReducer } from 'react'
import { StoreContext } from './storeContext'
import { Reducer } from './Reducer'
import { GET_TOKEN, GET_JOGS, CHANGE_ITEM, CHANGE_FILTER, GET_PARAMS, SWITCH0FF_FILER } from '../types'
import api from '../../api/index'
console.log('api', api)

export const State = ({ children }) => {
	const initialState = {
		token: '',
		jogs: [],
		item: null,
		filter: false,
		filterParams: {},
	}

	const [state, dispatch] = useReducer(Reducer, initialState)

	const fetchToken = async () => {
		const res = await api.getToken({ uuid: 'hello' })
		let token = res.response.access_token
		api.token = token
		console.log(api)
		localStorage.setItem('token', token)

		dispatch({
			type: GET_TOKEN,
			payload: token,
		})
	}

	const fetchJogs = async () => {
		let jogs = await api.getJogs()
		jogs = jogs.response.jogs
		console.log(jogs)
		dispatch({
			type: GET_JOGS,
			payload: jogs,
		})
	}

	const getId = (id, userID) => {
		let item = {}
		item.id = id
		item.userID = userID

		if (!id && !userID) {
			item = null
		}

		dispatch({
			type: CHANGE_ITEM,
			payload: item,
		})
	}

	const changeFilter = () => {
		dispatch({
			type: CHANGE_FILTER,
		})
	}

	const getFilterParams = (params) => {
		console.log('getFilterParams -> params', params)
		dispatch({
			type: GET_PARAMS,
			payload: params,
		})
	}

	const switchOffFilter = () => {
		dispatch({
			type: SWITCH0FF_FILER,
		})
	}

	return (
		<StoreContext.Provider
			value={{
				fetchToken,
				fetchJogs,
				getId,
				changeFilter,
				getFilterParams,
				switchOffFilter,
				token: state.token,
				jogs: state.jogs,
				item: state.item,
				filter: state.filter,
				filterParams: state.filterParams,
			}}>
			{children}
		</StoreContext.Provider>
	)
}
