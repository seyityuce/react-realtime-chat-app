import React, { useState } from "react";
import { useNavigate } from "react-router";
import addAvatar from "../images/addAvatar.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
      console.log(err);
    }
  };
  return (
    <div className="form-container">
      <div className="form-wrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <div style={{ color: "red" }}>
          {err && <span>Something went wrong</span>}
        </div>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
