import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../Assets/logo.jpg";
import { authContext } from "../../../Context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(authContext);
  const location = useLocation()

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar py-5">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-semibold" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="font-semibold" to="/blog">
                Blog
              </Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link className="font-semibold" to="/myreviews">
                    My Reviews
                  </Link>
                </li>
                <li>
                  <Link className="font-semibold" to="/addservice">
                    Add Service
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-success text-white rounded-none"
                  >
                    Log Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  state={{ from: location }}
                  className="btn btn-success text-white rounded-none"
                >
                  Log in
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link to="/">
            <img className="w-20" src={logo} alt={"website logo"} />
          </Link>
        </div>
      </div>
      <div className="hidden navbar-end lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="mx-1">
            <Link className="font-semibold" to="/services">
              Services
            </Link>
          </li>
          <li className="mx-1">
            <Link className="font-semibold" to="/blog">
              Blog
            </Link>
          </li>
          {user?.email ? (
            <>
              <li className="mx-1">
                <Link className="font-semibold" to="/myreviews">
                  My Reviews
                </Link>
              </li>
              <li className="mx-1">
                <Link className="font-semibold" to="/addservice">
                  Add Service
                </Link>
              </li>
              <li className="mx-1">
                <button
                  onClick={handleLogOut}
                  className="btn btn-success text-white rounded-none"
                >
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <li className="mx-1">
              <Link
                to="/login"
                state={{ from: location }}
                className="btn btn-success text-white rounded-none"
              >
                Log in
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="lg:hidden navbar-end">
          <Link to="/">
            <img className="w-20" src={logo} alt={"website logo"} />
          </Link>
        </div>
    </div>
  );
};

export default Header;
