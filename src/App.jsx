// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

import "./styles/fonts.css";

import Blog from "./pages/Blogs/Blog.jsx";
import BlogDetail from "./pages/Blogs/BlogDetail.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import MyAccount from "./components/MyAccount.jsx";
import AboutUs from "./components/About Us/AboutUs.jsx";
// import MyAccount from "./components/MyAccount.jsx";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true);
    }, 10000); // show loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog/:blog" element={<BlogDetail />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Provider store={store}>
          <AppContent />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
