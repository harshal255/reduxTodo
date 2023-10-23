import { createSlice, current, nanoid } from "@reduxjs/toolkit";

const clientSide = typeof window !== "undefined";
const initialState = {
    //for get data to use getItem in localstorage
    // users: [] //where users = key
    users: clientSide ? (JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []) : [] //where users = key
}


const Slice = createSlice({
    name: "initialName",
    initialState,
    reducers: {
        addUser: (state, action) => {
            // console.log(action);
            const data = {
                id: nanoid(),
                name: action.payload
            }
            //when function called then one user add in users
            state.users.push(data);
            //data can't distroy when page refreshing (for set data in local storage)
            let userdata = JSON.stringify(current(state.users));
            localStorage.setItem("users", userdata) //where users = key
            console.log(current(state.users));
        },
        removeUser: (state, action) => {
            // console.log(action);
            //functions for deleting element from array
            const data = state.users.filter((ele) => ele.id !== action.payload);
            state.users = data;
            localStorage.setItem("users", JSON.stringify(data));
        }
    }
})
//export functions that we use any of components 
export const { addUser, removeUser } = Slice.actions;
export default Slice.reducer;