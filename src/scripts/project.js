import { todo } from "./todo";

const project = (name) => {
    let _name = name; 
    let _todoList = [];

    const getName = () => {
        return _name;
    }

    const setName = (newName) => {
        _name = newName;
    }

    const addTodo = (todo) => {
        _todoList.push(todo);
    }

    const deleteTodo = (index) => {
        _todoList.splice(index,1);
    }

    const getLength = () => {
        return _todoList.length;
    }

    const getTodo = (index) => {
        return _todoList[index];
    }

    return {getName, setName, addTodo, deleteTodo, getLength, getTodo};

}

export {project};