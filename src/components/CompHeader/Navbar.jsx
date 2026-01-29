import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#000A24] text-white px-6 md:px-24  flex items-center justify-between mt-7 relative">
      {/* Left - Menu Button (Mobile) */}
      <div
        className="flex items-center font-dm space-x-2 cursor-pointer md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-xl" />}
        <span className="text-xl font-dm">Menu</span>
      </div>

      {/* Left - Menu (Desktop Only) */}
      <div className="hidden md:flex items-center font-dm space-x-2 cursor-pointer">
        <FaBars className="text-xl" />
        <span className="text-xl font-dm">Menu</span>
      </div>

      {/* Center - Logo */}
      <div className="font-dm font-bold text-2xl tracking-widest">
        LOGO
      </div>

      {/* Right - Cart Icon + Enquire Button */}
      <div className="flex items-center gap-5">
        {/* Cart Icon */}
        <FiShoppingCart
          className="text-2xl cursor-pointer hover:text-gray-300"
          onClick={() => navigate("/cart")}
        />
        {/* Enquire Button */}
        <button
          className="hidden md:block border border-white px-7 py-1 rounded-full text-center text-lg transition"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(153, 153, 153, 0.08) 100%)",
          }}
        >
          Enquire
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#000A24] flex flex-col items-center space-y-6 py-6 border-t border-white/20 md:hidden">
          <button
            className="border border-white px-7 py-2 rounded-full text-center text-lg transition"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(153, 153, 153, 0.08) 100%)",
            }}
          >
            Enquire
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
