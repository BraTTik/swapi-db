import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import React from "react";
import {withSwapi} from "../utils/withSwapi";
import {withData} from "../utils/withData";
import {compose} from "../utils/compose";

const StarshipRecords = (props) => <ItemDetails {...props}>
    <Record field={'model'} label={'Model'} />
    <Record field={'length'} label={'Length'} />
    <Record field={'costInCredits'} label={'Cost'} />
</ItemDetails>

const mapMethodsToProps = (swapi) => ({
    getData: swapi.getStarships,
    getImageUrl: swapi.getStarshipImage
})

const StarshipDetails = compose(
    withSwapi(mapMethodsToProps),
    withData
)(StarshipRecords)

export default StarshipDetails
