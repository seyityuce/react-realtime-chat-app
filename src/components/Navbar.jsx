import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../firebase";
import imaj from "../images/pexels-j-carter-254069.jpg";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar">
      <span className="logo">Chatzz</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="photo" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
