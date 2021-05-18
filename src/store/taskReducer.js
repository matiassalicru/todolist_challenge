import { types } from "./types";

const initialState = []

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.ADD_TASK:
            return [action.payload, ...state];

        case types.DELETE_TASK:
            return state.filter(task => task.id !== action.payload);

        case types.ORDER_BY_PRIORITY:
            const priorList = [...state];
            const task = action.payload;
            if (task === 'Alta') {
                priorList.sort((a, b) => (a.priority > b.priority) ? 1 : -1);
            } else if (task === 'Baja') {
                priorList.sort((a, b) => (a.priority > b.priority) ? -1 : 1);
            }

            return priorList;

        case types.ORDER_BY_STATE:
            const stateList = [...state];
            const taskState = action.payload;

            if (taskState === 'Nueva') {
                stateList.sort((a, b) => a.state > b.state ? -1 : 1)
            } else if (taskState === 'Finalizada') {
                stateList.sort((a, b) => a.state > b.state ? 1 : -1)
            }

            return stateList;

        case types.CHANGE_STATE:
            const newStateList = state;
            const taskStateReq = newStateList.find(task => task.id === action.payload);
            const actualState = taskStateReq.state;

            if (actualState === 'Nueva') {
                taskStateReq.state = 'Proceso'
            } else if (actualState === 'Proceso') {
                taskStateReq.state = 'Finalizada'
            } else if (actualState === 'Finalizada') {
                taskStateReq.state = 'Nueva'
            }

            return newStateList;

        case types.CHANGE_PRIORITY:
            const newPriorList = state;
            const taskPriorReq = newPriorList.find(task => task.id === action.payload);
            const actualPrior = taskPriorReq.priority;

            if (actualPrior === 'Baja') {
                taskPriorReq.priority = 'Media'
            } else if (actualPrior === 'Media') {
                taskPriorReq.priority = 'Alta'
            } else if (actualPrior === 'Alta') {
                taskPriorReq.priority = 'Baja'
            }

            return state;

        default:
            return state;
    }
}