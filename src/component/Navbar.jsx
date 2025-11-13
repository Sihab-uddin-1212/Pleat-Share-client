import React, { use } from 'react';
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

const Navbar = () => {
    const {user,signOutUser}= use(AuthContext)
     
    return (
    //       <div className="navbar py-0 min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           {" "}
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />{" "}
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex="-1"
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
    //       >
    //         <li>
    //           <NavLink to={"/"}>
    //             <GoHomeFill />
    //             Home
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink to={"/all-models"}>
    //             <IoLogoModelS /> All Models
    //           </NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //     <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
    //        <img src={logo} className='w-8' alt="" /> PlateShare
    //     </Link>
    //   </div>
    //   <div className="navbar-center hidden md:flex">
    //     <ul className="menu menu-horizontal px-1 gap-10">
    //       <li>
    //         <NavLink to={"/"}>
    //           <GoHomeFill />
    //           Home
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink to={"/all-foods"}>
    //           <IoLogoModelS /> Available Foods
    //         </NavLink>
    //       </li>
           

         
    //     </ul>
    //   </div>
    //   <div className="navbar-end gap-3">
    //     {user ? (
    //       <div className="dropdown dropdown-end z-50">
    //         <div
    //           tabIndex={0}
    //           role="button"
    //           className="btn btn-ghost btn-circle avatar"
    //         >
    //           <div className="w-9 border-2 border-gray-300 rounded-full">
    //             <img
    //               alt="Tailwind CSS Navbar component"
    //               referrerPolicy="no-referrer"
    //               src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
    //             />
    //           </div>
    //         </div>
    //         <ul
    //           tabIndex="-1"
    //           className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
    //         >
    //           <div className=" pb-3 border-b border-b-gray-200">
    //             <li className="text-sm font-bold">{user.displayName}</li>
    //             <li className="text-xs">{user.email}</li>
    //           </div>
    //           <li className="mt-3">
    //             <Link to={"/addfood"}>
    //               <FaUser /> Add Food
    //             </Link>
    //           </li>

    //           <li>
    //             <Link to={'/my-food'}>
    //                Manage my food
    //             </Link>
    //           </li>

    //           <li >
    //             <Link to={"/my-request"}>
    //              My  Food Request
    //             </Link>
    //           </li>

    //           {/* <input
    //        onChange={(e)=> handleTheme(e.target.checked)}
    //        type="checkbox"
    //        defaultChecked={localStorage.getItem('theme') === "dark"}
    //        className="toggle"/> */}
              
    //           {/* <li>
    //             <a>
    //               {" "}
    //               <FaGear /> Settings
    //             </a>
    //           </li> */}
    //           <li>
    //             <button
    //               onClick={signOutUser}
    //               className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
    //             >
    //               <IoLogOut /> Logout
    //             </button>
    //           </li>
    //         </ul>
    //       </div>
    //     ) : (
    //       <Link
    //         to={"/login"}
    //         className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
    //       >
    //         {" "}
    //         <IoLogIn /> Login
    //       </Link>
    //     )}
    //   </div>
    // </div>
   <div className="sticky top-0 z-50 backdrop-blur-md bg-transparent transition-all duration-300">
      <div className="navbar py-3 md:py-4 min-h-0 shadow-sm rounded-full max-w-7xl mx-auto px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden text-white hover:bg-white/10 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-box mt-3 w-52 p-2 shadow-lg"
            >
              <li><NavLink to="/" className="hover:text-yellow-300"><GoHomeFill /> Home</NavLink></li>
              <li><NavLink to="/all-foods" className="hover:text-yellow-300"><IoLogoModelS /> Available Foods</NavLink></li>
            </ul>
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
            <img src={logo} className="w-9" alt="Logo" />
            PlateShare
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-white font-medium relative">
            {[
              { path: "/", label: "Home", icon: <GoHomeFill /> },
              { path: "/all-foods", label: "Available Foods", icon: <IoLogoModelS /> },
              { path: "/donations", label: "Donations", icon: <FaUser /> },
            ].map((item) => (
              <li key={item.path} className="relative group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 transition-all ${
                      isActive ? "text-yellow-300" : "hover:text-yellow-300"
                    }`
                  }
                >
                  {item.icon} {item.label}
                </NavLink>
                {/* Active/Hover indicator */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-yellow-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          {user ? (
            <div className="dropdown dropdown-end z-50">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-white/10 transition">
                <div className="w-10 border-2 border-white rounded-full">
                  <img
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-box mt-3 w-52 p-3 shadow-lg"
              >
                <div className="pb-3 border-b border-white/20">
                  <li className="text-sm font-bold text-white">{user.displayName}</li>
                  <li className="text-xs text-gray-300">{user.email}</li>
                </div>
                <li className="mt-3"><Link to="/addfood" className="hover:text-yellow-300"><FaUser /> Add Food</Link></li>
                <li><Link to="/my-food" className="hover:text-yellow-300">Manage My Food</Link></li>
                <li><Link to="/my-request" className="hover:text-yellow-300">My Food Request</Link></li>
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