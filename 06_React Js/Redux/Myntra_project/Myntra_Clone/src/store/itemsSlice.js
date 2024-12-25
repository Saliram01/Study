import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (action) => {
            return action.payload;
        }
    }
})

export const actions = itemsSlice.actions;
export default itemsSlice;