import React, {Component} from "react";
import Loader from "../../loader";
import {ErrorBoundry} from "../ErrorBoundry";

const withData = (
    MyComponent
    ) => {
    return class extends Component {
        state = {
            data: null,
            image: null,
            loading: false
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
            this.setState({loading: true})
            this.props.getData(itemId)
                .then(data => this.setState({
                    data,
                    image: (itemId ? this.props.getImageUrl(data) : null),
                    loading: false,
                }))
        }

        render() {
            const { data, image, loading } = this.state
            if(loading) return <Loader />
            return <ErrorBoundry>
                    <MyComponent {...this.props} data={data} image={image}/>
                </ErrorBoundry>
        }
    }
}

export default withData
