import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/logo.jpeg";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";
// import { useSubmitContactFormMutation } from "../../Redux/API/FormAPI";
import { useSubmitContactFormMutation } from "../../Redux/API/AddressAPI";

const Footer = () => {
  const navigate = useNavigate();
  const [submitContactForm, { isLoading }] = useSubmitContactFormMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData).unwrap();
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to submit form. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  return (
    <footer className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-24 py-6 font-poppins md:py-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 ">
        {/* Left Section */}
        <div className="flex flex-col w-full lg:w-[30%] text-left">
          <div>
            <p className="py-3 text-lg md:text-xl font-poppins">Info Links</p>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="text-[#D9D9D969] text-[15px] font-poppins md:text-balance cursor-pointer hover:text-white/80 transition">
              Home
            </p>
            <p className="text-[#D9D9D969] text-[15px] font-poppins md:text-balance cursor-pointer hover:text-white/80 transition">
              About us
            </p>
            <p className="text-[#D9D9D969] text-[15px] font-poppins md:text-balance cursor-pointer hover:text-white/80 transition">
              Blogs
            </p>
            <p className="text-[#D9D9D969] text-[15px] font-poppins md:text-balance cursor-pointer hover:text-white/80 transition">
              Contact Us
            </p>
            <p className="text-[#D9D9D969] text-[15px] font-poppins md:text-balance cursor-pointer hover:text-white/80 transition">
              Psychometric Test
            </p>
            <p className="text-[#D9D9D969] text-[15px] font-poppins md:text-balance cursor-pointer hover:text-white/80 transition">
              Explore Gardens
            </p>
            <p className="text-[#D9D9D969] text-[15px] font-poppins md:text-balance cursor-pointer hover:text-white/80 transition">
              My Cart
            </p>
            <p className="text-[#D9D9D969] text-[15px] font-poppins md:text-balance cursor-pointer hover:text-white/80 transition">
              Products
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col w-full lg:w-[30%] space-y-4 mt-3 md:space-y-5">
          <div className="flex flex-col gap-1">
            <p className="transition font-rafgins text-balance md:text-xl">
              Location
            </p>
            <p className="text-sm  font-poppins md:text-[15px] text-[#D9D9D969]/40">
              Nation pride, <br /> Golden City Streets, france 345678
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="transition font-rafgins text-balance md:text-lg">
              Contact
            </p>
            <p className="text-sm  font-poppins md:text-[15px] text-[#D9D9D969]/40">
              +91 999 999 9999
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="transition font-rafgins text-balance md:text-lg">
              Email ID
            </p>
            <p className="text-sm  font-poppins md:text-[15px] text-[#D9D9D969]/40">
              maisonaditi@gmail.com
            </p>
          </div>

          <div className="flex flex-row gap-3 md:gap-4 mt-2">
            {/* <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"> */}
            <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center cursor-pointer">
              <FaTiktok className="text-white text-sm font-poppins md:text-balance" />
            </div>

            {/* <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"> */}
            <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center cursor-pointer">
              <FaFacebookF className="text-white text-sm font-poppins md:text-balance" />
            </div>

            {/* <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"> */}
            <div className="h-8 w-8 md:h-9 md:w-9 flex items-center justify-center cursor-pointer">
              <FaInstagram className="text-white text-sm font-poppins md:text-balance" />
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="flex flex-col w-full lg:w-[40%] font-rafgins mt-4 lg:mt-3">
          <form
            onSubmit={handleSubmit}
            className="w-full font-rafgins text-white space-y-5 md:space-y-6"
          >
            {/* Title */}
            <p className="text-balance md:text-xl mb-4">Stay Connected</p>

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-transparent text-white text-sm font-poppins md:text-[15px] outline-none pb-2 placeholder-white/ focus:placeholder-white/40 transition"
              />
              <div className="border-b border-white/40" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-transparent text-white text-sm font-poppins md:text-[15px] outline-none pb-2 placeholder-white/ focus:placeholder-white/40 transition"
              />
              <div className="border-b border-white/40" />
            </div>

            {/* Contact No */}
            <div className="relative">
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact No"
                required
                className="w-full bg-transparent text-white text-sm font-poppins md:text-[15px] outline-none pb-2 placeholder-white/ focus:placeholder-white/40 transition"
              />
              <div className="border-b border-white/40" />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={1}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full bg-transparent text-white text-sm font-poppins md:text-[15px] outline-none resize-none pb-2 placeholder-white/ focus:placeholder-white/40 transition"
              />
              <div className="border-b border-white/40" />
            </div>

            {/* Connect Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center justify-between w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <p className="text-sm md:text-balance font-montserrat tracking-wide border-b border-white pb-1 group-hover:border-white/70 transition">
                {isLoading ? "Connecting..." : "Connect"}
              </p>
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <p className="text-lg md:text-xl group-hover:translate-x-1 transition-transform">
                  →
                </p>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 text-xs md:text-sm font-poppins font-rafgins text-gray-400">
        <p className="text-center md:text-left text-white">
          ©2025 All Copyrights Reserved
        </p>
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 md:gap-4 font-rafgins">
          <p className="cursor-pointer text-white">Privacy Preferences</p>
          <p className="cursor-pointer">Terms & Services</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
