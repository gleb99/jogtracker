const prefix = 'https://jogtracker.herokuapp.com/api/v1'

class ApiClient {
	token = localStorage.getItem('token')

	Fetch = async (url, data, options) => {
		const res = await fetch(prefix + url, {
			headers: {
				Accept: 'application/json',
				Authorization: this.token ? `Bearer ${this.token}` : '',
			},
			...options,
			body: new URLSearchParams(data),
		})

		const json = await res.json().catch(() => Promise.reject('Invalid server response'))

		if (res.ok) {
			return json
		}

		return Promise.reject(json)
	}

	getFetch = async (url, options) => {
		const res = await fetch(prefix + url, {
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${this.token}`,
			},
			...options,
		})

		const json = await res.json().catch(() => Promise.reject('Invalid server response'))

		if (res.ok) {
			return json
		}

		return Promise.reject(json)
	}

	get = (url) => this.getFetch(url, { method: 'GET' })
	post = (url, data) => this.Fetch(url, data, { method: 'POST' })
	delete = (url, data) => this.Fetch(url, data, { method: 'DELETE' })
	put = (url, data) => this.Fetch(url, data, { method: 'PUT' })
	getToken = (data) => this.post('/auth/uuidLogin', data)
	getJogs = () => this.get('/data/sync')
	addJog = (data) => this.post('/data/jog', data)
	putJog = (data) => this.put('/data/jog', data)
	deleteJog = (data) => this.delete('/data/jog', data)
}

export default new ApiClient()
