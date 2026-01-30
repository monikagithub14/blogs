import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useSendOtpMutation,
  useVerifyOtpMutation,
} from "../Redux/API/UsersAPI";
import { useAddToCartMutation } from "../Redux/API/CartAPI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
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
                shadow-[0_10px_50px_rgba(0,0,0,0.3)] flex flex-col"
        >
          {/* LOGO */}
          <div className="flex flex-col items-center">
            <img
              src="/logoBlack.png"
              alt="Aditi Logo"
              className=" size-24 mb-2 opacity-90"
            />
          </div>

          <h2 className="text-center font-montserrat text-3xl mb-8 opacity-90 mt-4 lg:mt-12 font-medium text-black">
            {step === 1 ? "Sign In" : "Verify OTP"}
          </h2>

          <form
            onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
            className="flex-1 flex flex-col"
          >
            {step === 1 ? (
              // STEP 1: EMAIL INPUT
              <div className="flex font-sans items-center border-b border-black/30 mb-6 pb-2 transition-colors focus-within:border-black/80">
                <FiMail className="mr-3 text-black/70 text-lg" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMsg("");
                  }}
                  placeholder="Enter Your Email"
                  className="w-full bg-transparent border-b-0 outline-none
                                placeholder-black/60 text-sm text-black"
                />
              </div>
            ) : (
              // STEP 2: OTP INPUT
              <div className="flex font-sans items-center border-b border-black/30 mb-6 pb-2 transition-colors focus-within:border-black/80">
                <FiLock className="mr-3 text-black/70 text-lg" />
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setErrorMsg("");
                  }}
                  placeholder="Enter OTP"
                  className="w-full bg-transparent border-b-0 outline-none
                                placeholder-black/60 text-sm text-black"
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

            <div className="flex flex-col text-center text-xs text-gray-500 mb-4 cursor-pointer">
              <p onClick={() => navigate("/signup")}>
                Don’t Have Account ?{" "}
                <span className="text-black font-medium">SIGN UP</span>
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSendingOtp || isVerifyingOtp}
              className={`px-12 py-3 font-sans rounded-full mx-auto flex
                            border border-black/30 bg-black text-white
                            shadow-inner shadow-black/40
                            hover:bg-white hover:text-black transition 
                            ${isSendingOtp || isVerifyingOtp ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {step === 1
                ? isSendingOtp
                  ? "Sending..."
                  : "Submit"
                : isVerifyingOtp
                  ? "Verifying..."
                  : "Verify & Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
