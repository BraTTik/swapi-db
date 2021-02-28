import React from 'react'
import {withData} from "../utils/withData";
import ItemList from "../item-list/item-list";
import {withSwapi} from "../utils/withSwapi";
import {compose} from "../utils/compose";

const renderName = ({name}) => <span>{name}</span>

const withChildrenList = (renderer) => (Wrapped) => {
    return (props) => <Wrapped {...props}>
        {renderer}
    </Wrapped>
}

const mapPersonMethodsToProps = (swapi) => ({
    getData: swapi.getAllPeople
})
const mapPlanetsMethodsToProps = (swapi) => ({
    getData: swapi.getAllPlanets
})
const mapStarshipMethodsToProps = (swapi) => ({
    getData: swapi.getAllStarships
})

const PersonList = compose(
    withSwapi(mapPersonMethodsToProps),
    withData,
    withChildrenList(renderName)
)(ItemList)

const StarshipList = compose(
    withSwapi(mapStarshipMethodsToProps),
    withData,
    withChildrenList(renderName)
)(ItemList)

const PlanetList = compose(
    withSwapi(mapPlanetsMethodsToProps),
    withData,
    withChildrenList(renderName)
)(ItemList)

export {
    PersonList,
    StarshipList,
    PlanetList
}
