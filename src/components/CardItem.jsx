import React, { useEffect,useState } from 'react'
import itemsPhoto from '../images/sneakers.png'
import { StyledCard } from '../support/DefaultStyles'
import API from '../api/api';
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
                    {produto.name}
                </p>
                <p>

                    Price:{currencyes.currency}{produto.price}
                </p>
                <p>

                    {produto.brand === null ? " - " : produto.brand}
                </p>
                <p>

                    {produto.hasStock === true ? " Yes" : "No"}
                </p>

                <button onClick={() => onAdd(produto)}>add to cart</button>
            </div>
           
           

        </StyledCard>

    )

}

export default CardItens
