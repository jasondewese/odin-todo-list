import { project } from "./project.js";
import { projectMaker } from "./projectMaker.js";

const projectForm = (() => {
    const closeProjectForm = () => {
        const formToClose = document.querySelector('.project-form');
        formToClose.remove();
    }
    
    const _createProjectForm = () => {
        const projectForm = document.createElement('form');
        projectForm.classList.add('project-form');
            const projectInput = document.createElement('input');
            projectInput.type = 'text';
            projectInput.classList.add('project-input');
            const addButton = document.createElement('button');
            addButton.textContent = 'Add';
            addButton.type = 'button';
            addButton.classList.add('add-button');

            addButton.addEventListener('click', function() {
                const newProject = project(document.querySelector('.project-input').value);
                const newProjectElement = projectMaker.makeProject(newProject);
                document.querySelector('.projects-list').appendChild(newProjectElement);
                closeProjectForm();
            });

            const cancelButton = document.createElement('button');
            cancelButton.type = 'button';
            cancelButton.textContent = 'Cancel';
            cancelButton.classList.add('cancel-button');

            cancelButton.addEventListener('click', closeProjectForm);

        projectForm.appendChild(projectInput);
        projectForm.appendChild(addButton);
        projectForm.appendChild(cancelButton);

        return projectForm;
        }
    
    const openProjectForm = () => {
        const newProjectForm = _createProjectForm();
        document.querySelector('.projects-list').appendChild(newProjectForm);

        return newProjectForm;
    }

    

    return {openProjectForm, closeProjectForm};

})();

export {projectForm};