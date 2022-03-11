const todoForm = (() => {
    const _createTodoForm = () => {
        const taskForm = document.createElement('form');
        taskForm.classList.add('task-form');
            const taskInput = document.createElement('input');
            taskInput.type = 'text';
            taskInput.classList.add('task-input');
            const addButton = document.createElement('button');
            addButton.textContent = 'Add';
            addButton.type = 'button';
            addButton.classList.add('add-button');
            const cancelButton = document.createElement('button');
            cancelButton.type = 'button';
            cancelButton.textContent = 'Cancel';
            cancelButton.classList.add('cancel-button');

        taskForm.appendChild(taskInput);
        taskForm.appendChild(addButton);
        taskForm.appendChild(cancelButton);

        return taskForm;
        }
    
    const openTodoForm = () => {
        const newTaskForm = _createTodoForm();
        document.querySelector('.main-content').appendChild(newTaskForm);

        return newTaskForm;
    }

    const closeTodoForm = () => {
        const formToClose = document.querySelector('.task-form');
        formToClose.remove();
    }

    return {openTodoForm, closeTodoForm};

})();

export {todoForm};