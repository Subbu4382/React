import React from "react";

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <div className="top-left">
        <pre style={{fontSize:"45px"}}>FOOD<span>MART</span></pre>
      </div>
      <div className="top-right">
        <ul>
          <li>All Categories</li>
          <li>For Support?
              +980-34984089</li>
          <li>Your Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
