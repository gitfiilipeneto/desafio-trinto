import React from 'react'

const ShoppingCartView = (props) => {

    const {cartItens} = props
    return(
        <aside>
            <h2>
                Carrinho component
            </h2>

            <div>
                {cartItens.length === 0 && <div>Empty Cart</div>}
            </div>
        </aside>
    )
}

export default ShoppingCartView