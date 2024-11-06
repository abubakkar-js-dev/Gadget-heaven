import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import PropTypes from "prop-types";

const Navbar = ({cartListCount,wishListCount}) => {
  const {pathname} = useLocation();
  const Links = (
    <>
      <li>
          <NavLink to={'/'}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <nav className={`${pathname === '/' ? 'bg-primary text-white pb-10': 'text-black'} m-4 mb-0 md:m-[30px]  md:mb-0 pt-3 rounded-t-[32px]`}>
      <div className="navbar container ">
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
          <a className=" text-base md:text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <Link>
           
          </Link>
          <Link>
            <div className="h-10 w-10 flex justify-center items-center bg-white border rounded-full relative">
            < BsCart3 className="text-gray-700" />
            <span className="absolute -top-3 -right-4 bg-gray-100 text-primary px-3 rounded-full text-sm">{cartListCount}</span>
            </div>
          </Link>
          <Link>
            <div className="h-10 w-10 flex justify-center items-center bg-white border rounded-full relative">
            <FaRegHeart className="text-gray-700" />
            <span className="absolute -top-3 -right-4 bg-gray-100 text-primary px-3 rounded-full text-sm">{wishListCount}</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartListCount: PropTypes.number.isRequired,
  wishListCount: PropTypes.number.isRequired,
}

export default Navbar;
