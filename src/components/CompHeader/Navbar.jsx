import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../../public/aditi.png";
import { TbMenuDeep } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white px-6 md:px-24 py-8 flex items-center justify-between border-b border-gray-200">
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <TbMenuDeep className="h-8 w-8 text-black cursor-pointer scale-x-[-1]" />
        <div className="">
          <img
            src={"/svg/solar_cart-bold.svg"}
            alt="Logo"
            className="h-8 w-8 object-cover"
          />
        </div>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 -translate-x-1/2 py-4">
        <img src={logo} alt="Logo" className="h-28 w-28 object-contain" />
      </div>

      {/* Right Button */}
      <div className="flex flex-col gap-1">
        <div className=" hover:bg-black gap-1  rounded-full  transition flex flex-row items-center justify-center ">
          <button className=" text-black text-md font-medium">
            Continue Experience
          </button>
          <FaAngleRight size={14} className="mt-0.5" />
        </div>
        <div className="w-4 bg-black h-1 rounded-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
