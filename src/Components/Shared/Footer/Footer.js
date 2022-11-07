import React from "react";
import logo from "../../../Assets/logo.jpg";
import { FaFacebookF, FaGoogle, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-center border mt-20 p-10 text-black">
      <div>
        <img src={logo} alt="" />
        <p className="font-bold text-xl lg:text-5xl">Rohima's Kitchen</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
            <FaGoogle className="text-xl hover:text-success"></FaGoogle>
            <FaFacebookF className="text-xl hover:text-success"></FaFacebookF>
            <FaYoutube className="text-xl hover:text-success"></FaYoutube>
        </div>
        <div>
          <p className="text-gray-700 font-semibold my-10">Copyright © 2022 - All right reserved by Rohima's Kitchen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
