import React from "react";
import { useSelector } from "react-redux";
import { Filter } from "./Filter";
import { ListItem } from "./ListItem";

export const TodoList = () => {
  const tasks = useSelector(state => state.tasks)


  return (
    <ul className="todo__list">
      <Filter />
      {tasks.length >= 1 ? (
        tasks.map((task, i) => <ListItem task={task} key={i} />)
      ) : (
        <div>No hay tareas</div>
      )}
    </ul>
  );
};
