import React, { useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { StoreContext } from '../context/store/storeContext'
import { Register } from './Register'
import { Jogs } from './Jogs'
import { Info } from './Info'
import { ContactUs } from './ContactUs'
import { Creating } from './Creating'
import { Form } from './Form'
import { Filter } from './Filter'
import { Menu } from './Menu'

export const Main = () => {
	const { fetchJogs, filter } = useContext(StoreContext)
	const token = localStorage.getItem('token')

	useEffect(() => {
		if (token) {
			fetchJogs()
		}
		// eslint-disable-next-line
}, [token])


	let showFilter
	if (filter === true) {
		showFilter = <Filter />
	}

	return (
		<>
			{showFilter}
			<div className='mainContainer'>
				{token ? (
					<Switch>
						<Route path={'/'} exact component={Jogs} />
						<Route path={'/info'} exact component={Info} />
						<Route path={'/contact'} exact component={ContactUs} />
						<Route path={'/creating'} exact component={Creating} />
						<Route path={'/form'} exact component={Form} />
						<Route path={'/menu'} exact component={Menu} />
					</Switch>
				) : (
					<Register />
				)}
			</div>
		</>
	)
}
