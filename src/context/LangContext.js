import React, { useState } from 'react'

const Context = React.createContext({lang:'ES'})

export function LangContextProvider({ children }) {
    const [lang, setLang] = useState('EN')
    
    return <Context.Provider value={{ lang, setLang }}>
        {children}
    </Context.Provider>
}

export default Context
