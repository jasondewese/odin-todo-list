import { displayController } from "./displayController";
import { projectLibrary } from "./projectLibrary.js";

const todoMaker = (() => {

    const makeTodo = (todo) => {

        const taskWrapper = document.createElement('li');
        taskWrapper.classList.add('task-wrapper');
            const taskLeft = document.createElement('div');
            taskLeft.classList.add('task-left');
                const checkBox = document.createElement('img');
                checkBox.src = '../src/images/checkbox-blank-outline.svg';
                checkBox.alt = 'Empty check box';
                checkBox.classList.add('list-icon', 'checkbox');
                const taskName = document.createElement('div');
                taskName.classList.add('task-name');
                taskName.textContent = todo.getTask();


                checkBox.addEventListener('click', function() {
                    todo.changeComplete();
                    if (todo.isComplete()) {
                        taskWrapper.style.textDecoration = 'line-through';
                        checkBox.src = '../src/images/checkbox-marked-outline.svg';
                        checkBox.alt = 'Checked check box';
                    }
                    else {
                        taskWrapper.style.textDecoration = 'none';
                        checkBox.src = '../src/images/checkbox-blank-outline.svg';
                        checkBox.alt = 'Empty check box';
                    }
                })

            taskLeft.appendChild(checkBox);
            taskLeft.appendChild(taskName);            
            
            const taskRight = document.createElement('div');
            taskRight.classList.add('task-right');
                const date = document.createElement('div');
                date.classList.add('date');
                date.textContent = 'No due date';
                const deleteIcon = document.createElement('img');
                deleteIcon.src = '../src/images/delete.svg';
                deleteIcon.alt = 'Trash can delete icon';
                deleteIcon.classList.add('list-icon');

                deleteIcon.addEventListener('click', function() {
                    /*
                    const projectList = this.parentElement.parentElement;
                    const indexOfProject = Array.from(projectList.childNodes).indexOf(this.parentElement);
                    projectLibrary.removeProject( indexOfProject );
                    displayController.displayProjectList();
                    */

                    const todoList = this.parentElement.parentElement.parentElement;
                    const todoWrapper = this.parentElement.parentElement;
                    const indexOfTodo = Array.from(todoList.childNodes).indexOf(todoWrapper);

                    const currentProjectIndex = projectLibrary.getCurrentProject();
                    const currentProject = projectLibrary.getProject(currentProjectIndex);

                    currentProject.removeTodo(indexOfTodo);

                    displayController.displayTodoList(currentProject);
                });

            taskRight.appendChild(date);
            taskRight.appendChild(deleteIcon);    

        taskWrapper.appendChild(taskLeft);
        taskWrapper.appendChild(taskRight);

        return taskWrapper;
    } 

    
    return {makeTodo};
})();

export {todoMaker};