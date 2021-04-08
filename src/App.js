import React, { useState } from 'react'


import ShoppingCartView from './components/DefaultCartItems';
import Header from './components/Header';
import Main from './components/Main';


const App = () => {


  const [cartItens, setCartItens] = useState([])

  const onAdd = (produtos) => {
    const exist = cartItens.find(value => value.name === produtos.id)
    if (exist) {
      setCartItens(cartItens.map(value => value.name === produtos.id ? { ...exist, quantidade: exist.quantidade + 1 } : value))
    }else{
      setCartItens([...cartItens, {...produtos, quantidade : 1}])
    }
  }

return (
    <div>
      <Header/>
      <Main onAdd={onAdd} />
      <ShoppingCartView cartItens={cartItens}/>
    </div>

  );
}

export default App;
