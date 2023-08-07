import { configureStore } from "@reduxjs/toolkit";
import generalParamsSlice from "./generalParamsSlice";
import appartsSlice from "./appartsSlice";

const store = configureStore({
    reducer: {
        generalParamsSlice,
        appartsSlice
    }/* ,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(logger) */
});

/* function customMiddleware(store) {
    return function(next) {
        return function(action){
            console.log(store);
        }
    }
} */

export default store;