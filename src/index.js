import './reset.css';
import './style.css';
import {todo} from './scripts/todo.js';
import {todoMaker} from './scripts/todoMaker.js';


const myTask = todo('laundry');

console.log(myTask.getTask());

myTask.setTask('vacuum');

console.log(myTask.getTask());

myTask.setDueDate('Monday');

console.log(myTask.getDueDate());

const newTodo = todoMaker.makeTodo(myTask);

document.querySelector('.main-content').appendChild(newTodo);


/*
Icon Credits:
    format-list-checks: Austin Andrews @Templarian
    all others from Google 
*/