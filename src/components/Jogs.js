import React, { useContext } from 'react'
import { StoreContext } from '../context/store/storeContext'
import { Item } from './Item'
import { NavLink } from 'react-router-dom'
import { Creating } from './Creating'
import addDesktop from '../assets/images/desktop/add.png'
import addMobile from '../assets/images/mobile/add.png'

export const Jogs = () => {
	const { jogs, filterParams } = useContext(StoreContext)

	let jogsArr = jogs

	let params = filterParams
	let dateFrom
	let dateTo

	if (params) {
		if (params.dateFrom) {
			dateFrom = params.dateFrom
			dateFrom = new Date(dateFrom)
			dateFrom.getTime()
			dateFrom = dateFrom / 1000
			console.log('to', dateFrom)
		}
		if (params.dateTo) {
			dateTo = params.dateTo
			dateTo = new Date(dateTo)
			dateTo.getTime()
			dateTo = +dateTo / 1000
			console.log('to', dateTo)
		}
	}

	return (
		<div className='jogs'>
			{jogsArr.length !== 0 ? (
				jogsArr.map((item, ident) => {
					if (dateFrom <= item.date && item.date <= dateTo) {
						console.log('from', dateFrom)
						console.log('item', item.date)
						console.log('to', dateTo)

						return (
							<Item
								key={ident}
								id={item.id}
								user_id={item.user_id}
								distance={item.distance}
								time={item.time}
								date={item.date}
								speed={item.speed}
							/>
						)
					}
					if (!dateFrom || !dateTo) {
						if (dateFrom <= item.date) {
							return (
								<Item
									key={ident}
									id={item.id}
									user_id={item.user_id}
									distance={item.distance}
									time={item.time}
									date={item.date}
									speed={item.speed}
								/>
							)
						}
						if (item.date <= dateTo) {
							return (
								<Item
									key={ident}
									id={item.id}
									user_id={item.user_id}
									distance={item.distance}
									time={item.time}
									date={item.date}
									speed={item.speed}
								/>
							)
						}
					}

					if (!dateFrom && !dateTo) {
						return (
							<Item
								key={ident}
								id={item.id}
								user_id={item.user_id}
								distance={item.distance}
								time={item.time}
								date={item.date}
								speed={item.speed}
							/>
						)
					}

					return null
				})
			) : (
				<Creating />
			)}
			{jogsArr.length !== 0 ? (
				<div className='addBtnWrapper'>
					<div className='addBtn'>
						<NavLink className='addJogBtn' to='/form'>
							<img className='addDesktop' src={addDesktop} alt='Add' />
							<img className='addMobile' src={addMobile} alt='Add' />
						</NavLink>
					</div>
				</div>
			) : null}
		</div>
	)
}
