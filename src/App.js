import React,{useState, useEffect} from 'react'
import API from './api/api';

const App = () => {
  const [products, setProducts] = useState([])
  const [currencyes, setCurrency] = useState([])
  
  useEffect(() => {
    API.getProducts()
    .then(responseProducts => setProducts(responseProducts.products))

  }, [])

  useEffect(() => {
    API.getProducts()
    .then(responseProducts => setCurrency(responseProducts))
  }, [])

 console.log(currencyes.currency)
 let moneyUnity = (currencyes.currency)

  return (
    <div>
      {products.map(produto => {
        return(
          <div>
            <h1>
              {produto.id}
            </h1>
            <h2>
              {produto.name}
            </h2>
            <p>
              {produto.brand === null ? <p> Nulo </p> : <p> </p>}
            </p>
            <h3>
              <p>{moneyUnity}</p>
              {produto.price}
            </h3>
            <p>
              {produto.hasStock}
            </p>


          </div>
        )
      })}
      
    </div>
  );
}

export default App;
