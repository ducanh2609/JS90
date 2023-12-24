export const increment = (number) => {
    console.log('increment')
    return {
        type: 'INCREMENT',
        payload: number
    }
}

export const decrement = (number) => {
    console.log('decrement')

    return {
        type: 'DECREMENT',
        payload: number
    }
}