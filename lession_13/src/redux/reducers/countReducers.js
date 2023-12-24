export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + (action.payload || 0)
        case 'DECREMENT':
            return state - (action.payload || 0)
        default:
            return state
    }
}