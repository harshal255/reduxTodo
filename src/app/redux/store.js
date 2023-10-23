const { configureStore } = require("@reduxjs/toolkit");
import usersReducer from './slice';
import todoReducer from './todoSlice';

export const store = configureStore({
    reducer: {
        usersData: usersReducer,
        todosData: todoReducer
    }

})