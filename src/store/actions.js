import { types } from "./types"

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        payload: task
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        payload: id
    }
}

export const orderPriority = (value) => {
    return {
        type: types.ORDER_BY_PRIORITY,
        payload: value
    }
}

export const orderState = (value) => {
    return {
        type: types.ORDER_BY_STATE,
        payload: value
    }
}

export const changePriority = (id) => {
    return {
        type: types.CHANGE_PRIORITY,
        payload: id
    }
}

export const changeState = (id) => {
    return {
        type: types.CHANGE_STATE,
        payload: id
    }
}