import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../Hooks/useForm";
import { addTask } from "../store/actions";

const initialTask = {
  title: "",
  priority: "Alta",
  state: "Nueva",
  description: "",
};

export const InputForm = () => {
  const [values, handleInputChange, reset] = useForm(initialTask);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(values);

    dispatch(addTask(values));

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
          autoComplete='off'
          placeholder="Titulo"
          onChange={(e) => handleInputChange(e)}
        />
        <select
          name="priority"
          // id="prior"
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
          // id="state"
          value={values.state}
          className="inputForm__input"
          onChange={(e) => handleInputChange(e)}
        >
          <option value="Nueva">Nueva</option>
          <option value="Proceso">En proceso</option>
          <option value="Finalizada">Finalizada</option>
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
