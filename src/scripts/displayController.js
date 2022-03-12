import { todoMaker } from "./todoMaker.js";
import { projectLibrary } from "./projectLibrary.js";
import { projectMaker } from "./projectMaker.js";

const displayController = (() => {

    const displayProject = (project) => {
        const mainContent = document.querySelector('.main-content');
    
        //remove all but first two element2 in .main-content (the add button and project name)
        while (mainContent.childNodes.length > 2) {
            mainContent.removeChild(mainContent.lastChild);
        }

        document.querySelector('.current-project-name').textContent = project.getName();

        for (let i = 0; i < project.getLength(); i++) {
            let currentTodo = project.getTodo(i);
            let newTodoElement = todoMaker.makeTodo(currentTodo);
            document.querySelector('.main-content').appendChild(newTodoElement);
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

    return {displayProject, displayProjectList};
})();

export {displayController};