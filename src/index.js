import './reset.css';
import './style.css';
import {todo} from './scripts/todo.js';
import {todoMaker} from './scripts/todoMaker.js';
import {todoForm} from './scripts/todoForm.js';
import { project } from './scripts/project.js';
import { projectMaker } from './scripts/projectMaker.js';
import { projectForm } from './scripts/projectForm.js';
import { projectLibrary } from './scripts/projectLibrary.js';


const myTask = todo('laundry');

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

const newProjectElement = projectMaker.makeProject(newProject);
document.querySelector('.projects-list').appendChild(newProjectElement);

const newProjectForm = projectForm.openProjectForm();

projectLibrary.addProject(newProject);

console.log( projectLibrary.getProject(0).getName() );

const project2 = project("Homework");
project2.addTodo(todo("math"));
project2.addTodo(todo("science"));
project2.addTodo(todo("english"));

projectLibrary.addProject(project2);

console.log( projectLibrary.getProject(1).getTodo(2).getTask() );

/*
Icon Credits:
    format-list-checks: Austin Andrews @Templarian
    all others from Google 
*/