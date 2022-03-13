const todo = (task) => {

    let _task = task;
    let _dueDate;
    let _complete = false;

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

    const isComplete = () => {
        return _complete;
    }

    const changeComplete = () => {
        if (!_complete) {
            _complete = true;
        }
        else {
            _complete = false;
        }
    }

    return {getTask, setTask, setDueDate, getDueDate, isComplete, changeComplete};
}

export {todo};