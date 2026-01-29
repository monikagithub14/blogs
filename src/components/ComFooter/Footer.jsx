import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "/logo.jpeg";
import { h1 } from "framer-motion/m";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToProduct = () => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        const productSection = document.getElementById("product");
        if (productSection) productSection.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const productSection = document.getElementById("product");
      if (productSection) productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#000A24] text-white px-6 sm:px-12 md:px-32 py-7 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-12">

        {/* Left Section */}
        <div className="flex flex-col justify-between text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-6xl font-rafgins">Since</h2>
            <p className="text-4xl md:text-6xl font-serif font-light mt-1">2025</p>
          </div>
          <div className="mt-6 md:mt-10">
            <h3 className="text-xl md:text-2xl font-rafgins">Maison Aditi</h3>
            <p className="text-xs md:text-sm font-sans text-gray-300">
              Awaken Your Essence
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <Link
            to="/"
            className="hover:text-gray-400 transition font-rafgins text-base md:text-lg"
          >
            Home
          </Link>
          <button
            onClick={scrollToProduct}
            className="hover:text-gray-400 transition font-rafgins text-base md:text-lg"
          >
            Products
          </button>
          <Link
            to="/privacy-policy"
            className="hover:text-gray-400 transition font-rafgins text-base md:text-lg"
          >
            Privacy & Policy
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-400 transition font-rafgins text-base md:text-lg"
          >
            Contact
          </Link>
          <p className="text-gray-400 text-xs md:text-sm mt-4">+91 999 999 9999</p>
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            La Glacière, 63100 Clermont-Ferrand, France
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-start space-y-3 font-rafgins">
          <Link
            to="/team"
            className="hover:text-gray-400 transition text-base md:text-lg"
          >
            Team
          </Link>
          <a
            href="https://www.instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition text-base md:text-lg"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-sans text-gray-400">
        <p>©2025 All Copyrights Reserved</p>
        <div className="flex items-center gap-2 mt-3 md:mt-0">
          <span>Developed By</span>
          <img src={Logo} alt="Developed By Logo" className="h-8 md:h-10" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
