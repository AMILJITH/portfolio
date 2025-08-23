import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'


const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo} className='logo' alt=""  />
        <div className="navbarmenus">
          <Link class="desktopmenu">HOME</Link>
          <Link class="desktopmenu">ABOUT</Link>
          <Link class="desktopmenu">PORTFOLIO</Link>
          <Link class="desktopmenu">PROJECTS</Link>

        </div>
        <button className='desktopMenuButton'><img src={contactImg} alt='' className='desktopMenuImg'/>CONTACT ME</button>
    </nav>
  )
}

export default Navbar