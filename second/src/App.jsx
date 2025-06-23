import React from 'react'
import UseState from './components/UseState'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
   <BrowserRouter>

   <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/usestate' element={ <UseState/>}/>
   </Routes>
   
   </BrowserRouter>
   
    </>
  )
}

export default App