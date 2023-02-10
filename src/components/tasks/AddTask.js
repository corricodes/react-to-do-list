import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredPriority, setEnteredPriority] = useState("");
  const [error, setError] = useState();

  const addTaskHandler = (event) => {
    event.preventDefault();
    if (
      enteredTask.trim().length === 0 ||
      enteredPriority.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid task name and priotity rating (non-empty values).'
      });
      return;
    }
    if (+enteredPriority < 1 || +enteredPriority > 5) {
      setError({
        title: 'Invalid priority rating',
        message: 'Please pick a priority rating on a scale of 1-5.'
      });
      return;
    }
    props.onAddTask(enteredTask, enteredPriority);
    setEnteredTask("");
    setEnteredPriority("");
  };

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setEnteredPriority(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
    {error &&<ErrorModal title={error.title} message={error.message} onOkay={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={addTaskHandler}>
        <label htmlFor="task">Task:</label>
        <input
          id="task"
          type="text"
          value={enteredTask}
          onChange={taskChangeHandler}
        />
        <label htmlFor="priority">
          Priority:{" "}
          <span className={classes.span}>
            (1- least important, 5 - most important)
          </span>
        </label>
        <input
          id="priority"
          type="number"
          value={enteredPriority}
          onChange={priorityChangeHandler}
        />
        <Button type="submit">Add Task</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddTask;
