import React,{useState, useEffect} from 'react'
import API from './api/api';

const App = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    API.getProducts()
    .then(responseProducts => setProducts(responseProducts))

  }, [])

  return (
    <div>
      {products.map(produto => {
        return(
          <h1>

            {produto.id}
          </h1>
        )
      })}
      
    </div>
  );
}

export default App;
