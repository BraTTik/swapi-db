
export default class SwapiService {
    _apiBase = 'https://swapi.dev/api'
    _imageBase = 'https://starwars-visualguide.com/assets/img'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}`)
        }
        const data = await res.json()
        return data
    }

     getAllPeople = async  () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
    }

     getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}`)
        return this._transformPerson(person)
    }

     getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`)

        return res.results.map(this._transformPlanet)
    }

     getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet)
    }

     getAllStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._transformStarship)
    }

     getStarships = async (id) => {
        const starship = await this.getResource(`/starships/${id}`)
        return this._transformStarship(starship)
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    _extractId = (item) => {
        const regex = /\/([0-9]*)\/$/
        return item.url.match(regex)[1]
    }

    _transformPlanet = (planet) => {
        const id = this._extractId(planet)
        return {
            id,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            name: planet.name,
        }
    }

    _transformStarship = (starship) => {
        const {
            name, model, manufacturer, cost_in_credits, length,
            crew, passengers,cargo_capacity
        } = starship
        const id = this._extractId(starship)
        return {
            id, name, model, manufacturer, costInCredits: cost_in_credits,
            length, crew, passengers, cargoCapacity: cargo_capacity,
        }
    }

    _transformPerson = (person) => {
        const {
            name, birth_year, eye_color, gender
        } = person
        const id = this._extractId(person)
        return {
            id, name, birthYear: birth_year, eyeColor: eye_color, gender
        }
    }

}

