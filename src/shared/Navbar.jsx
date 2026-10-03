import React, { useContext } from "react";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { FaHome, FaInfoCircle, FaUserCircle } from "react-icons/fa";
import { MdContactPhone, MdLogout, MdOutlineContactMail } from "react-icons/md";
import { Link, NavLink } from "react-router";
import Logo from "./Logo";
import AuthContext from "../context/authContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-bold"
      : "hover:underline hover:text-blue-600";

  // Navigation links
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

  // Sign out function
  const handleSignOut = async () => {
    try {
      await signOutUser();
      console.log("Successfully logged out!");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // User dropdown
  const UserDropdown = (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost flex items-center gap-2"
      >
        {user?.photoURL ? (
          <img
            src={user.photoURL}
            alt="User profile"
            className="w-9 h-9 rounded-full object-cover"
          />
        ) : (
          <FaUserCircle className="text-3xl" />
        )}

        
      </div>

    </div>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Logo */}
      <div className="navbar-start">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      {/* Desktop Authentication */}
      <div className="navbar-end hidden md:flex gap-2">
        {user ? (
          <>
            <button onClick={handleSignOut} className="btn btn-primary">
              <CgLogOut />
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link to="/register" className="btn btn-outline btn-primary">
              <MdOutlineContactMail />
              Register
            </Link>

            <Link to="/login" className="btn btn-primary">
              <CgLogIn />
              Login
            </Link>
          </>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar-end md:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-56 p-3 shadow-lg"
          >
            {Links}

            <div className="divider my-1"></div>

            {user ? (
              <>
                <button onClick={handleSignOut} className="btn btn-primary">
                  <CgLogOut />
                  LogOut
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register">
                    <MdOutlineContactMail />
                    Register
                  </Link>
                </li>

                <li>
                  <Link to="/login">
                    <CgLogIn />
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
