import React from 'react'
import UseState from './components/UseState'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from './components/Hero'
import UseEffect from './components/UseEffect'
import Layout from './layout/Layout'

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path='usestate' element={<UseState/>}/>
            <Route path='useeffect' element={<UseEffect/>}/>
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App