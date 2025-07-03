import React, { useState } from 'react'
import Button from '../components/Button'

const Home = () => {
    const [count, setCount] = useState(0)
      const handleClick = ()=>{
    
    setCount(count+1)
    }
  return (
    <>
    <Button click={handleClick} component="Add" />
    {count}
    </>
  )
}

export default Home