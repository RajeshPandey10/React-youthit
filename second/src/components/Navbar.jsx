import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50">
  <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
    <div className="flex items-center justify-between">
      <button>
        <div className="flex items-center space-x-2">
          <h2 className=" font-bold text-2xl">Hamro YouthIt</h2>
        </div>
      </button>
      <div className="">
        <ul className="flex space-x-10 text-base font-bold">
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
            <Link to="/usestate">UseState</Link>
          </li>
         
        </ul>
      </div>
      <div className="hidden lg:flex lg:items-center gap-x-2">
        <button className="flex items-center  justify-center px-6 py-2.5 font-semibold">Sign up</button>
        <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">Login</button>
      </div>
    
    </div>
  </nav>
</div>

  )
}

export default Navbar