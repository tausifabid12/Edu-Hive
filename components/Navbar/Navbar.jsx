import React from 'react';

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Courses</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent absolute top-0 font-semibold text-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case font-bold text-2xl">Edu Hive</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-accent font-semibold text-white hidden lg:block">
          LogIn/SingUp
        </button>
      </div>
    </div>
  );
};

export default Navbar;
