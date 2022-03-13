import { todoMaker } from "./todoMaker.js";
import { projectLibrary } from "./projectLibrary.js";
import { projectMaker } from "./projectMaker.js";



const displayController = (() => {

    const displayProject = (project) => {
        const taskList = document.querySelector('.task-list');
    
        //remove all but first two element2 in .main-content (the add button and project name)
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        document.querySelector('.current-project-name').textContent = project.getName();

        for (let i = 0; i < project.getLength(); i++) {
            let currentTodo = project.getTodo(i);
            let newTodoElement = todoMaker.makeTodo(currentTodo);
            document.querySelector('.task-list').appendChild(newTodoElement);
        }
    }

    const displayProjectList = () => {
        const projectsList = document.querySelector('.projects-list');

        //empty list to display new list
        while (projectsList.firstChild) {
            projectsList.removeChild(projectsList.firstChild);
        }

        for (let i = 0; i < projectLibrary.getProjectListLength(); i++) {
            let currentProject = projectLibrary.getProject(i);
            let currentProjectElement = projectMaker.makeProject(currentProject);

            document.querySelector('.projects-list').appendChild(currentProjectElement);
        }
    }


    const displayTodoList = (project) => {
        const taskList = document.querySelector('.task-list');
        
        //empty list to display new list
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        document.querySelector('.current-project-name').textContent = project.getName();

        if (project.getLength() > 0) {
            for (let i = 0; i < project.getLength(); i++) {
                let currentTodo = project.getTodo(i);
                let currentTodoElement = todoMaker.makeTodo(currentTodo);
    
                taskList.appendChild(currentTodoElement);
            }
        }
        
    }

    return {displayProject, displayProjectList, displayTodoList};
})();

export {displayController};