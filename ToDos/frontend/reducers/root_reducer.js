import { todos_reducer, todo_reducer } from "./todo_reducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todos: todos_reducer,
});

export default rootReducer;

