import React from 'react'
import { SwapiConsumer } from '../../Context'

export const withSwapi = (mapper) => (Wrapped) => (props) => {
    return <SwapiConsumer>
        {(swapi) => <Wrapped {...props} {...mapper(swapi)}/>}
    </SwapiConsumer>
}
