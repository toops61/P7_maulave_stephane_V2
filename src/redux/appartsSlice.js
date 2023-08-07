import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const appartsSlice = createSlice({
    name: "appartments",
    initialState,
    reducers: {
        fillApparts: (_state,action) => [...action.payload],
        updateAppart: (state,action) => {
            const newAppart = action.payload;
            const previousId = state.findIndex(e => e.id === newAppart.id);
            previousId === -1 ? state.push(newAppart) : state.splice(previousId,1,newAppart);
            return state;
        }
    }
})

export const {fillApparts,updateAppart} = appartsSlice.actions;

export default appartsSlice.reducer;