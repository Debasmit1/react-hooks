import React, { useState } from 'react'
import FunctionContextComponent from './helper/FunctionContextComponent'

export const ThemeContext = React.createContext();

function Context() {
    const [darkTheme,setDarkTheme] = useState(true);

    const toggleTheme = () => {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

  return (
    <>
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <FunctionContextComponent/>
        </ThemeContext.Provider>
    </>
  )
}

export default Context