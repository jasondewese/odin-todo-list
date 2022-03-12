import './reset.css';
import './style.css';
import {todo} from './scripts/todo.js';
import {todoMaker} from './scripts/todoMaker.js';
import {todoForm} from './scripts/todoForm.js';
import { project } from './scripts/project.js';


const myTask = todo('laundry');

console.log(myTask.getTask());

myTask.setTask('vacuum');

console.log(myTask.getTask());

myTask.setDueDate('Monday');

console.log(myTask.getDueDate());

const newTodo = todoMaker.makeTodo(myTask);

document.querySelector('.main-content').appendChild(newTodo);

const form = todoForm.openTodoForm();

form.firstChild.value = 'hello';


const newProject = project("Chores");

newProject.addTodo(myTask);
const todo2 = todo("dishes");
newProject.addTodo(todo2);

console.log(newProject.getTodo(0).getTask());
console.log(newProject.getTodo(1).getTask());


/*
Icon Credits:
    format-list-checks: Austin Andrews @Templarian
    all others from Google 
*/