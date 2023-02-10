import React from "react";

import Card from "../UI/Card";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <div className={classes.tasks}>
    <ul>
        {props.tasks.map((task) => (
        <Card>
          <li key={task.id}>
            {task.name} {task.priority}
          </li>
    </Card>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
