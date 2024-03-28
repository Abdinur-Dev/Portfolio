import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between p-5 bg-blue-800 shadow-lg text-white'>
        <h1 className='text-4xl font-extralight text-white '> Welcome To My Project</h1>
        <nav className='space-x-4 font-semibold p-2'>
              <Link  to='/'>Home</Link>
              <Link  to='/project'>Project</Link>
              <Link  to='/skill'>skill</Link>
              <Link  to='/about'>About</Link>
              <Link  to='/contect'>Contect</Link>
        </nav>
    </div>
  )
}

export default Header