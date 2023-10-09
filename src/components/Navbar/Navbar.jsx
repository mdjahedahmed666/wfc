import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const Navbar = () => {
  const { user, logOut} = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
    .then(
      
      Swal.fire({
        title: 'Log Out',
        text: 'Successfully logged out',
        icon: 'Success',
        confirmButtonText: 'ok'
      }),
      navigate('/')

    )
    .catch((error) => {
      console.error("Logout failed", error);
    })
  };
  const navLinks = (
    <>
      <li className="text-lg text-purple-400">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg text-purple-400">
        <NavLink to="/timetable">Timetable</NavLink>
      </li>
      <li className="text-lg text-purple-400">
        <NavLink to="/bookedLesson">Booked Lesson</NavLink>
      </li>
      <li className="text-lg text-purple-400">
        <NavLink to="/feedback">Feedback</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
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
        {user ? 
        <div className="navbar-end">
      <Link onClick={handleLogOut}>Logout</Link>
      </div>
          // <div className="flex-none gap-2 navbar-end">
          //   <div className="dropdown dropdown-end">
          //     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          //       <div className="w-10 rounded-full">
          //         <img src={user.photo} />
          //       </div>
          //     </label>
          //     <ul
          //       tabIndex={0}
          //       className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content text-white rounded-box w-52"
          //     >
          //       <li>
          //         <p className="justify-between">{userName}</p>
          //       </li>
          //       <li>
          //         <Link onClick={handleLogOut}>Logout</Link>
          //       </li>
          //     </ul>
          //   </div>
          // </div>
         : 
          <div className="navbar-end">
            <Link to="/login">
            <button className="btn btn-ghost text-purple-400">Login</button>
          </Link>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
