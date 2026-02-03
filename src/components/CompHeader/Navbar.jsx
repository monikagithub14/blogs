import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbMenuDeep } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo from "../../../public/aditi.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setOpenMenu(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-white px-6 sm:px-6 md:px-12 lg:px-24 py-4 sm:py-6 md:py-8 flex items-center justify-between border-b border-gray-200">
        {/* Left */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <TbMenuDeep
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-black cursor-pointer scale-x-[-1]"
            onClick={() => setOpenMenu(true)}
          />
          <img
            src={"/svg/solar_cart-bold.svg"}
            alt="Cart"
            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 cursor-pointer"
            onClick={() => navigate("/cart")}
          />
        </div>

        {/* Center Logo */}
        <div
          className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain"
          />
        </div>

        {/* Right */}
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <button
            className="flex items-center gap-0.5 sm:gap-1 text-black text-xs sm:text-sm md:text-md font-medium whitespace-nowrap"
            onClick={() => navigate("/continue-experience")}
          >
            <span className="hidden sm:inline">Continue Experience</span>
            <span className="sm:hidden">Continue</span>
            <FaAngleRight
              size={12}
              className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
            />
          </button>
          <div className="w-3 sm:w-4 bg-black h-0.5 sm:h-1 rounded-xl" />
        </div>
      </nav>

      {/* BACKDROP */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpenMenu(false)}
        />
      )}

      {/* MENU MODAL */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] sm:w-[320px] md:w-[360px] bg-white z-50 rounded-tr-3xl px-6 sm:px-12 py-8 sm:py-10 transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close */}
        <IoClose
          size={24}
          className="sm:w-[26px] sm:h-[26px] cursor-pointer mb-8 sm:mb-10"
          onClick={() => setOpenMenu(false)}
        />

        {/* Menu Items */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-base sm:text-lg">
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/signin")}
          >
            Sign In
          </p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/my-account")}
          >
            My Account
          </p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/orders")}
          >
            Orders
          </p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/products")}
          >
            Products
          </p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/explore-gardens")}
          >
            Explore Gardens
          </p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/psychometric-test")}
          >
            Psychometric Test
          </p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/about-us")}
          >
            About Us
          </p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/")}
          >
            Blogs
          </p>
          <p
            className="cursor-pointer hover:text-gray-600 transition-colors"
            onClick={() => handleNavigation("/contact-us")}
          >
            Contact Us
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
