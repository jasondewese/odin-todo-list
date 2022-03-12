import { todoMaker } from "./todoMaker.js";

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

    return {displayProject};
})();

export {displayController};