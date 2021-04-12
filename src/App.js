import React, { useState } from 'react'


import ShoppingCartView from './components/DefaultCartItems';
import Header from './components/Header';
import Main from './components/Main';
import NewMainRender from './components/NewMainRender';


const App = () => {


  const [cartItens, setCartItens] = useState([])

  const onAdd = (produtos) => {
    const exist = cartItens.find(value => value.id === produtos.id)
    if (exist) {
      setCartItens(cartItens.map(value => 
        value.id === produtos.id ? { ...exist, quantidade: exist.quantidade + 1 } : value))
    }else{
      setCartItens([...cartItens, {...produtos, quantidade : 1}])
    }
  }

  const onRemove = (produtos) => {
    const exist = cartItens.find((value) => value.id === produtos.id)
    if(exist.quantidade === 1 ){
      setCartItens(cartItens.filter((value) => value.id !== produtos.id ))
    } else {
      setCartItens(cartItens.map(value => 
        value.id === produtos.id ? { ...exist, quantidade: exist.quantidade - 1 } : value))  
    }
  }

return (
    <div>
      <Header countCartItems={cartItens.length}/>
      {/* <Main onAdd={onAdd} /> */}
      <NewMainRender onAdd={onAdd}/>
      <ShoppingCartView cartItens={cartItens}
       onAdd={onAdd} onRemove={onRemove}/>
    </div>

  );
}

export default App;
