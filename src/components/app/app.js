import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {Page} from "../page";
import SwapiService from "../../services/SwapiServices";
import { SwapiProvider } from "../Context";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const swapi = new SwapiService()

class App extends React.Component{
    state = {
        selectedPerson: 5
    }
    render() {
        const People = <Page list={PersonList} details={PersonDetails}/>
        const Planets = <Page list={PlanetList} />
        const Starships = <Page list={StarshipList} />
        return  (
            <div className='container'>
                <SwapiProvider value={swapi}>
                    <Router>
                        <Header/>
                        <RandomPlanet/>
                        <Route path={'/'} render={() => <h2>Welcome to StarDB</h2>} exact/>
                        <Route path={'/people/:id?'} render={() => People} />
                        <Route path={'/planets'} render={() => Planets} />
                        <Route path={'/starships'} render={() => Starships} exact/>
                        <Route path={'/starships/:id'} render={({match}) => {
                            const {id} = match.params
                            return <StarshipDetails itemId={id}/>
                        }} />
                    </Router>
                </SwapiProvider>
            </div>
        )
    }
};

export default App;
