// Lista fictícia de colaboradores simplificada
const colaboradores = [
    { id: 1, nome: 'João Silva Martins', cargo: 'Desenvolvedor', status: 'Ativo' },
    { id: 2, nome: 'Maria Oliveira', cargo: 'Designer', status: 'Desativado' },
    { id: 3, nome: 'Carlos Souza', cargo: 'Gerente', status: 'Ativo' },
    { id: 4, nome: 'Ana Costa', cargo: 'Analista de Sistemas', status: 'Ativo' },
    { id: 5, nome: 'Lucas Pereira', cargo: 'Desenvolvedor Front-End', status: 'Desativado' },
    { id: 6, nome: 'Beatriz Lima', cargo: 'Desenvolvedora Back-End', status: 'Ativo' },
    { id: 7, nome: 'Pedro Santos', cargo: 'Designer UX/UI', status: 'Ativo' },
    { id: 8, nome: 'Julia Gomes', cargo: 'Gerente de Projetos', status: 'Desativado' },
    { id: 9, nome: 'Marcos Silva', cargo: 'Desenvolvedor Full Stack', status: 'Ativo' },
    { id: 10, nome: 'Larissa Rocha', cargo: 'Assistente Administrativo', status: 'Desativado' },
    { id: 11, nome: 'Ricardo Almeida', cargo: 'Marketing Digital', status: 'Ativo' },
    { id: 12, nome: 'Patrícia Alves', cargo: 'Suporte Técnico', status: 'Desativado' },
    { id: 13, nome: 'Rafael Martins', cargo: 'Analista de Dados', status: 'Ativo' },
    { id: 14, nome: 'Gabriela Ferreira', cargo: 'Product Owner', status: 'Desativado' },
    { id: 15, nome: 'Fábio Costa', cargo: 'Coordenador de TI', status: 'Ativo' }
];




// Função para renderizar a tabela de colaboradores
function renderTable(colaboradores) {
    const tableBody = document.getElementById('colaboradoresTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; 

    colaboradores.forEach(colaborador => {
        const row = tableBody.insertRow();
        
        row.innerHTML = `
            <td>${colaborador.nome}</td>
            <td>${colaborador.cargo}</td>
            <td>${colaborador.status}</td>
            <td>
              <button class="btn" onclick="editarColaborador(${colaborador.id})">Editar</button>
            </td>
        `;
    });
}

// Função para editar um colaborador
function editarColaborador(id) {
    const colaborador = colaboradores.find(c => c.id === id);
    alert(`Editar Colaborador: ${colaborador.nome}`);

}

document.getElementById('addColaborador').addEventListener('click', function() {
    window.location.href = './colaboradores_form.html'

});

// Função de pesquisa para filtrar colaboradores por nome ou cargo
document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    

    const filteredColaboradores = colaboradores.filter(colaborador => {
        return colaborador.nome.toLowerCase().includes(searchTerm) || colaborador.cargo.toLowerCase().includes(searchTerm);
    });

    // Atualiza a tabela com os colaboradores filtrados
    renderTable(filteredColaboradores);
});



// Chama a função para renderizar a tabela no carregamento
renderTable(colaboradores);

