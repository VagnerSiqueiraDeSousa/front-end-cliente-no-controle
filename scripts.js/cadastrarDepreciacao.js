// Função para alternar o menu hambúrguer
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}

// Seletores do formulário
const formulario = document.querySelector("form");
const Iid_patrimonio = document.querySelector(".id_patrimonio");
const Idata_depreciacao = document.querySelector(".data_depreciacao");
const Idepreciacao = document.querySelector(".depreciacao");
const Ivalor_entrada = document.querySelector(".valor_entrada");
const Ivalor_real = document.querySelector(".valor_real");
const Ivalor_venda = document.querySelector(".valor_venda");

// Função para cadastrar a depreciação
function cadastrar_depreciacao() {
    const idPatrimonio = Iid_patrimonio.value;

    // Verificar se o ID do patrimônio foi informado
    if (!idPatrimonio) {
        alert("Por favor, insira o ID do patrimônio.");
        return;
    }

    // Dados a serem enviados para o backend
    const dados = {
        id_patrimonio: idPatrimonio,
        data_depreciacao: Idata_depreciacao.value,
        depreciacao: Idepreciacao.value,
        valor_entrada: Ivalor_entrada.value,
        valor_real: Ivalor_real.value,
        valor_venda: Ivalor_venda.value,
    };

    // Enviar os dados para o backend
    fetch("http://localhost:8080/cadastrar_depreciacao", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(dados)
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error('Erro ao cadastrar depreciação: ' + response.statusText);
        }
        return response.json();
    })
    .then(function(data) {
        console.log('Sucesso:', data);
        alert("Depreciação cadastrada com sucesso!");
        limpar();
    })
    .catch(function(error) {
        console.error('Erro:', error);
        alert("Erro ao cadastrar depreciação. Verifique o ID do patrimônio.");
    });
}

// Função para limpar o formulário
function limpar() {
    Iid_patrimonio.value = "";
    Idata_depreciacao.value = "";
    Idepreciacao.value = "";
    Ivalor_entrada.value = "";
    Ivalor_real.value = "";
    Ivalor_venda.value = "";
}

// Evento de submit do formulário
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    cadastrar_depreciacao();
});
