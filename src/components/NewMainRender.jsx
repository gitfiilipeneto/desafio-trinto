//rebuild using material UI the component whos will pass by props to each carditems and render
// the into screen(inside a container)

import React, { useEffect, useState } from 'react'
import {Container} from '@material-ui/core'
import API from '../api/api'
import NewCardItems from './NewCardItems'

const NewMainRender = (props) => {
const { onAdd } = props
const [products, setproducts] = useState([])

useEffect(() => {
    API.getProducts()
        .then(responseProducts => setproducts(responseProducts.products))
}, [])

let productsArray = (products)

    return (
        <Container maxWidth="lg">
            {/* pass the container style here */}
            {productsArray.map(produtos => (

                <NewCardItems key={produtos.id} produtos={produtos} onAdd={onAdd}/>
                
            ))}
        </Container>
    )
}
export default NewMainRender