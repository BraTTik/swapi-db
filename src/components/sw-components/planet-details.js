import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import {withSwapi} from "../utils/withSwapi";
import {withData} from "../utils/withData";
import {compose} from "../utils/compose";

const PlanetRecords = (props) => <ItemDetails {...props}>
    <Record field={'population'} label={'Population'}/>
    <Record field={'diameter'} label={'Diameter'}/>
    <Record field={'rotationPeriod'} label={'Rotation period'}/>
</ItemDetails>

const mapMethodsToProps = (swapi) => ({
    getData: swapi.getPlanet,
    getImageUrl: swapi.getPlanetImage
})

const PlanetDetails = compose(
    withSwapi(mapMethodsToProps),
    withData
)(PlanetRecords)

export default PlanetDetails
