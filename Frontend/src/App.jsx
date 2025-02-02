import React, { useEffect, useState } from "react";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx"; // ✅ Footer is added here
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader color={"#216d5e"} loading={loading} size={90} />
        </div>
      ) : (
        <BrowserRouter>
          <div className="main-container">
            <Navbar />
            <div className="content">
              <AppRoutes />
            </div>
            <Footer /> {/* ✅ Footer is added ONLY ONCE here */}
          </div>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
