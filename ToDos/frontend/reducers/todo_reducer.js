
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
    1: {
        id: 1,
        title: 'wash car',
        body: 'with soap',
        done: false
    },
    2: {
        id: 2,
        title: 'wash dog',
        body: 'with shampoo',
        done: true
    },
    2: {
        id: 2,
        title: 'dry dog',
        body: 'with shampoo',
        done: true
    },
};

// const todosReducer = (state = initialState, action) => {
    
// }

export const todos_reducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_TODOS:
        // replace state entirely w/ new todos
            // const result = state.reduce(function (map, obj) {
            //     map[obj.id] = obj;
            //     return map;
            // }, {});
            // return result;
            let todosState = {};
            action.todos.forEach(el => {
                todosState[el.id] = el;
            });
            return todosState;
        case RECEIVE_TODO:
        // append/replace new todo to state
        //     let state_ray = Array.from(state);
        //     const newResults = state_ray.concat(action.todo);
        //     newResults.reduce(function (map, obj) {
        //         map[obj.id] = obj;
        //         return map;
        //     }, {});
        const todo = action.todo;
        const todo_id = action.todo.id;
        let todoState = Object.assign({}, state)
        todoState[todo_id] = todo;
        return todoState;
        default:
            return state;
    }
}

// window.test = todos_reducer(initialState, "boo");
