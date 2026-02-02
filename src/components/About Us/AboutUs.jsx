// import React from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useAnimation,
//   useInView,
// } from "framer-motion";
// import { ArrowBigRight, ArrowRight } from "lucide-react";
// import { FaAngleRight } from "react-icons/fa6";
// const AboutUs = () => {
//   return (
//     <div className="">
//       <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 py-8 md:py-12 lg:py-16 mt-28">
//         <p className="uppercase tracking-[0.1em] text-2xl sm:text-4xl font-light text-center mb-8 sm:mb-10 lg:mb-12 leading-snug">
//           Every Flower Holds A<br className="hidden sm:block" />
//           Whisper Of Light.
//         </p>

//         <HalfSpinImage />

//         <div className="h-screen flex flex-col items-center justify-center text-center">
//           <h1 className="uppercase tracking-[0.1em] text-base sm:text-xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight p-2">
//             Maison Aditi A Living Origin
//           </h1>

//           <p className="mx-auto text-base italic text-gray-600 leading-relaxed px-4 max-w-3xl">
//             Maison Aditi Opens A New Way Of Experiencing Perfume
//             <br />
//             As A Living Expression Of Consciousness In Form.
//             <br />
//             <br />
//             Each Fragrance Is A Prayer In Scent, An Offering, A Message, A
//             Vibration To Remind Us Of Who We Truly Are And What We Are Called To
//             Become.
//           </p>
//         </div>
//       </div>

//       {/* <HalfSpinImage /> */}
//       <div className="h-screen w-full">
//         <img
//           src="Rectangleimg3.png"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 -translate-y-6">
//         <div className="max-w-3xl mx-auto text-center">
//           <h2 className="uppercase tracking-[0.2em] text-xl sm:text-2xl md:text-4xl font-bold  mb-6 sm:mb-8">
//             Philosophy & Source
//           </h2>

//           <p className="text-xs sm:text-base italic text-gray-700 leading-relaxed">
//             Maison Aditi Arises From A Vision Where Consciousness Awakens Within
//             Life Itself, And Where Every Movement, Form, And Breath Becomes A
//             Field Of Transformation. Flowers Are Known As Living Bearers Of This
//             Awakening, Each Offering Its Own Vibrational Peace, Strength, Love,
//             Wisdom Spoken In Silence And Received By The Soul. From This Subtle
//             Language, Fragrance Is Born As A Passage Rather Than An Object,
//             Inviting Alignment, Presence, And The Gentle Embodiment Of A Higher
//             Truth In Everyday Life.
//           </p>
//         </div>
//       </div>

//       <div>
//         <section
//           className="
//       relative
//       h-screen
//       w-full
//       bg-center
//       bg-cover
//       flex
//       items-center
//       justify-center
//     "
//           style={{
//             backgroundImage: "url('/Rectangleimg2.png')",
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

//           {/* Content */}
//           <div className="relative z-10 text-center px-4 sm:px-6">
//             <h2
//               className="
//           uppercase
//           font-bold
//           tracking-[0.1em]
//           text-sm
//           sm:text-base
//           md:text-lg
//           lg:text-4xl
//           text-black
//           max-w-3xl
//           leading-relaxed
//         "
//             >
//               From This Vision, Emerges A
//               <br />
//               Fragrant Form Of
//               <br />
//               Consciousness
//             </h2>
//           </div>
//         </section>
//       </div>

//       <div className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
//         <section className="bg-white text-black flex justify-center w-full">
//           <div className="max-w-4xl text-center">
//             <h2 className="uppercase tracking-[0.2em] text-xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10">
//               The Divine Essence Collection
//             </h2>

//             <div className="space-y-4 sm:space-y-10 italic">
//               <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
//                 Divine Essence Is The Inaugural Expression Of Maison Aditi, A
//                 Living Map Of <br />
//                 Consciousness, Inspired By The Mother's Symbol.
//               </p>

//               <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
//                 At Its Center Resides The Still Point — The Silent Presence From
//                 Which All Expression Arises. From This Center Radiate The Soul
//                 Forces That Power Through Which Consciousness Manifests And Acts
//                 In Life.
//               </p>

//               <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
//                 Each Fragrance Embodies One Of These Forces, Inviting A Lived
//                 Experience Of Alignment: Wisdom, Strength, Harmony, Perfection,
//                 And Divine Truth. Together, They Form A Circular Journey, Not To
//                 Be Followed In Sequence, But Entered Intuitively.
//               </p>

//               <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
//                 These Are Not Merely Perfumes To Be Chosen. They Are Fragrances
//                 That Choose You On Your Path To Awakening.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>

//       <div>
//         <section
//           className="
//       relative
//       h-screen
//       w-full
//       flex
//       items-center
//       justify-center
//       bg-center
//       bg-cover
//     "
//           style={{
//             backgroundImage: "url('/Rectangleimg3.png')",
//           }}
//         >
//           {/* Overlay */}
//           <div className="absolute inset-0 bg-white/65 backdrop-blur-sm" />

//           {/* Content */}
//           <div className="relative z-10 text-center px-4 sm:px-6">
//             <h2 className="uppercase tracking-[0.1em] text-base sm:text-2xl md:text-4xl font-bold text-black">
//               This Vision Asked To
//               <br />
//               Be Lived
//             </h2>
//           </div>
//         </section>
//       </div>

//       <div className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
//         <section className="bg-white text-black flex justify-center w-full">
//           <div className="max-w-4xl text-center">
//             <h2 className="uppercase font-montserrat tracking-[0.1em] text-lg sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10">
//               Founder's Offering
//             </h2>

//             <div className="space-y-4 sm:space-y-10 italic">
//               <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
//                 Maison Aditi Emerged Through A Personal Journey Of Shedding,
//                 Remembering, And Becoming.
//               </p>

//               <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
//                 A Lifelong Movement Of Releasing Inner Limitations, Of Finding
//                 Voice, Purpose, And Authentic Expression — Until Encountering
//                 The Teachings Of The Mother, Where Recognition Replaced Seeking,
//                 And Alignment Became Unavoidable.
//               </p>

//               <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
//                 What Followed Was A Response To The Calling.
//               </p>

//               <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
//                 Maison Aditi Arose As An Offering, A Way To Give Form To An
//                 Inner Awakening. To Translate Consciousness Into Beauty, And To
//                 Allow Devotion To Take Shape In The World. A Gesture Of
//                 Gratitude. A Bridge Between The Unseen And The Lived.
//               </p>

//               <p className="text-xs sm:text-base text-gray-700 leading-relaxed">
//                 This Work Is Offered To The Divine, And To Life Itself, With The
//                 Hope That It May Serve As A Quiet Companion On The Path Of
//                 Remembrance.
//               </p>
//             </div>
//           </div>
//         </section>
//       </div>

//       <div className="h-screen flex items-center justify-center px-4">
//         <section className="bg-white flex justify-center items-center">
//           {/* Circle Container */}
//           <div
//             className="
//         relative
//         w-[88vw]
//         max-w-[420px]
//         sm:max-w-[520px]
//         md:max-w-[620px]
//         lg:max-w-[800px]
//         h-[88vw]
//         max-h-[420px]
//         sm:max-h-[520px]
//         md:max-h-[620px]
//         lg:max-h-[800px]
//         flex
//         items-center
//         justify-center
//         rounded-full
//         border
//         border-black/30
//       "
//           >
//             {/* Content */}
//             <div className="text-center px-4 sm:px-10 md:px-16">
//               {/* Title */}
//               <h2 className="uppercase tracking-[0.08em] text-[10px] sm:text-base md:text-4xl font-bold mb-2 sm:mb-4">
//                 Maison Aditi Is More
//                 <br />
//                 Than A Maison
//               </h2>

//               {/* Subheading */}
//               <p className="italic text-[10px] sm:text-sm font-bold mb-2 sm:mb-4">
//                 it is a calling
//               </p>

//               {/* Body */}
//               <div className="space-y-1 sm:space-y-6 italic">
//                 <p className="text-[9px] sm:text-base text-black/55 leading-snug sm:leading-relaxed">
//                   A movement of consciousness through beauty. An invitation to
//                   live with presence, intention, and truth. In a world that
//                   pulls outward, it offers a return inward.
//                 </p>

//                 <p className="text-[9px] sm:text-base text-black/55 leading-snug sm:leading-relaxed">
//                   In a time of acceleration, a space of stillness. In the midst
//                   of form, a remembrance of essence. An invitation to rise, to
//                   blossom into our highest form of beauty, and to embody
//                   individually and collectively the consciousness we are here to
//                   become.
//                 </p>
//               </div>

//               {/* Closing Line */}
//               <p className="text-[9px] sm:text-base font-bold my-2 sm:my-5">
//                 An olfactive journey unfolds within.
//               </p>

//               {/* CTA */}
//               <div className="flex flex-col items-center">
//                 <button className="text-[9px] sm:text-sm tracking-wide uppercase font-bold flex items-center gap-1 hover:opacity-70 transition">
//                   Enter the circle
//                   <FaAngleRight size={10} />
//                 </button>
//                 <div className="h-0.5 w-6 sm:h-1 sm:w-8 bg-black rounded-2xl mt-1"></div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <div className="mt-10 sm:mt-14 md:mt-20 lg:mt-28">
//         <HalfSpinImage />
//       </div>

//       <div>
//         <section className="bg-white h-[50vh] flex justify-center items-center px-4 sm:px-6">
//           <h2 className="uppercase font-montserrat tracking-[0.1em] text-base sm:text-2xl md:text-4xl font-medium text-center leading-tight">
//             Every Breath Returns
//             <br />
//             To Light.
//           </h2>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

// // const HalfSpinImage = () => {
// //     return (
// //         <div className="flex justify-center items-center">

// //             {/* Spinning container */}
// //             <motion.div
// //                 animate={{ rotate: [0, 90, -90] }}
// //                 transition={{
// //                     duration: 6,
// //                     ease: "linear",
// //                     repeat: Infinity,
// //                 }}
// //                 className="flex flex-col items-center origin-center"
// //             >
// //                 <img src="/line.svg" alt="line 1" className="invisible" />
// //                 <img src="/line.svg" alt="line 2" />
// //             </motion.div>

// //         </div>
// //     );
// // };

// // import { motion } from "framer-motion";

// const HalfSpinImage = () => {
//   return (
//     <div className="flex justify-center items-center">
//       {/* Pendulum wrapper */}
//       <motion.div
//         className="origin-top flex justify-center"
//         animate={{ rotate: [50, -50, 50] }}
//         transition={{
//           duration: 9,
//           ease: "easeInOut",
//           repeat: Infinity,
//         }}
//       >
//         <Line />
//       </motion.div>
//     </div>
//   );
// };

// const Line = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="border border h-40 w-0" />

//       <div className="border border-black/40 rounded-full p-2 flex items-center justify-center">
//         <div className="border border-black/40 rounded-full p-7" />
//       </div>
//     </div>
//   );
// };

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import { FaAngleRight } from "react-icons/fa6";
const AboutUs = () => {
  return (
    <div className="">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 py-8 md:py-12 lg:py-16">
        <div className="h-[75vh] flex flex-col items-center justify-center">
          {" "}
          <p className="uppercase tracking-[0.1em] text-2xl sm:text-4xl lg:text-6xl font-medium text-center mb-8 sm:mb-10 lg:mb-12 leading-snug">
            Every Flower Holds A<br className="hidden sm:block" />
            Whisper Of Light
          </p>
        </div>
        <div className="-mt-44">
          <HalfSpinImage />
        </div>
        <div className="h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
          <p className="uppercase tracking-wide text-2xl sm:text-4xl lg:text-6xl font-montserrat  font-semibold text-center mb-8 sm:mb-10 lg:mb-12 leading-snug">
            Maison Aditi A Living Origin
          </p>

          <div className="space-y-4 sm:space-y-8 tracking-wide italic max-w-4xl">
            <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
              Maison Aditi Opens A New Way Of Experiencing Perfume <br /> As A
              Living Expression Of Consciousness In Form.
            </p>

            <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
              Each Fragrance Is A Prayer In Scent, An Offering, A Message, A
              Vibration <br /> To Remind Us Of Who We Truly Are And What We Are
              Called To Become.
            </p>
          </div>
        </div>
      </div>

      {/* <HalfSpinImage /> */}
      <div className="h-screen w-full">
        <img
          src="Rectangleimg3.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 -translate-y-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.1em] font-semibold text-2xl sm:text-4xl lg:text-6xl text-center mb-8 sm:mb-10 lg:mb-12 leading-snug">
            Philosophy & Source
          </p>

          <div className="space-y-4 sm:space-y-10 italic">
            <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
              Maison Aditi Arises From A Vision Where Consciousness Awakens
              Within Life Itself, And Where Every Movement, Form, And Breath
              Becomes A Field Of Transformation. Flowers Are Known As Living
              Bearers Of This Awakening, Each Offering Its Own Vibrational
              Peace, Strength, Love, Wisdom Spoken In Silence And Received By
              The Soul. From This Subtle Language, Fragrance Is Born As A
              Passage Rather Than An Object, Inviting Alignment, Presence,
              <br /> And The Gentle Embodiment Of A Higher Truth In Everyday
              Life.
            </p>
          </div>
        </div>
      </div>

      <div>
        <section
          className="
      relative
      h-screen
      w-full
      bg-center
      bg-cover
      flex
      items-center
      justify-center
    "
          style={{
            backgroundImage: "url('/Rectangleimg2.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-6">
            <h2 className="uppercase tracking-[0.1em] text-base sm:text-2xl md:text-5xl font-semibold font-montserrat text-black">
              From this vision, <br /> emerges a fragrant form of
              consciousness{" "}
            </h2>
          </div>
        </section>
      </div>

      <div className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
        <section className="bg-white text-black flex justify-center w-full">
          <div className="max-w-full text-center">
            <p className="uppercase tracking-[0.1em] font-semibold text-2xl sm:text-4xl lg:text-6xl text-center mb-8 sm:mb-10 lg:mb-12 leading-snug">
              The Divine Essence Collection
            </p>

            <div className="space-y-4 sm:space-y-8  italic px-10 md:px-24 text-center">
              {/*  <p className="text-xs sm:text-base text-black sm:leading-8"> */}
              {/* <div className="space-y-4 sm:space-y-10 italic "> */}
              <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                Divine Essence Is The Inaugural Expression Of Maison Aditi, A
                Living Map Of <br /> Consciousness, Inspired By The Mother's
                Symbol.
              </p>

              <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                At Its Center Resides The Still Point — The Silent Presence From
                Which All Expression Arises. From This Center
                <br /> Radiate The Soul Forces That Power Through Which
                Consciousness Manifests And Acts In Life.
              </p>

              <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                Each Fragrance Embodies One Of These Forces, Inviting A Lived
                Experience Of Alignment: Wisdom, Strength, <br /> Harmony,
                Perfection, And Divine Truth. Together, They Form A Circular
                Journey, <br /> Not To Be Followed In Sequence, But Entered
                Intuitively.
              </p>

              <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                These Are Not Merely Perfumes To Be Chosen. They Are Fragrances{" "}
                <br />
                That Choose You On Your Path To Awakening.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section
          className="
      relative
      h-screen
      w-full
      flex
      items-center
      justify-center
      bg-center
      bg-cover
    "
          style={{
            backgroundImage: "url('/Rectangleimg3.png')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-6">
            <h2 className="uppercase tracking-[0.1em] text-base sm:text-2xl md:text-5xl font-semibold font-montserrat text-black">
              This Vision Asked To
              <br />
              Be Lived
            </h2>
          </div>
        </section>
      </div>

      <div className="h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
        <section className="bg-white text-black flex justify-center w-full">
          <div className="max-w-4xl text-center">
            <p className="uppercase tracking-[0.1em] font-semibold text-2xl sm:text-4xl lg:text-6xl text-center mb-8 sm:mb-10 lg:mb-12 leading-snug">
              Founder's Offering
            </p>

            <div className="space-y-4 sm:space-y-10 italic">
              <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                Maison Aditi Emerged Through A Personal Journey Of Shedding,
                Remembering, And Becoming.
              </p>

              <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                A Lifelong Movement Of Releasing Inner Limitations, Of Finding
                Voice, Purpose, And Authentic Expression — Until Encountering
                The Teachings Of The Mother, Where Recognition Replaced Seeking,
                And Alignment Became Unavoidable.
              </p>

              <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                What Followed Was A Response To The Calling.
                {/* </p> */}
                {/* <p className="text-xs sm:text-base text-gray-700 leading-relaxed"> */}
                Maison Aditi Arose As An Offering, A Way To Give Form To An
                Inner Awakening. To Translate Consciousness Into Beauty, And To
                Allow Devotion To Take Shape In The World. A Gesture Of
                Gratitude. A Bridge Between The Unseen And The Lived.
              </p>

              <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                This Work Is Offered To The Divine, And To Life Itself, With The
                Hope That It May Serve As A Quiet Companion On The Path Of
                Remembrance.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="md:h-screen flex items-center justify-center px-4">
        <section className="bg-white flex justify-center items-center">
          {/* Circle Container */}
          <div
            className="
        relative
        w-[88vw]
        max-w-[420px]
        sm:max-w-[520px]
        md:max-w-[620px]
        lg:max-w-[800px]
        h-[88vw]
        max-h-[420px]
        sm:max-h-[520px]
        md:max-h-[620px]
        lg:max-h-[800px]
        flex
        items-center
        justify-center
        rounded-full
        border
        border-black/30
      "
          >
            {/* Content */}
            <div className="text-center px-4 sm:px-10 md:px-16 space-y-4 sm:space-y-4 lg md:space-y-6 lg:space-y-10">
              {/* Title */}
              <h2 className="uppercase tracking-[0.08em] text-[10px] sm:text-2xl md:text-4xl font-bold mb-2 sm:mb-4">
                Maison Aditi Is More
                <br />
                Than A Maison
              </h2>

              {/* Subheading */}
              <p className="italic text-[10px] sm:text-sm font-bold mb-2 sm:mb-4">
                it is a calling
              </p>

              {/* Body */}
              <div className="space-y-1 sm:space-y-6 italic">
                <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                  A movement of consciousness through beauty. An invitation to
                  live with presence, intention, and truth. In a world that
                  pulls outward, it offers a return inward.
                </p>

                <p className="text-sm sm:text-base tracking-wider leading-5 sm:leading-7 text-black/80">
                  In a time of acceleration, a space of stillness. In the midst
                  of form, a remembrance of essence. An invitation to rise, to
                  blossom into our highest form of beauty, and to embody
                  individually and collectively the consciousness we are here to
                  become.
                </p>
              </div>

              {/* Closing Line */}
              <p className="text-[9px] sm:text-base font-medium italic my-2 sm:my-5">
                An olfactive journey unfolds within.
              </p>

              {/* CTA */}
              <div className="flex flex-col gap-2 sm:gap-2 items-center justify-center">
                <button
                  className="flex items-center relative gap-0.5 mt-4 md:mt-3 sm:gap-1 text-black text-xs sm:text-sm md:text-md font-medium whitespace-nowrap"
                  // onClick={() => navigate("/continue-experience")}
                >
                  <span className="hidden sm:inline font-poppins font-semibold  text-lg">
                    Enter the circle
                  </span>
                  <span className="sm:hidden">Continue</span>
                  <FaAngleRight
                    size={12}
                    className="sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                  />
                  <div className="absolute -bottom-1 w-4 sm:w-5 bg-black h-0.5 sm:h-1 rounded-xl" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-10 sm:mt-14 md:mt-20 lg:mt-20">
        <HalfSpinImage />
      </div>

      <div>
        <section className="bg-white h-[50vh] flex justify-center items-center px-4 sm:px-6">
          <h2 className="uppercase font-montserrat tracking-[0.1em] text-base sm:text-2xl md:text-4xl font-medium text-center leading-snug">
            Every Breath Returns
            <br />
            To Light
          </h2>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;

// const HalfSpinImage = () => {
//     return (
//         <div className="flex justify-center items-center">

//             {/* Spinning container */}
//             <motion.div
//                 animate={{ rotate: [0, 90, -90] }}
//                 transition={{
//                     duration: 6,
//                     ease: "linear",
//                     repeat: Infinity,
//                 }}
//                 className="flex flex-col items-center origin-center"
//             >
//                 <img src="/line.svg" alt="line 1" className="invisible" />
//                 <img src="/line.svg" alt="line 2" />
//             </motion.div>

//         </div>
//     );
// };

// import { motion } from "framer-motion";

const HalfSpinImage = () => {
  return (
    <div className="flex justify-center items-center">
      {/* Pendulum wrapper */}
      <motion.div
        className="origin-top flex justify-center"
        animate={{ rotate: [50, -50, 50] }}
        transition={{
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <Line />
      </motion.div>
    </div>
  );
};

const Line = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="border h-40 w-0" />

      <div className="border border-black/40 rounded-full p-2 flex items-center justify-center">
        <div className="border border-black/40 rounded-full p-7" />
      </div>
    </div>
  );
};
