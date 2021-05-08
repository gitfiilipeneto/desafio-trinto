import React, { useState, useEffect } from 'react'
import API from '../api/api';
import CardItens from '../components/CardItem'
import { StyledContainer } from '../support/DefaultStyles'

const Main = (props) => {
  const { onAdd } = props

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    API.getProducts()
      .then(responseProducts => setProducts(responseProducts.products))
    //fills array w/ products 
  }, [])

  let arrayProdutos = (products)

  //default if ternary {product.brand === null ? <p> Nulo " - " </p> : <p> </p>}
  return (
    <StyledContainer>
      <div>
        {arrayProdutos.map(produtos => (
          <CardItens key={produtos.id} produto={produtos} onAdd={onAdd} />
        ))}
      </div>

    </StyledContainer>
  )
}


export default Main


