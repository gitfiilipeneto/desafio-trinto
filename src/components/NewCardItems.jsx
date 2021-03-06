//Rebuild using MaterialUI
import React from 'react'
import { useState, useEffect } from 'react'
import API from '../api/api'
import { Card, CardMedia, CardContent, Typography, makeStyles,Button } from '@material-ui/core'
import {GREENPANTONE,BABYPOWEDER, RICHBLACKFOGRA} from '../support/Colors'
import DefaultImg from '../images/sneakers.png'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        margin: 10,
    },
    media: {
        height: 5,
        paddingTop: '56.25%', // 16:9
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    button:{
        color:BABYPOWEDER,
        backgroundColor: GREENPANTONE,
        fontSize: 12,
        padding: 3,
        '&:hover':{
            color: RICHBLACKFOGRA,
        },
        '&:focus':{
            outline: 0,
        }
    }

}));


// do the map function for rendering itens thats will came from props from "NewMainComponent"
//pass onAdd Function to this comp too

const NewCardItems = (props) => {
    const classes = useStyles()
    const { produtos, onAdd } = props
    const [currencyes, setCurrency] = useState([])

    useEffect(() => {
        API.getProducts()
            .then(responseProducts => setCurrency(responseProducts))
        //same request but only to currency
    }, [])

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={DefaultImg}
                title="default image"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Product: {produtos.name}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    price: {currencyes.currency} {produtos.price}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    Product Brand: {produtos.brand === null ? " - " : produtos.brand}
                </Typography>

                <Typography variant="body2" color="textSecondary" component="p">
                    Stock available: {produtos.hasStock === true ? " Yes" : "No"}
                </Typography>

                <Button 
                className={classes.button}
                onClick={() => onAdd(produtos)}>add to cart</Button>
            </CardContent>
        </Card>


    )
}

export default NewCardItems