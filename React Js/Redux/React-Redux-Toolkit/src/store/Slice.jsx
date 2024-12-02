import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name : 'counter',
    initialState : {counterVal : 0},
    reducers : {
        increment : (state) => {
            state.counterVal++;
        },
        decrement : (state) => {
            state.counterVal--;
        },
        add : (state,action) => {
            state.counterVal += parseInt(action.payload);
        },
        sub : (state,action) => {
            state.counterVal -= parseInt(action.payload);
        }
    }
});
export const actions = slice.actions;
export default slice;