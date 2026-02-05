import React, { useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroductionSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // smoother scrolling for mobile
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-70%"]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0, 1, 1, 0]
  );

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] sm:h-[250vh] md:h-[400vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6">

        {/* TITLE */}
        <motion.p
          style={{ opacity }}
          className="font-montserrat font-medium text-xl sm:text-3xl text-center leading-8 sm:leading-10 mb-6 sm:mb-10"
        >
          Introduction
        </motion.p>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-6 md:gap-0">

          {/* LEFT IMAGE */}
          <motion.img
            style={{ opacity }}
            src="/LeftImage.png"
            alt=""
            className="w-[140px] sm:w-[200px] md:w-1/4 object-contain"
          />

          {/* TEXT BOX */}
          <div className="h-[260px] sm:h-[340px] md:h-[350px] overflow-hidden relative w-full md:w-1/2 px-2 sm:px-8 md:px-12">
            <motion.div
              style={{ y }}
              className="flex flex-col gap-6 sm:gap-10 text-center"
            >
              <p className="font-poppins font-light italic text-xs sm:text-base text-black/80 leading-6">
                Scent is the most silent form of communication yet it speaks louder than
                words. Long before language was written, fragrance was felt. It moved
                through rituals, memory, and emotion, shaping how humans connected with
                the unseen.
              </p>

              <p className="font-poppins font-light italic text-xs sm:text-base text-black/80 leading-6">
                Every ingredient carries an energy a vibration shaped by earth, sun,
                time, and intention. When blended with care, these energies align to
                create something beyond aroma: a feeling.
              </p>

              <p className="font-poppins font-light italic text-xs sm:text-base text-black/80 leading-6">
                Every ingredient carries an energy a vibration shaped by earth, sun,
                time, and intention. When blended with care, these energies align to
                create something beyond aroma: a feeling.
              </p>

              <p className="font-poppins font-light italic text-xs sm:text-base text-black/80 leading-6">
                When fragrance is chosen consciously, it becomes an extension of the
                inner self. It marks beginnings, honors transitions, and lingers as a
                reminder of intention throughout the day.
              </p>

              <p className="font-poppins font-light italic text-xs sm:text-base text-black/80 leading-6">
                Scent is the most silent form of communication yet it speaks louder than
                words. Long before language was written, fragrance was felt. It moved
                through rituals, memory, and emotion, shaping how humans connected with
                the unseen.
              </p>

              <p className="font-poppins font-light italic text-xs sm:text-base text-black/80 leading-6">
                Every ingredient carries an energy a vibration shaped by earth, sun,
                time, and intention. When blended with care, these energies align to
                create something beyond aroma: a feeling.
              </p>

              <p className="font-poppins font-light italic text-xs sm:text-base text-black/80 leading-6">
                Every ingredient carries an energy a vibration shaped by earth, sun,
                time, and intention. When blended with care, these energies align to
                create something beyond aroma: a feeling.
              </p>

              <p className="font-poppins font-light italic text-xs sm:text-base text-black/80 leading-6">
                When fragrance is chosen consciously, it becomes an extension of the
                inner self. It marks beginnings, honors transitions, and lingers as a
                reminder of intention throughout the day.
              </p>
            </motion.div>

            {/* Gradient Mask */}
            <div className="absolute bottom-0 left-0 w-full h-14 sm:h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          {/* RIGHT IMAGE */}
          <motion.img
            style={{ opacity }}
            src="/RightImage.png"
            alt=""
            className="w-[140px] sm:w-[200px] md:w-1/4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const BlogDetail = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="flex flex-col items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 gap-5 mb-10">
        <p className="font-montserrat font-medium text-xl sm:text-3xl text-center leading-8 sm:leading-10">
          The Language of Scent <br />
          How Fragrance Speaks to the Soul
        </p>

        <p className="text-center font-normal text-xs sm:text-base font-poppins text-black/55 leading-6">
          Stories inspired by divinity, consciousness, and craft. Thoughtfully
          written from{" "}
          <span className="hidden sm:inline">
            <br />
          </span>
          the world of Maison Aditi.
        </p>

        <div className="flex flex-col gap-2 items-center justify-center pb-12 sm:pb-20">
          <button className="flex items-center relative gap-1 mt-4 text-black text-xs sm:text-base font-medium whitespace-nowrap">
            <span className="hidden sm:inline font-medium fontpop text-lg">
              Read More Below
            </span>
            <span className="sm:hidden">Read More Below</span>

            <FaAngleRight size={12} className="sm:w-4 sm:h-4" />

            <div className="absolute -bottom-1 w-5 bg-black h-0.5 rounded-xl" />
          </button>
        </div>

        <div className="w-full">
          <img
            src="/blogDetailHero.png"
            className="w-full object-cover rounded-xl"
            alt=""
          />
        </div>
      </div>

      <IntroductionSection />

      {/* BOTTOM IMAGES */}
      <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-24 pb-20 sm:pb-32 gap-8 mt-10 md:mt-auto lg:mt-auto">
        <img className="w-full object-contain" src="/Group1.1.png" alt="" />
        <img className="w-full object-contain" src="/Group1.2.png" alt="" />
        <img className="w-full object-contain" src="/Group1.3.png" alt="" />
      </div>
    </>
  );
};

export default BlogDetail;
