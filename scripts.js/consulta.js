// Função para buscar patrimônio por ID no back-end
async function buscarPatrimonioPorId(id) {
    try {
        const response = await fetch(`http://localhost:8080/patrimonio/${id}`); // Substitua pela URL do seu back-end
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        const patrimonio = await response.json();
        return patrimonio;
    } catch (error) {
        console.error("Erro ao buscar patrimônio por ID:", error);
        return null;
    }
}

// Função para buscar patrimônio por item no back-end
async function buscarPatrimonioPorItem(item) {
    try {
        const response = await fetch(`http://localhost:8080/patrimonio/item/${item}`); // Substitua pela URL do seu back-end
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        const patrimonio = await response.json();
        return patrimonio;
    } catch (error) {
        console.error("Erro ao buscar patrimônio por item:", error);
        return null;
    }
}

// Evento de envio do formulário
document.getElementById('formConsulta').addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    const campoConsulta = document.getElementById('campoConsulta').value;
    const resultadoDiv = document.getElementById('resultadoConsulta');

    // Validação do campo de consulta
    if (!campoConsulta) {
        resultadoDiv.innerHTML = `<p class="erro">Por favor, insira um ID ou item válido.</p>`;
        return;
    }

    // Verifica se o valor é um número (ID) ou uma string (item)
    const isId = !isNaN(campoConsulta); // Verifica se é um número

    let patrimonio;
    if (isId) {
        // Busca por ID
        patrimonio = await buscarPatrimonioPorId(campoConsulta);
    } else {
        // Busca por item
        patrimonio = await buscarPatrimonioPorItem(campoConsulta);
    }

    if (patrimonio) {
        // Exibe os dados do patrimônio
        resultadoDiv.innerHTML = `
            <h3>Resultado da Consulta:</h3>
            <p><strong>Cidade Matriz:</strong> ${patrimonio.cidadeMatriz}</p>
            <p><strong>Bairro Filial:</strong> ${patrimonio.bairroFilial}</p>
            <p><strong>Número de Inventário:</strong> ${patrimonio.numeroInventario}</p>
            <p><strong>Placa do Patrimônio:</strong> ${patrimonio.placaPatrimonio}</p>
            <p><strong>Centro de Custo:</strong> ${patrimonio.centroCusto}</p>
            <p><strong>Conta Contábil:</strong> ${patrimonio.contaContabil}</p>
            <p><strong>Tipo de Patrimônio:</strong> ${patrimonio.tipoPatrimonio}</p>
            <p><strong>Item: </strong>${patrimonio.item}</p>
            <p><strong>Descricao do item: </strong>${patrimonio.descricao_do_item}</P>
        `;
    } else {
        // Exibe mensagem de erro se o patrimônio não for encontrado
        resultadoDiv.innerHTML = `<p class="erro">Patrimônio com ${isId ? 'ID' : 'item'} "${campoConsulta}" não encontrado.</p>`;
    }
});

// Evento para o botão "Limpar Consulta"
document.getElementById('limparConsulta').addEventListener('click', function () {
    // Limpa o campo de entrada
    document.getElementById('campoConsulta').value = '';

    // Limpa a área de resultados
    document.getElementById('resultadoConsulta').innerHTML = `<p>Resultados serão exibidos aqui.</p>`;
});