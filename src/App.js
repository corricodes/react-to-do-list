import React, { useState } from "react";

import AddTask from "./components/tasks/AddTask";
import TaskList from "./components/tasks/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (taskName, taskPriority) => {
    setTaskList((prevTaskList) => {
      return [
        ...prevTaskList,
        {
          name: taskName,
          priority: taskPriority,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddTask onAddTask={addTaskHandler} />
      <TaskList tasks={taskList} />
    </div>
  );
}

export default App;
