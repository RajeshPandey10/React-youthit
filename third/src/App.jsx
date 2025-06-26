import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './layout/Layout'
import About from './pages/about/About'
import NoPage from './pages/nopage/NoPage'
const App = () => {
  return (
   <>
      <BrowserRouter>
             <Routes>
               <Route path="/" element={<Layout />}>
                 <Route index element={<Home />} />
                 <Route path='about' element={<About />} />
                 <Route path="*" element={<NoPage />} />
               </Route>
    
               
             </Routes>
           </BrowserRouter>
   </>
  )
}

export default App