import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const clientSide = typeof window !== "undefined";
const initialState = {

    todos: clientSide ? (JSON.parse(localStorage.getItem("todo")) ? JSON.parse(localStorage.getItem("todo")) : []) : []
}

const Slice = createSlice({
    name: 'initialTodo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // console.log(action);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            //when function called then one user add in users
            state.todos.push(data);
            //data can't distroy when page refreshing (for set data in local storage)
            let todosdata = JSON.stringify(current(state.todos));
            localStorage.setItem("todo", todosdata) //where users = key
            console.log(current(state.todos));
        },
        removeTodo: (state, action) => {
            // console.log(action);
            //functions for deleting element from array
            const data = state.todos.filter((ele) => ele.id !== action.payload);
            state.todos = data;
            localStorage.setItem("todo", JSON.stringify(data));
        }
    }
})
export const { addTodo, removeTodo } = Slice.actions;
export default Slice.reducer;