// const url = 'https://dog.ceo/api/breeds/image/random'

// const dogImg = document.getElementById('dogImg')

// // Função para buscar os Dogs na API
// function fetchDogs () {
// fetch (url)
//     .then (response => response.json())
//     .then ((dogData) => {
//         const dogUrl = dogData.message;
//         displayDog(dogUrl);
//     })
//     .catch(error => console.log('Erro ao buscar o doguinho:', error));
// }

// // console.log(fetchDogs())

// // Função para preencher o HTML com a imagem do dog
// function displayDog(dogUrl) {
//     dogImg.src = dogUrl;
// }

// fetchDogs()

//codigo 2
// Função que busca uma imagem aleatória de cachorro
async function fetchDogImg() {
    try {
        // Usando o fetch para fazer a requisição para a API
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Falha ao buscar a imagem');
        }
        // Convertendo a resposta para JSON
        const data = await response.json();
        // Preenchendo o src da imagem com o link retornado pela API
        document.getElementById('dogImg').src = data.message;
    } catch (error) {
        console.error('Erro:', error);
    }
}

fetchDogImg()