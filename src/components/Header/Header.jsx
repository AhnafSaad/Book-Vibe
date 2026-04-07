import React from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
    const links = <>
    <NavLink to="/" className={({ isActive }) => isActive ? "m-2 text-[#23BE0A] font-bold border-b-2 border-[#23BE0A] pb-1" : "m-2 hover:text-[#23BE0A] transition-colors"}>
      <li>Home</li>
    </NavLink>
    <NavLink to="/about" className={({ isActive }) => isActive ? "m-2 text-[#23BE0A] font-bold border-b-2 border-[#23BE0A] pb-1" : "m-2 hover:text-[#23BE0A] transition-colors"}>
      <li>About</li>
    </NavLink>
    <NavLink to="/readList" className={({ isActive }) => isActive ? "m-2 text-[#23BE0A] font-bold border-b-2 border-[#23BE0A] pb-1" : "m-2 hover:text-[#23BE0A] transition-colors"}>
      <li>Read List</li>
    </NavLink>
    </>
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl font-bold text-[#23BE0A]">Book Vibe</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <Link to="/login">
      <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none">Sign In</button>
    </Link>
    <Link to="/signup">
      <button className="btn bg-[#50B1C9] hover:bg-[#3d9cb4] text-white border-none">Sign Up</button>
    </Link>
  </div>
</div>
    );
};

export default Navbar;