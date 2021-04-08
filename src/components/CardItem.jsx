import React, { Component } from 'react'

import itemsPhoto from '../images/sneakers.png'
import { StyledCard } from '../support/DefaultStyles'
// this component render a card with props, for each item in json return a card

class CardItens extends Component {

    render() {
        return (
            <StyledCard>
                <div>
                    <img src={itemsPhoto} alt="defaultImg" />
                </div>

                <div>
                    <p>Product: {this.props.name}</p>
                    <p>Price:{this.props.currency} {this.props.price}</p>
                    <p>Brand: {this.props.brand}</p>
                    <p>in Stock: {this.props.stock}</p>

                </div>


            </StyledCard>

        )
    }
}

export default CardItens
