import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import {Page} from "../page";
import SwapiService from "../../services/SwapiServices";
import { SwapiProvider } from "../Context";
import {PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList} from "../sw-components";

const swapi = new SwapiService()

class App extends React.Component{
    state = {
        selectedPerson: 5
    }
    render() {

        return  (
            <div className='container'>
                <SwapiProvider value={swapi}>
                    <Header/>
                    <RandomPlanet/>
                    <Page
                        list={PersonList}
                        details={PersonDetails}
                    />
                    <Page
                        list={StarshipList}
                        details={StarshipDetails}
                    />
                    <Page
                        list={PlanetList}
                        details={PlanetDetails}
                    />
                </SwapiProvider>
            </div>
        )
    }
};

export default App;
