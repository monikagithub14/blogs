import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react"; // Or any star icon
import { FaAngleRight } from "react-icons/fa6";

const PowerofCombination = () => {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      {/* Hero Section */}
      <section className='relative flex items-center justify-center min-h-[60vh] md:min-h-screen w-full bg-[url("./perfume4.png")] bg-cover bg-center px-6'>
        <div className="absolute inset-0"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="tracking-wide text-3xl md:text-3xl lg:text-5xl font-semibold font-[Montserrat] uppercase leading-tight"
          >
            The Power Of <br className="block sm:hidden" />
            Combination
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="capitalize mt-6 italic font-[Poppins] text-base md:text-xl font-normal leading-relaxed"
          >
            The Divine Essence Collection was designed to be{" "}
            <br className="hidden md:block" />
            experienced in movement.
          </motion.p>
        </div>
      </section>

      {/* Wisdom x Strength */}
      <section className="py-16 md:py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="italic font-[Poppins] text-lg md:text-xl font-light text-gray-700 leading-relaxed capitalize"
          >
            worn alone or layered <br className="hidden md:block" />
            intuitively, according to the inner state you wish to awaken.
          </motion.p>
        </div>

        {/* Responsive Venn Diagram */}
        <div className="relative flex items-center justify-center md:py-10 py-5 scale-90 sm:scale-100 md:gap-12 gap-10">
          <div className="flex items-center justify-center w-48 h-48 border border-gray-300 rounded-full sm:w-[360px] sm:h-[360px] mix-blend-multiply">
            <span className="text-xs sm:text-lg font-medium tracking-[0.1em] uppercase ">
              Wisdom
            </span>
          </div>

          <div className="flex items-center justify-center w-48 h-48 border border-gray-300 rounded-full sm:w-[360px] sm:h-[360px] -ml-20 sm:-ml-32 mix-blend-multiply">
            <span className="text-xs sm:text-lg font-medium tracking-[0.1em] uppercase">
              Strength
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="p-1 sm:p-2 bg-white">
              <svg
                viewBox="0 0 100 100"
                className="w-6 h-6 sm:w-12 sm:h-12 fill-none stroke-black stroke-[1.5]"
              >
                <path d="M50 0C50 40 60 50 100 50C60 50 50 60 50 100C50 60 40 50 0 50C40 50 50 40 50 0Z" />
              </svg>
            </div>
          </div>
        </div>

        {/*Sovereign CTA Button */}
        <div className="mt-12 group cursor-pointer inline-flex flex-col items-start">
          <button className="font-poppins tracking-wider text-base md:text-[17px] font-semibold transition-colors hover:text-gray-600">
            Sovereign Stillness{" "}
            <FaAngleRight
              size={12}
              className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 inline"
            />
          </button>
          <div className="h-[2px] w-5 mt-1 rounded-full bg-black "></div>
        </div>
      </section>

      {/* Dual Image Grid */}
      {/* Dual Image Grid */}
      <section className="sticky top-0 z-0 h-[60vh] md:h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
        <div className="aspect-square md:aspect-auto overflow-hidden">
          <img
            src="./perfume2.png"
            alt="Perfume bottle being held"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="aspect-square md:aspect-auto overflow-hidden">
          <img
            src="/perfume3.png"
            alt="Perfume bottle placement"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Perfection x Harmony Section */}
      <section className="relative z-10 bg-white py-16 md:py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" w-full italic font-[Poppins] text-lg md:text-xl font-light text-gray-700 leading-relaxed capitalize"
          >
            Perfection refines the inner gesture. Harmony allows it to
            flownaturally, beautifully, without excess.
          </motion.p>
        </div>

        {/* Responsive Venn Diagram */}
        <div className="relative flex items-center justify-center md:py-10 py-5 scale-90 sm:scale-100 md:gap-12 gap-10">
          <div className="flex items-center justify-center w-48 h-48 border border-gray-300 rounded-full sm:w-[360px] sm:h-[360px] mix-blend-multiply">
            {/* Removed the span styling (-translate-x-6 sm:-translate-x-10) */}
            <span className="text-xs sm:text-lg font-medium tracking-[0.1em] uppercase ">
              Perfection
            </span>
          </div>

          <div className="flex items-center justify-center w-48 h-48 border border-gray-300 rounded-full sm:w-[360px] sm:h-[360px] -ml-20 sm:-ml-32 mix-blend-multiply">
            {/* Removed the span styling (-translate-x-6 sm:-translate-x-10) */}
            <span className="text-xs sm:text-lg font-medium tracking-[0.1em] uppercase">
              Harmony
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="p-1 sm:p-2 bg-white">
              <svg
                viewBox="0 0 100 100"
                className="w-6 h-6 sm:w-12 sm:h-12 fill-none stroke-black stroke-[1.5]"
              >
                <path d="M50 0C50 40 60 50 100 50C60 50 50 60 50 100C50 60 40 50 0 50C40 50 50 40 50 0Z" />
              </svg>
            </div>
          </div>
        </div>

        {/*Sovereign CTA Button */}
        <div className="mt-12 group cursor-pointer inline-flex flex-col items-start text-left">
          <button className="font-[Poppins] text-base md:text-[17px] font-semibold transition-colors hover:text-gray-600">
            Grace In Alignment{" "}
            <FaAngleRight
              size={12}
              className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 inline "
            />
          </button>
          {/* <div className='h-[2px] w-12 mt-2 bg-black transition-all duration-300 group-hover:w-20'></div> */}
          <div className="h-[2px] w-5 mt-1 rounded-full bg-black "></div>
        </div>
      </section>

      {/* Dual Image Grid */}
      {/* Dual Image Grid */}
      <section className="sticky top-0 z-0 h-[60vh] md:h-screen w-full grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
        <div className="aspect-square md:aspect-auto overflow-hidden">
          <img
            src="./perfume2.png"
            alt="Perfume bottle being held"
            className="h-full w-full object-cover "
          />
        </div>
        <div className="aspect-square md:aspect-auto overflow-hidden">
          <img
            src="/perfume3.png"
            alt="Perfume bottle placement"
            className="h-full w-full object-cover "
          />
        </div>
      </section>

      {/* 4 Circle Venn Diagram section */}
      <section className="relative z-10 bg-white my-10 md:my-0 py-10 md:py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="capitalize italic font-[Poppins] text-lg md:text-xl font-light text-gray-700 leading-relaxed"
          >
            When the five essences are held together, no aspect dominates.{" "}
            <br />
            Consciousness is whole awake, embodied, and at rest within itself.
          </motion.p>
        </div>

        {/* 4 Circle  Venn Diagram */}
        <div className="relative flex items-center justify-center sm:my-24  scale-75 sm:scale-100 min-h-[500px] sm:min-h-[650px]">
          {/* WISDOM  */}
          <div className="absolute flex items-center justify-center w-56 h-56 border border-gray-300 rounded-full sm:w-80 sm:h-80 mix-blend-multiply -translate-y-28 sm:-translate-y-40">
            <span className="text-sm sm:text-lg font-medium tracking-[0.2em] uppercase -translate-y-6">
              Wisdom
            </span>
          </div>

          {/* HARMONY */}
          <div className="absolute flex items-center justify-center w-56 h-56 border border-gray-300 rounded-full sm:w-80 sm:h-80 mix-blend-multiply translate-y-28 sm:translate-y-40">
            <span className="text-sm sm:text-lg font-medium tracking-[0.2em] uppercase translate-y-6">
              Harmony
            </span>
          </div>

          {/* PERFECTION */}
          <div className="absolute flex items-center justify-center w-56 h-56 border border-gray-300 rounded-full sm:w-80 sm:h-80 mix-blend-multiply -translate-x-28 sm:-translate-x-40">
            <span className="text-sm sm:text-lg font-medium tracking-[0.2em] uppercase -translate-x-6">
              Perfection
            </span>
          </div>

          {/* STRENGTH */}
          <div className="absolute flex items-center justify-center w-56 h-56 border border-gray-300 rounded-full sm:w-80 sm:h-80 mix-blend-multiply translate-x-28 sm:translate-x-40">
            <span className="text-sm sm:text-lg font-medium tracking-[0.2em] uppercase translate-x-6">
              Strength
            </span>
          </div>
        </div>
      </section>

      {/* Image section */}
      {/* Image section */}
      <section className="sticky top-0 z-0 h-[60vh] md:h-[87vh] w-full">
        <img
          src="./perfume1.png"
          alt="Essences"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Return to essences section */}
      <div className="relative z-10 bg-white text-center py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-medium  text-xl md:text-2xl lg:text-3xl font-[Montserrat] uppercase tracking-wider leading-7 md:leading-10"
          >
            All movements return to <br />
            their source
          </motion.p>
        </div>

        {/* Circles Section */}
        <div className="md:my-4 my-20 flex items-center justify-center w-full md:min-h-[600px] bg-white p-4 md:p-5">
          <div className="relative flex items-center justify-center w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]">
            {/* The Main Orbit Ring */}
            <div className="absolute inset-0 border border-gray-400 rounded-full"></div>

            {/* TOP: WISDOM */}
            <div className="absolute top-0 -translate-y-[60%] flex flex-col items-center">
              <span className="mb-3 text-sm  sm:text-base md:text-lg font-medium  capitalize text-black">
                Wisdom
              </span>
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white border border-gray-400 rounded-full shadow-sm"></div>
            </div>

            {/* BOTTOM: HARMONY */}
            <div className="absolute bottom-0 translate-y-[60%] flex flex-col items-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white border border-gray-400 rounded-full shadow-sm"></div>
              <span className="mt-3 text-sm  sm:text-base md:text-lg font-medium capitalize text-black">
                Harmony
              </span>
            </div>

            {/* LEFT: PERFECTION */}
            <div className="absolute left-0 -translate-x-[85%] flex items-center">
              <div className="flex flex-col items-end mr-3">
                <span className="text-sm  sm:text-base md:text-lg font-medium capitalize text-black">
                  Perfection
                </span>
              </div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white border border-gray-400 rounded-full shadow-sm"></div>
            </div>

            {/* RIGHT: STRENGTH */}
            <div className="absolute right-0 translate-x-[85%] flex items-center">
              <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white border border-gray-400 rounded-full shadow-sm"></div>
              <div className="flex flex-col items-start ml-3">
                <span className="text-sm  sm:text-base md:text-lg font-medium  capitalize text-black">
                  Strength
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="italic text-lg capitalize">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            The journey continues within{" "}
          </motion.p>
        </div>

        {/*Return to Essence CTA*/}
        <div className="mt-16 group cursor-pointer inline-flex flex-col items-start">
          <button className="font-[Poppins] text-base md:text-[17px] font-semibold transition-colors hover:text-gray-600">
            Return To Essences
            <span>
              <FaAngleRight
                size={12}
                className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4  inline"
              />
            </span>
          </button>
          {/* <div className='h-[2px] w-12 mt-2 bg-black transition-all duration-300 group-hover:w-20'></div> */}
          <div className="h-[2px] w-5 mt-1 rounded-full bg-black "></div>
        </div>
      </div>
    </div>
  );
};

export default PowerofCombination;
