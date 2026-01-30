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
      <div className="min-h-screen bg-white text-white font-sans overflow-x-hidden relative">
        <div
          className="absolute -top-40 w-full h-[110vh] z-0 pointer-events-none"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          {/* Hero */}
          <header className="flex flex-col items-center gap-5 text-center mt-32 md:mt-60 px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-white">
              Words Infused With Fragrance,
              <br className="hidden md:block" />
              <span className="text-white bg-clip-text block md:inline md:mt-0">
                Written For The Soul
              </span>
            </h1>

            <p className="mt-3 md:mt-3 max-w-2xl text-white text-xs md:text-sm leading-relaxed px-4">
              a sacred space where stories of scent, divinity, and inner
              awakening unfold.
              <br />
              Here, fragrance is more than aroma; it is memory, energy, and
              ritual.
            </p>

            <div className="flex flex-col gap-2 sm:gap-2 items-center justify-center">
              <button
                className="flex items-center gap-0.5 mt-4 md:mt-3 sm:gap-1 text-white text-xs sm:text-sm md:text-md font-medium whitespace-nowrap"
                // onClick={() => navigate("/continue-experience")}
              >
                <span className="hidden sm:inline">Continue Experience</span>
                <span className="sm:hidden">Continue</span>
                <FaAngleRight
                  size={12}
                  className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                />
              </button>
              <div className="w-4 sm:w-5 bg-white h-0.5 sm:h-1 rounded-xl" />
            </div>
            {/* <div className="mt-8 md:mt-12 text-xs md:text-sm uppercase tracking-widest text-white">
            Let Your{" "}
            <span className="text-white font-bold">
              Soul Decide Which Garden
            </span>{" "}
            Calls You ?
            <div className="h-0.5 w-16 md:w-24 bg-white/50 mx-auto mt-2"></div>
          </div> */}
            {/*
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-lg text-[#FFFFFF85] px-4">
            <span className="hover:text-white cursor-pointer">
              Divine Consciousness (Aditi)
            </span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hover:text-white cursor-pointer">
              Wisdom (Maheshwari)
            </span>
            <span className="hidden md:inline text-gray-500">|</span>
            <span className="hover:text-white cursor-pointer">
              Strength (Mahakali)
            </span>
          </div> */}

            {/* <div className="mt-12 md:mt-20 flex flex-col items-center animate-bounce opacity-70">
            <BsMouse className="text-xl md:text-2xl mb-2" />
            <span className="text-[10px] md:text-xs tracking-widest uppercase">
              Scroll Down
            </span>
          </div> */}
          </header>
        </div>
        {/* <MenuPopup open={menuOpen} onClose={() => setMenuOpen(false)} /> */}
        {/* <Footer /> */}
      </div>
      {/* Heading */}
      <div className="bg-white text-black flex flex-col px-6 md:px-24 md:flex-row justify-between items-start md:items-end ">
        <h2 className="text-3xl md:text-4xl font-serif max-w-md mb-4 md:mb-0">
          Where Fragrance Meets Consciousness
        </h2>
        <p className="text-xs max-w-md text-gray-500 md:text-right">
          Welcome to the Maison Aditi Journal a realm where fragrance becomes
          <br className="hidden md:block" /> a prayer, stories flow like
          incense, and every word carries The Essence
          <br className="hidden md:block" /> of inner awakening.
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-black/5 rounded-xl mx-4 md:mx-24 my-8 pt-8">
        <section className="px-4 md:px-16 pb-12 md:pb-16 flex flex-col gap-8">
          <div
            className="flex items-center gap-6  overflow-x-auto w-full [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(index)}
                className={`px-3 md:px-6 py-2 rounded-full text-[11px] uppercase tracking-wide 
                                    transition-all duration-300 whitespace-nowrap flex-shrink-0
                                    ${
                                      activeFilter === index
                                        ? "bg-white text-[#000A24] font-poppins font-medium leading-6"
                                        : "bg-[#D9D9D942]/25 text-black/25 hover:text-white"
                                    }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((blog, i) => (
              <div
                key={i}
                className="group bg-white p-4 md:p-6 text-black rounded-sm cursor-pointer"
                onClick={() => navigate("/blog/" + blog)}
              >
                <div className="mb-4 md:mb-6 overflow-hidden h-48 md:h-64">
                  <img
                    src="/images/Blog_png/rose.jpg"
                    alt="Flower"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>

                <h3 className="text-lg md:text-xl font-medium font-poppins mb-2 md:mb-3 leading-tight">
                  Fragrance As A Ritual: When Scent Becomes Sacred
                </h3>

                <p className="text-xs md:text-sm text-gray-600 font-poppins font-light mb-4 md:mb-6 leading-relaxed">
                  Fragrance has always been more than a sensory pleasure. Across{" "}
                  <br className="hidden md:block" /> cultures and centuries,
                  scent has been used as ritual a bridge{" "}
                  <br className="hidden md:block" /> between the visible and the
                  unseen.
                </p>

                <button className="flex items-center gap-2 md:gap-4 text-xs md:text-sm font-bold tracking-wider  text-[#999999]">
                  <span className="bg-black text-white rounded-full p-2 font-semibold">
                    <MdOutlineKeyboardArrowRight color="white" size={15} />
                  </span>
                  Read More
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
