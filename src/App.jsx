// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";

import "./styles/fonts.css";

import Blog from "./pages/Blogs/Blog.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import MyAccount from "./components/MyAccount.jsx";

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
        <Route path="/my-account" element={<MyAccount />} />
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
