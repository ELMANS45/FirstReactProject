import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='bg-[#2c3e50] py-10 text-white w-screen'>
        <div className="container flex justify-between items-center">
          <a href="#" className='font-bold text-3xl'><NavLink to="home">START FRAMEWORK</NavLink></a>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <ul className={`flex-col md:flex-row md:flex gap-x-9 font-bold items-center ${isOpen ? 'flex' : 'hidden'} absolute md:static top-20 left-0 w-full md:w-auto bg-[#2c3e50] md:bg-transparent p-5 md:p-0`}>
            <li><NavLink to="about" onClick={() => setIsOpen(false)}>About</NavLink></li>
            <li><NavLink to="portfolio" onClick={() => setIsOpen(false)}>Portfolio</NavLink></li>
            <li><NavLink to="contact" onClick={() => setIsOpen(false)}>Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}