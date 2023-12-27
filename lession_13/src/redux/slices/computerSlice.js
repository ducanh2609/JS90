import { createSlice } from "@reduxjs/toolkit";

const computerSlice = createSlice({
    name: 'computer',
    initialState: [],
    reducers: {
        set: (state, action) => action.payload,
    }
})


export const { set } = computerSlice.actions

export default computerSlice.reducer