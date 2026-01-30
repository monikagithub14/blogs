import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const IntroductionSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center gap-12 overflow-hidden">
        <motion.p
          style={{ opacity }}
          className="font-montserrat font-medium text-3xl text-center leading-10"
        >
          Introduction
        </motion.p>
        <div className="flex flex-row w-full justify-between items-center">
          <motion.img
            style={{ opacity }}
            src="/LeftImage.png"
            alt=""
            className="w-1/4 object-contain"
          />

          {/* Scrollable Text Window */}
          <div className="h-[350px] overflow-hidden relative w-1/2">
            <motion.div
              style={{ y }}
              className="flex flex-col gap-14 text-center"
            >
              <p className="font-poppins font-light text-sm">
                Scent is the most silent form of communication yet it speaks
                louder than words. Long before language was written, fragrance
                was felt. It moved through rituals, memory, and emotion, shaping
                how humans connected with the unseen.
              </p>
              <p className="font-poppins font-light text-sm">
                Every ingredient carries an energy a vibration shaped by earth,
                sun, time, and intention. When blended with care, these energies
                align to create something beyond aroma: a feeling.{" "}
              </p>
              <p className="font-poppins font-light text-sm">
                Every ingredient carries an energy a vibration shaped by earth,
                sun, time, and intention. When blended with care, these energies
                align to create something beyond aroma: a feeling.{" "}
              </p>
              <p className="font-poppins font-light text-sm">
                When fragrance is chosen consciously, it becomes an extension of
                the inner self. It marks beginnings, honors transitions, and
                lingers as a reminder of intention throughout the day.{" "}
              </p>
              <p className="font-poppins font-light text-sm">
                When fragrance is chosen consciously, it becomes an extension of
                the inner self. It marks beginnings, honors transitions, and
                lingers as a reminder of intention throughout the day.{" "}
              </p>
              <p className="font-poppins font-light text-sm">
                When fragrance is chosen consciously, it becomes an extension of
                the inner self. It marks beginnings, honors transitions, and
                lingers as a reminder of intention throughout the day.{" "}
              </p>
              <p className="font-poppins font-light text-sm">
                When fragrance is chosen consciously, it becomes an extension of
                the inner self. It marks beginnings, honors transitions, and
                lingers as a reminder of intention throughout the day.{" "}
              </p>
            </motion.div>

            {/* Gradient Mask for smooth fade at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>

          <motion.img
            style={{ opacity }}
            src="/RightImage.png"
            alt=""
            className="w-1/4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const BlogDetail = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-8 gap-6">
        <p className="font-montserrat font-medium text-3xl text-center leading-10">
          The Language of Scent <br />
          How Fragrance Speaks to the Soul
        </p>
        <p className="text-center font-normal text-base font-poppins text-black/55">
          Stories inspired by divinity, consciousness, and craft. Thoughtfully
          written from <br /> the world of Maison Aditi.
        </p>
        <div className="flex flex-col gap-2 sm:gap-2 items-center justify-center">
          <button className="flex items-center gap-0.5 mt-4 md:mt-3 sm:gap-1 text-black text-xs sm:text-sm md:text-md font-medium whitespace-nowrap">
            <span className="hidden sm:inline font-medium font-poppins">
              Read More Below
            </span>
            <span className="sm:hidden">Continue</span>
            <FaAngleRight
              size={12}
              className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
            />
          </button>
          <div className="w-4 sm:w-5 bg-black h-0.5 sm:h-1 rounded-xl" />
        </div>
        <div>
          <img src="/blogDetailHero.png" className="w-full " alt="" />
        </div>
      </div>
      <IntroductionSection />
      <div className="flex flex-row px-24 pb-20 gap-10">
        <img className="w-full object-contain" src="/Group1.1.png" alt="" />
        <img className="w-full object-contain" src="/Group1.2.png" alt="" />
        <img className="w-full object-contain" src="/Group1.3.png" alt="" />
      </div>
    </>
  );
};

export default BlogDetail;
