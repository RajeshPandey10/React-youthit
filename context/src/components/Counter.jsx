import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const Counter = () => {
    const {count,setCount} = useContext(CounterContext)
    const handleClick = ()=>{
        setCount(count+1)
    }
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <button>Decrement</button>
    </div>
  )
}

export default Counter