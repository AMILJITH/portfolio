import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import contactImg from '../../assets/contact.png'
import { Menu, X } from 'lucide-react' // for hamburger icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleContactClick = () => {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} className="logo" alt="logo" />

      {/* Desktop Menu */}
      <div className="navbarmenus desktop">
        <Link activeClass="active" spy={true} offset={-100} to="intro" smooth={true} duration={500} className="desktopmenu">HOME</Link>
        <Link to="skill" activeClass="active" offset={-50} spy={true} smooth={true} duration={500} className="desktopmenu">ABOUT</Link>
        <Link to="works" activeClass="active" offset={-20} spy={true} smooth={true} duration={500} className="desktopmenu">PORTFOLIO</Link>
        <Link to="project" activeClass="active" offset={-50} spy={true} smooth={true} duration={500} className="desktopmenu">PROJECTS</Link>
      </div>

      {/* Contact Button (desktop only) */}
      <button className="desktopMenuButton desktop" onClick={handleContactClick}>
        <img src={contactImg} alt="" className="desktopMenuImg" />CONTACT ME
      </button>

      {/* Mobile Hamburger */}
      <div className="mobile-menu-icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="intro" smooth={true} duration={500} onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="skill" smooth={true} duration={500} onClick={() => setIsOpen(false)}>ABOUT</Link>
          <Link to="works" smooth={true} duration={500} onClick={() => setIsOpen(false)}>PORTFOLIO</Link>
          <Link to="project" smooth={true} duration={500} onClick={() => setIsOpen(false)}>PROJECTS</Link>
          <button className="desktopMenuButton" onClick={handleContactClick}>
            <img src={contactImg} alt="" className="desktopMenuImg" />CONTACT ME
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
