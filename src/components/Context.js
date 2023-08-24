import React from 'react'
import FunctionContextComponent from './helper/FunctionContextComponent'
import { ThemeProvider } from './helper/ThemeContext';

export const ThemeContext = React.createContext();

function Context() {
  return (
    <>
        <ThemeProvider>
            <FunctionContextComponent/>
        </ThemeProvider>
    </>
  )
}

export default Context