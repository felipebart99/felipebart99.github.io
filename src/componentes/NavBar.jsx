import React from 'react'
import{Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='menuNav'>
        <ul>
         <li> <Link to="/">Home</Link></li>
         <li> <Link to="/about">About</Link></li>
         <li> <Link to="/portfolio">Portfolio</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar