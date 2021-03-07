import React from 'react';
import { withRouter } from "react-router-dom";
import {Row} from "../utils/Row";

const Page = (props) => {
    const { list, history, details, match } = props

    const handleSelect = (itemId) => {
        history.push(itemId)
    }
    const { id } = match.params


    return details
        ? <Row
            left={list(({onSelectItem: handleSelect}))}
            right={details({itemId: id})}
        />
        : <React.Fragment>
            {list(({onSelectItem: handleSelect}))}
        </React.Fragment>
}

export default withRouter(Page);
