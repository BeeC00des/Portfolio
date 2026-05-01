import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Nav';

const NavbarTwo = ({ title = 'BeeC00des' }) => {
  return (
    <header className="text-[10px] flex flex-wrap justify-between items-center px-[15px] md:px-[35px] my-[12px]">
      {/* Title / Logo - Links back to homepage */}
      <Link to="/" className="text-white cursor-pointer hover:text-[#199C16] transition-colors" style={{ textDecoration: 'none' }}>
        <h1 className="text">{title}</h1>
      </Link>

      {/* Nav links - Only Services in active state */}
      <div className="flex-col w-full gap-1 pt-2 md:flex md:flex-row md:w-auto md:gap-4 md:pt-0 md:items-center flex">
        <div className="text-[#199C16]">
          <Navbar navItem="Services" />
        </div>
      </div>
    </header>
  )
}

export default NavbarTwo;
