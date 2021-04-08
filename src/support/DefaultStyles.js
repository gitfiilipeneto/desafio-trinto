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
    height: 100vh;
    max-height:100%;
    display: grid;  
   grid-template-columns:(5, 1fr);

  @media(max-width: 800px) {
    height:auto;
    flex-direction: column;

  } 
`//maybe do a grid to render both components

//Card default Style
export const StyledCard = styled.div`
    width:max-content;
    height:400px;
    margin: 10px;
    border: 1px solid black;
    display: flex;
    flex-direction:row;
    align-items:center;
    & div {
        margin:10px;
    }
    & div p{
        font-size: 25px;
    }

    & div img {
        background-color:lightblue;
        margin:10px;
        border: 2px blue solid;
        max-width: 150px;
        max-height: auto
    }

  @media(max-width: 800px) {
    flex-direction: column;

  }
`