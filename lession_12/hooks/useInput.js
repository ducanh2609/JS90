import { useState } from "react"

export const useInput = () => {
    const [value, setValue] = useState('')
    const onChange = (e) => {
        console.log(e.target?.value)
        setValue(e.target?.value)
    }
    return { value, onChange }
}

