const todo = (task) => {

    let _task = task;
    let _dueDate;

    const getTask = () => {
        return _task;
    }

    const setTask = (newTask) => {
        _task = newTask;
    }

    const setDueDate = (newDate) => {
        _dueDate = newDate;
    }

    const getDueDate = () => {
        return _dueDate;
    }

    return {getTask, setTask, setDueDate, getDueDate};
}

export {todo};