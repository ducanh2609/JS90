import { useState } from "react"

export const useLocalStorage = (key) => {
    const value = localStorage.getItem(key)
    const setValue = (newValue) => {
        console.log(newValue)
        if (newValue) localStorage.setItem(key, JSON.stringify(newValue))
        else localStorage.setItem(key, '')
    }


    return [value, setValue]
}

