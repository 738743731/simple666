// Made in simple
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const newTask = document.createElement('li');


        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;
        taskTextElement.className = 'task-text';


        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.className = 'btn-complete';
        completeButton.addEventListener('click', () => {
            taskTextElement.style.textDecoration = 'line-through';
            taskTextElement.style.color = '#ccc';
        });

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'btn-remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
        });

 
        const taskActions = document.createElement('div');
        taskActions.className = 'task-actions';
        taskActions.appendChild(completeButton);
        taskActions.appendChild(removeButton);

        newTask.appendChild(taskTextElement);
        newTask.appendChild(taskActions);

        taskList.appendChild(newTask);
        taskInput.value = '';
    }
}


addTaskButton.addEventListener('click', addTask);