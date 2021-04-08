let jsonResponse = null

class API {
    static getProducts(){
        if( !jsonResponse ){
            jsonResponse =  fetch('https://www.trinto.com.br/testes/frontendjr/index.php')
            .then( response => 
              response.json()
            )
        }

        return jsonResponse
        .then( jsonResponse => jsonResponse)
    }
}

export default API