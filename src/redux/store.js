import { configureStore } from "@reduxjs/toolkit";
import generalParamsSlice from "./generalParamsSlice";

const store = configureStore({
    reducer: {
        generalParamsSlice
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