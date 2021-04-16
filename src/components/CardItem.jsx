import React, { useEffect,useState } from 'react'
import itemsPhoto from '../images/sneakers.png'
import { StyledCard } from '../support/DefaultStyles'
import API from '../api/api';
import {Button} from '@material-ui/core'
// this component render a card with props, for each item in json return a card

const CardItens = (props) => {

    const { produto, onAdd } = props

    const [currencyes, setCurrency] = useState([])

    useEffect(() => {
        API.getProducts()
          .then(responseProducts => setCurrency(responseProducts))
        //same request but only to currency
      }, [])
      
      
    return (
        <StyledCard>
            <div>
                <img src={itemsPhoto} alt="defaultImg" />
            </div>

            <div>
                <p>
                    Product Name: {produto.name}
                </p>
                <p>

                    Price: {currencyes.currency} {produto.price}
                </p>
                <p>

                    Product Brand: {produto.brand === null ? " - " : produto.brand}
                </p>
                <p>

                    Stock available: {produto.hasStock === true ? " Yes" : "No"}
                </p>

                <Button onClick={() => onAdd(produto)}>add to cart</Button>
            </div>
           
           

        </StyledCard>

    )

}

export default CardItens
