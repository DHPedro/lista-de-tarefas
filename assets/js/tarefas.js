let currentUser = null;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        currentUser = user;
        if (currentUser) {
            loadTasks(currentUser.uid);
        }
    } else {
        currentUser = null;
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

        const taskItem = createTaskElement(taskId, taskData.description, taskData.done); // Pass the 'done' status
        taskContainer.appendChild(taskItem);
    });

    userTasksRef.on("child_removed", function(data) {
        const taskId = data.key;
        const taskElement = document.getElementById(taskId);

        if (taskElement) {
            taskElement.remove();
        }
    });
}

document.getElementById('enviar').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputt = document.getElementById('input-tarefa');
    const description = inputt.value;

    if (currentUser) {
        addTask(currentUser.uid, description);
        inputt.value = '';
    } else {
        alert('Você precisa estar autenticado para adicionar tarefas.');
    }
});

document.addEventListener('change', function (e) {
    if (e.target.type === 'checkbox') {
        const taskId = e.target.id;
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

function createTaskElement(taskId, description, isDone) {
    const taskItem = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const deleteButton = document.createElement('button');

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', taskId);
    newTask.checked = isDone; // Set the initial checkbox state

    taskLabel.setAttribute('for', taskId);
    taskLabel.appendChild(document.createTextNode(description));

    deleteButton.textContent = 'Remover';
    deleteButton.style.marginLeft = '10px';

    deleteButton.addEventListener('click', function () {
        firebase.database().ref("tasks/" + currentUser.uid + "/" + taskId).remove();
    });

    taskItem.classList.add('task-item');
    taskItem.setAttribute('id', taskId);
    taskItem.appendChild(newTask);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

function addTask(userId, description) {
    const userTasksRef = firebase.database().ref("tasks/" + userId);

    const taskRef = userTasksRef.push();

    taskRef.set({
        description: description,
        done: false // Initialize as not done
    });
}