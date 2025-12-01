let currentUser = null;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        currentUser = user;
        if (currentUser) {
            loadTasks(currentUser.uid);
        }
    } else {
        currentUser = null;
        // Opcional: Redirecionar para login se não estiver logado
        // window.location.href = "login.html";
    }
});

function loadTasks(userId) {
    const taskContainer = document.getElementById('tarefa');
    taskContainer.innerHTML = '';

    const userTasksRef = firebase.database().ref("tasks/" + userId);

    userTasksRef.off();

    userTasksRef.on("child_added", function(data) {
        const taskData = data.val();
        const taskId = data.key;

        const taskItem = createTaskElement(taskId, taskData.description, taskData.done);
        taskContainer.appendChild(taskItem);
    });

    userTasksRef.on("child_removed", function(data) {
        const taskId = data.key;
        // Nota: O ID do elemento HTML agora é "item-ID" para não conflitar
        const taskElement = document.getElementById(`item-${taskId}`);

        if (taskElement) {
            taskElement.remove();
        }
    });
}

document.getElementById('enviar').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputt = document.getElementById('input-tarefa');
    const description = inputt.value;

    if (!description.trim()) return; // Evita tarefas vazias

    if (currentUser) {
        addTask(currentUser.uid, description);
        inputt.value = '';
    } else {
        alert('Você precisa estar autenticado para adicionar tarefas.');
    }
});

// Listener global para os checkboxes
document.addEventListener('change', function (e) {
    if (e.target.type === 'checkbox') {
        // O ID do checkbox agora vem com "check-", precisamos limpar isso para pegar o ID real do banco
        const fullId = e.target.id;
        const taskId = fullId.replace('check-', ''); 
        const checked = e.target.checked;

        if (currentUser) {
            updateTaskStatus(currentUser.uid, taskId, checked);
        }
    }
});

function updateTaskStatus(userId, taskId, checked) {
    const userTasksRef = firebase.database().ref("tasks/" + userId + "/" + taskId);
    userTasksRef.update({
        done: checked
    });
}

// --- AQUI ESTÁ A GRANDE MUDANÇA ---
function createTaskElement(taskId, description, isDone) {
    // 1. O container principal (div.task-item)
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    // Damos um ID ao elemento DIV para poder removê-lo depois (ex: item-123)
    taskItem.setAttribute('id', `item-${taskId}`);

    // 2. Container para agrupar Checkbox + Texto (necessário para o CSS flexbox funcionar)
    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');

    // 3. O Checkbox
    const newTask = document.createElement('input');
    newTask.setAttribute('type', 'checkbox');
    // O ID do checkbox precisa ser diferente do ID da div principal
    newTask.setAttribute('id', `check-${taskId}`); 
    newTask.checked = isDone;

    // 4. O Label (Texto da tarefa)
    const taskLabel = document.createElement('label');
    // O 'for' deve bater com o ID do checkbox para clicar no texto e marcar
    taskLabel.setAttribute('for', `check-${taskId}`); 
    taskLabel.textContent = description;

    // Coloca checkbox e label dentro do container de conteúdo
    taskContent.appendChild(newTask);
    taskContent.appendChild(taskLabel);

    // 5. O Botão de Remover (Elemento customizado buttonremov)
    const deleteButton = document.createElement('buttonremov');
    // Não definimos textContent porque o CSS desenha o ícone de lixeira

    deleteButton.addEventListener('click', function () {
        firebase.database().ref("tasks/" + currentUser.uid + "/" + taskId).remove();
    });

    // 6. Montagem final: Conteúdo na esquerda, Botão na direita
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

function addTask(userId, description) {
    const userTasksRef = firebase.database().ref("tasks/" + userId);
    const taskRef = userTasksRef.push();

    taskRef.set({
        description: description,
        done: false
    });
}
