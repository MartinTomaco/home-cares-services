import React, { useState } from 'react'

const Context = React.createContext({})

export function LangContextProvider({ children }) {
    const [lang, setLang] = useState('ES')
    return <Context.Provider value={{ lang, setLang }}>
        {children}
    </Context.Provider>
}

export default Context
