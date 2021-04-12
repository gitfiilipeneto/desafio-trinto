//rebuild using material UI the component whos will pass by props to each carditems and render
// the into screen(inside a container)

import React, { useEffect, useState } from 'react'
import { Container, Box, makeStyles, Grid } from '@material-ui/core'
import API from '../api/api'
import NewCardItems from './NewCardItems'

const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: 20,
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        padding: theme.spacing(2),
      },
}))


const NewMainRender = (props) => {
    const [spacing, setSpacing] = useState(2)

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    }


    const { onAdd } = props
    const [products, setproducts] = useState([])
    const classes = useStyle()
    useEffect(() => {
        API.getProducts()
            .then(responseProducts => setproducts(responseProducts.products))
    }, [])

    let productsArray = (products)

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                {productsArray.map(produtos => (

<NewCardItems key={produtos.id} produtos={produtos} onAdd={onAdd} />

))}
                </Grid>
            </Grid>
        </Grid>
            


        
            
    )
}
export default NewMainRender