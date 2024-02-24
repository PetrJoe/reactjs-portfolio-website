import React, { useState } from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://res.cloudinary.com/dmlr5hyj9/image/upload/v1702591596/jnypb1vsxlnsx38nlhbx.png" className="h-8" alt="PetrJoe" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PetrJoe</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isMenuOpen ? 'flex' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 dark:bg-gray-800 md:dark:bg-gray-900">
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">About</Link>
            </li>
            <li>
              <Link to="tech" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Technology</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
