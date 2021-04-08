import React from 'react';
import ReactDOM from 'react-dom';




import App from './App';
import Header from './components/Header';
import { GlobalStyle } from './support/DefaultStyles';



ReactDOM.render(
  <React.StrictMode>
  <GlobalStyle/>
  <Header/>
   <App/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

