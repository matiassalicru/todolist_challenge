import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePriority, changeState, deleteTask } from "../store/actions";

export const ListItem = ({ task }) => {
  const [taskState, setTaskState] = useState(task.state);
  const [taskPrior, setTaskPrior] = useState(task.priority);
  const dispatch = useDispatch();

  const updateState = (id) => {
    dispatch(changeState(id));
    setTaskState(task.state);
    console.log(taskState);
  }

  const updatePriority = (id) => {
    dispatch(changePriority(id));
    setTaskPrior(task.priority);
    console.log(taskPrior);
  };

  const delTask = () => {
    dispatch(deleteTask(task.id))
  }

  return (
    <li className={`todo__item ${task.state === 'Finalizada' ? 'todo__finalizada' : ''} `}>
      <div className="todo__prior">
        <p>
          Prioridad:
          <button onClick={e => updatePriority(task.id)}>{task.priority}</button>
        </p>
        <p>
          Estado: <button onClick={e => updateState(task.id)}>{task.state}</button>
        </p>
      </div>
      <p className={`todo__title ${task.state === 'Finalizada' ? 'todo__finalizadaTitle' : ''} `}>Titulo: {task.title}</p>
      <div className='todo__desc'>
        <p>Descripción:</p>
        <div className='todo__taskDesc'>{task.description}</div>
      </div>
      <button onClick={e => delTask(e)}>
        Eliminar
      </button>
    </li>
  );
};
