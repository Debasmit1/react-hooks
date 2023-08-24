import React, {useState,useRef,useEffect} from 'react'

function Ref() {

    const [name,setName] = useState("");
    //const [renderCnt,setRenderCnt] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current = renderCount.current+1
    })

  return (
    <>
        <input type="text" value={name} onChange={(e=>setName(e.target.value))}/>
        <div>My name is {name}</div>
        <div>I rendered {renderCount.current} times </div>
    </>
  )
}

export default Ref

//1296