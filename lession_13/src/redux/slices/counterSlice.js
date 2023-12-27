import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => state + (action.payload || 0),
        decrement: (state, action) => state - (action.payload || 0)
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer