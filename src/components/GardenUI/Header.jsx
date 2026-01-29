import React, { useEffect, useRef } from "react";
import logo from "/images/logo.png";
import { PiMusicNoteLight } from "react-icons/pi";
import { MdMusicOff, MdShoppingCart } from "react-icons/md";
import { FiBarChart, FiPhone } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header({ setMenuOpen, setCartOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  // Route Groupings
  const isHome = path === "/";
  // const isShopRelated = [
  //   "/shopNow",
  //   "/cart",
  //   "/productShowcase",
  //   "/about",
  // ].includes(path);


  const isGardenPage = path === "/all-gardens";


  // Navigation Handlers
  const goHome = () => {
    playClickSound();
    navigate("/");
  };
  const goExperience = () => {
    playClickSound();
    navigate("/all-gardens");
  };
  const goEnquire = () => {
    playClickSound();
    navigate("/contact");
  };
  const goCart = () => {
    playClickSound();
    navigate("/cart");
  };


    const hoverSoundRef = useRef(null);
    const clickSoundRef = useRef(null);
  
    useEffect(() => {
      hoverSoundRef.current = new Audio("/sounds/flower_hover.mp3");
      clickSoundRef.current = new Audio("/sounds/click.mp3");
  
      hoverSoundRef.current.volume = 0.8;
      clickSoundRef.current.volume = 1;
    }, []);
     const playHoverSound = () => {
       if (!soundOn || !hoverSoundRef.current) return; // ✅ Check soundOn
       hoverSoundRef.current.currentTime = 0;
       hoverSoundRef.current.play().catch(() => {}); // Catch browser-block errors
     };

     const playClickSound = () => {
       if (!soundOn || !clickSoundRef.current) return; // ✅ Check soundOn
       clickSoundRef.current.currentTime = 0;
       clickSoundRef.current.play().catch(() => {});
     };
  return (
    <header className="sticky top-0 bg-transparent  text-white flex items-center justify-between px-4 sm:px-8 pt-4 sm:pt-8 pb-3 z-[100]">
      {/* --- LEFT SECTION: Menu & Cart --- */}
      <div className="flex items-center gap-4 transform -translate-y-3 sm:-translate-y-6">
        {/* Menu: Show on all pages except "/" */}
        {!isHome && (
          <button
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              setMenuOpen?.(true);
            }}
            className="pointer-events-auto p-1 sm:p-2 transition-transform hover:scale-110"
          >
            <FiBarChart className="w-6 h-6 sm:w-8 sm:h-8 rotate-90 scale-x-[-1]" />
          </button>
        )}

        {/* Cart: Show on Shop, Cart, Product, and About */}
        {/* {isShopRelated && (
          <button
            onMouseEnter={playHoverSound}
            onClick={goCart}
            className="pointer-events-auto p-1 sm:p-2 transition-transform hover:scale-110"
          >
            <MdShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        )} */}

        {/* Spacer for Home to keep logo centered */}
        {isHome && <div className="w-6 h-6 sm:w-12 sm:h-8" />}
      </div>

      {/* --- CENTER SECTION: Logo --- */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
        <img
          onMouseEnter={playHoverSound}
          src={logo}
          alt="Maison Aditi"
          onClick={goHome}
          className="h-20 sm:h-28 translate-y-2 sm:translate-y-4 cursor-pointer w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300"
        />
      </div>

      {/* --- RIGHT SECTION: Sound & Actions --- */}
      <div className="flex items-center gap-3 sm:gap-4 transform -translate-y-3 sm:-translate-y-6">
        {/* Sound Button: Always Visible */}

        {/* {!isShopRelated && (
          <button
            onMouseEnter={playHoverSound}
            onClick={(e) => {
              playClickSound();
              e.stopPropagation();
              setSoundOn(!soundOn);
            }}
            className="pointer-events-auto font-sans font-normal flex items-center gap-1 sm:gap-2 text-sm sm:text-base hover:text-white/80 transition-colors"
          >
            {soundOn ? (
              <PiMusicNoteLight className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <MdMusicOff className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
            <span className="hidden sm:inline">Sound</span>
          </button>
        )} */}

        {/* Enquire: Show on Garden pages (or others), but NEVER on "/" */}
        {/* {!isHome && !isShopRelated && (
          <button
            onMouseEnter={playHoverSound}
            onClick={goEnquire}
            className="pointer-events-auto font-sans px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-base 
            md:border border-white/40 rounded-full md:bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          >
            <FiPhone className="inline sm:hidden w-5 h-5" />
            <span className="hidden sm:inline">ENQUIRE</span>
          </button>
        )} */}

        {/* Continue Experience: Only on Shop-related pages */}
        {/* {isShopRelated && (
          <button
            onMouseEnter={playHoverSound}
            onClick={goExperience}
            className="pointer-events-auto font-sans px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-base 
            md:border border-white/40 rounded-full md:bg-white/10 hover:bg-white/20 transition-all duration-300"
          >
            Continue Experience
          </button>
        )} */}
      </div>
    </header>
  );
} 


// import logo from "/images/logo.png";
// import { PiMusicNoteLight } from "react-icons/pi";
// import { MdMusicOff } from "react-icons/md";
// import { MdShoppingCart } from "react-icons/md";

// import { VolumeX } from "lucide-react";
// import { FiBarChart, FiPhone } from "react-icons/fi";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useSound } from "../../context/SoundContext";

// export default function Header({
//   setMenuOpen,

//   setCartOpen,
// }) {

//   const { soundOn, setSoundOn } = useSound();
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";
//   // Updated variable for clarity, but logic seems okay for now
//   const isProductRelatedPage =
//     location.pathname === "/productShowcase" ||
//     location.pathname === "/shopNow" ||
//     location.pathname === "/cart"||
//     location.pathname === "/about";

//   const navigate = useNavigate();
//   const handleNavigate = () => navigate("/");
//   const handleExperienceNavigate = () => navigate("/all-gardens");
//   const handleEnquireNavigate = () => navigate("/contact");

//   return (
//     <header className="relative bg-transparent text-white flex items-center justify-between px-4 sm:px-8 pt-4 sm:pt-8 pb-3 z-10">
//       {/* ****************++++++++++ Left side: Menu/Cart +++++++++*****************/}
//       <div className="flex items-center gap-4 transform -translate-y-3 sm:-translate-y-6">
//         {/* Menu Icon: Show on all pages except home */}
//         {!isHomePage && (
//           <button
//             onClick={() => setMenuOpen && setMenuOpen(true)}
//             className="pointer-events-auto p-1 sm:p-2" // Removed translate for alignment with cart icon
//           >
//             <FiBarChart className="w-6 h-6 sm:w-8 sm:h-8 rotate-90 scale-x-[-1]" />
//           </button>
//         )}

//         {/* Cart Icon: Show only on product-related pages (if required on the left) */}
//         {isProductRelatedPage && (
//           <button
//             onClick={() => setCartOpen(true)}
//             className="pointer-events-auto p-1 sm:p-2"
//           >
//             <MdShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />
//           </button>
//         )}

//         {/* Placeholder: Only show on Home page to push the logo to center */}
//         {isHomePage && <div className="w-6 h-6 sm:w-12 sm:h-8" />}
//       </div>

//       {/* ****************++++++++++ Center side: Logo ++++++++*****************/}
//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
//         <img
//           src={logo}
//           alt="Maison Aditi"
//           onClick={handleNavigate}
//           className="h-20 sm:h-28 translate-y-2 sm:translate-y-4 cursor-pointer w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
//         />
//       </div>

//       {/* ****************++++++++++ Right side: Utility/Action Buttons ++++++++*****************/}
//       <div className="flex items-center gap-3 sm:gap-4 transform -translate-y-3 sm:-translate-y-6">
//         {/* Sound Button */}
//         <button
//           onClick={(e) => {
//             e.stopPropagation(); // 👈 This prevents the "handleGlobalClick" from firing
//             setSoundOn(!soundOn);
//           }}
//           className="pointer-events-auto font-sans font-normal flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
//         >
//           {soundOn ? (
//             <PiMusicNoteLight className="w-5 h-5 sm:w-6 sm:h-6" />
//           ) : (
//             <MdMusicOff className="w-5 h-5 sm:w-6 sm:h-6" />
//           )}
//           <span className="hidden sm:inline">Sound</span>
//         </button>

//         {!isProductRelatedPage || isHomePage && (
//           <button
//             onClick={handleEnquireNavigate}
//             className="pointer-events-auto font-sans px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-base
//             md:border border-white/40 rounded-full md:bg-white/10 transition-all duration-300 flex items-center justify-center"
//           >
//             <FiPhone className="inline sm:hidden w-5 h-5" />
//             <span className="hidden sm:inline">ENQUIRE</span>
//           </button>
//         )}

//         {isProductRelatedPage && (
//           <button
//             onClick={handleExperienceNavigate}
//             className="pointer-events-auto font-sans px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-base
//             md:border border-white/40 rounded-full md:bg-white/10 transition-all duration-300 flex items-center justify-center"
//           >
//             Continue Experience
//           </button>
//         )}
//       </div>
//     </header>
//   );
// }

// import logo from "/images/logo.png";
// import { PiMusicNoteLight } from "react-icons/pi";
// import { MdMusicOff } from "react-icons/md";
// import { MdShoppingCart } from "react-icons/md";

// import { VolumeX } from "lucide-react";
// import { FiBarChart, FiPhone } from "react-icons/fi";
// import { useLocation, useNavigate } from "react-router-dom";
// import { div } from "framer-motion/client";
// import { useSound } from "../../context/SoundContext";

// export default function Header({ setMenuOpen,setCartOpen }) {
//   const { soundOn, setSoundOn } = useSound();
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";
//   const isProductShowpage =
//     location.pathname === "/productShowcase" ||
//     location.pathname === "/shopNow" ||
//     location.pathname === "/cart";
//   const navigate = useNavigate();
//   const handleNavigate = () => navigate("/");
//   const handleExperienceNavigate = () => navigate("/all-gardens");
//   const handleCartNavigate = () => navigate("/cart");

//   const handleEnquireNavigate = () => navigate("/contact");

//   return (
//     <header className="relative bg-transparent text-white flex items-center justify-between px-4 sm:px-8 pt-4 sm:pt-8 pb-3 z-10">
//       {/* Left - Menu */}
//       {!isHomePage && (
//         <button
//           onClick={() => setMenuOpen(true)}
//           className="pointer-events-auto p-1 sm:p-2 transform -translate-y-3 sm:-translate-y-6"
//         >
//           <FiBarChart className="w-6 h-6 sm:w-8 sm:h-8 rotate-90 scale-x-[-1]" />
//         </button>
//       )}
//       {isHomePage && (
//         <div className="w-6 h-6 sm:w-12 sm:h-8 transform -translate-y-3 sm:-translate-y-6" />
//       )}
//       {isProductShowpage && !isHomePage && (
//         <button
//           onClick={() => setCartOpen(true)}
//           className="pointer-events-auto absolute  flex-1  p-1 sm:p-2 transform translate-x-12 -translate-y-3 sm:-translate-y-6"
//         >
//           <MdShoppingCart className="w-6 h-6 sm:w-8 sm:h-8  scale-x-[-1]" />
//         </button>
//       )}
//       {/* ****************++++++++++ Center side  ++++++++*****************/}

//       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
//         <img
//           src={logo}
//           alt="Maison Aditi"
//           onClick={handleNavigate}
//           className="h-20 sm:h-28 translate-y-2 sm:translate-y-4 cursor-pointer w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
//         />
//       </div>

//       {/* ****************++++++++++ right side  ++++++++*****************/}
//       <div className="flex items-center gap-3 sm:gap-4 transform -translate-y-3 sm:-translate-y-6">
//         {/* {isHomePage && (
//           <button
//             onClick={() => setSoundOn(!soundOn)}
//             className="pointer-events-auto font-sans font-normal flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
//           >
//             {soundOn ? (
//               <PiMusicNoteLight className="w-5 h-5 sm:w-6 sm:h-6" />
//             ) : (
//               <MdMusicOff className="w-5 h-5 sm:w-6 sm:h-6" />
//             )}
//             <span className="hidden sm:inline">Sound</span>
//           </button>
//         )} */}

//         {/* Sound Button on Non-Home Page (Needs text hidden on mobile) */}
//         {!isProductShowpage && (
//           <button
//             onClick={() => setSoundOn(!soundOn)}
//             className="pointer-events-auto font-sans font-normal flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
//           >
//             {soundOn ? (
//               <PiMusicNoteLight className="w-5 h-5 sm:w-6 sm:h-6" />
//             ) : (
//               <MdMusicOff className="w-5 h-5 sm:w-6 sm:h-6" />
//             )}
//             <span className="hidden sm:inline">Sound</span>
//           </button>
//         )}

//         {/* ENQUIRE Button on Non-Home Page (Needs proper styling application) */}
//         {!isHomePage && !isProductShowpage && (
//           <button
//             onClick={handleEnquireNavigate}
//             className="pointer-events-auto font-sans px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-base
//               md:border border-white/40 rounded-full md:bg-white/10 transition-all duration-300 flex items-center justify-center"
//           >
//             <FiPhone className="inline sm:hidden w-5 h-5" />
//             <span className="hidden sm:inline">ENQUIRE</span>
//           </button>
//         )}
//       </div>

//       {isProductShowpage && (
//         <button
//           onClick={handleCartNavigate}
//           className="pointer-events-auto absolute  flex-1  p-1 sm:p-2 transform translate-x-12 -translate-y-3 sm:-translate-y-6"
//         >
//           <MdShoppingCart className="w-6 h-6 sm:w-8 sm:h-8  scale-x-[-1]" />
//         </button>
//       )}
//       {isProductShowpage && (
//         <div className="flex items-center gap-3 sm:gap-4 transform -translate-y-3 sm:-translate-y-4">
//           <button
//             onClick={handleExperienceNavigate}
//             className="pointer-events-auto  font-sans px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-base
//               md:border border-white/40 rounded-full md:bg-white/10 transition-all duration-300 flex items-center justify-center"
//           >
//             Continue Experience
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }
