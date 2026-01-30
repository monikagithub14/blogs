import React from "react";
import { FaAngleRight } from "react-icons/fa6";

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
            <span className="hidden sm:inline font-semibold font-poppins">
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
      <div className="flex flex-col items-center justify-center py-16 gap-12">
        <p className="font-montserrat font-medium text-3xl text-center leading-10">
          Introduction
        </p>
        <div className="flex flex-row w-full justify-between">
          <img src="/LeftImage.png" alt="" />
          <div className="flex flex-col justify-between text-center px-10">
            <p className="font-poppins font-light text-sm">
              Scent is the most silent form of communication yet it speaks
              louder than words. Long before language was written, fragrance was
              felt. It moved through rituals, memory, and emotion, shaping how
              humans connected with the unseen.
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
          </div>
          <img src="/RightImage.png" alt="" />
        </div>
      </div>
      <div className="flex flex-row px-24 pb-20 gap-10">
        <img className="w-full object-contain" src="/Group1.1.png" alt="" />
        <img className="w-full object-contain" src="/Group1.2.png" alt="" />
        <img className="w-full object-contain" src="/Group1.3.png" alt="" />
      </div>
    </>
  );
};

export default BlogDetail;
