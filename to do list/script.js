const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');

// Function to create a new task item
function createTodoItem(taskContent) {
    const li = document.createElement('li');
    li.classList.add('task');

    const taskText = document.createElement('span');
    taskText.textContent = taskContent;
    li.appendChild(taskText);

    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkButton.classList.add('check-button');
    checkButton.setAttribute('aria-label', 'Check task');
    li.appendChild(checkButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trashButton.classList.add('trash-button');
    trashButton.setAttribute('aria-label', 'Delete task');
    li.appendChild(trashButton);

    listtdl.appendChild(li);
}

// Function to handle adding a new task
function addTodo() {
    const taskContent = inputtdl.value.trim();

    if (taskContent === '') return;

    createTodoItem(taskContent);
    inputtdl.value = '';
}

// Event listener for adding a task
buttontdl.addEventListener('click', addTodo);

// Event delegation for checking or deleting tasks
listtdl.addEventListener('click', function(e) {
    const target = e.target;

    if (target.classList.contains('check-button')) {
        target.parentElement.classList.toggle('checklist');
    } else if (target.classList.contains('trash-button')) {
        target.parentElement.remove();
    }
});
