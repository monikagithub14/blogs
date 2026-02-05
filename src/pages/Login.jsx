import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "../Redux/API/UsersAPI";
import { useAddToCartMutation } from "../Redux/API/CartAPI";
import { MdKeyboardArrowRight } from "react-icons/md";


const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // API Hooks
  const [sendOtp, { isLoading: isSendingOtp }] = useSendOtpMutation();
  const [verifyOtp, { isLoading: isVerifyingOtp }] = useVerifyOtpMutation();
  const [addToCart] = useAddToCartMutation();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg("Please enter your email");
      return;
    }
    setErrorMsg("");

    try {
      await sendOtp({ email }).unwrap();
      setStep(2);
    } catch (err) {
      setErrorMsg(
        err?.data?.message || "Failed to send OTP. Please try again.",
      );
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      setErrorMsg("Please enter the OTP");
      return;
    }
    setErrorMsg("");

    try {
      await verifyOtp({ email, otp }).unwrap();

      // Check for pending cart item
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
      setErrorMsg(err?.data?.message || "Invalid OTP. Please try again.");
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
        {/* LOGIN CARD */}
        <div
          className="w-full max-w-sm sm:max-w-md lg:w-[450px] min-h-[auto] lg:min-h-[520px]
                bg-white backdrop-blur-md
                border border-white/10
                rounded-2xl px-6 py-8 sm:px-8 sm:py-10 lg:px-10 text-white
                flex flex-col"
        >
          {/* LOGO */}
          <div className="flex justify-center mb-2">
            <img
              src="/logoBlack.png"
              alt="Aditi Logo"
              className="w-28 h-28 object-contain"
            />
          </div>


          <h2 className="text-center font-montserrat text-3xl sm:text-lg mb-0 opacity-90 font-medium text-black">
            {step === 1 ? "Sign In" : "Verify OTP"}
          </h2>

          <form
            onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
            className="flex-1 flex flex-col mt-5"
          >
            {step === 1 ? (
              // STEP 1: EMAIL INPUT
              <div className="flex font-poppins items-center border-b border-black/10 mb-6 pb-2 transition-colors focus-within:border-black/80">
                <FiMail className="mr-2 text-black/70 text-lg" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMsg("");
                  }}
                  placeholder="Email Address"
                  className="w-full bg-transparent border-b-0 outline-none
    placeholder-black/60 text-sm text-black font-poppins text-[13px] sm:text-[10px] font-normal"
                />
              </div>

            ) : (
              // STEP 2: OTP INPUT
              <div className="flex font-poppins items-center border-b border-black/10 mb-6 pb-2 transition-colors focus-within:border-black/80">
                <img src="/svg/OTP.svg" className="size-4 mr-2" alt="" />

                <input
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setErrorMsg("");
                  }}
                  placeholder="OTP"
                  className="w-full bg-transparent border-b-0 outline-none text-[13px] sm:text-[10px] font-normal
    placeholder-black/60 text-sm text-black font-poppins"
                />
              </div>

            )}

            {/* Error Message */}
            {errorMsg && (
              <div className="h-6 mb-8 mt-2">
                <p className="text-red-500 text-xs text-center font-sans animate-pulse">
                  {errorMsg}
                </p>
              </div>
            )}

            {/* Change Email Link (Only in Step 2) */}
            {step === 2 && (
              <div
                className="text-center text-xs text-gray-500 mb-4 cursor-pointer"
                onClick={() => setStep(1)}
              >
                Incorrect email?{" "}
                <span className="text-black font-medium">Change</span>
              </div>
            )}

            <div className="flex flex-col text-center text-[15px] sm:text-[10px] font-normal text-gray-500 mb-4 mt-0 md:mt-6 cursor-pointer">
              <p onClick={() => navigate("/signup")}>
                Don’t Have Account ?{" "}
                <span className="text-black font-medium">SIGN UP</span>
              </p>
            </div>

           <div className="w-full flex items-center justify-center flex-col pb-2">
  <button
    type="submit"
    disabled={isSendingOtp || isVerifyingOtp}
    className={`text-[15px] font-poppins font-medium flex items-center gap-1 relative transition
      ${(isSendingOtp || isVerifyingOtp)
        ? "text-gray-400 cursor-not-allowed"
        : "text-black hover:text-gray-600"
      }`}
  >
    {step === 1
      ? isSendingOtp
        ? "Sending..."
        : "Submit"
      : isVerifyingOtp
        ? "Verifying..."
        : "Verify & Login"}

    <MdKeyboardArrowRight className="text-lg" />

    <span
      className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all
        ${(isSendingOtp || isVerifyingOtp) ? "w-3 bg-gray-400" : "w-5 bg-black"}
      `}
    ></span>
  </button>
</div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
