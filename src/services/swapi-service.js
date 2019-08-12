export default class SwapiService {
	
	_apiBase = 'https://swapi.co/api'

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);


		if(!res.ok) {
			throw new Error("Could not reach the server")
		}
		return await res.json();
	}

	async getAllPeople() {
		const res = await this.getResource('/people/');
		return res.results;
	}

	getPerson(id) {
		return this.getResource(`/people/${id}/`)
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.result;
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results;
	}

	getStarship(id) {
		return this.getResource(`/starships/${id}`)
	}
}

