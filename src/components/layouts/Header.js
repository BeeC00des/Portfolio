import { useState } from 'react';
import PropTypes from 'prop-types'
import Navbar from './Nav';
import { Icon } from '@iconify/react';
import Resume from '../../assets/images/ResumeSoft.pdf'
import { Link } from "react-router-dom";

const Header = ({ title, onAdd, showNav = true }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMenuOpen(false);
  }

  return (
    <header className="text-[10px] flex flex-wrap justify-between items-center px-[15px] md:px-[35px] my-[12px]">

      {/* Title */}
      <Link to="/" className="text-white cursor-pointer hover:text-[#199C16] transition-colors" style={{ textDecoration: 'none' }}>
        <div className="flex items-center gap-3">
          <div className="text-[#199C16]">
            <Icon icon="mdi:triangle" width="36" />
          </div>
          <h1 className="text">BeeC00des</h1>
        </div>
        {/* <h1 className="text">{title}</h1> */}
      </Link>


      {/* Hamburger — mobile only (hidden when showNav is false) */}
      {showNav && (
        <button
          className="flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-[2px] bg-current rounded transition-transform duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[2px] bg-current rounded transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[2px] bg-current rounded transition-transform duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      )}

      {/* Nav links */}
      {showNav && (
        <div className={`flex-col w-full gap-1 pt-2 md:flex md:flex-row md:w-auto md:gap-4 md:pt-0 md:items-center ${menuOpen ? 'flex' : 'hidden'}`}>
          <Navbar navItem="Project" onClick={() => scrollToElement('project-section')} />
          <Navbar navItem="Skill" onClick={() => scrollToElement('skill-section')} />
          <a href={Resume} download="MyResume" target='_blank' rel="noreferrer">
            <Navbar navItem="Resume" />
          </a>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            <Navbar navItem="Services" />
          </Link>
        </div>
      )}

    </header>
  )
}

Header.defaultProps = {
  title: 'Beec00des',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header;