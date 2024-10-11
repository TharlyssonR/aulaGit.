async function fetchCep() {
    let cep = document.getElementById('cep').value
    const url = "https://viacep.com.br/ws/"+cep+"/json/"

    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

async function listarCep() {
    if (document.getElementById('cep').value.length>7){
        const lista = await fetchCep();
         if(!lista.erro){
            document.getElementById('logradouro').value =lista.logradouro
            document.getElementById('bairro').value =lista.bairro
        }
        else{
            console.log('asdasd')
            document.getElementById('rua').value = "Digite um CEP válido!"
         }
    }
    else{
        console.log('não tem 8 digitos')
            document.getElementById('rua').value = "Por favor digite 8 números"

    }

}

function busca(){
    listarCep()

}


    
