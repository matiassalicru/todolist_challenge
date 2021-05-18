import React, { useState } from "react";

export const ListItem = ({ task }) => {
  const [state, setState] = useState(task.state);
  const [priority, setPriority] = useState(task.priority);

  const changeState = () => {
    if (state === "nueva") {
      setState("en proceso");
    } else if (state === "en proceso") {
      setState("Finalizada");
    } else if (state === "Finalizada") {
      setState("nueva");
    }
  };

  const changePriority = () => {
    if (priority === "Baja") {
      setPriority("Media");
    } else if (priority === "Media") {
      setPriority("Alta");
    } else if (priority === "Alta") {
      setPriority("Baja");
    }
  };

  return (
    <li className="todo__item">
      <div className="todo__prior">
        <p>
          Prioridad:
          <button onClick={(e) => changePriority(e)}>{priority}</button>
        </p>
        <p>
          Estado: <button onClick={(e) => changeState(e)}>{state}</button>
        </p>
      </div>
      <p>Titulo: {task.title}</p>
      <p>Descripción:</p>
      <p>{task.description}</p>
    </li>
  );
};
