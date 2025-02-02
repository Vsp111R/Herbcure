import React, { useState } from "react";
import "./Account.css";

const Account = () => {
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+123456789",
  });

  const handleUpdate = () => {
    // You can add form handling or update logic here
    alert("Profile Updated");
  };

  return (
    <div className="account-container">
      <div className="account-header">
        <h2>My Account</h2>
        <p>Manage your account details</p>
      </div>

      <div className="account-info">
        <div className="info-item">
          <label>Name:</label>
          <input
            type="text"
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
          />
        </div>
        <div className="info-item">
          <label>Email:</label>
          <input
            type="email"
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
          />
        </div>
        <div className="info-item">
          <label>Phone:</label>
          <input
            type="tel"
            value={userDetails.phone}
            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
          />
        </div>
      </div>

      <button className="update-btn" onClick={handleUpdate}>
        Update Profile
      </button>

      <div className="order-history">
        <h3>Order History</h3>
        <ul>
          <li>Order #001 - 25th Jan 2025 - $50.00</li>
          <li>Order #002 - 15th Jan 2025 - $30.00</li>
          <li>Order #003 - 5th Jan 2025 - $20.00</li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
