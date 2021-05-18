import React, { useContext } from "react";
import { TasksContext } from "../Context/tasksContext";
import { useForm } from "../Hooks/useForm";

const initialTask = {
  title: "",
  priority: "Media",
  state: "nueva",
  description: "",
};

export const InputForm = () => {
  const [values, handleInputChange, reset] = useForm(initialTask);

  const { tasksList, setTasksList } = useContext(TasksContext);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setTasksList([values, ...tasksList]);

    reset();
  };

  return (
    <form onSubmit={onSubmit} className="inputForm__form">
      <label className="inputForm__label">
        <input
          className="inputForm__input"
          type="text"
          name="title"
          value={values.title}
          required
          placeholder="Titulo"
          onChange={(e) => handleInputChange(e)}
        />
        <select
          name="priority"
          id="prior"
          value={values.priority}
          className="inputForm__input"
          onChange={(e) => handleInputChange(e)}
        >
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
        <select
          name="state"
          id="state"
          value={values.state}
          className="inputForm__input"
          onChange={(e) => handleInputChange(e)}
        >
          <option value="nueva">Nueva</option>
          <option value="proceso">En proceso</option>
          <option value="finalizada">Finalizada</option>
        </select>
      </label>
      <label className="inputForm__label">
        <textarea
          onChange={(e) => handleInputChange(e)}
          value={values.description}
          className="inputForm__textarea"
          name="description"
          id="desc"
          cols="50"
          rows="5"
          placeholder="Descripción"
        ></textarea>
      </label>
      <button className="btn">Crear Tarea</button>
    </form>
  );
};
