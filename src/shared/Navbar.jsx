import React from "react";
import { CgLogIn } from "react-icons/cg";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import { MdContactPhone, MdOutlineContactMail } from "react-icons/md";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold"
      : "hover:underline hover:text-blue-600";

  const Links = (
    <>
      <li>
        <NavLink to="/" className={linkClass}>
          <FaHome /> Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/about" className={linkClass}>
          <FaInfoCircle /> About
        </NavLink>
      </li>

      <li>
        <NavLink to="/contact" className={linkClass}>
          <MdContactPhone /> Contact
        </NavLink>
      </li>
    </>
  );

  const AuthLinks = (
    <>
      <li>
        <NavLink to="/register" className={`${linkClass} btn btn-outline btn-primary`}>
          <MdOutlineContactMail /> Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" className={`${linkClass} btn btn-primary mt-2`}>
          <CgLogIn /> Login
        </NavLink>
      </li>
    </>
  );

  
return (
  <div className="navbar bg-base-100">
    {/* Logo - Left Side */}
    <div className="navbar-start ">
      <Logo />
    </div>

    {/* Desktop Navigation - Center */}
    <div className="navbar-center hidden md:flex">
      <ul className="menu menu-horizontal px-1">{Links}</ul>
    </div>

    {/* Desktop Buttons - Right */}
    <div className="navbar-end hidden md:flex">
      <Link to="/register" className="btn btn-outline btn-primary">
        <MdOutlineContactMail />
        Register
      </Link>

      <Link to="/login" className="btn btn-primary ml-2">
        <CgLogIn />
        Login
      </Link>
    </div>

    {/* Mobile Dropdown - Right */}
    <div className="navbar-end md:hidden">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>

        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
        >
          {Links}
          <li>
            <div className="divider my-0"></div>
          </li>
          {AuthLinks}
        </ul>
      </div>
    </div>
  </div>
);
};

export default Navbar;