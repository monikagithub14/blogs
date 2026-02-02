import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuPopup({ open, onClose }) {
  const [testOpen, setTestOpen] = useState(false);
  const menuRef = useRef(null);
  const testRef = useRef(null);

  const navigate = useNavigate();

  const tabs = [
    "Sign In",
    "My Account",
    "Orders",
    "Products",
    "Explore Gardens",
    "Psychometric Test",
    "Blogs",
    "About",
    "Contact Us",
  ];

  const handleTabClick = (tab) => {
    const actions = {
      "Sign In": () => navigate("/login"),
      "My Account": () => navigate("/myprofile"),
      Orders: () => navigate("/myprofile"),
      Products: () => navigate("/productShowcase"),
      "Explore Gardens": () => navigate("/all-gardens"),
      "Psychometric Test": () => setTestOpen(true),
      Blogs: () => navigate("/blogs"),

      About: () => navigate("/about-us"),
      "Contact Us": () => navigate("/contact"),
    };

    if (actions[tab]) actions[tab]();

    // Close menu only for navigation items, keep open for the Test
    if (tab !== "Psychometric Test") onClose();
  };

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      const clickedInsideMenu = menuRef.current?.contains(e.target);
      const clickedInsideTest = testRef.current?.contains(e.target);

      if (testOpen) {
        // Scenario 1: Test is open.
        // If we click outside the test, we close ONLY the test.
        if (!clickedInsideTest) {
          setTestOpen(false);
        }
      } else {
        // Scenario 2: Test is closed.
        // If we click outside the menu, we close the menu.
        if (!clickedInsideMenu) {
          onClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, testOpen, onClose]); // Added testOpen to dependencies

  if (!open) return null;

  return (
    <>
      <div className="fixed inset-0 z-[999] bg-black/50 md:bg-transparent flex items-start justify-start md:top-5 md:left-9">
        <div
          ref={menuRef}
          className="relative z-50 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-56
             backdrop-blur-sm bg-white/5 border border-white/20 
             rounded-3xl shadow-2xl p-8 animate-fadeIn mt-5 ml-5 md:m-0 
             pointer-events-auto"
        >
          <div className="flex flex-col  items-start gap-6">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => handleTabClick(tab)}
                className="text-lg px-2 font-medium text-white/90 rounded-xl whitespace-nowrap
                hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
