import React, {Component} from 'react';
import {Row} from "../utils/Row";

class Page extends Component {
    state = {
        selectedItem: 5,
    }

    onSelectItem = (id) => {
        this.setState({selectedItem: id})
    }

    render() {
        const { selectedItem } = this.state
        const { list, details } = this.props
        return (
            <Row
                left={list({onSelectItem: this.onSelectItem})}
                right={details({itemId: selectedItem})}
            />
        )
    }
}

export default Page;
