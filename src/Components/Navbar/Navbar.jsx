import React from "react";
import "./navbar.css";
import { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active,setActive] = useState('navBar')
  //func to toggle navbar
  const showNav = () => {setActive('navBar activeNavbar')}
  //func to remove navbar
  const removeNavbar = () => {setActive('navBar')}
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNavbar}
          className="closeNavbar">
            <FaWindowClose className="icon" />
          </div>
        </div>
        <div onClick={showNav}
        className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  )
}

export default Navbar;
