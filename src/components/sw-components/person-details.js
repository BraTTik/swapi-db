import {withSwapi} from "../utils/withSwapi";
import {withData} from "../utils/withData";
import React from "react";
import ItemDetails from "../item-details";
import {Record} from "../item-details/item-details";
import {compose} from "../utils/compose";

const PersonRecords = (props) => {
    return <ItemDetails {...props}>
        <Record field={'gender'} label={'Gender'} />
        <Record field={'eyeColor'} label={'Eye color'} />
    </ItemDetails>
}

const mapMethodsToProps = (swapi) => ({
    getData: swapi.getPerson,
    getImageUrl: swapi.getPersonImage
})

const PersonDetails = compose(
    withSwapi(mapMethodsToProps),
    withData
)(PersonRecords)


export default PersonDetails
