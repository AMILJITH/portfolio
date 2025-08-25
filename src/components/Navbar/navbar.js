import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'
import { Menu, X } from 'lucide-react' // for hamburger icons (you can use any icon)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} className="logo" alt="logo" />

      {/* Desktop Menu */}
      <div className="navbarmenus desktop">
        <Link to="intro" smooth={true} duration={500} className="desktopmenu">HOME</Link>
        <Link to="skill" smooth={true} duration={500} className="desktopmenu">ABOUT</Link>
        <Link to="works" smooth={true} duration={500} className="desktopmenu">PORTFOLIO</Link>
        <Link to="project" smooth={true} duration={500} className="desktopmenu">PROJECTS</Link>
      </div>

      {/* Contact Button (desktop only) */}
      <button className="desktopMenuButton desktop">
        <img src={contactImg} alt="" className="desktopMenuImg" />CONTACT ME
      </button>

      {/* Mobile Hamburger */}
      <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="intro" smooth={true} duration={500} onClick={() => setIsOpen(true)}>HOME</Link>
          <Link to="skill" smooth={true} duration={500} onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link to="work" smooth={true} duration={500} onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
          <Link to="project" smooth={true} duration={500} onClick={() => setIsOpen(false)}>PROJECTS</Link>
          <button className="desktopMenuButton">
            <img src={contactImg} alt="" className="desktopMenuImg" />CONTACT ME
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
