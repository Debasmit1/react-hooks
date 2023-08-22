import React , {useState} from 'react'

function State() {

    const [state, setState] = useState({count:0,theme:'red'});

    const count = state.count;
    const theme = state.theme;

    const decrementCount = () => {
        setState(prevState => {
            return {...prevState, count: prevState.count - 1, theme: 'Yellow'}
        }
        )
    }

    const incrementCount = () => {
        setState(prevState=> {
            return {...prevState,count:prevState.count + 1,theme:'blue'}
        }
        )
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