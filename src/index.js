import './reset.css';
import './style.css';
import {todo} from './scripts/todo.js';


const myTask = todo('laundry');

console.log(myTask.getTask());

myTask.setTask('vacuum');

console.log(myTask.getTask());

myTask.setDueDate('Monday');

console.log(myTask.getDueDate());


/*
Icon Credits:
    format-list-checks: Austin Andrews @Templarian
    all others from Google 
*/