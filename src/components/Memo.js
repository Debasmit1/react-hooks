import React, { useState } from 'react'

const slowFunction = (number) => {
    for(let i=0;i<1e9;i++){}
    return 2*number;
}

function Memo() {
    const [number,setNumber] = useState(0);
    const [dark,setDark] = useState(false);
    const doubleNumber = slowFunction(number);
    const themeStyles = {
        backgroundColor : dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
  return (
    <>
        <input type="number" value={number} id="nos" onChange={(e) => setNumber(parseInt(e.target.value))} />
        <button onClick={()=>setDark(prevDark => !prevDark)} style={{display:"block"}}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>

    </>
  )
}

export default Memo