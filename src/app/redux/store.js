const { configureStore } = require("@reduxjs/toolkit");
import reducer from './slice';

export const store = configureStore({
    reducer // when key & id is same then no need to write key

})