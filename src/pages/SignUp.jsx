import React, { useState } from "react";
import { FiUser, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { useDirectLoginMutation } from "../Redux/API/UsersAPI";
import { useAddToCartMutation } from "../Redux/API/CartAPI";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [directLogin, { isLoading }] = useDirectLoginMutation();
  const [addToCart] = useAddToCartMutation();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (
      !credentials.name ||
      !credentials.phone ||
      !credentials.email ||
      !credentials.country
    ) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    try {
      await directLogin(credentials).unwrap();

      const pendingItem = localStorage.getItem("pendingCartItem");
      if (pendingItem) {
        const { productId, quantity } = JSON.parse(pendingItem);
        try {
          await addToCart({ productId, quantity }).unwrap();
          localStorage.removeItem("pendingCartItem");
          navigate("/cart");
          return;
        } catch (cartErr) {
          console.error("Auto-add to cart failed:", cartErr);
        }
      }

      navigate(from, { replace: true });
    } catch (err) {
      setErrorMsg(err?.data?.message || "Sign Up failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: "url('/loginBG.png')",
      }}
    >
      <div className="w-full max-w-[1250px] min-h-screen lg:min-h-[600px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
        <div
          className="w-full max-w-sm sm:max-w-md lg:w-[450px] min-h-[auto] lg:min-h-[520px]
                bg-white backdrop-blur-md
                border border-white/10
                rounded-2xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10 text-white
                flex flex-col"
        >
          <div className="flex flex-col items-center">
            <img
              src="/logoBlack.png"
              alt="Aditi Logo"
              className="size-36 opacity-90"
            />
          </div>

          <h2 className="text-center font-montserrat text-3xl mb-8 opacity-90 font-medium text-black">
            Sign Up
          </h2>

          <form onSubmit={handleSignUp} className="flex-1 flex flex-col mt-10">
            {/* NAME */}
            <div className="flex font-sans items-center border-b border-black/10 mb-6 pb-2 transition-colors focus-within:border-black/80">
              <FiUser className="mr-2 text-black/70 text-lg" />
              <input
                type="text"
                name="name"
                value={credentials.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-transparent border-b-0 outline-none
                                placeholder-black/60 text-sm text-black"
              />
            </div>

            {/* MOBILE */}
            <div className="flex font-sans items-center border-b border-black/10 mb-6 pb-2 transition-colors focus-within:border-black/80">
              <FiPhone className="mr-2 text-black/70 text-lg" />
              <input
                type="tel"
                name="phone"
                value={credentials.phone}
                onChange={handleChange}
                placeholder="Mobile No"
                className="w-full bg-transparent border-b-0 outline-none
                                placeholder-black/60 text-sm text-black"
              />
            </div>

            {/* EMAIL */}
            <div className="flex font-sans items-center border-b border-black/10 mb-6 pb-2 transition-colors focus-within:border-black/80">
              <FiMail className="mr-2 text-black/70 text-lg" />
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full bg-transparent border-b-0 outline-none
                                placeholder-black/60 text-sm text-black"
              />
            </div>

            {/* COUNTRY */}
            <div className="flex font-sans items-center border-b border-black/10 mb-6 pb-2 transition-colors focus-within:border-black/80">
              <FiMapPin className="mr-2 text-black/70 text-lg" />
              <input
                type="text"
                name="country"
                value={credentials.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full bg-transparent border-b-0 outline-none
                                placeholder-black/60 text-sm text-black"
              />
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="text-red-500 text-xs text-center font-sans animate-pulse my-2">
                {errorMsg}
              </div>
            )}

            <div className="flex flex-col text-center text-xs text-gray-500 mb-4 cursor-pointer mt-auto">
              <p onClick={() => navigate("/signin")}>
                Already Have Account ?{" "}
                <span className="text-black font-medium">SIGN IN</span>
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className={`px-12 py-3 font-sans rounded-full mx-auto flex
                            border border-black/30 bg-black text-white
                            shadow-inner shadow-black/40
                            hover:bg-white hover:text-black transition 
                            ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
