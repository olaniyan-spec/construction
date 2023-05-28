import React, { useState } from 'react'
import {MdOutlineClose} from 'react-icons/md'
import {GoThreeBars} from 'react-icons/go'
import {HashLink as NavLink} from 'react-router-hash-link'
import './Navbar.css'

const Navbar = () => {
  const [navShowing, setNavShowing] = useState(false)
  return (
    <nav >
        <div className='nav-wrapper'>
        <h3>YELLOW BRICK</h3>
          <ul className={`nav-links ${navShowing? 'show-nav' : 'hide-nav'}`} onClick={()=> setNavShowing(false)}>
            <li><NavLink to='#expertise'>Our Expertise</NavLink></li>
            <li><NavLink to='#project'> Project</NavLink></li>
            <li><NavLink> Gallery</NavLink></li>
            <li><NavLink>About Us</NavLink></li>
            <li><button className=' btn-black'>Get Started</button></li>
          </ul>
          <button className='nav-toggle' onClick={()=> setNavShowing(prev=>!prev)}>
                    { navShowing ? <MdOutlineClose/> : <GoThreeBars/>}
                </button>
        </div>
    </nav>
        

           
  )
}

export default Navbar