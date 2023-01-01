import React from "react";
import imaj from "../images/pexels-j-carter-254069.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chatzz</span>
      <div className="user">
        <img src={imaj} alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
