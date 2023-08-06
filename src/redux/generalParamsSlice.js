import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false,
    loading: false,
    numberPersos: 0
}

const generalParamsSlice = createSlice({
    name: "generalParams",
    initialState,
    reducers: {
        updateGeneralParams: (state,action) => {
            state = {...state,...action.payload};
            return state;
        }
    }
})

export const {updateGeneralParams} = generalParamsSlice.actions;

export default generalParamsSlice.reducer;