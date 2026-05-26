import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { FAELogo } from './FAELogo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-gray-800">
            <MenuIcon />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-800">
            <li>
              <a>Divisions</a>
              <ul className="p-2">
                <li><a href="https://fae.technology/electronics">Electronics</a></li>
                <li><a href="https://fae.technology/space">Space</a></li>
              </ul>
            </li>
            <li>
              <a>The Group</a>
              <ul className="p-2">
                <li><a href="https://elettronicagf.it/">Elettronica GF</a></li>
                <li><a href="https://iptronix.com/">ipTronix</a></li>
                <li><a href="https://maselettronica.com/">MAS Elettronica</a></li>
                <li><a href="https://kayser.space">Kayser Space</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <a href="https://fae.technology/" className="btn btn-ghost rounded-none normal-case p-0 ml-2">
          <FAELogo />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-gray-800 font-bold uppercase tracking-widest text-sm">
          <li tabIndex={0}>
            <details>
              <summary>Divisions</summary>
              <ul className="p-2 bg-white shadow-xl rounded-box z-50">
                <li><a href="https://fae.technology/electronics">Electronics</a></li>
                <li><a href="https://fae.technology/space">Space</a></li>
              </ul>
            </details>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>The Group</summary>
              <ul className="p-2 bg-white shadow-xl rounded-box z-50">
                <li><a href="https://elettronicagf.it/">Elettronica GF</a></li>
                <li><a href="https://iptronix.com/">ipTronix</a></li>
                <li><a href="https://maselettronica.com/">MAS Elettronica</a></li>
                <li><a href="https://kayser.space">Kayser Space</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-4 hidden md:flex gap-4">
          <a href="https://fae.technology/careers" className="text-gray-800 font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors">Careers</a>
        <a href="https://fae.technology/contact-us" className="btn btn-primary rounded-none font-bold uppercase tracking-wider px-6 transition-colors">Contact Us</a>
      </div>
    </div>
  );
};

export default Header;
