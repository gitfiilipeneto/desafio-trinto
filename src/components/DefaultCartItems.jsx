import React from 'react'

const ShoppingCartView = (props) => {

    const { cartItens, onAdd, onRemove } = props
    return (
        <aside>
            <h2>
                Carrinho component
            </h2>

            <div>itens:
                <div>
                    {cartItens.length === 0 && <div>Empty cart</div>}
                </div>

                {cartItens.map(item => {
                    <div key={item.id}>
                        <div>
                            <h1>
                                {item.name}
                            </h1>

                        </div>

                        <div>
                            <button onClick={() => onAdd(item)}> + </button>
                            <button onClick={() => onRemove(item)}>-</button>
                        </div>

                        <div>
                            {item} * {item.price.toFixed(2)}
                        </div>
                    </div>
                })}
            </div>
        </aside>
    )
}

export default ShoppingCartView