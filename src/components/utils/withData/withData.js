import React, {Component} from "react";
import Loader from "../../loader";
import {ErrorBoundry} from "../ErrorBoundry";

const withData = (
    MyComponent
    ) => {
    return class extends Component {
        state = {
            data: null,
            image: null
        }

        componentDidUpdate(prevProps) {
            if(prevProps.itemId !== this.props.itemId) {
                this.updateItem()
            }
        }

        componentDidMount() {
            this.updateItem()
        }

        updateItem = () => {
            const { itemId } = this.props
            this.props.getData(itemId)
                .then(data => this.setState({
                    data,
                    image: (itemId ? this.props.getImageUrl(data) : null)
                }))
        }

        render() {
            const { data, image } = this.state
            if(!data) return <Loader />
            return <ErrorBoundry>
                    <MyComponent {...this.props} data={data} image={image}/>
                </ErrorBoundry>
        }
    }
}

export default withData
