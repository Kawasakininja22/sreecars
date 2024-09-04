 


import React, { useState } from 'react';
 

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="  w-full fixed top-0 left-0 " id="Nav">
      <div className="w-full  px-0">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2  text-black hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center    sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center ml-5">
              <h1 className="text-black text-3xl font-face">SG Cars</h1>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Normal menu */}
            <div className="hidden mr-24 sm:ml-6 sm:block items-center">
              <div className="flex space-x-4">
              <a
                  href="/sreecars/"
                  className="rounded-md px-5 py-2 text-base font-medium  text-black  hover:bg-black hover:text-white  "
                >
                    Home
                </a>
              <a
                  href="/sreecars/NavCollection"
                  className="rounded-md px-5 py-2 text-base font-medium  text-black  hover:bg-black hover:text-white mr-6"
                >
                   Collection
                </a>
                
                <a
                  href="/sreecars/About"
                  className="rounded-md px-5 py-2 text-base font-medium  text-black  hover:bg-black hover:text-white mr-6"
                >
                  About
                </a>
                <a
                  href="/sreecars/Contact"
                  className="rounded-md px-5 py-2 text-base font-medium  text-black  hover:bg-black hover:text-white mr-6"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2 mr-20 bg-black">
          <a
            href="/NavCollection"
            className="block rounded-md px-3 py-2 text-base font-medium text-center text-white  hover:bg-black hover:text-white"
          >
            Collection
          </a>
          <a
            href="/About"
            className="block rounded-md px-3 py-2 text-base font-medium  text-center text-white  hover:bg-black hover:text-white"
          >
            About
          </a>
          <a
            href="/Contact"
            className="block rounded-md px-3 py-2 text-base font-medium text-center text-white  hover:bg-black hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
