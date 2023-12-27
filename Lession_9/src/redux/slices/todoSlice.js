import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        get: (state, action) => {
            console.log(action.payload)
            return action.payload
        },
        post: (state, action) => [...state, action.payload],
        put: (state, action) => action.payload,
        del: (state, action) => state.filter((todo) => todo.id !== action.payload.id)
    }
})

export const editSlice = createSlice({
    name: 'editId',
    initialState: -1,
    reducers: {
        setEditId: (state, action) => action.payload,
    }
})

export const valueSlice = createSlice({
    name: 'value',
    initialState: '',
    reducers: {
        setValue: (state, action) => action.payload,
    }
})

export const { get, post, put, del } = todoSlice.actions
export const { setEditId } = editSlice.actions
export const { setValue } = valueSlice.actions

export default todoSlice.reducer