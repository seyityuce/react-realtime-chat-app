import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import imajone from "../images/pexels-mellamed-1133742.jpg";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  console.log(message);
  return (
    <div className="message owner">
      <div className="message-info">
        {/* <img src={} alt="" /> */}
        <span>just now</span>
      </div>
      <div className="message-content">
        <p>hellööö</p>
        <img src={imajone} alt="" />
      </div>
    </div>
  );
};

export default Message;
