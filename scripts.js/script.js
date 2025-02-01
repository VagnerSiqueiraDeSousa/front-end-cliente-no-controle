const formulario = document.querySelector("form");

const IcidadeMatriz = document.querySelector(".cidadeMatriz");
const Ibairro = document.querySelector(".bairro");
const InumeroInventario = document.querySelector(".numeroInventario");
const IplacaPatrimonio = document.querySelector(".placaPatrimonio");
const IcentroCusto = document.querySelector(".centroCusto");
const IcontaContabil = document.querySelector(".contaContabil");
const ItipoPatromonio = document.querySelector(".tipoPatromonio");

function cadastrar(){
    fetch("http://localhost:8080/cadastroPatromonio",
    {
        headers:{
            'Accept': 'application/json',
            'content-Type': 'application/json'
        },

        method: "POST",
        body: JSON.stringify({
            cidadeMatriz: IcidadeMatriz.value,
            bairro: Ibairro.value,
            numeroInvetario: InumeroInventario.value,
            placaPatrimonio: IplacaPatrimonio.value,
            centroCusto: IcentroCusto.value,
            contaContabil: IcontaContabil.value,
            tipoPatrimonio: ItipoPatromonio

        })
        .then(function(res){console.log(res)})
        .catch(function (res){console.log(res)})
    })
}
