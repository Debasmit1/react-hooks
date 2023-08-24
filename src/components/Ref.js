import React, {useState,useRef,useEffect} from 'react'

function Ref() {

    const [name,setName] = useState("");
    //const [renderCnt,setRenderCnt] = useState(0);
    const renderCount = useRef(0);
    const inputRef = useRef();
    // const prevName = useRef("");
    const prevName = useRef('');

    useEffect(() => {
        renderCount.current = renderCount.current+1
        console.log("Render is done");
    })

    useEffect(()=>{
        prevName.current = name;
    },[name])

    // useEffect(()=>)

    const focus = () => {
        inputRef.current.focus();

    }

  return (
    <>
        <input ref={inputRef} type="text" value={name} onChange={(e=>setName(e.target.value))}/>
        <div>My name is {name} <br />The previous name is {prevName.current}</div>
        <div>I rendered {renderCount.current} times </div>
        <button onClick={focus}>Focus</button>
    </>
  )
}

export default Ref

//1296