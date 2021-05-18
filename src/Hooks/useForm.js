import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      id: uuidv4(),
      [target.name]: target.value,
    });
  };

  return [values, handleInputChange, reset];
};
