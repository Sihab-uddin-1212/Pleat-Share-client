import React, { use, useState } from 'react';
import { GoHomeFill } from 'react-icons/go';
import { ImBoxAdd } from 'react-icons/im';
import { IoLogoModelS } from 'react-icons/io';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { LuRotate3D } from 'react-icons/lu';
import { Link, NavLink } from 'react-router';
import logo from '../assets/plate-logo_535345-3582.avif'
import { AuthContext } from '../Auth/AuthContext';
import { FaHandsHelping, FaUser } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { Loader } from 'lucide-react';
import { FiGitPullRequest } from "react-icons/fi";
import { BsBasket3 } from 'react-icons/bs';
 

const Navbar = () => {
    const {user,signOutUser,loading}= use(AuthContext)
    // const {loading , setLoading} = useState()
    
     
    return (
   
    <div className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-br from-purple-800 via-indigo-800 to-gray-900/90 transition-all duration-500 border-b border-white/10">
      <div className="navbar py-3 md:py-4 min-h-0 shadow-sm rounded-full   mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost md:hidden text-gray-200 hover:bg-white/10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 rounded-2xl"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gradient-to-br from-purple-800 via-indigo-800 to-gray-900 rounded-box mt-3 w-52 p-2 shadow-lg border border-white/10"
            >
              <li>
                <NavLink to="/" className={({ isActive }) =>
                    `flex items-center gap-1 transition-all ${
                      isActive ? "text-amber-300" : "hover:text-amber-300 text-white"
                    }`
                  }>
                  <GoHomeFill /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all-foods" className={({ isActive }) =>
                    `flex items-center gap-1 transition-all ${
                      isActive ? "text-amber-300" : "hover:text-amber-300 text-white"
                    }`
                  }  >
                  <IoLogoModelS /> Available Foods
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl lg:text-2xl  font-bold text-white ">
            <img src={logo} className="w-9 rounded-full" alt="Logo" />
            PlateShare
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-10 text-gray-200 font-medium relative">
            {[
              { path: "/", label: "Home", icon: <GoHomeFill /> },
              { path: "/all-foods", label: "Available Foods", icon: <IoLogoModelS /> },
             
            ].map((item) => (
              <li key={item.path} className="relative">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition-all ${
                      isActive ? "text-amber-300" : "hover:text-amber-300"
                    }`
                  }
                >
                  {item.icon} {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
         
        <div className="navbar-end gap-3">
  {loading ? (
    
    <Loader></Loader>
  ) : user ? (
     
    <div className="dropdown dropdown-end z-50">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar hover:bg-white/10 transition"
      >
        <div className="w-10 border-2 border-amber-300 rounded-full">
          <img
            alt="User Avatar"
            referrerPolicy="no-referrer"
            src={
              user.photoURL ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
          />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-gradient-to-br from-purple-800 via-indigo-800 to-gray-900 rounded-box mt-3 w-52 p-3 shadow-lg border border-white/10"
      >
        <div className="pb-3 border-b border-white/20">
          <li className="text-sm font-bold text-white">{user.displayName}</li>
          <li className="text-xs text-gray-400">{user.email}</li>
        </div>
        <li className="mt-3">
          <Link to="/addfood" className="hover:text-amber-300 text-white">
            <FaUser /> Add Food
          </Link>
        </li>
        <li>
          <Link to="/my-food" className="hover:text-amber-300 text-white">
          <BsBasket3 />Manage My Food
          </Link>
        </li>
        <li>
          <Link to="/my-request" className="hover:text-amber-300 text-white">
            <FiGitPullRequest />  My Food Request
          </Link>
        </li>
        <li>
          <button
            onClick={signOutUser}
            className="btn btn-xs w-full bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 transition"
          >
            <IoLogOut /> Logout
          </button>
        </li>
      </ul>
    </div>
  ) : (
    // 🔹 No user logged in
    <Link
      to="/login"
      className="btn rounded-full border-none btn-sm bg-gradient-to-r from-pink-500 to-red-500 text-white hover:from-pink-600 hover:to-red-600 transition"
    >
      <IoLogIn /> Login
    </Link>
  )}
</div>
      </div>
    </div>
    

    );
};

export default Navbar;