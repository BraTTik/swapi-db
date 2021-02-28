import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from "../../services/SwapiServices";
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {
  swapi = new SwapiService()
  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  onPlanetLoaded = (planet) => {
      this.setState({
        planet,
        loading: false,
      })
  }

  onError = (error) => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 2)
    this.swapi.getPlanet(id)
        .then(planet => this.onPlanetLoaded(planet))
        .catch(error => this.onError(error))
  }

  render() {
    const { planet, loading, error} = this.state
    if(loading) {
      return <Loader />
    }

    const hasData = !(loading || error)

    const loader = loading ? <Loader /> : null
    const content = hasData ? <PlanetView planet={planet}/> : null
    const errorMessage = error ? <ErrorIndicator /> : null
    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        { loader }
        { content }
      </div>

    );
  }
}

const PlanetView = ({planet}) => {
  const { population, rotationPeriod, diameter, name, id } = planet
  return (
      <React.Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </React.Fragment>
  )
}
