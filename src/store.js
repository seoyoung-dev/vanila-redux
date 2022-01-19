import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer([], {
    [addTodo]: (state, action) => {
        state.push({ text: action.payload, id: Date.now() });
    },
    [deleteTodo]: (state, action) =>
        state.filter((toDo) => toDo.id !== action.payload),
});
const store = createStore(reducer);

export const actionCreators = {
    addTodo,
    deleteTodo,
};

export default store;
