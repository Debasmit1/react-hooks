import React,{useContext} from 'react'
import { ThemeContext } from "../Context";

function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext);

    const ThemeStyles = {
        backgroundColor: darkTheme ? '#333':'#ccc',
        color: darkTheme ? "#ccc":"#333",
        padding: '2rem',
        margin: '2rem'
    }

  return (
    <div style={ThemeStyles}>Function Theme</div>
  )
}

export default FunctionContextComponent