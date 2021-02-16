let apikey = {
    key: 'a223d29a-5979-493e-86a7-3d5809470fc1'
}


fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error ('Erro ao executar a requisição, status ' + response.status);
        return response.json();
    })

    .then((api) => {




        var texto = "";
        for (let i = 0; i < 10; i++) {


            
        }










    })

    .catch((error) => {
        console.error(error.message)
    })
    

