import { projectForm } from "./projectForm.js";
import { project } from "./project.js";
import { projectMaker } from "./projectMaker.js";
import { projectLibrary } from "./projectLibrary.js";
import { displayController } from "./displayController.js";

const todoAppInit = (() => {
    
    const defaultProjectSetup = () => {
        const defaultProject = project('General Tasks');
        projectLibrary.addProject(defaultProject);
        //const defaultProjectElement = projectMaker.makeProject(defaultProject);
        displayController.displayProjectList();
    }

    const listenerSetup = () => {
               
        const addNewProject = document.querySelector('.new-project-wrapper');
        
        addNewProject.addEventListener('click', function() {
            projectForm.openProjectForm();
        });
        
    }

    return {listenerSetup, defaultProjectSetup};
})();

export {todoAppInit};