import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'

const UseState = () => {
    // const state = (useState())
    // console.log(state[0])
    // console.log(state[1])
    let [count,setCount]= useState(0)
    let [count1,setCount1]= useState(0)
    //type 1
  useEffect(()=>{
    //fetch api
    console.log("this is useEffect")
  },[])
    //type 2
  useEffect(()=>{
    //fetch api
    console.log("this is useEffect(depentend wala)")
  },[count1])
    //type 3
  useEffect(()=>{
    //fetch api
    console.log("this is useEffect(type 3 wala)")
  })
  function increment(){

    console.log("clicked",Math.random()*9999)
    setCount(count +1)
     console.log(count)
  }
  function decrement(){

    console.log("clicked",Math.random()*9999)
    setCount1(count1 -1)
     console.log(count1)
  }
  return (
    <>
    <div className='text-4xl text-amber-900'>
        {count}
    </div>
    <button onClick={increment} className='border p-4 rounded-2xl'>+</button>
    <div className='text-4xl text-amber-900'>
        {count1}
    </div>
    <button onClick={decrement} className='border p-4 rounded-2xl'>-</button>
    
    </>
  )
}

export default UseState