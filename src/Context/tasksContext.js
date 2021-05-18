import React, { createContext, useState } from "react";

export const TasksContext = createContext();

const initialList = [
  // {
  //   title: "",
  //   priority: "Media",
  //   state: "nueva",
  //   description: "",
  // },
];

export const TasksProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState(initialList);

  return (
    <TasksContext.Provider value={{ tasksList, setTasksList }}>
      {children}
    </TasksContext.Provider>
  );
};
