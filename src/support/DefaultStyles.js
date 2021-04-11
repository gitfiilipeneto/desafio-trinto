import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components' //to css reset


export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`
export const StyledContainer = styled.div`
    width: 100vw;
    max-width:100%;
    height: auto;
    max-height:100%;
    display: flex;  
    flex-direction: column;
    align-items:center;

  @media(max-width: 800px) {
    height:auto;
    flex-direction: column;

  } 
`//maybe do a grid to render both components

//Card default Style
export const StyledCard = styled.div`
    width:90vw;
    height:400px;
    margin: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction:row;
    align-items:center;
    & div {
        margin:10px;
        height: auto;
    }
    & div p{
        font-size: 20px;
        margin: unset;
    }

    & div img {
        
        margin:10px;
        
        max-width: 100px;
        max-height: auto
    }
    & button {
        color: white;
        background-color: #248232;
        font-size: 13px;
        padding: 3px;
    }
    & button:active, button:focus {
    outline: 0;
    border: none;
}
//intance all .button styles to global style later
    & button:hover{
      color: black;
    }
  @media(max-width: 800px) {
    flex-direction: column;

  }
`