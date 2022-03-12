const projectLibrary = (() => {
    let _projectList = [];
    let _currentProject = 0;

    const addProject = (project) => {
        _projectList.push(project);
    }

    const removeProject = (index) => {
        _projectList.splice(index,1);
    }

    const getProject = (index) => {
        return _projectList[index];
    }

    const getCurrentProject = () => {
        return _currentProject;
    }

    const setCurrentProject = (index) => {
        _currentProject = index;
    }

    const getProjectListLength = () => {
        return _projectList.length;
    }

    return {addProject, removeProject, getProject, getCurrentProject, setCurrentProject, getProjectListLength};
})();

export {projectLibrary};