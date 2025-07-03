import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <nav>
    <ul className='flex gap-4 items-center justify-center bg-gray-800 text-white p-4'>
      <li>
        <Link to="/">
        Home
        </Link>
        </li>
      <li>
        <Link to="/about">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
   </nav>
   </>
  )
}

export default Navbar