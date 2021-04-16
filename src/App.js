import React, { useState } from 'react'


import ShoppingCartView from './components/DefaultCartItems';
import Header from './components/Header';
import NewMainRender from './components/NewMainRender';


const App = () => {


  const [cartItens, setCartItens] = useState(JSON.parse(localStorage.getItem('cartItems')) || [])

  const onAdd = (produtos) => {
    const exist = cartItens.find(value => value.id === produtos.id)
    
    let newCartItems = []
    if (exist) {
      newCartItems = (cartItens.map(value => 
        value.id === produtos.id ? { ...exist, quantidade: exist.quantidade + 1 } : value))    
        
      }else{
      newCartItems = ([...cartItens, {...produtos, quantidade : 1}])
    }

    setCartItens(newCartItems)

    const localCartItens =  localStorage.setItem('cartItems', JSON.stringify(newCartItems))
  }

  const onRemove = (produtos) => {
    const exist = cartItens.find((value) => value.id === produtos.id)
    let newCartItems = []
    if(exist.quantidade === 1 ){
      newCartItems = (cartItens.filter((value) => value.id !== produtos.id ))
    } else {
      newCartItems = (cartItens.map(value => 
        value.id === produtos.id ? { ...exist, quantidade: exist.quantidade - 1 } : value))  
    }
    setCartItens(newCartItems)

    const localCartItens =  localStorage.setItem('cartItems', JSON.stringify(newCartItems))
  }

return (
    <div>
      <Header countCartItems={cartItens.length}/>

      <NewMainRender onAdd={onAdd}/>
      
      <ShoppingCartView
       cartItens={cartItens}
       onAdd={onAdd}
       onRemove={onRemove}
       />
    </div>

  );
}

export default App;
