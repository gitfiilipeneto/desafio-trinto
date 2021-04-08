import React,{useState, useEffect} from 'react'
import API from './api/api';
import CardItens from './components/CardItem'
import {StyledContainer} from './support/DefaultStyles'

const App = () => {
  const [products, setProducts] = useState([])
  const [currencyes, setCurrency] = useState([])
  
  useEffect(() => {
    API.getProducts()
    .then(responseProducts => setProducts(responseProducts.products))
    //fills array w/ products 
  }, [])

  useEffect(() => {
    API.getProducts()
    .then(responseProducts => setCurrency(responseProducts))
    //same request but only to currency
  }, [])

 console.log(currencyes.currency)
 let moneyUnity = (currencyes.currency)
//default if ternary {produto.brand === null ? <p> Nulo " - " </p> : <p> </p>}


  return (
    <StyledContainer>
      <div>
        <h1>
          filters
        </h1>
      </div>
      {products.map(produto => {
        return(
          <CardItens 
          name={produto.name}
          currency={moneyUnity} price={produto.price}
          brand={produto.brand  === null ?  " - " : produto.brand}
          stock={produto.hasStock === true ? " Yes" : "No"}/>          
        )
      })}
      
    </StyledContainer>
  );
}

export default App;
