import React, { useEffect,useState } from 'react'
import itemsPhoto from '../images/sneakers.png'
import { StyledCard } from '../support/DefaultStyles'
import API from '../api/api';
// this component render a card with props, for each item in json return a card

const CardItens = (props) => {

    const { produtos, onAdd } = props

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

                    {produtos.name}
                </p>
                <p>

                    Price:{currencyes.currency}{produtos.price}
                </p>
                <p>

                    {produtos.brand === null ? " - " : produtos.brand}
                </p>
                <p>

                    {produtos.hasStock === true ? " Yes" : "No"}
                </p>

                <button onClick={() => onAdd(produtos)}>add to cart</button>
            </div>
           
           

        </StyledCard>

    )

}

export default CardItens
