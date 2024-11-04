import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-primary m-[30px] mb-0 pb-8 md:pb-10 lg:pb-12 rounded-t-[32px]">
      <div className="navbar container text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-purple-500 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className=" text-lg md:text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <Link>
           
          </Link>
          <Link>
            <div className="h-10 w-10 flex justify-center items-center bg-white rounded-full">
            < BsCart3 className="text-gray-700" />
            </div>
          </Link>
          <Link>
            <div className="h-10 w-10 flex justify-center items-center bg-white rounded-full">
            <FaRegHeart className="text-gray-700" />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
