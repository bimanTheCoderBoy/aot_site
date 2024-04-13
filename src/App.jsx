import React, { useState } from 'react';
// import {  div } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
   <>TEST</>
  );
};

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        type="button"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
        aria-expanded="false"
      >
        {title}
        <svg
          className="-mr-1 ml-2 h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 12l-8-8 1.5-1.5L10 9.5l6.5-6.5L18 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div className="py-1">{children}</div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ title, link }) => {
  return (
    <div
      to={link || '#'}
      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      {title}
    </div>
  );
};

const DropdownSubItem = ({ title, link }) => {
  return (
    <a
      href={link || '#'}
      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      {title}
    </a>
  );
};

export default Navbar;
