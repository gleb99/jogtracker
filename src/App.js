import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { State } from './context/store/State'
import { Main } from './components/Main'

function App() {
	return (
		<State>
			<BrowserRouter>
				<Navbar />
				<Main />
			</BrowserRouter>
		</State>
	)
}

export default App
