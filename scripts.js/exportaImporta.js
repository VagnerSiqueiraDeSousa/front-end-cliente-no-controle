fetch('/patrimonio/export', { method: 'GET' }) // Alterado para GET
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'patrimonios.csv'; // Nome do arquivo
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

document.getElementById('exportJSON').addEventListener('click', () => {
    fetch('/export-json', { method: 'POST' })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'users.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
});

document.getElementById('importCSV').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv';
    input.onchange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        fetch('/import-csv', { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                alert('CSV importado com sucesso!');
            });
    };
    input.click();
});

document.getElementById('importJSON').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);

        fetch('/import-json', { method: 'POST', body: formData })
            .then(response => response.json())
            .then(data => {
                alert('JSON importado com sucesso!');
            });
    };
    input.click();
});

// scripts.js/exportaImporta.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});