import React , {useState} from 'react'

function State() {

    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('blue')


    const decrementCount = () => {
        setCount(prevCount=>prevCount-1)
    }

    const incrementCount = () => {
        setCount(prevCount=>prevCount+1)
    }

  return (
    <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
    </>
  )
}

export default State