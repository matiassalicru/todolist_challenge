import { combineReducers, createStore } from 'redux';
import { taskReducer } from './taskReducer';


const reducers = combineReducers({
  tasks: taskReducer
});


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

export const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


store.subscribe(() => saveToLocalStorage(store.getState('tasks')));