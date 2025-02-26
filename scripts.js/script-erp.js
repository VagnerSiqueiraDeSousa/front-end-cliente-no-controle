// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

// Seletores do formulário
const formulario = document.querySelector("form");
const IcidadeMatriz = document.querySelector(".cidadeMatriz");
const IbairroFilial = document.querySelector(".bairroFilial");
const InumeroInventario = document.querySelector(".numeroInventario");
const IplacaPatrimonio = document.querySelector(".placaPatrimonio");
const IcentroCusto = document.querySelector(".centroCusto");
const IcontaContabil = document.querySelector(".contaContabil");
const ItipoPatrimonio = document.querySelector(".tipoPatrimonio");
const Iitem = document.querySelector(".item");
const Idescricao_do_item = document.querySelector(".descricao_do_item");


// Função para cadastrar
function cadastrar() {
    fetch("http://localhost:8080/patrimonio", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            cidadeMatriz: IcidadeMatriz.value,
            bairroFilial: IbairroFilial.value,
            numeroInventario: InumeroInventario.value,
            placaPatrimonio: IplacaPatrimonio.value,
            centroCusto: IcentroCusto.value,
            contaContabil: IcontaContabil.value,
            tipoPatrimonio: ItipoPatrimonio.value,
            item: Iitem.value,
            descricao_do_item: Idescricao_do_item.value
        })
    })
    .then(function (res) { console.log(res); })
    .catch(function (res) { console.log(res); });
}

// Função para limpar o formulário
function limpar() {
    IcidadeMatriz.value = "";
    IbairroFilial.value = "";
    InumeroInventario.value = "";
    IplacaPatrimonio.value = "";
    IcentroCusto.value = "";
    IcontaContabil.value = "";
    ItipoPatrimonio.value = "";
    Iitem.value ="";
    Idescricao_do_item.value = "";
}

// Evento de submit do formulário
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
});