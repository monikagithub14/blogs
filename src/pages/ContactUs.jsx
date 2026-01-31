// import React from "react";
// import background from "../../../public/ContactUsBgImage2.jpg";

// const ContactUs = () => {
//   return (
//     <div
//       className="w-full inset-0 h-screen overflow-y-hidden bg-no-repeat bg-cover bg-top"
//       style={{
//         backgroundImage: `url(${background})`,
//       }}
//     ></div>
//   );
// };

// export default ContactUs;

import React from "react";
import background from "../../public/ContactUsBgImage2.jpg";
import {
  ArrowUpRightFromSquare,
  GitPullRequestCreateArrow,
} from "lucide-react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ContactUs = () => {
  return (
    <div
      className="w-full min-h-screen md:h-screen overflow-y-auto md:overflow-hidden bg-cover bg-center relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full w-full justify-center md:items-center px-6 md:px-20 py-20 md:py-0">
        {/* Left Text Section */}
        <div className="hidden md:flex w-1/2 text-white/90 text-center justify-center">
          <h1 className="text-4xl font-light leading-snug">
            We Welcome Your <br />
            <span className="font-medium">Energy !!</span>
            <div className="absolute -z-10 top-0 left-0 w bg-black/30 w-1/2 h-full"></div>
          </h1>
        </div>

        {/* Right Form Card */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-4">
          <div className="bg-white w-full max-w-md p-6 md:p-8 shadow-xl">
            <h2 className="text-[15px] font-medium tracking-wide font-poppins">
              EVERY CONNECTION BEGINS WITH INTENTION.
            </h2>

            <div className="w-2/3">
              <p className="text-xs text-black my-2 md:my-4 font-poppins w-full">
                Monday to Friday 10:00 AM To 12:00 AM IST
              </p>
            </div>
            <div className="flex flex-row gap-4 md:gap-11 pb-6 w-2/3">
              {/* <div className="flex flex-row justify-between relative pb-6 w-2/3"> */}
              <div className="flex flex-col gap-0.5">
                <p className="font-poppins text-xs cursor-pointer font-normal text-black">
                  Instagram
                </p>
                <div className="w-full bg-black h-[1px]" />
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="font-poppins text-xs cursor-pointer font-normal text-black">
                  Whatsapp
                </p>
                <div className="w-full bg-black h-[1px]" />
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="font-poppins text-xs cursor-pointer font-normal text-black left-4">
                  Tiktok
                </p>
                <div className="w-full bg-black h-[1px]" />
              </div>
            </div>
            <form className="md:space-y-[10px] space-y-[6px]">
              <input
                type="text"
                placeholder="Name*"
                className="w-full bg-[#D9D9D936]/20 italic px-3 py-2 text-[13px]"
              />

              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full md:w-1/2 bg-[#D9D9D936]/20 italic px-3 py-2 text-[13px]"
                />
                <input
                  type="text"
                  placeholder="Contact No*"
                  className="w-full md:w-1/2 bg-[#D9D9D936]/20 italic px-3 py-2 text-[13px]"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Country*"
                  className="w-full md:w-1/2 bg-[#D9D9D936]/20 italic px-3 py-2 text-[13px]"
                />
                <input
                  type="text"
                  placeholder="Order No*"
                  className="w-full md:w-1/2 bg-[#D9D9D936]/20 italic px-3 py-2 text-[13px]"
                />
              </div>

              <p className="text-xs text-black font-montserrat">
                Your words are sacred to us, please share your message below,
                and our team will respond with care.
              </p>

              <textarea
                placeholder="Message*"
                rows="4"
                className="w-full border px-3 py-2 text-[13px] focus:outline-none italic"
              ></textarea>
              <div className=" w-full flex items-center justify-center flex-col pb-2">
                {" "}
                <button
                  type="submit"
                  className="text-sm font-poppins flex flex-row justify-center relative items-center gap-1"
                >
                  Connect With Us <MdKeyboardArrowRight />
                  <div className="w-4 h-0.5 left-0 top-6 bg-black absolute" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
