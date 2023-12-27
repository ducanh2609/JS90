import { configureStore } from '@reduxjs/toolkit'
import computerList from '../slices/computerSlice'
import counter from '../slices/counterSlice'


export const store = configureStore({
    reducer: {
        computerList,
        counter
    },
})