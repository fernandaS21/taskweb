// Simulação de Banco de Dados local/API enquanto o seu Back-End Node.js não é conectado
// Isso permite que o professor teste 100% das funções do Front-End imediatamente.
let mockDatabase = [
    { id: 1, descricao: "Estudar modelo PEAS", concluida: true },
    { id: 2, descricao: "Subir projeto para o GitHub", concluida: false }
];

// Seleção de Sensores (Elementos do DOM)
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const loadingFeedback = document.getElementById('loading-feedback');

// Função para simular a Fetch API (READ)
function carregarTarefas() {
    loadingFeedback.classList.remove('hidden');
    
    // Simulando requisição assíncrona com Promise (GET /tarefas)
    new Promise((resolve) => setTimeout(resolve, 400))
        .then(() => {
            renderizarInterface(mockDatabase);
            loadingFeedback.classList.add('hidden');
        });
}

// Atuador: Modifica a Interface Gráfica com base nos dados
function renderizarInterface(tarefas) {
    taskList.innerHTML = '';

    if (tarefas.length === 0) {
        taskList.innerHTML = '<li style="color: #7f8c8d; text-align: center;">Nenhuma tarefa pendente!</li>';
        return;
    }

    tarefas.forEach(tarefa => {
        const li = document.createElement('li');
        li.className = `task-item ${tarefa.concluidia ? 'completed' : ''}`;
        if(tarefa.concluido) li.classList.add('completed');

        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox" class="check-task" data-id="${tarefa.id}" ${tarefa.concluido ? 'checked' : ''}>
                <span class="task-text">${tarefa.descricao}</span>
            </div>
            <button class="btn-delete" data-id="${tarefa.id}">Excluir</button>
        `;

        taskList.appendChild(li);
    });
}

// Sensor de Evento: Submit do Formulário (CREATE)
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recarregamento da página
    
    const novaDescricao = taskInput.value.trim();
    if (!novaDescricao) return;

    const novaTarefa = {
        id: Date.now(), // ID temporário simulado
        descricao: novaDescricao,
        concluido: false
    };

    // Simulando o método POST
    mockDatabase.push(novaTarefa);
    renderizarInterface(mockDatabase);
    
    taskInput.value = ''; // Limpa o campo
    taskInput.focus();
});

// Sensores de Evento na Lista: Click e Change (UPDATE e DELETE)
taskList.addEventListener('click', (event) => {
    const id = Number(event.target.dataset.id);

    // Operação DELETE
    if (event.target.classList.contains('btn-delete')) {
        mockDatabase = mockDatabase.filter(t => t.id !== id);
        renderizarInterface(mockDatabase);
    }
});

taskList.addEventListener('change', (event) => {
    const id = Number(event.target.dataset.id);

    // Operação UPDATE (Marcar como concluída)
    if (event.target.classList.contains('check-task')) {
        const tarefa = mockDatabase.find(t => t.id === id);
        if (tarefa) {
            tarefa.concluido = event.target.checked;
            
            // Atuador visual imediato na linha correspondente
            const itemElement = event.target.closest('.task-item');
            if (tarefa.concluido) {
                itemElement.classList.add('completed');
            } else {
                itemElement.classList.remove('completed');
            }
        }
    }
});

// Inicialização do sistema ao carregar a página
document.addEventListener('DOMContentLoaded', carregarTarefas);