import React from "react";

export const Filter = () => {
  return (
    <div>
      <h1>Filtrar por:</h1>
      <form>
        <label>
          Prioridad
          <select name="priority">
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
          </select>
        </label>
        <label>
          Estado
          <select name="state">
            <option value="nueva">nueva</option>
            <option value="en proceso">en proceso</option>
            <option value="finalizada">finalizada</option>
          </select>
        </label>
      </form>
    </div>
  );
};
