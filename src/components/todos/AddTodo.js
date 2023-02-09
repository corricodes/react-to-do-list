import React from "react";

const AddTodo = props => {
    const addTodoHandler = (event) => {
        event.preventDefault();
    }

    return (
    <form onSubmit={addTodoHandler}>
        <label htmlFor="todo">Todo</label>
        <input id="todo" type='text' />
        <label htmlFor="priority">Priority</label>
        <input id="priority" type='number' />
        <button type="submit">Add Task</button>
    </form>
    )
};

export default AddTodo;