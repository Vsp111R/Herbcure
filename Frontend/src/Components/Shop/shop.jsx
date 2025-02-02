import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/"); // Redirect to Home page
  }, [navigate]);

  return null;
};

export default Shop;
