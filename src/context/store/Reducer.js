import { GET_TOKEN, GET_JOGS, CHANGE_ITEM, CHANGE_FILTER, GET_PARAMS, SWITCH0FF_FILER } from '../types'

const initialState = {
	token: '',
	jogs: [],
	item: null,
	filter: false,
	filterParams: {},
}

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TOKEN:
			return { ...state, token: action.payload, access: true }
		case GET_JOGS:
			return { ...state, jogs: action.payload }
		case CHANGE_ITEM:
			return { ...state, item: action.payload }
		case CHANGE_FILTER:
			return { ...state, filter: !state.filter }
		case GET_PARAMS:
			return { ...state, filterParams: action.payload }
		case SWITCH0FF_FILER: {
			return { ...state, filter: false }
		}
		default:
			return state
	}
}
