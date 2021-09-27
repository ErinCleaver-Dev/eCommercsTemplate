import React from 'react'
import { Grid, Container } from 'semantic-ui-react'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column textAlign='center'>
                            Copyright &copy; ecommerces template
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
