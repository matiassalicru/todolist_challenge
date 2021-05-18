import React from "react";
import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";
import { TasksProvider } from "./Context/tasksContext";
import "./styles/style.scss";

export const Home = () => {
  return (
    <TasksProvider>
      <div className="container">
        <InputForm />
        <TodoList />
      </div>
    </TasksProvider>
  );
};
