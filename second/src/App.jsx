import React from 'react'
import UseState from './components/UseState'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from './components/Hero'
import UseEffect from './components/UseEffect'

const App = () => {
  return (
    <>
   <BrowserRouter>

   <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/usestate' element={ <UseState/>}/>
    <Route path='/useeffect' element={ <UseEffect/>}/>
   </Routes>
   
   </BrowserRouter>
   
    </>
  )
}

export default App