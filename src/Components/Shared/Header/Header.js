import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../Assets/logo.jpg'
import { authContext } from "../../../Context/UserContext";

const Header = () => {

  const {user, logOut} = useContext(authContext)

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(err => console.error(err))
  }

  return (
    <div className="navbar py-5 bg-base-100">
      <div className="flex-1">
        <Link to='/'><img className='w-20' src={logo} alt={'website logo'} /></Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal flex gap-2 p-0">
          <li>
            <Link className="font-semibold" to="/services">Services</Link>
          </li>
          <li>
            <Link className="font-semibold" to="/blog">Blog</Link>
          </li>
          {
            user?.email ? 
            <>
            <li>
            <Link className="font-semibold" to="/myreviews">My Reviews</Link>
          </li>
          <li>
            <Link className="font-semibold" to="/addservice">Add Service</Link>
          </li>
            <li>
            <button onClick={handleLogOut} className="btn btn-success text-white rounded-none">Log Out</button>
          </li>
            </>
          :
          <li>
            <Link to='/login' className="btn btn-success text-white rounded-none">Log in</Link>
          </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Header;
