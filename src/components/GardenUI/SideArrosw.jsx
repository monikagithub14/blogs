import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSound } from "../../context/SoundContext";
import { useEffect, useRef } from "react";

export default function SideArrows({ onPrev, onNext }) {
  const { soundOn } = useSound();
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
  return (
    <>
      {/* 🚀 RESPONSIVE UPDATE: Change fixed ml-10 to responsive padding */}
      <div
        className="absolute inset-y-0 left-0 flex items-center justify-start sm:justify-center z-10 
                   pl-4 sm:pl-0 sm:ml-0 md:ml-10"
      >
        <button
          onMouseEnter={playHoverSound}
          onClick={onPrev}
          // 🚀 RESPONSIVE UPDATE: Ensure icon size is adjustable if needed (w-5 h-5 is standard)
          className="pointer-events-auto backdrop-blur-xs bg-white/15 border border-white hover:bg-white/20 p-2 sm:p-3 rounded-full transition-all duration-300"
        >
          <IoIosArrowBack className="w-5 h-5" />
        </button>
      </div>

      {/* 🚀 RESPONSIVE UPDATE: Change fixed mr-10 to responsive padding */}
      <div
        className="absolute inset-y-0 right-0 flex items-center justify-end sm:justify-center z-10 
                   pr-4 sm:pr-0 sm:mr-0 md:mr-10"
      >
        <button
          onMouseEnter={playHoverSound}
          onClick={onNext}
          className="pointer-events-auto backdrop-blur-xs bg-white/15 border border-white hover:bg-white/20 p-2 sm:p-3 rounded-full transition-all duration-300"
        >
          <IoIosArrowForward className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
