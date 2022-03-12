/*
    <li class="project-wrapper">
        <img src="../src/images/format-list-checks.svg" alt="Check list icon" class="list-icon">
        <div class="project-name">Project Name</div>
        <img src="../src/images/delete.svg" alt="Trash can delete logo" class="list-icon">
    </li>
*/


const projectMaker = (() => {

    const makeProject = (project) => {

        const projectWrapper = document.createElement('li');
        projectWrapper.classList.add('project-wrapper');
           
            const listIcon = document.createElement('img');
            listIcon.src = '../src/images/format-list-checks.svg';
            listIcon.alt = 'Check list icon';
            listIcon.classList.add('list-icon');

            const projectName = document.createElement('div');
            projectName.classList.add('project-name');
            projectName.textContent = project.getName();

            const deleteIcon = document.createElement('img');
            deleteIcon.src = '../src/images/delete.svg';
            deleteIcon.alt = 'Trash can delete logo';
            deleteIcon.classList.add('list-icon');

        projectWrapper.appendChild(listIcon);
        projectWrapper.appendChild(projectName);
        projectWrapper.appendChild(deleteIcon);

        return projectWrapper;
    } 

    
    return {makeProject};
})();

export {projectMaker};