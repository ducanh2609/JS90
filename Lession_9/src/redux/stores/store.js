import { configureStore } from "@reduxjs/toolkit";
import todos from '../slices/todoSlice'
import { editSlice, valueSlice } from "../slices/todoSlice";


export const store = configureStore({
    reducer: {
        todos,
        editId: editSlice.reducer,
        value: valueSlice.reducer
    }
})