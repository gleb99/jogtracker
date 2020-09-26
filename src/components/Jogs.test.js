import { Jogs } from './Jogs.js'
import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as MyContextModule from '../context/store/storeContext'

configure({ adapter: new Adapter() })

const spy = jest.spyOn(MyContextModule, 'useMyContext')

describe('App', () => {
	it('should match to snapshot', () => {
		spy.mockImplementationOnce(() => ({ jogs: [], filter: false }))
		const snap = shallow(<Jogs />)
		expect(snap).toMatchSnapshot()
	})

	it('should match to snapshot with filter', () => {
		spy.mockImplementationOnce(() => ({ jogs: [], filter: true }))
		const snap = shallow(<Jogs />)
		expect(snap).toMatchSnapshot()
	})
})
