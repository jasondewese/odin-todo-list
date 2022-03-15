import { projectLibrary } from "./projectLibrary.js";
import { todoAppInit } from "./todoAppInit.js";
import { project } from "./project.js";
import { todo } from "./todo.js";
import { displayController } from "./displayController.js";

const dataStorage = (() => {

    const saveLibrary = () => {

        let projectList = [];
        
        if (storageAvailable('localStorage')) {
            
            for (let i = 0; i < projectLibrary.getProjectListLength(); i++) {
                let todoList = [];
                
                let currentProject = projectLibrary.getProject(i);
                for (let j = 0; j < currentProject.getLength(); j++) {
                    let currentTodo = currentProject.getTodo(j);
                    let saveTodo = 
                    {
                        _task: currentTodo.getTask(),
                        _dueDate: currentTodo.getDueDate(),
                        _complete: currentTodo.isComplete()                    
                    };

                    todoList.push( saveTodo );
                }

                let saveProject = {
                    _name: currentProject.getName(),
                    _todoList: todoList
                }
                projectList.push( saveProject );  
            }

            localStorage.setItem('projectList', JSON.stringify(projectList));
            console.log(JSON.parse(localStorage.getItem("projectList") || "[]"));

        }
          else {
            console.log("localStorage not available");
        }
    }

  
    const loadLibrary = () => {
        if(!localStorage.getItem('projectList')) {
            todoAppInit.defaultProjectSetup();
        } 
        else {
            let loadedLibrary = JSON.parse(localStorage.getItem("projectList") || "[]");
            

            for (let i = 0; i < loadedLibrary.length; i++) {
                //construct new project object so it regains the methods lost in storage
                let currentProject = project(loadedLibrary[i]._name);

                for (let j = 0; j < loadedLibrary[i]._todoList.length; j++) {
                    let currentTodo = todo(loadedLibrary[i]._todoList[j]._task);

                    let todoDate = loadedLibrary[i]._todoList[j]._dueDate;

                    if (todoDate === '' || todoDate === null || todoDate == 'No due date') {
                        currentTodo.setDueDate('No due date');
                    }
                    else {
                        todoDate = new Date(todoDate);
                        currentTodo.setDueDate(todoDate);
                    }
                    
                    console.log(currentTodo.getDueDate());
                    
                    currentTodo.setComplete(loadedLibrary[i]._todoList[j]._complete);
                    currentProject.addTodo(currentTodo);
                }

                projectLibrary.addProject(currentProject);
            }

            displayController.displayAllData();
            //return JSON.parse(localStorage.getItem("projectList") || "[]");
        }
       
    }

    return {saveLibrary, loadLibrary};
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

export {dataStorage};