import React, { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../CompHeader/Navbar";
import Footer from "../ComFooter/Footer";

const Layout = () => {
  const location = useLocation();
  const hideLayout = ["/signin", "/signup"];
  const hideLayoutFooter = ["/signin", "/signup"];

  const footerRef = useRef(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const updateFooterHeight = () => {
      if (footerRef.current) {
        // Check if we are on desktop (md breakpoint is usually 768px)
        if (window.innerWidth >= 768) {
          setFooterHeight(footerRef.current.offsetHeight);
        } else {
          setFooterHeight(0); // Disable parallax margin on mobile
        }
      }
    };

    updateFooterHeight();
    window.addEventListener("resize", updateFooterHeight);

    const resizeObserver = new ResizeObserver(updateFooterHeight);
    if (footerRef.current) {
      resizeObserver.observe(footerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateFooterHeight);
      if (footerRef.current) {
        resizeObserver.unobserve(footerRef.current);
      }
    };
  }, []);

  const shouldShowFooter = !hideLayoutFooter.includes(location.pathname);

  const isContactPage = location.pathname === "/contact-us";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Content Wrapper */}
      <div
        className={`relative z-10 ${
          isContactPage ? "bg-black" : "bg-white"
        } shadow-2xl transition-all duration-300 ease-out`}
        style={{ marginBottom: shouldShowFooter ? `${footerHeight - 2}px` : 0 }}
      >
        {!hideLayout.includes(location.pathname) && <Navbar />}
        <main
          className={`min-h-screen ${isContactPage ? "bg-black" : "bg-white"}`}
        >
          <Outlet />
        </main>
      </div>

      {/* Footer Wrapper - Static on Mobile, Fixed on Desktop */}
      {shouldShowFooter && (
        <div
          ref={footerRef}
          className="w-full md:fixed md:bottom-0 md:left-0 md:z-0"
        >
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Layout;
