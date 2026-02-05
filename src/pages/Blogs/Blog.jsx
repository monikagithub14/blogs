import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import background from "../../../public/background.jpg";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);
  const navigate = useNavigate();

  const filters = [
    "Divine Fragrance Philosophy",
    "Sacred Gardens & Energies",
    "Perfume Rituals & Mindfulness",
  ];

  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <>
      {/* HERO SECTION */}
      <div className="min-h-screen bg-white text-white font-sans overflow-x-hidden relative">
        {/* Background */}
        <div
          className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <header className="flex flex-col items-center gap-5 text-center pt-28 sm:pt-32 md:pt-60 px-4 w-full max-w-5xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-montserrat font-semibold leading-tight text-white">
              Words infused with fragrance,
              <br className="hidden md:block" />
              <span className="text-white bg-clip-text block md:inline">
                Written for the soul
              </span>
            </h1>

            <p className="mt-2 max-w-2xl text-white text-xs sm:text-sm md:text-sm leading-relaxed px-2 sm:px-4 font-poppins font-medium">
              A sacred space where stories of scent, divinity, and inner
              awakening unfold.
              <br />
              <span className="block mt-2">
                Here, fragrance is more than aroma; it is memory, energy, and
                ritual.
              </span>
            </p>

            <div className="flex flex-col gap-2 items-center justify-center">
              <button
                className="relative flex items-center gap-1 mt-4 sm:mt-5 text-white text-xs sm:text-sm md:text-md font-medium whitespace-nowrap"
                // onClick={() => navigate("/continue-experience")}
              >
                <span className="hidden sm:inline font-medium fontpop text-base sm:text-lg">
                  Continue experience
                </span>
                <span className="sm:hidden font-medium text-sm">Continue experience</span>

                <FaAngleRight size={12} className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />

                <div className="absolute -bottom-1 left-0 w-5 sm:w-7 bg-white h-0.5 sm:h-1 rounded-xl" />
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* HEADING SECTION */}
      <div className="bg-white text-black flex flex-col px-4 sm:px-6 md:px-24 md:flex-row justify-between items-start gap-4 md:gap-10 pt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight max-w-md font-montserrat">
          Where fragrance meets consciousness
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 text-left font-medium font-poppins leading-relaxed max-w-xl">
          Welcome to the Maison Aditi Journal a realm where fragrance becomes
          <br className="hidden md:block" /> a prayer, stories flow like incense,
          and every word carries The Essence
          <br className="hidden md:block" /> of inner awakening.
        </p>
      </div>

      {/* CONTENT SECTION */}
      <div className="bg-black/5 rounded-xl mx-4 sm:mx-6 md:mx-24 pt-6 sm:pt-8 mt-6 sm:mt-8 mb-12 md:mb-24">
        <section className="px-4 sm:px-6 md:px-16 pb-10 sm:pb-12 md:pb-16 flex flex-col gap-8">
          {/* FILTER BUTTONS */}
          <div
            className="flex items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto w-full [&::-webkit-scrollbar]:hidden pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(index)}
                className={`px-4 sm:px-5 md:px-6 py-2 font-medium rounded-full text-[10px] sm:text-[11px] md:text-xs tracking-normal transition-all duration-300 whitespace-nowrap flex-shrink-0
                  ${
                    activeFilter === index
                      ? "bg-white text-[#000A24] font-poppins font-medium leading-6 shadow-sm"
                      : "bg-[#D9D9D942]/25 text-black/40 hover:text-black"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
            {[1, 2, 3, 4].map((blog, i) => (
              <div
                key={i}
                className="group bg-white p-4 md:p-6 text-black rounded-md cursor-pointer shadow-sm hover:shadow-md transition-all"
                onClick={() => navigate("/blog/" + blog)}
              >
                <div className="mb-4 md:mb-6 overflow-hidden h-52 sm:h-56 md:h-64 rounded-md">
                  <img
                    src="/images/Blog_png/rose.jpg"
                    alt="Flower"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-medium font-poppins mb-2 md:mb-3 leading-snug">
                  Fragrance as a ritual: When scent becomes sacred
                </h3>

                <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 font-poppins font-light mb-4 md:mb-6 leading-relaxed">
                  Fragrance has always been more than a sensory pleasure. Across{" "}
                  <br className="hidden md:block" /> cultures and centuries,
                  scent has been used as ritual a bridge{" "}
                  <br className="hidden md:block" /> between the visible and the
                  unseen.
                </p>

                <button className="flex items-center gap-2 md:gap-4 text-xs md:text-sm tracking-normal text-[#999999] group-hover:text-black transition">
                  <span className="bg-black text-white rounded-full p-2 font-medium">
                    <MdOutlineKeyboardArrowRight color="white" size={15} />
                  </span>
                  Read more
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
