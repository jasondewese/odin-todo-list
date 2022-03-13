import { displayController } from "./displayController.js";
import { projectLibrary } from "./projectLibrary.js";

const dates = (() => {

    const _closeDateInput = () => {
        document.querySelector('.date-input').remove();
    }

    const openDateInput = (event, todo) => {
        const dateInput = document.createElement('input');
        dateInput.type = 'date';

        dateInput.style.position = 'fixed';
        dateInput.style.top = event.clientY + 'px';
        dateInput.style.left = event.clientX + 'px';
        dateInput.style.zIndex = 5;
        dateInput.classList.add('date-input');

        dateInput.addEventListener("change", function() {
            const input = this.value;
            const dateEntered = new Date(input);
            //console.log(input); //e.g. 2015-11-13
            //console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)

            todo.setDueDate(dateEntered);
            displayController.displayTodoList(projectLibrary.getProject(projectLibrary.getCurrentProject()));

            _closeDateInput();
        });

        document.querySelector('body').appendChild(dateInput);
        
    }

    return {openDateInput};

})();

export {dates};