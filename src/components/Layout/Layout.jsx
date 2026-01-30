import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../CompHeader/Navbar";
import Footer from "../ComFooter/Footer";

const Layout = () => {
  const location = useLocation();
  const hideLayout = ["/signin", "/signup"];
  const hideLayoutFooter = ["/signin", "/contact-us", "/signup"];

  return (
    <>
      {!hideLayout.includes(location.pathname) && <Navbar />}
      <Outlet />
      {!hideLayoutFooter.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
