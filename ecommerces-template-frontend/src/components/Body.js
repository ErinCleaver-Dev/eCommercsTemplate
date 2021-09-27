import React from 'react'
import { Header } from 'semantic-ui-react'
import { Container } from 'semantic-ui-react'


const Body = (props) => {
    return (
        <Container className="Body">
            {props.children}
        </Container>
    )
}

export default Body
