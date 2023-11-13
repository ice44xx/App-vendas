import { useState } from "react"

export const useApp = () => {
    const [newText, setNewText] = useState('Testando')

    const handleOnPress = () => {
        setNewText('Texto novo')
    }
    
    return {
        newText,
        handleOnPress
    }
}
