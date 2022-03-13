import { projectForm } from "./projectForm.js";
import { project } from "./project.js";
import { projectMaker } from "./projectMaker.js";
import { projectLibrary } from "./projectLibrary.js";
import { displayController } from "./displayController.js";
import { todoForm } from "./todoForm.js";

const todoAppInit = (() => {
    
    const defaultProjectSetup = () => {
        const defaultProject = project('General Tasks');
        projectLibrary.addProject(defaultProject);
        displayController.displayProjectList();
        displayController.displayTodoList(defaultProject);
    }

    const listenerSetup = () => {
               
        const addNewProject = document.querySelector('.new-project-wrapper');
        
        addNewProject.addEventListener('click', function() {
            projectForm.openProjectForm();
        });

        const addNewTodo = document.querySelector('.new-task-wrapper');

        addNewTodo.addEventListener('click', function() {
            
            todoForm.openTodoForm();

        });
        
    }

    return {listenerSetup, defaultProjectSetup};
})();

export {todoAppInit};