import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='toggleButton'>
            <button></button>
        </div>
        <div className='navbar-links'>
            <Link to='/'>Home</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/portfolio'>Portfolio</Link>
        </div>
    </div>
  )
}

export default Navbar
