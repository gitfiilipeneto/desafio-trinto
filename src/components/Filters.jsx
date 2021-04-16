import React, { useState } from 'react'
import { Container } from '@material-ui/core'



const Filters = (productsList) => {

    const [filter, setfilter] = useState('')


    return (
        <Container>
            {console.log(productsList)}
        </Container>
    )
}

export default Filters