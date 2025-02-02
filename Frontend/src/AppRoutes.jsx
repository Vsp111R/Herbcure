import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import HomePage from "./Components/Home/home";
import AboutPage from "./Components/About/about"; 
import SignupPage from "./Components/Signup/signup";
import ContactPage from "./Components/Contact/contact";
import ShopPage from "./Components/Shop/shop";  // Ensure ShopPage is used correctly
import PrivacyPolicy from "./Components/privacy-policy/PrivacyPolicy";
import TermsAndConditions from "./Components/TermsAndConditions/TermsAndConditions";
import AboutUs from "./Components/AboutUs/AboutUs";
import Login from "./Components/Login/Login";
import Account from "./Components/Account/Account";
import Cart from "./Components/Cart/Cart";
import PlantInfo from "./Components/plant-info/plant-info"; 



const AppRoutes = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <ClipLoader
            color={"#216d5e"}
            loading={loading}
            size={90}
            className="loader"
          />
        </div>
      ) : (
        <>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<HomePage />} />
            <Route path="/herbcure/Home" element={<HomePage />} /> 

            {/* Shop - Redirects to Home */}
            <Route path="/herbcure/Shop" element={<HomePage />} /> 

            {/* Other Routes */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/herbcure/signup" element={<SignupPage />} />
            <Route path="/herbcure/contactus" element={<ContactPage />} />
            <Route path="/herbcure/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/herbcure/TermsAndConditions" element={<TermsAndConditions />} />
            <Route path="/herbcure/AboutUs" element={<AboutUs />} />
            <Route path="/herbcure/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />

            {/* Plant Info */}
            <Route path="/herbcure/plant-info/:plantId" element={<PlantInfo />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default AppRoutes;
