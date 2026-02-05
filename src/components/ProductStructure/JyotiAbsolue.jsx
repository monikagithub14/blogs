import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

const sections = [
  "The Essence",
  "Spiritual Resonance",
  "Olfactive Structure",
  "When To Wear",
];

const JyotiAbsolue = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full bg-white flex flex-col items-center px-4 sm:px-6 md:px-0 mt-6 md:mt-10 lg:mt-12">
      {/* Header */}
      <div className="max-w-4xl w-full text-center pt-14 md:pt-16 lg:pt-12 pb-10 md:pb-12 lg:pb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-[600] tracking-wide font-montserrat">
          JYOTI ABSOLUE
        </h1>

        <p className="mt-6 md:mt-10 lg:mt-10 text-lg md:text-2xl lg:text-[33px] font-medium font-poppins">
          The Axis Of Divine Consciousness
        </p>

        <p className="mt-2 md:mt-4 text-[9px] md:text-[14px] lg:text-[16px] max-w-2xl mx-auto italic [word-spacing:0.12em]">
          The Fragrance From Which All Others Arise. Jyoti Absolue Anchors The
          <br />
          Collection In Stillness, Clarity, And Inner Light.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-6xl w-full md:pt-10 pt-0">
        {sections.map((title, index) => {
          const isActive = openIndex === index;

          return (
            <div key={index} className="relative">
              <button
                onClick={() => setOpenIndex(isActive ? null : index)}
                className={`w-full flex items-center justify-between
                  px-4 md:px-6 lg:px-10
                  py-3 md:py-4 lg:py-5
                  text-left text-sm sm:text-base transition
                  ${isActive ? "bg-[#D9D9D9]/[0.27]" : "bg-white"}
                `}
              >
                <span className="font-medium font-poppins">{title}</span>

                <span
                  className={`transform transition-transform duration-300 ${
                    isActive ? "rotate-180" : ""
                  }`}
                >
                  <IoIosArrowDown />
                </span>
              </button>

              {/* Divider */}
              <div className="w-full border-b border-gray-100"></div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-14 md:mt-20 lg:mt-32 mb-12 md:mb-14 lg:mb-16 flex items-center gap-2">
        <button className="text-sm md:text-xl lg:text-[20px]  font-poppins relative font-semibold">
          Discover Jyoti Absolue
          <span className="absolute left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 w-9 md:w-[53px] -bottom-2 md:-bottom-3 h-[3px] rounded-2xl bg-black"></span>
        </button>

        <FaAngleRight className="text-black" />
      </div>
    </div>
  );
};

export default JyotiAbsolue;
