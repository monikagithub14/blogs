import { MdMouse } from "react-icons/md";
import { useSound } from "../../context/SoundContext";
import { useEffect, useRef } from "react";

export default function Footer({ scrollHintRef, navigate }) {
  const {soundOn} = useSound();
    const hoverSoundRef = useRef(null);
    const clickSoundRef = useRef(null);
  
    useEffect(() => {
      hoverSoundRef.current = new Audio("/sounds/flower_hover.mp3");
      clickSoundRef.current = new Audio("/sounds/click.mp3");
  
      hoverSoundRef.current.volume = 0.5;
      clickSoundRef.current.volume = 0.7;
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
  //  translate - y - 4;
  return (
    <div className="flex justify-between items-end p-4 md:p-10 text-white text-sm relative z-10">
      <button
        onMouseEnter={playHoverSound}
        onClick={() => {
          navigate("/productShowcase");
          playClickSound();
        }}
        className="pointer-events-auto px-4 py-2 text-xs sm:text-sm border backdrop-blur-sm rounded-full bg-white/15 hover:bg-white/30 transition-all duration-300"
      >
        SHOP NOW
      </button>

      {/* Center - scroll hint (Hidden on XS, full width on Mobile, centered on MD+) */}
      <div
        ref={scrollHintRef}
        className="hidden sm:flex md:w-auto md:ml-0 pointer-events-none backdrop-blur-sm bg-black/10 
        border border-white/40 px-3 py-3 md:px-6 md:py-6 rounded-full items-center z-10 gap-2 shadow-lg"
      >
        <MdMouse className="text-base md:text-lg" />
        <span className="text-xs sm:text-sm tracking-normal font-medium hidden md:inline">
          SCROLL TO EXPLORE GARDEN
        </span>
      </div>

      <button
        onMouseEnter={playHoverSound}
        onClick={() => {
          navigate("/all-gardens");
          playClickSound();
        }}
        className="pointer-events-auto px-4 py-2 text-xs sm:text-sm transition-all duration-300"
      >
        See All Gardens
      </button>
    </div>
  );
}
