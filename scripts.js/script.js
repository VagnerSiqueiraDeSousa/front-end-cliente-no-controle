document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector("form");

    const IcidadeMatriz = document.querySelector(".cidadeMatriz");
    const IbairroFilial = document.querySelector(".bairroFilial");
    const InumeroInventario = document.querySelector(".numeroInventario");
    const IplacaPatrimonio = document.querySelector(".placaPatrimonio");
    const IcentroCusto = document.querySelector(".centroCusto");
    const IcontaContabil = document.querySelector(".contaContabil");
    const ItipoPatrimonio = document.querySelector(".tipoPatrimonio");

    if (!formulario || !IcidadeMatriz || !IbairroFilial || !InumeroInventario || !IplacaPatrimonio || !IcentroCusto || !IcontaContabil || !ItipoPatrimonio) {
        console.error("Um ou mais elementos não foram encontrados no DOM.");
        return;
    }

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
                tipoPatrimonio: ItipoPatrimonio.value 
            })
        })
        .then(function(res) {
            console.log(res);
        })
        .catch(function(res) {
            console.log(res);
        });
    }

    function limpar() {
        IcidadeMatriz.value = '';
        IbairroFilial.value = '';
        InumeroInventario.value = '';
        IplacaPatrimonio.value = '';
        IcentroCusto.value = '';
        IcontaContabil.value = '';
        ItipoPatrimonio.value = '';
    }

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        cadastrar();
        limpar();
    });
});

