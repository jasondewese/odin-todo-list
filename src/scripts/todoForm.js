import { displayController } from './displayController.js';
import {todo} from './todo.js';
import {todoMaker} from './todoMaker.js';
import { projectLibrary } from './projectLibrary.js';
import { dataStorage } from './dataStorage.js';

const todoForm = (() => {
    const closeTodoForm = () => {
        const formToClose = document.querySelector('.task-form');
        formToClose.remove();
    }
    
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

            addButton.addEventListener('click', function() {
                const newTodo = todo(document.querySelector('.task-input').value);
                //const newTodoElement = todoMaker.makeTodo(newTodo);
                //document.querySelector('.task-list').appendChild(newTodoElement);
                
                const currentProjectIndex = projectLibrary.getCurrentProject();
                const currentProject = projectLibrary.getProject(currentProjectIndex);

                currentProject.addTodo(newTodo);

                dataStorage.saveLibrary();

                displayController.displayTodoList(currentProject);                
                
                //Not needed because dispayController.displayTodoList already deletes
                //everthing from the parent node, which INCLUDES the todoForm
                //closeTodoForm();
            });

            const cancelButton = document.createElement('button');
            cancelButton.type = 'button';
            cancelButton.textContent = 'Cancel';
            cancelButton.classList.add('cancel-button');

            cancelButton.addEventListener('click', closeTodoForm);

        taskForm.appendChild(taskInput);
        taskForm.appendChild(addButton);
        taskForm.appendChild(cancelButton);

        return taskForm;
        }
    
    const openTodoForm = () => {
        const newTaskForm = _createTodoForm();
        document.querySelector('.task-list').appendChild(newTaskForm);

        return newTaskForm;
    }

    

    return {openTodoForm, closeTodoForm};

})();

export {todoForm};