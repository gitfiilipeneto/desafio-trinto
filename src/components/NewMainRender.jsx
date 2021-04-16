//rebuild using material UI the component whos will pass by props to each carditems and render
// the into screen(inside a container)

import React, { useEffect, useState } from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import API from '../api/api'
import NewCardItems from './NewCardItems'
import Filters from './Filters'


const useStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        padding: 0,
    },
    test:{
        
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}))


const NewMainRender = (onAdd) => {
    
    const [spacing, setSpacing] = useState(2)
    const [products, setproducts] = useState([])
    const classes = useStyle()
    useEffect(() => {
        API.getProducts()
            .then(responseProducts => setproducts(responseProducts.products))
    }, [])

    let productsArray = (products)

    return (
        <Grid container className={classes.root} spacing={2}>
            <Filters productsList={productsArray}/>
            <Grid className={classes.test} item xs={12}>
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