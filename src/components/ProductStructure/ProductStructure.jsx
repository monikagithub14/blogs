import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

// ==========================================
// 1. DATA SECTION
// ==========================================
const perfumesData = [
  {
    id: 1,
    image: "/product-structure-Image/image2.jpg",
    headline: "JYOTI ABSOLUE",
    title: "WISDOM",
    subtitle: "The quiet intelligence that sees before it acts.",
    ctaText: "Discover Jyoti Absolue", // removed '>' from here as we use Icon
    // dropdown: [
    //   "The Essence",
    //   "Spritual Resonance",
    //   "Olfactive Structure",
    //   "When To Wear",
    // ],
  },
  {
    id: 2,
    image: "/product-structure-Image/image3.jpg",
    headline: "KĀLI ROUGE",
    title: "STRENGTH",
    subtitle: "Force in its purest form",
    ctaText: "Discover Kāli Rouge",
  },
  {
    id: 3,
    image: "/product-structure-Image/image4.jpg",
    headline: "ROSE BHAKTĪ",
    title: "HARMONY",
    subtitle: "The Art Of Balance Where Devotion Becomes Ease.",
    ctaText: "Discover Rose Bhaktī",
  },
  {
    id: 4,
    image: "/product-structure-Image/image5.jpg",
    headline: "LILA DORÉE",
    title: "PERFECTION",
    subtitle: "Refinement In Motion Playful, Luminous, Exact",
    ctaText: "Discover Lila Dorée >",
  },
  {
    id: 5,
    image: "/product-structure-Image/image6.jpg",
    headline: "SHAKTI ÉTERNELLE",
    title: "DIVINE CONSCIOUSNESS",
    subtitle: "The Source From Which All Movements Arise.",
    ctaText: "Enter Shakti Éternelle >",
  },
];

const accordionSections = [
  "The Essence",
  "Spritual Resonance",
  "Olfactive Structure",
  "When To Wear",
];

// ==========================================
// 2. DESIGN COMPONENT
// ==========================================
const PerfumeCard = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // --- LOGIC: Sirf pehle 2 letters (Di) ko alag karna ---
  const text = data.ctaText || "Discover";
  const firstTwoChars = text.slice(0, 2); // "Di"
  const remainingText = text.slice(2); // "scover Jyoti Absolue"

  return (
    <div className="w-full flex-col items-center mb-20 relative flex">
      {/* --- Image (Full Screen Height) --- */}
      <div className="sticky top-0 z-0 w-full h-screen">
        <img
          src={data.image}
          alt={data.headline}
          className="w-full h-full object-cover"
        />
        <div className="min-h-screen flex justify-center">
          <div className="h-10 md:h-20 w-0.5 rounded-full flex items-center justify-center origin-center bg-black/40" />
        </div>
      </div>

      <div className="relative z-10 w-full bg-white flex flex-col items-center px-4 sm:px-6 md:px-0 mt-6 md:mt-10 lg:mt-20">
        {/* --- Header Text Section --- */}
        <div className="max-w-4xl w-full text-center pt-14 md:pt-16 lg:pt-12 pb-10 md:pb-12 lg:pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-[600] tracking-wide font-montserrat uppercase"
          >
            {data.headline || "Perfume Name"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-10 lg:mt-10 text-lg md:text-2xl lg:text-[33px] font-medium font-poppins uppercase"
          >
            {data.title || "Attribute"}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-2 md:mt-4 text-[9px] md:text-[14px] lg:text-[16px] max-w-2xl mx-auto italic capitalize [word-spacing:0.12em] px-2"
          >
            {data.subtitle}
          </motion.p>
        </div>

        {/* --- Accordion Section --- */}
        <div className="max-w-6xl w-full md:pt-10 pt-0">
          {accordionSections.map((title, index) => {
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
                <div className="w-full border-b border-gray-100"></div>
              </div>
            );
          })}
        </div>

        {/* --- CTA Button (Updated: Only 'Di' Underlined) --- */}
        <div className="mt-14 md:mt-20 lg:mt-32 mb-12 md:mb-14 lg:mb-16 flex items-center gap-2">
          <button className="text-sm md:text-xl lg:text-[20px] font-poppins font-semibold text-left">
            {/* Part 1: "Di" with Underline */}
            <span className="relative inline-block">
              {firstTwoChars}
              <span className="absolute left-0 -bottom-2 w-full h-[3px] rounded-2xl bg-black"></span>
            </span>

            {/* Part 2: Remaining Text ("scover...") */}
            <span>{remainingText}</span>
          </button>

          <FaAngleRight className="text-black" />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN PAGE COMPONENT
// ==========================================
function ProductStructure() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-screen flex flex-col items-center">
        <img
          src="/product-structure-Image/image1.jpg"
          alt="perfume"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-black/40 backdrop-blur-sm px-4 py-3 md:px-8 md:py-6 w-full max-w-[673px] h-auto sm:h-80">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-white text-4xl lg:text-5xl font-montserrat uppercase font-semibold text-center"
            >
              The Circle of Five
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white capitalize text-3xl text-center font-Poppins mt-6"
            >
              Five essences One consciousness
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full max-w-[400px] mx-auto text-white font-poppins text-[15px] italic text-center mt-4"
            >
              Each fragrance is a gateway. Together, they
              <span className="block">form the circle.</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true }}
              className="font-poppins capitalize text-white text-center font-medium text-[20px] mt-7"
            >
              <span className="relative inline-block">
                En
                <span className="absolute left-0 -bottom-2 w-[24px] h-[3px] bg-white rounded-[21px]"></span>
              </span>
              ter the collection
            </motion.p>
          </div>
        </div>
      </div>

      {/* --- COLLECTION TEXT SECTION --- */}
      <div className="relative z-10 bg-white w-full min-h-screen flex items-center justify-center px-4 sm:px-0">
        <div className="max-w-6xl w-full text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-[600] tracking-wide font-montserrat whitespace-nowrap"
          >
            THE COLLECTION AS <br className="sm:hidden" /> A WHOLE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm md:text-base lg:text-[17px] leading-[1.6] sm:leading-[1.8] max-w-5xl mx-auto italic text-black font-medium tracking-wide capitalize text-center mt-6"
          >
            The Divine Essence Collection is the first olfactive expression of
            Maison Aditi. Inspired by the <br className="hidden md:block" />
            Mother’s spiritual teachings, each fragrance embodies a state of
            consciousness. Alone, each <br className="hidden md:block" />
            is complete. Together, they form a living system—designed to
            accompany the wearer <br className="hidden md:block" />
            through different inner movements of being.
          </motion.p>
        </div>
      </div>

      {/* --- DYNAMIC PERFUME CARDS --- */}
      <div className="w-full flex flex-col items-center">
        {perfumesData.map((perfumeItem) => (
          <PerfumeCard key={perfumeItem.id} data={perfumeItem} />
        ))}
      </div>
    </div>
  );
}

export default ProductStructure;
