window.addEventListener('load', ()=> {
    todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');

    const username = localStorage.getItem('username') || '';

    nameInput.value = username;

    nameInput.addEventListener('change', e => {
        localStorage.setItem('username', e.target.value);
    })
    
    newTodoForm.addEventListener('submit', e => {
        e.preventDefault();

        const todo = {
            content: e.target.elements.content.value,
            category: e.target.elements.category.value,
            done: false,
            createdAt: new Date(). getTime()
        }

        todos.push(todo);
        
        localStorage.setItem('todos', JSON.stringify(todos));

        e.target.reset();

        DisplayTodos();


    })

})

function DisplayTodos () {
    const todoList = document.querySelector('#todo-list');

    todoList.innerHTML = '';

    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item')

        const label = document.createdElement('label');
        const input = document.createdElement('input');
        const span = document.createdElement('span');
        const content = document.createdElement('div');
        const actions = document.createdElement('div');
        const edit = document.createdElement('button');
        const deleteButton = document.createdElement('button');

    })
}