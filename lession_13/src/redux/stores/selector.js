import { createSelector } from "@reduxjs/toolkit";


const computer = (state) => state.computerList

export const getComputer = createSelector([computer], (computerList) => {
    return {
        computerList,
    }
})