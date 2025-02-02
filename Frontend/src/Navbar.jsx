import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";


// Updated image paths
const categories = [
  { name: "Herbs", image: "/category/herbs.jpeg", link: "/category/herbs" },
  { name: "Flowers", image: "/category/flowers.jpeg", link: "/category/flowers" },
  { name: "Fruits", image: "/category/fruits.jpeg", link: "/category/fruits" },
  { name: "Medicinal", image: "/category/medicinal.jpg", link: "/category/medicinal" },
  { name: "Perfume", image: "/category/indoor.jpeg", link: "/category/indoor" },
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    console.log("Searching for:", event.target.value);
  };

  const handleAccountClick = () => {
    navigate("/account");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/herbcure/about" className="logo">
            <h1>HerbCure</h1>
          </Link>
          <div className="nav-links-div">
            <Link to="/herbcure/about" className="nav-links">About</Link>
            <Link to="/herbcure/signup" className="nav-links">SignUp</Link>
            <Link to="/herbcure/Login" className="nav-links">Login</Link>
            <Link to="/herbcure/contactus" className="nav-links">ContactUs</Link>
            <Link to="/herbcure/shop" className="nav-links">Shop</Link> 
          </div>
        </div>
        <div className="navbar-right">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
            placeholder="Search for plants..."
          />
          <div className="header-icons">
            <span className="account-icon" onClick={handleAccountClick}>👤</span>
            <span className="cart-icon" onClick={handleCartClick}>🛒</span>
          </div>
        </div>
      </nav>

      
      {/* Bottom Navbar */}
      <nav className="bottom-navbar">
        <ul className="bottom-nav-links">
          <li><a href="/shop">Shopping</a></li>
          <li><Link to="/herbcure/plant-info/aloeVera">Information Plant</Link></li>


        </ul>
      </nav>

      {/* Horizontal Category Section */}
      <div className="category-section">
        {categories.map((category, index) => (
          <Link to={category.link} key={index} className="category-item">
            <div className="category-image-container">
              <img src={category.image} alt={category.name} className="category-image" />
            </div>
            <p>{category.name}</p>
          </Link>
        ))}
      </div>
      {/* Discount Strip */}
      <div className="discount-strip">
        <p>🌿 Special Offer: Buy 2 Get 1 Free on all Medicinal Plants! 🌱 Free Shipping on orders above ₹300 🚚 !!!Get upto 50 % off on Your First Order🛍️       Get Special Discounts and Coupans In our Membership and get Free Delivery Allover INDIA 🙋🏻 Get Huge Discount On our Plants Study By your Student Account And Also get Your Free viewerShip 👨🏻‍🎓</p>
      </div>

    </>
  );
};

export default Navbar;
