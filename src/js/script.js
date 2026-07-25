const rua = document.getElementById("rua")
const estado = document.getElementById("estado")
const bairro = document.getElementById("bairro")
const cep = document.getElementById("cep")
const btn_cep = document.getElementById("btn-cep")

const buscarCep = (cepColocado) => {

    const API_URL = `https://viacep.com.br/ws/${cepColocado}/json/`

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            rua.value = data.logradouro
            estado.value = data.estado
            bairro.value = data.bairro
        })
        .catch(err =>{
            rua.value = "CEP - Invalido"
            estado.value = "CEP - Invalido"
            bairro.value = "CEP - Invalido"
        })

}

cep.addEventListener("input", () =>{
    buscarCep(cep.value);
} )