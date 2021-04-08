import React, { useState } from 'react'


import ShoppingCartView from './components/DefaultCartItems';
import Header from './components/Header';
import Main from './components/Main';


const App = () => {


  const [cartItens, setCartItens] = useState([])

  const onAdd = (product) => {
    const exist = cartItens.find(x => x.id === product.id)
    if (exist) {
      setCartItens(cartItens.map(x => x.id === product.id ? { ...exist, qtd: exist.qtd + 1 } : x))
    }else{
      setCartItens([...cartItens, {...product, qtd : 1}])
    }
  }

return (
    <div>
      <Header/>
      <Main />
      <ShoppingCartView cartItens={cartItens}/>
    </div>

  );
}

export default App;
