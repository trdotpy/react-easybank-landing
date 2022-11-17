import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import menuOpen from '../../assets/icon-hamburger.svg'
import menuClose from '../../assets/icon-close.svg'

export default function Navbar() {
  const [showMenu, setshowMenu] = useState(false)

  const handleMenu = () => {
    setshowMenu(!showMenu)
  }

  return (
    <div className="container flex items-center justify-between bg-white">
      <div className="my-5">
        <a href="/">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </a>
      </div>

      <div className="hidden gap-2 text-gray-500 md:flex">
        <a href="/" className="nav-links">
          Home
        </a>
        <a href="#" className="nav-links">
          About
        </a>
        <a href="#" className="nav-links">
          Contact
        </a>
        <a href="#" className="nav-links">
          Blog
        </a>
        <a href="#" className="nav-links">
          Careers
        </a>
      </div>

      <button className="hidden rounded-full bg-green-500 bg-gradient-to-r from-green-500 to-cyan-500 px-7 py-3 text-sm font-bold text-white hover:brightness-125 focus:outline-none focus:ring lg:block">
        Request Invite
      </button>

      {/* MOBILE */}
      <div className="md:hidden">
        <button className="cursor-pointer" onClick={handleMenu}>
          {!showMenu ? (
            <img
              src={menuOpen}
              alt="icon-hamburger"
              className="absolute transition-transform"
            />
          ) : (
            <img
              src={menuClose}
              alt="icon-close"
              className="absolute transition-transform"
            />
          )}
        </button>
      </div>

      <div
        className={
          showMenu
            ? ' absolute top-[4.5rem] left-0 right-0 mx-auto w-10/12 rounded-md bg-white p-3 text-center text-lg font-medium text-[#2d314d] shadow-2xl backdrop-opacity-50 transition-all duration-200 ease-in-out'
            : ' hidden transition-all duration-200 ease-in-out'
        }
      >
        <div className="flex flex-col gap-y-4 py-4">
          <a href="#" className="mobile-nav-links">
            Home
          </a>
          <a href="#" className="mobile-nav-links">
            About
          </a>
          <a href="#" className="mobile-nav-links">
            Contact
          </a>
          <a href="#" className="mobile-nav-links">
            Blog
          </a>
          <a href="#" className="mobile-nav-links">
            Careers
          </a>
        </div>
      </div>
    </div>
  )
}
