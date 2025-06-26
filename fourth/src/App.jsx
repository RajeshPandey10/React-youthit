import React from 'react'
import UseEff from './components/UseEff'
import Layout from './layout/Layout'
import Home from './components/Home'

import {BrowserRouter,Routes,Route} from "react-router-dom"
import UseState from './components/UseState'
const App = () => {
  return (
<>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hooks" element={<UseState/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
</>
  )
}

export default App