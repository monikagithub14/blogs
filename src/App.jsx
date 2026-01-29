
// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


import "./styles/fonts.css";


import Blog from "./pages/Blogs/Blog.jsx";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  // const [soundOn, setSoundOn] = useState(true); // Is this here?
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true);
    }, 10000); // show loading for 3 seconds
    return () => clearTimeout(timer);
  }, []);

 

  return (
    <>
      <Routes>
      

    

        
        <Route path="/" element={<Blog />} />
        
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
