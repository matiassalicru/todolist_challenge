import React from "react";
import { InputForm } from "./components/InputForm";
import { TodoList } from "./components/TodoList";
import { Provider } from 'react-redux';
import { store } from './store/store';
import "./styles/style.scss";

export const Home = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <InputForm />
        <TodoList />
      </div>
    </Provider >
  );
};
