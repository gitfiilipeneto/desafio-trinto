import React from 'react'
import "bootstrap/js/src/collapse.js";

const Header = (props) => {
  const {countCartItems} = props
    return(
        <nav class="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                  
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  
                    <li class="nav-item">
                      <a class="nav-link" href="#">Amount cart itens {' '} {countCartItems ? (<>{countCartItems}</>) : '0'}</a>
                    </li>

                  </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header