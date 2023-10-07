import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then().catch;
  };
  const navLinks = (
    <>
      <li className="text-lg text-purple-400">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg text-purple-400">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="text-lg text-purple-400">
        <NavLink to="timetable">Timetable</NavLink>
      </li>
      <li className="text-lg text-purple-400">
        <NavLink to="/bookedlesson">Booked Lesson</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto px-4 md:px-32">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            to="/"
            className="text-2xl lg:text-6xl text-purple-700 font-bold"
          >
            WFC
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        {user ? (
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/wLy0p6Y/jahedpp-removebg-preview.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-white rounded-box w-52"
              >
                <li>
                  <p className="justify-between">Md Jahed Miah</p>
                </li>
                <li>
                  <Link onClick={handleLogOut}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login" className="navbar-end">
            <button className="btn btn-ghost text-purple-400">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
