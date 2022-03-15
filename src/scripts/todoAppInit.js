import { projectForm } from "./projectForm.js";
import { project } from "./project.js";
import { projectMaker } from "./projectMaker.js";
import { projectLibrary } from "./projectLibrary.js";
import { displayController } from "./displayController.js";
import { todoForm } from "./todoForm.js";
import { dataStorage } from "./dataStorage.js";

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

        /*
        const inbox = document.querySelector('#inbox');
        const today = document.querySelector('#today');

        inbox.addEventListener('click', dataStorage.saveLibrary);
        today.addEventListener('click', function() {
            const loadedLibrary = dataStorage.loadLibrary();
            console.log(loadedLibrary);
            console.log(loadedLibrary[0].name);
        });
        */
    }

    const runTodoApp = () => {
        dataStorage.loadLibrary();
        listenerSetup();
    }

    return {listenerSetup, defaultProjectSetup, runTodoApp};
})();

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}


export {todoAppInit};