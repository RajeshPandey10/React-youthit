import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'

const UseState = () => {
    // const state = (useState())
    // console.log(state[0])
    // console.log(state[1])
    let [count,setCount]= useState(0)
  
  useEffect(()=>{console.log("hello")},[count])
  function increment(){

    console.log("clicked",Math.random()*9999)
    setCount(count +1)
     console.log(count)
  }
  return (
    <>
    <div className='text-4xl text-amber-900'>
        {count}
    </div>
    <button onClick={increment} className='border p-4 rounded-2xl'>+</button>
    
    </>
  )
}

export default UseState