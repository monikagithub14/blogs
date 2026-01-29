import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsMouse } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Footer from "../../components/ComFooter/Footer";
import Header from "../../components/GardenUI/Header";
import MenuPopup from "../../components/Menu";
import background from "../../../public/background.jpg"

const Blog = () => {
     const [menuOpen, setMenuOpen] = useState(false);
     const [soundOn, setSoundOn] = useState(true);

  const filters = [
    "Divine Fragrance Philosophy",
    "Sacred Gardens & Energies",
    "Perfume Rituals & Mindfulness",
    "Behind The Creation",
    "Scent & Psychology",
  ];

  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="min-h-screen bg-[#020523] text-white font-sans overflow-x-hidden relative">
      {/* Background Image */}
      <Header
        setMenuOpen={setMenuOpen}
        soundOn={soundOn}
        setSoundOn={setSoundOn}
      />
      <div
        className="absolute top-0 left-0 w-full h-[120vh] z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020523]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Hero */}
        <header className="flex flex-col items-center text-center mt-32 md:mt-60 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-white font-montserrat">
            Words Infused With Fragrance,
            <br className="hidden md:block" />
            <span className="text-white bg-clip-text block md:inline mt-2 md:mt-0">
              Written For The Soul
            </span>
          </h1>

          <p className="mt-4 md:mt-6 max-w-2xl text-white text-xs md:text-sm leading-relaxed px-4">
            a sacred space where stories of scent, divinity, and inner awakening unfold. 
            <br />
            Here, fragrance is more than aroma; it is memory, energy, and ritual.
          </p>

          <div className="mt-8 md:mt-12 text-xs md:text-sm uppercase tracking-widest text-white">
            Let Your{" "}
            <span className="text-white font-bold">
              Soul Decide Which Garden
            </span>{" "}
            Calls You ?
            <div className="h-0.5 w-16 md:w-24 bg-white/50 mx-auto mt-2"></div>
          </div>

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
          </div>

          <div className="mt-12 md:mt-20 flex flex-col items-center animate-bounce opacity-70">
            <BsMouse className="text-xl md:text-2xl mb-2" />
            <span className="text-[10px] md:text-xs tracking-widest uppercase">
              Scroll Down
            </span>
          </div>
        </header>

        {/* Heading */}
        <div className="bg-white text-black flex flex-col px-6 md:px-16 mt-32 md:mt-56 md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 pb-4 md:pb-8">
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
        <div className="bg-[#FFFFFF0A] rounded-xl mx-4 md:mx-12 mb-12">
          <section className="px-4 md:px-16 pb-12 md:pb-20">
            {/* 🔥 Spacer */}
            <div className="h-8 md:h-12"></div>

            {/* Filters */}
            <div
              className="flex items-center gap-2 mb-8 md:mb-12 overflow-x-auto pb-4 md:pb-0 w-full [&::-webkit-scrollbar]:hidden"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filters.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFilter(index)}
                  className={`px-6 md:px-11 py-2 rounded-full text-[11px] uppercase tracking-wide 
                                    transition-all duration-300 whitespace-nowrap flex-shrink-0
                                    ${
                                      activeFilter === index
                                        ? "bg-white text-black"
                                        : "bg-[#FFFFFF14] text-[#FFFFFF52] hover:text-white"
                                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="group bg-white p-4 md:p-6 text-black rounded-sm"
                >
                  <div className="mb-4 md:mb-6 overflow-hidden h-48 md:h-64">
                    <img
                      src="/images/Blog_png/rose.jpg"
                      alt="Flower"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold font-serif mb-2 md:mb-3 leading-tight">
                    Fragrance As A Ritual: When Scent Becomes Sacred
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    Fragrance has always been more than a sensory pleasure.
                    Across <br className="hidden md:block" /> cultures and
                    centuries, scent has been used as ritual a bridge{" "}
                    <br className="hidden md:block" /> between the visible and
                    the unseen.
                  </p>

                  <button className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider hover:text-blue-600 transition">
                    <span className="bg-blue-500 text-white rounded-full p-1">
                      <MdOutlineKeyboardArrowRight size={15} />
                    </span>
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <MenuPopup open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Footer />
    </div>
  );
};

export default Blog;
