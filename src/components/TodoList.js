import React, { useContext } from "react";
import { TasksContext } from "../Context/tasksContext";
import { ListItem } from "./ListItem";

export const TodoList = () => {
  const { tasksList } = useContext(TasksContext);
  
  return (
    <ul className="todo__list">
      {tasksList.length >= 1 ? (
        tasksList.map((task, i) => <ListItem task={task} key={i} />)
      ) : (
        <div>No hay tareas</div>
      )}
    </ul>
  );
};
