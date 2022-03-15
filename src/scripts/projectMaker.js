/*
    <li class="project-wrapper">
        <img src="./../images/format-list-checks.svg" alt="Check list icon" class="list-icon">
        <div class="project-name">Project Name</div>
        <img src="./../images/delete.svg" alt="Trash can delete logo" class="list-icon">
    </li>
*/

import { displayController } from "./displayController";
import { projectLibrary } from "./projectLibrary.js";
import { dataStorage } from './dataStorage.js';


const projectMaker = (() => {

    const makeProject = (project) => {

        const projectWrapper = document.createElement('li');
        projectWrapper.classList.add('project-wrapper');
           
            const listIcon = document.createElement('img');
            listIcon.src = './../images/format-list-checks.svg';
            listIcon.alt = 'Check list icon';
            listIcon.classList.add('list-icon');

            const projectName = document.createElement('div');
            projectName.classList.add('project-name');
            projectName.textContent = project.getName();

            const deleteIcon = document.createElement('img');
            deleteIcon.src = './../images/delete.svg';
            deleteIcon.alt = 'Trash can delete logo';
            deleteIcon.classList.add('list-icon');
            deleteIcon.classList.add('delete-icon');

            projectName.addEventListener('click', function() {
                displayController.displayProject(project);

                const projectList = this.parentElement.parentElement;
                const indexOfProject = Array.from(projectList.childNodes).indexOf(this.parentElement);
                projectLibrary.setCurrentProject(indexOfProject);

            });

            listIcon.addEventListener('click', function() {
                displayController.displayProject(project);

                const projectList = this.parentElement.parentElement;
                const indexOfProject = Array.from(projectList.childNodes).indexOf(this.parentElement);
                projectLibrary.setCurrentProject(indexOfProject);
            });

            deleteIcon.addEventListener('click', function() {
                const projectList = this.parentElement.parentElement;
                const indexOfProject = Array.from(projectList.childNodes).indexOf(this.parentElement);
                projectLibrary.removeProject( indexOfProject );
                dataStorage.saveLibrary();
                displayController.displayProjectList();
            });

        projectWrapper.appendChild(listIcon);
        projectWrapper.appendChild(projectName);
        projectWrapper.appendChild(deleteIcon);

        return projectWrapper;
    } 
    
    return {makeProject};
})();

export {projectMaker};