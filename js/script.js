var apiKey = {
    key: '2a9640e6-745f-46a3-9365-268633625717'
}

fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${apiKey.key}`)
    .then((response) => {
        if (!response.ok) throw new Error(`Erro ao executar a requisição. Status =${response.status}`);
        return response.json();
    })
    .then((api) => {

        for (let i = 0; i <= 10; i++) {
            console.log(api);

            var texto = "";

            texto += `
        <div clas='media'>
            <img src='./img/coin.jpg' class='align-self-center mr-3' alt='Coin' width='100px' height='60px'>
            <div class='media-body'>
            <h5 class='mt-2'>Nome: ${api.data[i].name}</5>
            <p>Simbolo: ${api.data[i].symbol}<br>${api.data[i].first_historical_data}</p>
            </div>
        </div>
        `;

        document.getElementById('coins').innerHTML = texto;
        }
    })
    .catch((error) => {
        console.error(error.message);
    });

