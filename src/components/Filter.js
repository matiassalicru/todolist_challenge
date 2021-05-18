import React from "react";
import { useDispatch } from "react-redux";
import { orderPriority, orderState } from "../store/actions";

export const Filter = () => {
  const dispatch = useDispatch()

  const filterByPrior = () => {
    const value = document.getElementById('prior').value;

    dispatch(orderPriority(value))
  }

  const filterByState = () => {
    const value = document.getElementById('state').value;

    dispatch(orderState(value))

  }

  return (
    <div>
      <h1 className='filter__title'>Filtrar por:</h1>
      <form className='filter__form'>
        <label>
          Prioridad:
          <select name="priority" id='prior' defaultValue='Baja' onChange={(e) => filterByPrior(e)}>
            <option value="Baja">Baja</option>
            <option value="Alta">Alta</option>
          </select>
        </label>
        <label>
          Estado:
          <select name="state" id='state' onChange={e => filterByState(e)}>
            <option value="Nueva">Nueva</option>
            <option value="Finalizada">Finalizada</option>
          </select>
        </label>
      </form>
    </div>
  );
};
