import React, {useEffect} from 'react'
import styled from 'styled-components'
import {StyledCard, StyledContainer} from '../support/DefaultStyles'

const ShoppingCartView = (props) => {

    const { cartItens, onAdd, onRemove } = props
   
    const localCartItens = () => {localStorage.item('cartItens')
.then(JSON.parse(localCartItens))} 
    
    useEffect(() => {
        localStorage.setItem('cartItens', JSON.stringify(cartItens))
    
    }, [cartItens], localCartItens)

    const itemsCartPrice = cartItens.reduce((a, c) => a + c.price * c.quantidade, 0)

    const StyledCheckout = styled(StyledCard)`
    align-items:center;
    justify-content: center;
    flex-direction:column;
    height: auto;
    & h2{
        margin: 10px;
    }
    & div div {
        display:flex;
        flex-direction:row;
    }
    & div div p{
        width: 10vw;
    }

    @media(max-width: 800px) {
    & div div p{
        /* width: auto; */
        font-size: 15px;
    & div div button {
        font-size: 15px;
    }
    }


    }
    & div div h6 {
        font-size: 20px;
        text-align:center;
        margin: 2px;
        padding: 4px;
        border: 1px solid black;
    }
    & div div button {
        color: black;
        font-size: 20px;
        padding:3px;
        margin: 1px;
        background-color: white;
    }

    `

    return (
        <StyledContainer>

<StyledCheckout>
            <h2>
                Cart
            </h2>

            <div>
                <div>
                    {cartItens.length === 0 && <div>Empty cart</div>}
                </div>

                {cartItens.map(item => (
                    <div key={item.id}>
                        <div>
                            <p>
                                {item.name}
                            </p>

                        </div>

                        <div>
                            <button onClick={() => onRemove(item)}>-</button>
                            <h6>{item.quantidade}</h6>
                            <button onClick={() => onAdd(item)}> + </button>
                        </div>

                        <div>
                            {item.quantidade} x {item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
            </div>
            <div>{cartItens.length !== 0 &&
                <>
                    
                    <div>
                        Total:
                    </div>
                    
                    <div>
                        ${itemsCartPrice}
                    </div>
                    {/* vai hardcoded msmo */}
                </>
            }</div>
        </StyledCheckout>
        </StyledContainer>
       
    )
}

export default ShoppingCartView